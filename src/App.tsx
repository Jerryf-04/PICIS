import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, Layers, Info, Globe, Menu, ChevronRight } from 'lucide-react';
import { Project, TeamMember } from './types';
import { PROJECTS_DATA, CHINESE_TRANSLATIONS, ENGLISH_TRANSLATIONS, METRICS } from './data';
import SpaceGameView from './components/SpaceGameView';
import InfoModeView from './components/InfoModeView';
import ProjectDetailDrawer from './components/ProjectDetailDrawer';
import AboutModal from './components/AboutModal';
import TeamModal from './components/TeamModal';

export default function App() {
  // Mobile device viewport constraint check (allowing desktop, laptop, and iPad/tablet)
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    // Elegant buffer loader to give ThreeJS canvas and assets time to compile and lay out fully
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Localization: 'zh' list or 'en' list
  const [lang, setLang] = useState<'zh' | 'en'>('en');
  const translations = lang === 'zh' ? CHINESE_TRANSLATIONS : ENGLISH_TRANSLATIONS;
  const t = translations;

  // View state: 'landing' | 'space' | 'info'
  const [viewMode, setViewMode] = useState<'landing' | 'space' | 'info'>('landing');

  // Dynamic projects list with local storage persistence for live likes/comments
  const [projectsList, setProjectsList] = useState<Project[]>(() => {
    const saved = localStorage.getItem('picis_projects_db');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Merge local storage interactive stats (likes/comments) into our canonical PROJECTS_DATA
          // This ensures that new projects from PROJECTS_DATA are always added instantly
          // and old ones retain any user-generated likes and comments!
          return PROJECTS_DATA.map(canonical => {
            const savedProj = parsed.find(p => p.id === canonical.id);
            if (savedProj) {
              return {
                ...canonical,
                likes: typeof savedProj.likes === 'number' ? savedProj.likes : canonical.likes,
                comments: Array.isArray(savedProj.comments) ? savedProj.comments : canonical.comments
              };
            }
            return canonical;
          });
        }
      } catch (err) {
        console.warn('Unable to parse saved projects', err);
      }
    }
    return PROJECTS_DATA;
  });

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem('picis_projects_db', JSON.stringify(projectsList));
  }, [projectsList]);

  // Selected project sidebar drawer
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Modals management
  const [showAbout, setShowAbout] = useState(false);
  const [showTeam, setShowTeam] = useState(false);

  // Interactive like action
  const handleLikeProject = (projectId: string) => {
    setProjectsList((prev) =>
      prev.map((p) => {
        if (p.id === projectId) {
          const updated = { ...p, likes: p.likes + 1 };
          if (selectedProject && selectedProject.id === projectId) {
            setSelectedProject(updated);
          }
          return updated;
        }
        return p;
      })
    );
  };

  // Interactive comment action
  const handleAddComment = (projectId: string, author: string, text: string) => {
    const newComment = {
      id: Math.random().toString(36).substr(2, 9),
      author,
      text,
      timestamp: new Date().toISOString().split('T')[0]
    };

    setProjectsList((prev) =>
      prev.map((p) => {
        if (p.id === projectId) {
          const updated = { ...p, comments: [newComment, ...p.comments] };
          if (selectedProject && selectedProject.id === projectId) {
            setSelectedProject(updated);
          }
          return updated;
        }
        return p;
      })
    );
  };

  // Cinematic zoom mechanism
  const triggerSpaceExplore = () => {
    setViewMode('space');
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'zh' ? 'en' : 'zh'));
  };

  const handleToggleModeFromNavbar = () => {
    if (viewMode === 'space') {
      setViewMode('info');
    } else if (viewMode === 'info') {
      setViewMode('space');
    } else {
      setViewMode('info');
    }
  };

  if (isMobile) {
    return (
      <div className="fixed inset-0 min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between items-center p-8 select-none overflow-hidden">
        {/* Ambient background light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Top brand */}
        <div className="w-full text-center mt-6 z-10">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter font-sans select-none leading-none text-white">
            PICIS <span className="font-sans">辟奇</span>
          </h1>
        </div>

        {/* Centered clean dual-locale notice block */}
        <div className="relative flex flex-col items-center justify-center max-w-sm text-center px-4 z-10 my-auto space-y-3.5">
          <h2 className="text-[18px] sm:text-[19px] font-bold text-white tracking-[0.12em] font-sans leading-none whitespace-nowrap">
            请通过电脑网页版或平板打开
          </h2>
          <p className="text-[9.5px] sm:text-[10px] font-bold text-white tracking-[0.18em] uppercase font-sans leading-none whitespace-nowrap pl-[0.18em]">
            Please open via desktop browser or tablet
          </p>
        </div>

        {/* Footer */}
        <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase mb-4 z-10">
          PC & iPad ONLY • CO-CREATION PORTAL
        </div>
      </div>
    );
  }

  return (
    <div className={`${viewMode === 'info' ? 'min-h-screen' : 'h-screen overflow-hidden'} ${viewMode === 'landing' ? 'bg-white' : viewMode === 'space' ? 'bg-slate-950' : 'bg-[#fcfcfc]'} text-slate-800 font-sans relative transition-all duration-500 selection:bg-indigo-500 selection:text-white`}>
      
      {/* Persistent Backdrop 3D Viewport */}
      <SpaceGameView
        projects={projectsList}
        onSelectProject={setSelectedProject}
        lang={lang}
        translations={t}
        viewMode={viewMode}
      />

      {/* HIGH-PRECISION 3D ANCHORED PORTAL EXPLORE TRIGGER */}
      {viewMode === 'landing' && (
        <div 
          id="explore-anchored-btn"
          className="fixed z-35 select-none group flex items-center justify-center cursor-pointer pointer-events-auto"
          onClick={triggerSpaceExplore}
          style={{
            position: 'fixed',
            left: '0px',
            top: '0px',
            transform: 'translate(-50%, -50%)',
            willChange: 'transform, opacity',
            display: 'none',
            opacity: 0
          }}
        >
          <div className="relative flex items-center justify-center">
            {/* Slow orbiting stellar rings mirroring the cutout */}
            <div className="absolute w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] rounded-full border border-white/5 animate-pulse duration-[4000ms] pointer-events-none" />
            <div className="absolute w-[185px] h-[185px] sm:w-[265px] sm:h-[265px] rounded-full border border-indigo-500/10 animate-ping duration-[6000ms] pointer-events-none" />

            {/* Highly-legible displays centered text */}
            <span className="text-xl sm:text-2xl font-black text-white font-sans tracking-[0.22em] uppercase drop-shadow-[0_4px_14px_rgba(0,0,0,0.85)] group-hover:scale-110 group-hover:text-indigo-200 transition-all duration-300 select-none">
              {lang === 'zh' ? '现在探索' : 'Explore Now'}
            </span>
          </div>
        </div>
      )}

      {/* Decorative clean ambient top right lighting */}
      {viewMode !== 'landing' && (
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />
      )}

      {/* GLOBAL PERSISTENT BRAND LOGO (EXACT POSITION & STYLING AS HOMEPAGE) */}
      <div 
        onClick={() => {
          setViewMode('landing');
          setSelectedProject(null);
        }}
        className="fixed z-50 cursor-pointer select-none transition-colors duration-500 hover:opacity-85 left-10 top-10 lg:left-14 lg:top-14 xl:left-16 xl:top-16"
      >
        <h1 className={`text-4xl sm:text-5xl font-black tracking-tighter font-sans select-none leading-none transition-colors ${
          viewMode === 'space' ? 'text-white' : 'text-slate-950'
        }`}>
          PICIS <span className="font-sans">辟奇</span>
        </h1>
      </div>

      {/* GLOBAL PERSISTENT CONTROLS */}
      <div 
        className="fixed z-50 flex items-center gap-4 right-10 top-10 lg:right-14 lg:top-14 xl:right-16 xl:top-16 select-none"
      >
        <button
          onClick={handleToggleModeFromNavbar}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all border active:scale-95 cursor-pointer flex items-center gap-1.5 ${
            viewMode === 'space' 
              ? 'bg-slate-900/60 hover:bg-slate-900 text-white border-white/20' 
              : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200/80 shadow-xs'
          }`}
        >
          <Layers className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
          <span>{viewMode === 'info' ? t.landing.modeSwitchGame : t.landing.modeSwitch}</span>
        </button>

        <button
          onClick={toggleLanguage}
          className={`text-[16px] sm:text-[17px] font-sans font-bold transition-all cursor-pointer hover:text-indigo-600 active:scale-95 ${
            viewMode === 'space' ? 'text-white hover:text-indigo-300' : 'text-slate-950'
          }`}
        >
          {lang === 'zh' ? '中|Eng' : 'Eng|中'}
        </button>
      </div>

      {/* VIEWPORT CONTROLLER SWITCH */}
      <main className={`${viewMode === 'info' ? 'min-h-screen' : viewMode === 'landing' ? 'h-screen min-h-[580px] max-h-screen overflow-hidden' : 'h-screen max-h-screen overflow-hidden'} relative flex flex-col justify-between`}>

        <AnimatePresence mode="wait">
          
          {/* LANDING PAGE VIEW */}
          {viewMode === 'landing' && (
            <motion.div
              key="landing-scene"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 w-full h-full min-h-[580px] max-h-screen overflow-hidden flex flex-col justify-center relative select-none px-10 py-10 lg:px-14 lg:py-14 xl:px-16 xl:py-16"
            >
              {/* CONTEMPORARY BALANCED LAYOUT WRAPPER (PRISTINE AUDITED VIEWPORT CENTERING) */}
              <div className="relative w-full flex-1 flex flex-col lg:flex-row items-center justify-center">

                {/* LEFT COLUMN: BRAND LOGO + AGENCY DESC + QUICK LINKS + METRICS */}
                <div className="w-full lg:absolute lg:left-0 lg:top-0 lg:bottom-0 lg:w-[32%] xl:w-[28%] flex flex-col justify-between py-0 lg:space-y-0 space-y-12 lg:pr-4 z-20 pointer-events-auto">
                  
                  {/* Brand & Slogan Header */}
                  <div className="space-y-6">
                    {/* Placeholder space for the persistent floating brand title above */}
                    <div className="h-9 sm:h-12" />
                    <p 
                      className="text-[12px] sm:text-[13.5px] text-slate-500 max-w-sm select-none"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: 200,
                        lineHeight: '1.4',
                        letterSpacing: '0.01em'
                      }}
                    >
                      {lang === 'zh' 
                        ? 'PICIS（辟奇）致力于为海外中国留学生群体打造硬核的项目孵化与共创平台，帮助每一位成员将兴趣、洞察与灵感转化为具体且可见的项目成果。'
                        : 'PICIS (Project Incubator for Chinese International Students) is dedicated to building a project incubation and co-creation platform for overseas Chinese students, helping each member transform their interests, insights, and ideas into tangible and visible project outcomes.'
                      }
                    </p>
                  </div>

                  {/* Standard About & Team vertical links with guaranteed minimum gap */}
                  <div className="flex flex-col gap-2.5 text-lg font-black text-slate-950 font-sans tracking-tight pt-6">
                    <button
                      onClick={() => setShowAbout(true)}
                      className="text-left hover:text-indigo-600 hover:translate-x-1.5 transition-all cursor-pointer select-none w-fit"
                    >
                      {t.landing.aboutLink}
                    </button>
                    <button
                      onClick={() => setShowTeam(true)}
                      className="text-left hover:text-indigo-600 hover:translate-x-1.5 transition-all cursor-pointer select-none w-fit"
                    >
                      {t.landing.teamLink}
                    </button>
                  </div>

                  {/* Metrics Vertical Stack Block */}
                  <div className="space-y-4 font-sans pt-6">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl font-black text-slate-950 tracking-tighter min-w-[3.5rem] leading-none select-none">
                        {METRICS.projects}
                      </span>
                      <span className="text-sm sm:text-[17px] font-bold text-slate-600 font-sans select-none tracking-tight">
                        {t.landing.statsUnits.projects}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-5xl font-black text-slate-950 tracking-tighter min-w-[3.5rem] leading-none select-none">
                        {METRICS.members}
                      </span>
                      <span className="text-sm sm:text-[17px] font-bold text-slate-600 font-sans select-none tracking-tight">
                        {t.landing.statsUnits.members}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-5xl font-black text-slate-950 tracking-tighter min-w-[3.5rem] leading-none select-none">
                        {METRICS.prizePool}
                      </span>
                      <span className="text-sm sm:text-[17px] font-bold text-slate-600 font-sans select-none tracking-tight">
                        {t.landing.statsUnits.prizePool}
                      </span>
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          )}

          {/* SPACE GAME MODE EXPLORATION VIEW is handled natively by the unified backdrop SpaceGameView */}

          {/* INFO MODE LIST BROWSING VIEW */}
          {viewMode === 'info' && (
            <motion.div
              key="info-grid-scene"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="flex-1 min-h-[80vh] w-full pt-28 pb-12 lg:pt-36 select-none animate-fade-in"
            >
              <InfoModeView
                projects={projectsList}
                onSelectProject={setSelectedProject}
                lang={lang}
                translations={t}
              />
            </motion.div>
          )}

        </AnimatePresence>

      </main>

      {/* INTERACTIVE DETAIL SIDE DRAWER PANEL */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailDrawer
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            lang={lang}
            translations={t}
            onLike={handleLikeProject}
            onAddComment={handleAddComment}
            isSpaceMode={viewMode === 'space'}
          />
        )}
      </AnimatePresence>

      {/* OVERLAY MODALS */}
      {showAbout && (
        <AboutModal
          onClose={() => setShowAbout(false)}
          lang={lang}
          translations={t}
        />
      )}

      {showTeam && (
        <TeamModal
          onClose={() => setShowTeam(false)}
          lang={lang}
          translations={t}
        />
      )}

      {/* CINEMATIC PAGE LOADER CURTAIN */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="global-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 min-h-screen bg-white z-[100] flex flex-col items-center justify-center select-none"
          >
            <div className="flex flex-col items-center space-y-7 px-6">
              {/* Elegant Display branding text (matches homepage logo exactly in font-weight, size ratios, and fonts) */}
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl font-black tracking-tighter font-sans select-none leading-none text-slate-950"
              >
                PICIS <span className="font-sans">辟奇</span>
              </motion.h1>

              {/* Extremely minimal progress timeline bar aligned beneath */}
              <div className="w-32 sm:w-40 h-[2px] bg-slate-100 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                  className="h-full bg-slate-950 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
