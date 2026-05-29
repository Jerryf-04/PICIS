import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Project } from '../types';
import { Compass, HelpCircle, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Rocket, ChevronsUp, ChevronsDown } from 'lucide-react';

interface SpaceGameViewProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  lang: 'zh' | 'en';
  translations: any;
  viewMode: 'landing' | 'space' | 'info';
}

// Solid design theme color coding by Type
const TYPE_COLORS: Record<string, string> = {
  Technology: '#2563eb',   // Indigo Blue
  Platform: '#0d9488',     // Teal
  Culture: '#d97706',      // Amber Gold
  Product: '#475569',      // Slate Charcoal
  Philanthropy: '#db2777'   // Rose Pink
};

export default function SpaceGameView({
  projects,
  onSelectProject,
  lang,
  translations,
  viewMode
}: SpaceGameViewProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Translations
  const t = translations;

  // Space active navigation coordinates read live from 3D camera
  const [cameraCoords, setCameraCoords] = useState({ x: 0, y: 0, z: 260 });

  // Input states tracked continuously
  const keysPressed = useRef<{ [key: string]: boolean }>({});
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const hoveredRef = useRef<Project | null>(null);

  // Passive cursor tracker for parallax
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);

  // UI state overlays
  const [showGuide, setShowGuide] = useState(true);
  const [hudActive, setHudActive] = useState(false);
  const hudActiveRef = useRef(false);

  // On-screen direction thruster keys
  const triggerThrust = (direction: string, active: boolean) => {
    keysPressed.current[direction] = active;
  };

  // Pre-process positions with a perfect layout solver (collision-free cluster spacing)
  const adjustedPositions = React.useMemo(() => {
    const nodes = projects.map(p => {
      const rawX = p.x;
      const rawY = p.y;
      const rawZ = p.z;
      
      // Let's scale original positions down to a tight, highly visible and reachable zone in front of the lens.
      // Original positions are mostly within [-60, 60], so scaling by 2.2 keeps them within [-132, 132]
      const scale = 2.2;
      
      return {
        id: p.id,
        project: p,
        // Proportional, beautiful mesh scale - balanced mid-point (scaled by 0.8 per user request)
        radius: p.radius * 1.74 * 0.8, 
        x: rawX * scale,
        y: rawY * scale,
        // Push the entire cluster slightly backward so they sit inside the z range of [-150, 70]
        // This places them perfectly behind the 3D wall (z = 140) and in front of the camera (z = 95 initial)
        z: rawZ * scale - 25
      };
    });

    // Run relaxation iterations to guarantee absolute non-overlapping boundaries with a comfortable 2.5x planet volume spacing
    for (let iter = 0; iter < 120; iter++) {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dz = n2.z - n1.z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz) || 0.1;
          
          // Minimum center distance check: r1 + r2 + (2.5 * average_radius) translates to multiplying sum of radii by ~2.25
          const minDistance = (n1.radius + n2.radius) * 2.28;
          if (distance < minDistance) {
            const overlap = minDistance - distance;
            const pushX = (dx / distance) * overlap * 0.5;
            const pushY = (dy / distance) * overlap * 0.5;
            const pushZ = (dz / distance) * overlap * 0.5;
            
            n1.x -= pushX;
            n1.y -= pushY;
            n1.z -= pushZ;
            n2.x += pushX;
            n2.y += pushY;
            n2.z += pushZ;
          }
        }
      }
    }
    return nodes;
  }, [projects]);

  // Keep a direct ref to viewMode so the frame loop catches it instantly
  const viewModeRef = useRef(viewMode);
  useEffect(() => {
    viewModeRef.current = viewMode;
  }, [viewMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Dimensions
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // Constant colors for smooth rendering
    const colorLanding = new THREE.Color(0xffffff); 
    const colorSpace = new THREE.Color(0x020617);
    // Set background to dark cosmic space so it is visible through the cutout window from the very beginning!
    scene.background = colorSpace;

    // Linear fog (deep cosmic mist blending distant elements smoothly into background darkness)
    scene.fog = new THREE.Fog(0x020617, 120, 400);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    // Initial static landing camera position at (0, 0, 260) looking towards the porthole
    camera.position.set(0, 0, 260);

    // Reusable raycasting variables for highly performant and precise HTML label occlusion check
    const occludeRaycaster = new THREE.Raycaster();
    const camToPlanetDir = new THREE.Vector3();
    const tempMeshWorldPos = new THREE.Vector3();

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: false
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4. Real Celestial Lighting Rig (single key light with ultra-low ambient scatter)
    // Faint cold space dust ambient reflection to define body geometry in shadow safely
    const ambientLight = new THREE.AmbientLight(0x0a1128, 0.12);
    scene.add(ambientLight);

    // Distant, extremely intense Star Light Source (acting as the sole sun of this system)
    // Pointed from high, front, and slightly left (Z positive to illuminate 3/4 of the front faces)
    const mainLight = new THREE.DirectionalLight(0xfffdf6, 4.5);
    mainLight.position.set(-180, 240, 280);
    scene.add(mainLight);

    // All fill lights completely disabled to stay true to airless deep space physics (void shadows)

    // 5. Infinite Twinkling Starfield in Deep Star System (behind the wall)
    const starsCount = 450;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 800;
      starPositions[i + 1] = (Math.random() - 0.5) * 800;
      // Positioned behind the 3D wall (which lies at z = 140) to guarantee no clipping!
      starPositions[i + 2] = -Math.random() * 450 + 130; 
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.9,
      transparent: true,
      opacity: 0.8,
      fog: false
    });
    const starfield = new THREE.Points(starGeometry, starMaterial);
    scene.add(starfield);

    // 6. Seamless 3D Plaster Landing Wall with Circular Cutout Frame
    // Rectangular shape spanning from -1500 to 1500 with a circular cutout
    const wallShape = new THREE.Shape();
    const wallSize = 1500;
    wallShape.moveTo(-wallSize, -wallSize);
    wallShape.lineTo(wallSize, -wallSize);
    wallShape.lineTo(wallSize, wallSize);
    wallShape.lineTo(-wallSize, wallSize);
    wallShape.closePath();

    // Subtractive circular cutout (matches the HTML viewport dimensions exactly)
    const holeRadius = 24.5;
    const holePath = new THREE.Path();
    holePath.absarc(0, 0, holeRadius, 0, Math.PI * 2, true);
    wallShape.holes.push(holePath);

    const wallGeometry = new THREE.ShapeGeometry(wallShape);
    // MeshBasicMaterial ensures the entire background wall is 100% flat, uniform, and perfect pure white
    const wallMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      fog: false
    });
    const wallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
    // Positioned at z = 140, serving as the interface threshold
    wallMesh.position.set(0, 0, 140);
    scene.add(wallMesh);

    // High detail tactile bezel ring framing the circular cutout
    const ringGeometry = new THREE.TorusGeometry(24.5, 0.8, 16, 120);
    const ringMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xe2e8f0,
      roughness: 0.2,
      metalness: 0.15,
      clearcoat: 0.6,
      clearcoatRoughness: 0.1,
      fog: false
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.position.set(0, 0, 140.5);
    scene.add(ringMesh);

    // Deterministic seeded pseudorandom number generator for stable procedural generation
    const createSeededRandom = (seedStr: string) => {
      let h = 1779033703 ^ seedStr.length;
      for (let i = 0; i < seedStr.length; i++) {
        h = Math.imul(h ^ seedStr.charCodeAt(i), 3432918353);
        h = (h << 13) | (h >>> 19);
      }
      return () => {
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        return ((h ^= h >>> 16) >>> 0) / 4294967296;
      };
    };

    // 7. Organic Sphere Modeling: Seamless 3D astronomical vertex-displacement generator
    const createCustomPlasterPlanetGeo = (radius: number, seedStr: string) => {
      // 72x72 segments provides high vertex density for beautifully defined ridges and craters
      const geo = new THREE.SphereGeometry(radius, 72, 72);
      const pos = geo.attributes.position;
      if (!pos) return geo;

      const rand = createSeededRandom(seedStr);
      const vec = new THREE.Vector3();

      // Custom large-scale geological terrain waviness parameters
      const terrainF1 = rand() * 2.5 + 1.8;
      const terrainF2 = rand() * 2.5 + 1.8;
      const terrainAmp1 = 0.015 + rand() * 0.02;
      const terrainAmp2 = 0.008 + rand() * 0.012;
      const shiftX = rand() * Math.PI;
      const shiftY = rand() * Math.PI;
      const shiftZ = rand() * Math.PI;

      // Medium-scale Crater impact locations directly distributed on the unit sphere
      const numCraters = Math.floor(rand() * 5) + 5; // 5 to 9 medium craters
      const craters: { center: THREE.Vector3; radius: number; depth: number; sharpness: number }[] = [];

      for (let i = 0; i < numCraters; i++) {
        const theta = rand() * Math.PI * 2;
        const phi = Math.acos((rand() * 2) - 1);
        const center = new THREE.Vector3(
          Math.sin(phi) * Math.cos(theta),
          Math.sin(phi) * Math.sin(theta),
          Math.cos(phi)
        );

        craters.push({
          center,
          radius: 0.16 + rand() * 0.22, // Boundary radius of crater in radians
          depth: 0.02 + rand() * 0.04,  // Deep displacement
          sharpness: 0.72 + rand() * 0.14 // Sharpness of the crater floor boundary
        });
      }

      for (let i = 0; i < pos.count; i++) {
        vec.fromBufferAttribute(pos, i);
        vec.normalize(); // Normalize to project onto unit sphere safely

        let disp = 0;

        // A. Large-scale base structural mountain ranges, basins, and landmass wave ridges
        disp += Math.sin(vec.x * terrainF1 + shiftX) * Math.cos(vec.y * terrainF1 + shiftY) * terrainAmp1;
        disp += Math.cos(vec.z * terrainF2 + shiftZ) * Math.sin(vec.y * terrainF2 + shiftX) * terrainAmp2;

        // B. Medium-scale asteroid impact craters.
        // Operating in angular/spherical space guarantees absolute seamless safety across boundaries.
        for (let c = 0; c < craters.length; c++) {
          const crater = craters[c];
          const angle = vec.angleTo(crater.center);

          if (angle < crater.radius) {
            const nd = angle / crater.radius;
            if (nd < crater.sharpness) {
              const basinScale = nd / crater.sharpness;
              // Depressed pocket floor
              disp -= (Math.cos(basinScale * Math.PI * 0.5) * 0.95 + 0.05) * crater.depth;
            } else {
              // Ejected raised crater rim ring
              const rimT = (nd - crater.sharpness) / (1.0 - crater.sharpness);
              disp += Math.sin(rimT * Math.PI) * (crater.depth * 0.15);
            }
          }
        }

        const finalDist = radius * (1.0 + disp);
        vec.multiplyScalar(finalDist);
        pos.setXYZ(i, vec.x, vec.y, vec.z);
      }

      geo.computeVertexNormals();
      return geo;
    };

    // 7.5. High-fidelity custom canvas Albedo & Bump Texture map compiler (unique per-planet)
    const createPlanetUnifiedSkin = (seedStr: string, baseHex: number) => {
      const size = 512; // Perfectly balanced clarity and memory consumption
      const rand = createSeededRandom(seedStr);

      const r_base = (baseHex >> 16) & 255;
      const g_base = (baseHex >> 8) & 255;
      const b_base = baseHex & 255;

      // Establish albedo diffuse image builder canvas
      const albedoCanvas = document.createElement('canvas');
      albedoCanvas.width = size;
      albedoCanvas.height = size;
      const aCtx = albedoCanvas.getContext('2d');
      if (!aCtx) return null;
      const albedoImgData = aCtx.createImageData(size, size);
      const aData = albedoImgData.data;

      // Establish bump displacement image builder canvas
      const bumpCanvas = document.createElement('canvas');
      bumpCanvas.width = size;
      bumpCanvas.height = size;
      const bCtx = bumpCanvas.getContext('2d');
      if (!bCtx) return null;
      const bumpImgData = bCtx.createImageData(size, size);
      const bData = bumpImgData.data;

      // Small-scale micro pitting & dimpling parameters
      const scaleFineGrains = rand() * 10 + 4;
      const numMicroCraters = Math.floor(rand() * 15) + 15; // 15 to 30 micro depressions
      const microCraters: { cx: number; cy: number; r: number; depth: number }[] = [];
      for (let i = 0; i < numMicroCraters; i++) {
        microCraters.push({
          cx: rand() * size,
          cy: rand() * size,
          r: 5 + rand() * 20,
          depth: 10 + rand() * 18
        });
      }

      // Planetary basaltic seas (darker mineral plates) and dust highlands
      const numPlates = Math.floor(rand() * 3) + 3;
      const plates: { cx: number; cy: number; r: number; factor: number }[] = [];
      for (let i = 0; i < numPlates; i++) {
        plates.push({
          cx: rand() * size,
          cy: rand() * size,
          r: 80 + rand() * 120,
          factor: -0.15 + rand() * 0.28 // Adds darker regions or dusty lighter zones
        });
      }

      // Mapped periodic waves parameters for seamless texture borders
      const tCoeffX1 = rand() * 6 + 3;
      const tCoeffY1 = rand() * 6 + 3;
      const tCoeffX2 = rand() * 10 + 6;
      const tCoeffY2 = rand() * 10 + 6;

      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          const idx = (y * size + x) * 4;

          const angleX = (x / size) * Math.PI * 2;
          const angleY = (y / size) * Math.PI * 2;

          // 1. High frequency sandy soil dust grains
          const grains = (rand() - 0.5) * scaleFineGrains;

          // 2. Local ground height wave layers
          const m1 = Math.sin(angleX * tCoeffX1) * Math.cos(angleY * tCoeffY1) * 6;
          const m2 = Math.sin(angleX * tCoeffX2 + angleY * tCoeffY2) * Math.cos(angleY * tCoeffX2 - angleX * tCoeffY1) * 3;

          // 3. Basaltic plates mapping
          let plateIntensity = 0;
          for (let p = 0; p < plates.length; p++) {
            const pl = plates[p];
            let dx = Math.abs(x - pl.cx);
            if (dx > size / 2) dx = size - dx;
            let dy = Math.abs(y - pl.cy);
            if (dy > size / 2) dy = size - dy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < pl.r) {
              const weight = Math.cos((dist / pl.r) * Math.PI * 0.5);
              plateIntensity += pl.factor * weight;
            }
          }

          // 4. Micro Craters compilation
          let craterHeight = 0;
          let craterDarkening = 0;
          for (let c = 0; c < microCraters.length; c++) {
            const mc = microCraters[c];
            let dx = Math.abs(x - mc.cx);
            if (dx > size / 2) dx = size - dx;
            let dy = Math.abs(y - mc.cy);
            if (dy > size / 2) dy = size - dy;

            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mc.r) {
              const nd = dist / mc.r;
              if (nd < 0.8) {
                const depthScale = Math.cos(nd * Math.PI * 0.5);
                craterHeight -= depthScale * mc.depth;
                // Weathering and ancient crust darkening in crater beds
                craterDarkening -= depthScale * 0.16;
              } else {
                const rimT = (nd - 0.8) / 0.2;
                const rimHeight = Math.sin(rimT * Math.PI) * (mc.depth * 0.14);
                craterHeight += rimHeight;
                // Brighter fresh silica ejecta boundaries
                craterDarkening += rimHeight * 0.005;
              }
            }
          }

          // Compilation: Bump Height values (neutral mid-point gray is 128)
          const bumpVal = 128 + grains + m1 + m2 + craterHeight;
          const finalBump = Math.max(0, Math.min(255, bumpVal));

          // Compilation: Albedo color modulation factor combining high albedo dust and dark basaltic beds
          const baseScale = 1.0 + (grains * 0.012) + (m1 * 0.008) + plateIntensity + craterDarkening;
          const finalR = Math.max(0, Math.min(255, r_base * baseScale));
          const finalG = Math.max(0, Math.min(255, g_base * baseScale));
          const finalB = Math.max(0, Math.min(255, b_base * baseScale));

          // Set Albedo Map channel data
          aData[idx] = finalR;
          aData[idx + 1] = finalG;
          aData[idx + 2] = finalB;
          aData[idx + 3] = 255;

          // Set Bump Map channel data (shadow relief is derived from here)
          bData[idx] = finalBump;
          bData[idx + 1] = finalBump;
          bData[idx + 2] = finalBump;
          bData[idx + 3] = 255;
        }
      }

      aCtx.putImageData(albedoImgData, 0, 0);
      bCtx.putImageData(bumpImgData, 0, 0);

      const map = new THREE.CanvasTexture(albedoCanvas);
      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.RepeatWrapping;
      map.repeat.set(1.0, 1.0);

      const bumpMap = new THREE.CanvasTexture(bumpCanvas);
      bumpMap.wrapS = THREE.RepeatWrapping;
      bumpMap.wrapT = THREE.RepeatWrapping;
      bumpMap.repeat.set(1.0, 1.0);

      return { map, bumpMap };
    };

    // 8. Create Planet Meshes using the Relaxed Nodes
    const planetMeshes: THREE.Mesh[] = [];
    const planetMap = new Map<string, THREE.Mesh>();

    // Diverse, highly realistic stone and mineral palette hex values for celestial body variation
    const BASE_CELESTIAL_COLORS = [
      0xdae2ec, // Realistic chalky/silicate off-white stone
      0xe8dec9, // Sandy desert silica dust highland
      0xcad3df, // Slate cool-gray basaltic mineral
      0xdfbca9, // Oxidized iron-rich pale reddish clay
      0xdfd8d0, // Soft clay warm gray regolith
      0x8a929c, // Deep volcanic charcoal rock
      0xf1f5f9  // Ultra-bright silicate chalk
    ];

    adjustedPositions.forEach((node) => {
      // Create a deterministic seed block using the project id and title
      const seedStr = node.id + "_" + (node.project.title || "planet");
      const rand = createSeededRandom(seedStr);

      const colIdx = Math.floor(rand() * BASE_CELESTIAL_COLORS.length);
      const baseColor = BASE_CELESTIAL_COLORS[colIdx];

      // 1. Compile 3D displaced geometry specifically unique to this planet
      const geo = createCustomPlasterPlanetGeo(node.radius, seedStr);

      // 2. Compile matched dual textures (albedo and bump charts)
      const skin = createPlanetUnifiedSkin(seedStr, baseColor);

      // 3. Construct the physical non-plastic matte material with retroreflective regolith sheen
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff, // Off-white multiplier (the custom .map handles all coloring details)
        map: skin?.map || null,
        bumpMap: skin?.bumpMap || null,
        bumpScale: 0.038 + (rand() * 0.024), // subtle variations in surface relief depth
        roughness: 0.94 + (rand() * 0.05), // Extreme diffuse matte scattering, zero plastic shine
        metalness: 0.0,
        clearcoat: 0.0,
        reflectivity: 0.0,
        sheen: 0.28 + (rand() * 0.16), // Simulates retroreflective regolith backscattering (opposition effect)
        sheenRoughness: 0.95,
        sheenColor: new THREE.Color(0xffffff),
        flatShading: false
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(node.x, node.y, node.z);

      mesh.userData = { id: node.id, project: node.project, radius: node.radius };
      scene.add(mesh);
      planetMeshes.push(mesh);
      planetMap.set(node.id, mesh);

      // Render sleek circular radial orbit lines
      const orbitRadius = Math.sqrt(node.x * node.x + node.z * node.z);
      const orbitPoints = [];
      const segmentCount = 120;
      for (let idx = 0; idx <= segmentCount; idx++) {
        const theta = (idx / segmentCount) * Math.PI * 2;
        orbitPoints.push(new THREE.Vector3(Math.cos(theta) * orbitRadius, node.y, Math.sin(theta) * orbitRadius));
      }
      const orbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints);
      const orbitMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.04
      });
      const orbitLine = new THREE.Line(orbitGeo, orbitMat);
      scene.add(orbitLine);
    });

    // 9. Input and Camera flight variables
    let yaw = 0;
    let pitch = 0;
    let isDragging = false;
    let dragDistance = 0;
    let lastX = 0;
    let lastY = 0;

    // Transition progress state tracking: 0 = Landing, 1 = Deep Space Active
    let transitionProgress = (viewModeRef.current === 'space') ? 1.0 : 0.0;

    // Active flight coordinate system
    const camFlightPos = new THREE.Vector3(0, 0, 95);
    const velocity = new THREE.Vector3();
    const accelRate = 0.03;

    // Keyboard handlers
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'w', 'a', 's', 'd', ' ', 'q', 'e', 'c', 'z'].includes(key)) {
        e.preventDefault();
      }
      keysPressed.current[e.key] = true;
      keysPressed.current[key] = true;
      // Absolutely secure modifier safety synchronization
      keysPressed.current['shift'] = e.shiftKey;
      keysPressed.current['Shift'] = e.shiftKey;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      keysPressed.current[e.key] = false;
      keysPressed.current[key] = false;
      // Absolutely secure modifier safety synchronization
      keysPressed.current['shift'] = e.shiftKey;
      keysPressed.current['Shift'] = e.shiftKey;
    };

    const handleBlur = () => {
      keysPressed.current = {};
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', handleBlur);

    // Pointer event logic (supports mouse parallax as well as dragging to look)
    const raycaster = new THREE.Raycaster();
    const cursor = new THREE.Vector2();

    const handlePointerDown = (e: PointerEvent) => {
      // Safely sync shift key modifier from active pointer interaction
      keysPressed.current['shift'] = e.shiftKey;
      keysPressed.current['Shift'] = e.shiftKey;

      // DRAGGING TO ROTATE CAMERA IS ONLY ENABLED IN ACTIVE SPACE EXPLORE
      if (viewModeRef.current !== 'space') return;
      isDragging = true;
      dragDistance = 0;
      lastX = e.clientX;
      lastY = e.clientY;
      canvas.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: PointerEvent) => {
      // Safely sync shift key modifier from active pointer interaction
      keysPressed.current['shift'] = e.shiftKey;
      keysPressed.current['Shift'] = e.shiftKey;

      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      cursor.x = (mx / rect.width) * 2 - 1;
      cursor.y = -(my / rect.height) * 2 + 1;

      // Update passive cursor positioning for organic parallax (on landing page)
      mouseXRef.current = cursor.x;
      mouseYRef.current = cursor.y;

      if (isDragging && viewModeRef.current === 'space') {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        lastX = e.clientX;
        lastY = e.clientY;
        dragDistance += Math.sqrt(dx * dx + dy * dy);

        const rotationSensitivity = 0.002625;
        yaw -= dx * rotationSensitivity;
        pitch -= dy * rotationSensitivity;

        const maxPitch = Math.PI / 2.05;
        pitch = Math.max(-maxPitch, Math.min(maxPitch, pitch));
      } else {
        // Handle planet hover raycasting in active space mode
        if (viewModeRef.current === 'space') {
          raycaster.setFromCamera(cursor, camera);
          const intersects = raycaster.intersectObjects(planetMeshes);
          if (intersects.length > 0) {
            const hoveredMesh = intersects[0].object as THREE.Mesh;
            const foundProj = hoveredMesh.userData.project as Project;
            if (hoveredRef.current?.id !== foundProj.id) {
              setHoveredProject(foundProj);
              hoveredRef.current = foundProj;
            }
          } else {
            if (hoveredRef.current !== null) {
              setHoveredProject(null);
              hoveredRef.current = null;
            }
          }
        }
      }
    };

    const handlePointerUp = (e: PointerEvent) => {
      // Safely sync shift key modifier from active pointer interaction
      keysPressed.current['shift'] = e.shiftKey;
      keysPressed.current['Shift'] = e.shiftKey;

      if (isDragging) {
        canvas.releasePointerCapture(e.pointerId);
        isDragging = false;
      }

      // Quick-click gesture: open project dossier
      if (viewModeRef.current === 'space' && dragDistance < 7) {
        raycaster.setFromCamera(cursor, camera);
        const intersects = raycaster.intersectObjects(planetMeshes);
        if (intersects.length > 0) {
          const selectedMesh = intersects[0].object as THREE.Mesh;
          const proj = selectedMesh.userData.project as Project;
          onSelectProject(proj);
        }
      }
    };

    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerup', handlePointerUp);

    // 10. Unified Cinematic Render Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const renderLoop = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Resolve transition targets based on active React viewMode
      const isSpaceState = viewModeRef.current === 'space';
      const targetProg = isSpaceState ? 1.0 : 0.0;
      
       // Interpolate progress smoothly with frame-rate independent ease-out damping (slowed down by 50% for high cinematic feel)
      transitionProgress += (targetProg - transitionProgress) * (isSpaceState ? 0.019 : 0.024);

      // Reset space flight coordinates once the camera is safely fully back on the landing page
      if (!isSpaceState && transitionProgress < 0.01) {
        camFlightPos.set(0, 0, 95);
        velocity.set(0, 0, 0);
        yaw = 0;
        pitch = 0;
        keysPressed.current = {};
      }

      // A. COMPOSITE CAMERA POSITIONING & MOVEMENT
      // Smooth breathing/hover offset in landing state
      const breatheX = Math.sin(elapsed * 0.45) * 1.5 * (1 - transitionProgress);
      const breatheY = Math.cos(elapsed * 0.35) * 1.5 * (1 - transitionProgress);
      const breatheZ = Math.sin(elapsed * 0.25) * 1.0 * (1 - transitionProgress);

      // Aesthetic cursor tilt parallax (diminishes as we transition to full flight control)
      const tiltX = mouseXRef.current * 7.5 * (1 - transitionProgress);
      const tiltY = mouseYRef.current * 5.0 * (1 - transitionProgress);

      // Camera position on landing page: at z = 260
      const landingPos = new THREE.Vector3(
        breatheX + tiltX,
        breatheY + tiltY,
        260 + breatheZ
      );

      // Camera coordinate resolution in Space active state
      const relativeForward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
      const relativeRight = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
      const relativeUp = new THREE.Vector3(0, 1, 0).applyQuaternion(camera.quaternion);

      // Translate camera in active flight conditions
      if (isSpaceState && transitionProgress > 0.8) {
        const k = keysPressed.current;
        if (k['arrowup'] || k['w']) {
          velocity.addScaledVector(relativeForward, accelRate);
        }
        if (k['arrowdown'] || k['s']) {
          velocity.addScaledVector(relativeForward, -accelRate);
        }
        if (k['arrowleft'] || k['a']) {
          velocity.addScaledVector(relativeRight, -accelRate);
        }
        if (k['arrowright'] || k['d']) {
          velocity.addScaledVector(relativeRight, accelRate);
        }
        if (k[' '] || k['space'] || k['q'] || k['z']) {
          velocity.addScaledVector(relativeUp, accelRate);
        }
        if (k['shift'] || k['e'] || k['c']) {
          velocity.addScaledVector(relativeUp, -accelRate);
        }
      }

      // Apply drag resistance (gentle cosmic friction for coasting inertia sliding)
      velocity.multiplyScalar(0.985);
      if (velocity.length() > 0.5) {
        velocity.setLength(0.5);
      }
      camFlightPos.add(velocity);

      // Clamp flight distances to keep clusters reasonably framed
      camFlightPos.x = Math.max(-450, Math.min(450, camFlightPos.x));
      camFlightPos.y = Math.max(-450, Math.min(450, camFlightPos.y));
      camFlightPos.z = Math.max(-450, Math.min(450, camFlightPos.z));

      // Seamlessly combine positions using a LERP helper
      const finalCamPos = new THREE.Vector3().lerpVectors(landingPos, camFlightPos, transitionProgress);
      camera.position.copy(finalCamPos);

      // B. COMPOSITE CAMERA ROTATION
      // In landing mode, camera looks straight; in flight, mouse drag takes over
      const finalPitch = pitch * transitionProgress;
      const finalYaw = yaw * transitionProgress;
      camera.rotation.set(finalPitch, finalYaw, 0, 'YXZ');

      // Update HUD interface gauges
      setCameraCoords({
        x: Math.round(camera.position.x),
        y: Math.round(camera.position.y),
        z: Math.round(camera.position.z)
      });

      // Smooth HUD activation gateway (fade-in only after crossing porthole window threshold)
      const shouldHudShow = isSpaceState && transitionProgress >= 0.95;
      if (shouldHudShow !== hudActiveRef.current) {
        hudActiveRef.current = shouldHudShow;
        setHudActive(shouldHudShow);
      }

      // C. INTERACTIVE ENVIRONMENT FADING
      // Hide plaster wall after we glide past the target portal
      const isWallActive = transitionProgress < 0.98;
      wallMesh.visible = isWallActive;
      ringMesh.visible = isWallActive;

      // Keep background as dark cosmic space always so stargazing scenery is brilliantly visible through the porthole window
      renderer.setClearColor(colorSpace);
      scene.background = colorSpace;

      // Slowly rotate planet coordinates to emulate gravity orbits
      planetMeshes.forEach(mesh => {
        mesh.rotation.y += delta * 0.12;
        mesh.rotation.x += delta * 0.03;

        // Interactive hover scaling feedback
        const isHovered = hoveredRef.current?.id === mesh.userData.id;
        const targetScale = isHovered ? 1.14 : 1.0;
        mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.15);
      });

      // Compute 2D screen positions and actual radii of all planets to perform high-precision bounding-box and circular occlusion
      interface PlanetScreenPos {
        id: string;
        dist: number;
        isBehind: boolean;
        sx: number;
        sy: number;
        screenRadius: number;
      }
      const planetScreenPositions: PlanetScreenPos[] = [];
      const fovRad = (camera.fov * Math.PI) / 180;
      const fovTan = Math.tan(fovRad / 2);

      planetMeshes.forEach(mesh => {
        const worldPos = new THREE.Vector3();
        mesh.getWorldPosition(worldPos);
        const dist = camera.position.distanceTo(worldPos);
        
        const tempV = worldPos.clone();
        tempV.project(camera);
        
        const isBehind = tempV.z > 1;
        const sx = (tempV.x * 0.5 + 0.5) * width;
        const sy = (-tempV.y * 0.5 + 0.5) * height;
        
        const radius = mesh.userData.radius || 1;
        const actualRadius = radius * mesh.scale.x;
        // Project physical radius to screen pixels
        const screenRadius = (actualRadius * height) / (2 * dist * fovTan);

        planetScreenPositions.push({
          id: mesh.userData.id,
          dist,
          isBehind,
          sx,
          sy,
          screenRadius
        });
      });

      // Dynamic floating text labels projection (only if visible & we are in active space)
      projects.forEach((p) => {
        const projMesh = planetMap.get(p.id);
        const labelEl = document.getElementById(`proj-label-${p.id}`);

        if (projMesh && labelEl) {
          // Hide planet labels until camera has passed the porthole window boundary
          if (!isSpaceState || transitionProgress < 0.95) {
            labelEl.style.display = 'none';
            return;
          }

          const target = planetScreenPositions.find(pos => pos.id === p.id);
          if (!target) {
            labelEl.style.display = 'none';
            return;
          }

          // Retrieve absolute 3D coordinate on current entity node
          const worldPos = new THREE.Vector3();
          projMesh.getWorldPosition(worldPos);
          const stableDistanceToCam = camFlightPos.distanceTo(worldPos);

          const distanceToCam = target.dist;

          // Highly precise screen-space bounding box overlap check against all closer planets
          let isOccluded = false;
          const labelHalfWidth = 80;
          const labelHalfHeight = 25;

          for (const other of planetScreenPositions) {
            if (other.id === target.id) continue;
            if (other.isBehind) continue;
            
            // Only examine planets closer to the camera than our target planet
            if (other.dist < target.dist - 1.0) {
              // Standard closest point on AABB to circle center distance check
              const clampX = Math.max(target.sx - labelHalfWidth, Math.min(other.sx, target.sx + labelHalfWidth));
              const clampY = Math.max(target.sy - labelHalfHeight, Math.min(other.sy, target.sy + labelHalfHeight));
              
              const dx = other.sx - clampX;
              const dy = other.sy - clampY;
              const distToLabelBox = Math.sqrt(dx * dx + dy * dy);
              
              // If the closest point on the tag boundary is within the foreground planet's sphere disk
              if (distToLabelBox < other.screenRadius + 4) {
                isOccluded = true;
                break;
              }
            }
          }

          if (target.isBehind || distanceToCam > 450 || isOccluded) {
            labelEl.style.display = 'none';
          } else {
            const screenX = target.sx;
            const screenY = target.sy;

            if (screenX >= 0 && screenX <= width && screenY >= 0 && screenY <= height) {
              labelEl.style.display = 'block';
              labelEl.style.transform = `translate3d(${screenX}px, ${screenY}px, 0) translate(-50%, -50%)`;

              // High-precision depth indexing: ensure front-facing tags overlay perfectly above distant tags
              labelEl.style.zIndex = String(Math.round(1000 - stableDistanceToCam));

              // Smooth fade-in as we finish transition, combined with distance fade
              const transitionFade = Math.max(0, Math.min(1.0, (transitionProgress - 0.95) / 0.05));
              const distanceOpacity = Math.max(0, Math.min(1.0, (380 - stableDistanceToCam) / 260));
              labelEl.style.opacity = String(distanceOpacity * transitionFade);

              // Cinematic depth of-field blur removed per user request: keep tags sharp at all distances
              labelEl.style.filter = 'none';
            } else {
              labelEl.style.display = 'none';
            }
          }
        }
      });

      // C. HIGH-PRECISION LANDING VIEW EXPLORE BUTTON ANCHORING
      const exploreBtnEl = document.getElementById('explore-anchored-btn');
      if (exploreBtnEl) {
        if (isSpaceState && transitionProgress > 0.95) {
          exploreBtnEl.style.display = 'none';
        } else {
          // Centered on the 3D plaster wall hole (0, 0, 140)
          const tempPortholeV = new THREE.Vector3(0, 0, 140);
          tempPortholeV.project(camera);

          const screenX = (tempPortholeV.x * 0.5 + 0.5) * width;
          const screenY = (-tempPortholeV.y * 0.5 + 0.5) * height;

          exploreBtnEl.style.display = 'flex';
          exploreBtnEl.style.transform = `translate3d(${screenX}px, ${screenY}px, 0) translate(-50%, -50%)`;
          
          // Smooth fade-out in tandem with space transition
          const opacity = Math.max(0, 1.0 - transitionProgress);
          exploreBtnEl.style.opacity = String(opacity);
          
          if (opacity < 0.02) {
            exploreBtnEl.style.pointerEvents = 'none';
          } else {
            exploreBtnEl.style.pointerEvents = 'auto';
          }
        }
      }

      // Render frames
      renderer.render(scene, camera);

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    // Standard resize handler
    const handleResize = () => {
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // Cleanups
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', handleBlur);
      if (canvas) {
        canvas.removeEventListener('pointerdown', handlePointerDown);
        canvas.removeEventListener('pointermove', handlePointerMove);
        canvas.removeEventListener('pointerup', handlePointerUp);
      }
      planetMeshes.forEach(m => {
        m.geometry.dispose();
        if (m.material) {
          const mat = m.material as THREE.MeshPhysicalMaterial;
          if (mat.map) mat.map.dispose();
          if (mat.bumpMap) mat.bumpMap.dispose();
          mat.dispose();
        }
      });
      wallGeometry.dispose();
      wallMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
    };
  }, [adjustedPositions, lang]);

  return (
    <div 
      ref={containerRef} 
      className={`fixed inset-0 w-full h-full flex flex-col justify-end overflow-hidden transition-all duration-700 ${
        viewMode === 'space' ? 'z-10 pointer-events-auto bg-slate-950' : 'z-0 pointer-events-none'
      }`}
    >
      
      {/* Real 3D WebGL Canvas */}
      <canvas
        ref={canvasRef}
        id="space3d-canvas"
        className="absolute inset-0 w-full h-full cursor-pointer touch-none z-0"
      />

      {/* Futuristic projected HTML Typography labels container (Active only in deep space view) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-10 select-none">
        {viewMode === 'space' && projects.map((p) => {
          const typeColor = TYPE_COLORS[p.type] || '#4f46e5';
          const isHovered = hoveredProject?.id === p.id;

          return (
            <div
              key={p.id}
              id={`proj-label-${p.id}`}
              className="absolute left-0 top-0 text-center pointer-events-none select-none flex flex-col items-center gap-1.5 transition-[opacity] duration-150"
              style={{ display: 'none' }}
            >
              {isHovered && (
                <div 
                  className="w-14 h-14 rounded-full border border-dashed flex items-center justify-center -mb-7 animate-spin-slow transition-all"
                  style={{ borderColor: `${typeColor}77` }}
                />
              )}

              <div className="h-6" />

              <div className="bg-slate-950/85 backdrop-blur-md px-3 py-2 rounded-2xl border border-slate-800 shadow-xl flex flex-col items-center">
                <span 
                  className="px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-widest font-mono border mb-1"
                  style={{ 
                    color: typeColor, 
                    borderColor: `${typeColor}44`,
                    backgroundColor: `${typeColor}0a`
                  }}
                >
                  {p.type}
                </span>

                <h4 className={`text-xs font-bold leading-tight transition-colors ${isHovered ? 'text-white scale-102 font-black' : 'text-slate-300'}`}>
                  {p.name}
                </h4>

                {lang === 'zh' && p.chineseName && (
                  <p className="text-[9px] text-slate-500 font-sans mt-0.5">{p.chineseName}</p>
                )}

                {isHovered && (
                  <p className="text-[8px] text-indigo-400 font-mono font-bold mt-1.5 animate-pulse uppercase tracking-wider">
                    {lang === 'zh' ? '✦ 点击深度探索 ✦' : '✦ CLICK TO TOUCH ✦'}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* SPACE INTERACTIVE HUD GAUGE OVERLAYS (Visible only in active space navigation with elegant fade-in) */}
      <div 
        className={`transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-10 absolute inset-0 ${
          viewMode === 'space' && hudActive ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {viewMode === 'space' && (
          <>
            {/* Coordinates Gauge */}
            <div className="absolute left-10 top-28 lg:left-14 lg:top-36 xl:left-16 xl:top-40 font-mono text-[10px] text-slate-400 bg-slate-950/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-800/60 leading-relaxed space-y-0.5 select-none pointer-events-none z-10">
              <p className="flex items-center gap-1.5 font-bold text-slate-100">
                <Rocket className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                <span>{lang === 'zh' ? '星系导航面板' : 'COSMOS NAV HUD'}</span>
              </p>
              <p>CAM X: <span className="text-white font-bold">{cameraCoords.x}m</span></p>
              <p>CAM Y: <span className="text-white font-bold">{cameraCoords.y}m</span></p>
              <p>CAM Z: <span className="text-white font-bold">{cameraCoords.z}m</span></p>
            </div>

            {/* Hover Status Info Top Center Banner */}
            {hoveredProject && (
              <div className="absolute top-10 lg:top-14 xl:top-16 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-4 pointer-events-none text-slate-200 select-none z-10">
                <div className="w-3.5 h-3.5 rounded-full animate-ping bg-slate-300" />
                <div>
                  <h4 className="text-xs font-bold font-sans tracking-tight uppercase text-white">{hoveredProject.name}</h4>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                    Type: {hoveredProject.type} | Founding: {hoveredProject.founded}
                  </p>
                </div>
              </div>
            )}

            {/* Bottom Information Notice Bar */}
            <div className="absolute bottom-10 left-10 lg:bottom-14 lg:left-14 xl:bottom-16 xl:left-16 pointer-events-none font-sans text-slate-400 text-xs text-shadow select-none z-10">
              <div className="bg-slate-900/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-800/80 max-w-sm pointer-events-auto shadow-lg">
                <p className="text-slate-200 text-xs flex items-center gap-1.5 font-semibold">
                  <Compass className="w-4 h-4 text-emerald-400 animate-spin-slow" />
                  <span>{lang === 'zh' ? '星际漫游助手' : 'Cosmic Guidance'}</span>
                </p>
                <p className="text-[11px] text-slate-400 leading-relaxed mt-1.5">
                  {t.game.hoverTip}
                </p>
              </div>
            </div>

            {/* On-Screen Keyboard Guide Helpers Box in bottom right, replacing joystick */}
            {showGuide ? (
              <div className="absolute bottom-10 right-10 lg:bottom-14 lg:right-14 xl:bottom-16 xl:right-16 bg-slate-900/95 border border-indigo-500/30 text-slate-200 px-6 py-4 rounded-2xl shadow-2xl space-y-2 pointer-events-auto max-w-sm select-none z-10 w-72 sm:w-80">
                <button
                  onClick={() => setShowGuide(false)}
                  className="absolute top-2.5 right-3 w-5 h-5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 font-mono text-[10px] rounded-full flex items-center justify-center cursor-pointer"
                >
                  x
                </button>
                <p className="text-xs font-bold text-slate-100 flex items-center gap-1.5 mr-6">
                  <HelpCircle className="w-4 h-4 text-indigo-400 animate-spin-slow" />
                  <span>{t.game.instructions}</span>
                </p>
                <div className="text-[10px] text-slate-400 font-mono leading-relaxed space-y-1 pt-1.5 border-t border-slate-800">
                  <p>{t.game.keys.forward}</p>
                  <p>{t.game.keys.backward}</p>
                  <p>{t.game.keys.left}</p>
                  <p>{t.game.keys.right}</p>
                  <p>{t.game.keys.up}</p>
                  <p>{t.game.keys.down}</p>
                  {t.game.keys.mouseLook && <p className="text-indigo-300 font-sans mt-1">{t.game.keys.mouseLook}</p>}
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowGuide(true)}
                className="absolute bottom-10 right-10 lg:bottom-14 lg:right-14 xl:bottom-16 xl:right-16 w-11 h-11 rounded-full bg-slate-900/95 border border-indigo-500/30 flex items-center justify-center text-indigo-400 hover:text-indigo-300 shadow-2xl select-none z-10 cursor-pointer pointer-events-auto transition-all duration-300 group"
                title={t.game.instructions}
              >
                <HelpCircle className="w-5 h-5 group-hover:scale-110 transition-all duration-300" />
              </button>
            )}
          </>
        )}
      </div>

    </div>
  );
}
