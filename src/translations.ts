export const TEAM_MEMBERS_TRANSLATIONS: Record<string, { bio: string, achievements: string[] }> = {
  'Jerry F': {
    bio: 'Focuses on platform experience design and user journey mapping. Combining exquisite design aesthetics with entrepreneurial passion, striving to craft PICIS into an interactive and visually stunning digital universe.',
    achievements: [
      'LaunchX Summer \'22 Alum',
      'Cohorts Best Designer & Top Pitch Winner',
      'Salix Apicis Student Association Co-Founder, President'
    ]
  },
  'Sam L': {
    bio: 'Tech enthusiast. Specializes in complex interactive logic and front-end performance scaling. Responsible for the 3D cosmic exploration map, physical simulations, and low-latency rendering engine of PICIS.',
    achievements: [
      'Georgia Tech Create-X Startup Accelerator \'25 Participant',
      'Commonogy AI - Founder & Primary Architect',
      'Full-stack Software Engineer & Interactive Game Developer'
    ]
  },
  'Yoyo Z': {
    bio: 'Proficient in business modeling and multi-channel user growth strategies. Leading the commercial expansion and global strategic roadmaps for the PICIS ecosystem.',
    achievements: [
      'Y Combinator AI Startup School \'25 Alum',
      'YZ Academy Founder & CEO',
      'ChatSync AI Co-Founder & CEO'
    ]
  },
  'Wilburt Z': {
    bio: 'Digital artist merging sensory experiences with human-computer interactions. Directs the platform branding, custom stellar planet textures, and overall spatial aesthetic.',
    achievements: [
      'Visible Sound Silent Poetry Art Philanthropy Co-Founder',
      'False Face 3D Art Studio Co-Founder & 3D Visual Artist',
      'Pioneer in digital creative exhibitions'
    ]
  },
  'Albert Y': {
    bio: 'Specializes in quantitative business analysis and regulatory compliance strategies. Oversees financial metrics, the peer-matching disclaimer framework, and future funding simulations.',
    achievements: [
      'National Economics Challenge (NEC) National Team Silver',
      'Diamond Challenge Business Entrepreneurship National Semi-Finalist',
      'Beijing Cloud Intelligent Technology Co., Ltd. Co-Founder'
    ]
  }
};

export const PROJECTS_ENGLISH_TRANSLATIONS: Record<string, {
  description: string;
  updates: string[];
  comments: { author: string; text: string }[];
}> = {
  'visible-sound': {
    description: 'Transforming acoustic soundwaves into tangible, visible 3D-printed sculptures using advanced optical projection and physical vibration models. Over the past years, multiple offline exhibitions have raised tens of thousands of dollars to support hearing-impaired children.',
    updates: [
      'Hosted the 4th offline light-and-sound interactive art show in Beijing.',
      'Released the interactive web toolkit v1.0.'
    ],
    comments: [
      { author: 'Alex_Explorer', text: 'This concept is incredible! The 3D visualization of sounds has magnificent artistic power.' },
      { author: 'UChi_Sisi', text: 'I saw seniors sharing this. Can non-art majors join the team?' }
    ]
  },
  'commonogy-ai': {
    description: 'An AI-powered academic co-creation assistant. It leverages LLMs to cluster multi-school literature and detect overlapping research ideas, promoting collaborative cross-institutional research and reducing redundant work.',
    updates: [
      'Partnered with 3 leading international high schools for academic pilot programs.',
      'Semantic matching API successfully deployed, supporting batch PDF parsing.'
    ],
    comments: [
      { author: 'Albert_UPenn', text: 'Truly solves a pain point! Many high schoolers waste time writing the same duplicate papers.' }
    ]
  },
  'chatsync-ai': {
    description: 'A low-latency on-device voice translation tool tailored for younger international students. It translates not only general academic vocabulary but also contemporary teenage slang and school-specific slangs.',
    updates: [
      'Optimized the on-device whisper translation delay to under 120ms.',
      'Completed closed beta-testing with 15 boarding school cohorts.'
    ],
    comments: [
      { author: 'Lucy_Boston', text: 'If this existed when I first arrived, I wouldn\'t have been so socially anxious!' }
    ]
  },
  'salix-apicis': {
    description: 'A student-led academic and leadership society. It aims to build a mentorship network pairing experienced college students with ambitious high schoolers to guide independent study and non-profit projects.',
    updates: [
      'Recruited 45 outstanding mentors from Columbia, Penn, and Chicago.',
      'Launched the peer-to-peer mentoring system.'
    ],
    comments: [
      { author: 'Emma_Webb', text: 'The mentor from Columbia I matched with is so helpful, highly recommend.' }
    ]
  },
  'beijing-cloud': {
    description: 'An eco-friendly geek project that matches idle GPU/CPU server power across small server rooms to offer cost-effective, high-throughput model training and compute clusters for amateur programmers.',
    updates: [
      'Integrated node-monitoring dashboards, stabilizing cluster uptime at 99.2%.',
      'Partnered with high-school gaming clubs to reuse idle computing hosts.'
    ],
    comments: [
      { author: 'Tech_Guy', text: 'Perfect usage of idle power nodes. Extremely hardcore.' }
    ]
  },
  'ysic': {
    description: 'A premier green finance challenge where high schoolers pitch investment portfolios to address modern environmental goals. Provides structured curriculums and mentoring sessions from VC experts.',
    updates: [
      'Successfully hosted the final rounds with over 150 project teams.',
      'Published the 2026 Sustainable Asset Management Whitepaper.'
    ],
    comments: [
      { author: 'Eco_Warrior', text: 'Merging climate issues with investment strategies is definitely the trend right now!' }
    ]
  },
  'gagro': {
    description: 'A decentralized peer platform of resources and datasets on student academic projects. It offers direct sharing of books, tutorials, and project repositories to foster collaborative learning.',
    updates: [
      'Uploaded over 300 scanned textbooks and past exam guides.',
      'Integrated dynamic peer rating and tag systems.'
    ],
    comments: [
      { author: 'Mark_G', text: 'Let us build a self-governed network without middlemen.' }
    ]
  },
  'andover-launchpad': {
    description: 'A highly prestigious boarding-school entrepreneurial space providing physical prototyping resources, funding channels, and peer incubator workshops for student tech builders.',
    updates: [
      'Secured a joint funding pool of $10,000 for student-led hardware initiatives.',
      'Completed the annual Spring Pitch Tournament event.'
    ],
    comments: [
      { author: 'Panda_Ch', text: 'A legendary student startup initiative. Outstanding execution!' }
    ]
  },
  'ecoecho': {
    description: 'An acoustic ecology mirror recording wildlife soundscapes. Using audio sensors and machine learning classifiers to document bird species and weather deviations in urban wild spaces.',
    updates: [
      'Deployed 15 low-power solar recorder boxes in the forest reserves.',
      'Achieved 91.5% classification accuracy for local songbirds.'
    ],
    comments: [
      { author: 'Forest_Keeper', text: 'Deeply touching. Preserving nature with soundscapes is very inspiring.' }
    ]
  },
  'auramind': {
    description: 'A peer-support mental wellness hub designed to address homesickness and academic stress among younger international students. Offering anonymous journals and online counseling resources.',
    updates: [
      'Delivered over 120 sessions of anonymous text peer-support.',
      'Launched the "Midterm Survival Check-in" guided meditation.'
    ],
    comments: [
      { author: 'Anxious_Bean', text: 'Perfect for midterm prep weeks when burnout gets real.' }
    ]
  },
  'bilingual-bridge': {
    description: 'An interactive D3.js visualization connecting classical Chinese philosophies (Taoism, Confucianism) with corresponding Western ethics. It uses conceptual graph matches to bridge cultural gaps.',
    updates: [
      'Rendered more than 2,000 semantic semantic links between classics.',
      'Showcased the philosophy web app at a US secondary humanities forum.'
    ],
    comments: [
      { author: 'Sinology_Fan', text: 'Seeing the links between Eastern and Western thought mapped in real-time is stunning!' }
    ]
  },
  'veritas-research': {
    description: 'A totally student-governed, blind-reviewed academic commentary forum. It provides high school researchers with rigorous feedback and publishes quarterly research abstracts.',
    updates: [
      'Inducted 20 new peer editors from ivy-league undergraduate programs.',
      'Published Volume 4 Issue 1 with focus papers in socio-economics.'
    ],
    comments: [
      { author: 'Markus_UChi', text: 'Authentic peer reviews without high payment fees. Fully supported!' }
    ]
  },
  'codeher': {
    description: 'A tech philanthropy initiative that holds non-profit weekend Python and Scratch boot camps for young girls in local low-income communities, bridging the gender gap in tech.',
    updates: [
      'Taught programming basics to over 80 elementary school girls.',
      'Recruited 15 volunteer high-school instructors.'
    ],
    comments: [
      { author: 'Ada_Lover', text: 'Amazing, opening a window of future digital possibilities for these kids!' }
    ]
  },
  'zenflow': {
    description: 'A remarkably minimalist mindfulness tool focusing on serene UI design. Features dynamic breathing paces and sound generation to soothe the mind during intense study intervals.',
    updates: [
      'Featured as an editor\'s choice in student-led productivity forums.',
      'Wrote and compiled the ambient sound synthesizer algorithms.'
    ],
    comments: [
      { author: 'ZenMaker', text: 'Exactly the neat and clean meditation tool I was looking for.' }
    ]
  },
  'neuroglow': {
    description: 'A tactile, non-screen hardware gadget running biofeedback loops to train ADHD and distracted teens to stay present using gentle light patterns and sound guides.',
    updates: [
      'Completed the 2nd physical circuit prototype with custom casings.',
      'Validated spatial focus tests with dozens of high school volunteers.'
    ],
    comments: [
      { author: 'Neuro_Scientist', text: 'Using physical tactile inputs instead of flashing screens is really key.' }
    ]
  },
  'chinatown-heritage': {
    description: 'A digital oral history archive recording the lives and memories of generations of elders in Chinatown. Preserving stories of immigration, struggles, and community identity.',
    updates: [
      'Recorded and cataloged 30 audio oral history interviews with elders.',
      'Partnered with local historical societies to digitize vintage photos.'
    ],
    comments: [
      { author: 'GoldMountain_Kid', text: 'Chinatowns are aging and gentrifying. We must preserve these stories immediately.' }
    ]
  },
  'artisan-guild': {
    description: 'A creative workshop redefining traditional Chinese lacquer and origami art through modern industrial design. Merging cultural heritages into modern tech accessories and workspace sets.',
    updates: [
      'Presented the lacquer-ware cases at a prestigious cultural gallery.',
      'Launched an online training portal on traditional craft techniques.'
    ],
    comments: [
      { author: 'Art_Is_Wild', text: 'Traditional lacquer is a beautiful legacy, amazing reinterpretations by youth!' }
    ]
  },
  'foodprint': {
    description: 'An AI-powered system designed for school canteens to capture and evaluate edible plate waste, generating carbon tax feedback and optimizing menus to minimize ecological footprints.',
    updates: [
      'Successfully automated plate detection in 3 large high schools.',
      'Analyzed an average of 40% waste reduction in pilot tests.'
    ],
    comments: [
      { author: 'Tech_Donor', text: 'Food wasting is a massive hidden emitter. Brilliant concept.' }
    ]
  },
  'docuverse': {
    description: 'An open archive of student theater screenplays, staging plans, lighting configurations, and digital assets. It ensures theater accomplishments can be inherited by next-gen clubs.',
    updates: [
      'Uploaded 12 full performance archives with multi-angle footage.',
      'Streamlined digital blueprint permissions for high-school drama directors.'
    ],
    comments: [
      { author: 'Drama_Pr', text: 'Total life-saver for theater students! Excellent concept.' }
    ]
  },
  'tutorup': {
    description: 'A remote English tutoring program for children of Chinese migrant workers. Providing structured conversational lessons and custom cultural curriculum to spark curiosity about the wider world.',
    updates: [
      'Empowered over 150 target students across remote provinces.',
      'Conducted a volunteer teacher seminar with experienced tutors.'
    ],
    comments: [
      { author: 'Sponsor_C', text: 'Inspiring and effective. Giving kids not only language, but a broader worldview.' }
    ]
  }
};

export const PROJECTS_CHINESE_TRANSLATIONS: Record<string, { mission: string; vision: string }> = {
  'visible-sound': {
    mission: '通过实验性的三维艺术形式建立声波与视觉空间之间的桥梁，帮助听障人士用视觉探索音乐。',
    vision: '为全球特教学校打造触觉、视觉一体化的声学互动艺术馆。'
  },
  'commonogy-ai': {
    mission: '实现学术研究计划的无缝语义聚类，减少重复科研造轮子的耗竭。',
    vision: '构建面向全球青年学者最硬核的 AI 学术星网目录。'
  },
  'chatsync-ai': {
    mission: '利用轻量级的端侧语音翻译模型，打破新一代留学生的语言与社交文化壁垒。',
    vision: '开发基于流式微型语音识别与实时解释的无缝交互界面。'
  },
  'salix-apicis': {
    mission: '搭建顶尖高中毕业生与初探门径新生之间的垂直同辈导师网络。',
    vision: '为海外青年领袖搭建一个可自发公转的可持续导师治理社群。'
  },
  'beijing-cloud': {
    mission: '为标准中等学校的教研实验室提供低能耗、本地化的 AI 显卡算力调度平台。',
    vision: '让高阶算力普惠，成为全球学生编写高算力任务的温床。'
  },
  'ysic': {
    mission: '启发中学生通过严谨的金融投资组合和资本策划，回应现实世界的 ESG 减碳指标。',
    vision: '打造由青年独立组织、面向未来的可持续低碳商业路演平台。'
  },
  'gagro': {
    mission: '通过去中心化的同辈共享，将遍布各校的学生自研项目和资料库进行即时互连。',
    vision: '搭建一个去碎片化的、中立且纯粹的学生学术资源公开空间。'
  },
  'andover-launchpad': {
    mission: '为青年极客、技术制造者举办跨校路演黑客松，并提供实体样机开发和早期资金支持。',
    vision: '打造一个专为中学生定制的、自循环的“微型 YC”科创成长圈。'
  },
  'ecoecho': {
    mission: '利用边缘低能耗生物声学记录盒，动态守护原始森林，协助防治非法砍伐。',
    vision: '为低密度自然保护区提供全天候的地球自然生命听觉监测星网。'
  },
  'auramind': {
    mission: '构建零偏见、零门槛的留学生同辈心理咨询与互助情绪树洞模块。',
    vision: '成为跨越时区、全天候温暖守护海外学子的数字解压自救同盟。'
  },
  'bilingual-bridge': {
    mission: '将深奥的中国古代哲学典籍转化为多维交互的现代思维语义图谱，用图形叙事进行文化出海。',
    vision: '为传统哲学思考打造具有高度现代设计美感的数字化认知之门。'
  },
  'veritas-research': {
    mission: '赋能青年独立研究者进行双盲盲审，编撰高水平、无中介包办的学术评论季刊。',
    vision: '为自发的青年思想家打造一个去资本化、硬核去中心化的学术先锋评议大厅。'
  },
  'codeher': {
    mission: '面向低收入地区学龄女孩，通过 Scratch 和 Python 提供零门槛的基础编程启蒙，弥合科技性别鸿沟。',
    vision: '建立将城市科创师资下沉到乡村校园的、高强度的女性数字化同伴导师网。'
  },
  'zenflow': {
    mission: '通过纯净的声音疗愈和即时呼吸校准微件，为高强度备考学生提供每日瞬息解压心流仪式。',
    vision: '让一款极简、高美学的呼吸舒缓组件安静地驻留在每一位极客的桌面中。'
  },
  'neuroglow': {
    mission: '通过高交互的实体微操控玩具，给予温和多动症 (ADHD) 青少年以光影和声效的交互专注回执。',
    vision: '探寻将实体感触、精密电子与感觉障碍复健训练完美结合的硬核物理外设。'
  },
  'chinatown-heritage': {
    mission: '广泛采访并保留早年移民、餐厅劳工等唐人街老一辈口述实录，抢救性地复原百年华人记忆景观。',
    vision: '建立可交互、拒绝对抗性消亡的流散华人集体数字化历史记忆博物馆。'
  },
  'artisan-guild': {
    mission: '促进传统大漆工艺老艺人同 3D 造型设计交互的碰撞，创造符合千禧一代美学的实体非遗潮玩。',
    vision: '通过现代商业销售与文创裂变，让传统手艺人重新拥有稳定、体面的传承生路。'
  },
  'foodprint': {
    mission: '通过盘底自动图像识别与重力标定设备评估剩菜率，减少校园食堂等高排放设施温室气体消耗。',
    vision: '构建一个部署成本低廉、面向绿色低碳生活的自优化校园智能配餐系统。'
  },
  'docuverse': {
    mission: '建立青年戏剧原创台词本、排演舞美草图及剧照录像等非商业戏剧资料的共享开放档案馆。',
    vision: '搭建一个让校园原创戏剧薪火相传、不因毕业而失传的数字化戏剧舞台后台。'
  },
  'tutorup': {
    mission: '匹配顶尖留学生对口长期帮扶工业园区随迁随读候鸟子女，提供双语拓展及地理常识启发课程。',
    vision: '在偏远与发达之间，建立一条去中介、高情感连接的同辈数字启蒙桥梁。'
  },
  'nebula-cook': {
    mission: '融汇食品科技、低温分子料理和全景空间概念，探索感官与宇宙美学的美食边界。',
    vision: '打造一个具有科幻美感、游历全球的宇宙感官美食大厅。'
  },
  'solis-energy': {
    mission: '利用三浦折纸（Miura-ori）数理折叠模型，设计出能够在灾区瞬间撑起的微型、高便携式太阳能板。',
    vision: '在自然灾害与救援前线，提供 10 秒开启的高效绿色应急自净化能源。'
  },
  'quant-mind': {
    mission: '将晦涩抽象的量子物理波动方程与隧穿效应，转化成高触觉的可交互 Web 物理游戏积木沙盒。',
    vision: '让抽象艰深的现代物理规律成为中学生触手可及、可任意拼装的几何乐园。'
  },
  'echo-heritage': {
    mission: '通过高保真的地理众包录音系统，记录挽救濒临流失的中国地方方言，编织方言活态声音图谱。',
    vision: '建设一个点对点、由大众协同捍卫的中国母语地方声学非物质文化遗产库。'
  },
  'aqua-drop': {
    mission: '利用多层极低预算的可降解滤料与纳米银成分，研制针对贫困水源的极轻量拼装过滤吸管。',
    vision: '让全球 100 个缺乏纯净饮用水源的偏远村落瞬间喝上无菌清泉。'
  },
  'bio-silk': {
    mission: '结合PLA与海洋级天然蚕丝蛋白提取物，制成 45 天内可在海水中自然降解且无毒的环保外卖包装。',
    vision: '稳步取代上千万个造成不可降解白色微塑料梦魇的传统快餐塑料餐盒。'
  },
  'space-tack': {
    mission: '共享世界各地星空爱好者的天体追踪底片与星移轨道归档，创建中学生天体档案协同星图。',
    vision: '打造一座属于业余深空探索青年的星际漫游走廊。'
  },
  'luna-study': {
    mission: '为全球高中学者提供跨校际的线上学术研讨席位和朋辈评议机制，打破独立科研的资源孤立。',
    vision: '建设一所全天候在线、为所有独行思考者敞开的数字化青年学术图书馆。'
  },
  'terra-farm': {
    mission: '将生态保护小循环和微生物质培土剂引入落后流域，实现黄土旱地抗沙化和良田活化保墒。',
    vision: '运用绿色微生态，在伤痕累累的失水台地重筑高储水自循生物网。'
  },
  'zen-code': {
    mission: '通过自响应电磁实体积木拼合，为低算力偏远地区的孩童实现免对屏幕的实体编程自闭环启蒙。',
    vision: '无需屏幕与高昂硬件，让最质朴、具有触感的木质积木传递最底层的逻辑回路思维。'
  },
  'cyber-muse': {
    mission: '利用高保真频谱语音合成框架，将传世昆曲珍贵流派唱腔数字化重构并永久珍蓄。',
    vision: '为 Alpha 世代的青年，重新唤醒传统古曲艺术的声学基因。'
  },
  'pulse-card': {
    mission: '基于微流控和触觉可变凸起原理，制成极安全、支持高频按需刷新的触觉盲文交互字符介质。',
    vision: '打破传统昂贵厚重多功能读盲器垄断，普及手掌式液体电磁阅读器。'
  },
  'stellar-shelf': {
    mission: '建立同辈图书跨省周转网络，将大城市闲置的教研图书定向发往落后山区的小书屋。',
    vision: '构建包含 10 万册以上的同辈学术交流网络与爱心知识长征廊道。'
  },
  'eco-thread': {
    mission: '在林木伐采区收集由于雨雪堆积脱落的废弃松针，转化织成高强生态纤维面料，用于年轻背包设计。',
    vision: '跳过耗水量惊人的传统棉麻，实现纯天然无公害零水开支的青年户外服配。'
  },
  'himalaya-archive': {
    mission: '采用多光谱三维摄影与超精微扫描技术，保护我国传统涉藏区域编织纹理和手抄经卷图腾。',
    vision: '建立永久屹立于浩瀚云端的藏式游牧经典编织纹饰数字化经轮。'
  },
  'sonic-canvas': {
    mission: '将来自工业或城市环境的瞬时复杂声浪，即时翻译为高画质的后现代拼贴 generative 艺术幕。',
    vision: '将城市噪音污染用算法转化为美轮美奂的流动数码数字画卷。'
  },
  'future-bound': {
    mission: '引入碳普惠数值模型，让青少年日常步数和食堂无剩菜行为，一秒折算为校园碳积分排行挑战。',
    vision: '通过趣味排行，把减碳零排放理念深植于数万名中学生的日常举手投足之中。'
  },
  'meta-globe': {
    mission: '在 WebGL canvas 上精细重绘各个世界主要地缘纪元的变迁轨迹，构建高交互可拖拽的三维时空图馆。',
    vision: '为所有高中历史组师生提供三维、可追溯历史地平线的时空显像地球仪。'
  },
  'alpha-health': {
    mission: '利用高精密织物拉力传感器及超轻便后置触觉马达，低成本无感矫正中学生驼背等重度不良习惯。',
    vision: '为面临升学负重的久坐青少年打造隐形且安全的非侵入式“骨质背部守护卫士”。'
  },
  'aurora-network': {
    mission: '联动极佳跨界企业实习名额，为即将迈向大学的学生搭建完全可信任的一对如同伴般见见试实践指南。',
    vision: '彻底扫除名门门槛，为普通学子开启一条公平、透明的职业星河灯塔网络。'
  }
};

export function translateSchool(schoolStr: string, lang: 'zh' | 'en'): string {
  if (lang !== 'zh') return schoolStr;
  const s = schoolStr.trim();
  const map: Record<string, string> = {
    'Georgia Tech': '佐治亚理工学院',
    'UChicago': '芝加哥大学',
    'Emory University': '埃默里大学',
    'Emory': '埃默里大学',
    'UPenn': '宾夕法尼亚大学',
    'Columbia': '哥伦比亚大学',
    'Columbia University': '哥伦比亚大学',
    'Andover': '菲利普斯安多弗中学',
    'Groton School': '格罗顿学校',
    'Hotchkiss School': '霍奇科斯学校',
    'Stanford': '斯坦福大学',
    'NYU': '纽约大学',
    'Middlebury College': '明德学院',
    'Milton Academy': '米尔顿中学',
    'Smith College': '史密斯学院',
    'Mercersburg Academy': '默瑟斯堡中学',
    'Lawrenceville School': '劳伦斯威尔中学',
    'Wellesley College': '卫斯理学院',
    'UC Berkeley': '加州大学伯克利分校',
    'Rhode Island School of Design': '罗德岛设计学院',
    'RISD': '罗德岛设计学院',
    'Phillips Exeter': '菲利普斯埃克塞特中学',
    'Tsinghua': '清华大学',
    'MIT': '麻省理工学院',
    'Cornell': '康奈尔大学'
  };

  for (const key of Object.keys(map)) {
    if (s.includes(key)) {
      const yearMatch = s.match(/'\d{2}/);
      if (yearMatch) {
        return `${map[key]} ${yearMatch[0]}`;
      }
      return map[key];
    }
  }
  return schoolStr;
}

export function translateRole(roleStr: string, lang: 'zh' | 'en'): string {
  if (lang !== 'zh') return roleStr;
  const r = roleStr.trim();
  const map: Record<string, string> = {
    '3D Designer (Blender/C4D)': '3D 设计师 (Blender/C4D)',
    'Outreach & Non-profit relations': '外联与非营利机构关系管理',
    'NLP Research Intern': '自然语言处理 (NLP) 研究实习生',
    'Frontend Engineer (React)': '前端工程师 (React)',
    'React Native / Swift Developer': 'React Native / Swift 开发者',
    'Campus Brand Ambassador (High school)': '校园品牌大使 (高中)',
    'Chapter Coordinator (West coast)': '分会协调员 (西海岸)',
    'Social Media Content Editor': '社交媒体内容编辑',
    'Distributed Systems Dev': '分布式系统研发工程师',
    'Business Development & Sponsors Lead': '业务拓展与赞助负责人',
    'Graphic / Layout Designer': '平面/排版设计师',
    'Operations & Event Coordinator': '运营与活动协调员',
    'Web developer': '网页开发工程师',
    'Event Manager': '活动经理',
    'CS / Technical Advisor': '计算机科学/技术顾问',
    'Machine Learning (Audio Focus)': '机器学习工程师 (音频方向)',
    'Eco-NGO Liaison Officer': '环保非政府组织联络官',
    'Peer Counselor (Psych major preferable)': '同辈心理咨询师 (心理学专业优先)',
    'UI/UX Designer': 'UI/UX 设计师',
    'Bilingual Editor (Classical Chinese focus)': '双语编辑 (国学/古汉语方向)',
    'React Developer with D3 experience': 'D3.js 交互可视化 React 开发者',
    'Associate Editors (Economics/History/PoliSci)': '副主编 (经济/历史/政治学方向)',
    'Podcast Host & Broadcaster': '播客主持人与主播',
    'Bilingual Course Instructor': '双语课程讲师',
    'School Partnership Outreach Coordinator': '校园合作与外联协调员',
    'Wasm / Electron App Specialist': 'Wasm / Electron 应用专家',
    'Audio designer for calm soundscapes': '空间音效/声景设计师',
    'Embedded Systems Developer (Arduino/ESP32)': '嵌入式系统开发 (Arduino/ESP32)',
    'Clinical Child Psychologist Intern': '临床儿童心理学实习生',
    'Oral History Recorder / Interviewer (Cantonese preferable)': '口述历史记录/采访员 (粤语优先)',
    'Video Editor & Graphic Archiver': '视频编辑与图形档案工程',
    'Product Marketing & Global Logistics lead': '产品营销与全球物流负责人',
    'Industrial Design (Rhino/Fusion360)': '工业设计师 (Rhino/Fusion360)',
    'Computer Vision / Edge Analytics Specialist': '计算机视觉与边缘计算专家',
    'Website Editor & Script Formatting helper': '网站编辑与剧作排版助手',
    'Global Cohorts Operations Core': '全球社群运营核心',
    'Local Partner NGO Community Builder': '地方合作 NGO 社区建设者',
    'Food Chemist': '食品化学家',
    'Visual Designer': '视觉设计师',
    'Aerospace Engineering Intern': '航空航天工程实习生',
    'Unity / WebGL Developer': 'Unity / WebGL 研发工程师',
    'Community Operator': '社区运营官',
    'Field Test Volunteer': '野外/实地测试志愿者',
    'Polymer Scientist': '高分子聚合物科学家',
    'D3 Developer': 'D3 可视化研发工程师',
    'Astro-Liaison Coordinator': '天文外联协调官',
    'Academic Writing Coach': '学术写作指导教练',
    'Agricultural Tech Advisor': '农业技术顾问',
    'Embedded ESP32 Firmware Engineer': '嵌入式 ESP32 固件工程师',
    'Audio ML Researcher': '音频机器学习研究员',
    'Miniature Valve Designer': '微型阀门设计师',
    'Logistics Coordinator': '物流运作协调人',
    'Material Scientist': '材料生命周期科学家',
    '3D Modeler Expert': '3D 建模专家',
    'WebGL / Processing Developer': 'WebGL / Processing 互动开发',
    'Platform Developer': '平台功能研发工程师',
    'ThreeJS Developer Specialized in Map Projections': 'ThreeJS 地图投影研发开发',
    'HW Engineer specialized in flexible circuits': '柔性电路硬件研发工程师',
    'Field Mentors Coordinator': '行业实践导师协调官',
    // Member roles fallback list
    'Founder & Visual Artist': '创始人 & 视觉艺术家',
    'Curator': '策展人',
    'Founder': '创始人',
    'Backend Dev': '后端开发工程师',
    'Co-Founder & CEO': '联合创始人 & CEO',
    'AI Specialist': 'AI 专家',
    'Co-Founder & President': '联合创始人 & 主席',
    'Co-Founder': '联合创始人',
    'Co-Founder & CFO': '联合创始人 & CFO',
    'Organizer': '组织者',
    'President': '会长',
    'Lead Director': '主导负责人',
    'Acoustic Researcher': '声学研究员',
    'Psychology Lead': '心理学科创负责人',
    'Product Manager': '产品经理',
    'Editorial Chief': '主编',
    'Editor-in-Chief': '总编辑',
    'Operations': '运营负责人',
    'Founder & Leader': '创始人 & 领队',
    'Syllabus Developer': '课程大纲研发负责人',
    'Interaction Lead': '交互设计负责人',
    'Hardware & Circuit Lead': '硬件与电路负责人',
    'Child dev advisor': '青少年成长顾问',
    'History Lead': '历史特攻研究员',
    'Web Archivist': '网页归档负责人',
    'Artistic Chief': '艺术总监',
    'Sponsorship Lead': '赞助拓展负责人',
    'Algorithm Engineer': '算法工程师',
    'Curator & Dramaturgical': '策展与戏剧构作负责人',
    'Teacher lead': '教学及主干导师开发人',
    'Chief Gastronomist': '首席美食物理学家',
    'Mechanical Lead': '机械工程总工程师',
    'Physics Lead': '物理研究带头人',
    'Linguistics Lead': '语言学研究负责人',
    'Bio-Chem Engineer': '生物化学工程师',
    'Astrophotog': '深空天体天文摄影师',
    'Soil Scientist': '土壤生态学家',
    'Hardware Architect': '硬件总架构师',
    'Artistic Director': '艺术总监',
    'Industrial Lead': '工业设计负责人',
    'Volunteering Lead': '志愿服务负责人',
    'Fashion Designer': '时装设计师',
    'Core Archivist': '核心文献档案官',
    'Carbon Lead': '低排放低碳科技负责人',
    'Map Architect': '高级地图架构师',
    'Wearable Dev': '可穿戴计算研发工程师'
  };

  if (map[r]) return map[r];

  for (const key of Object.keys(map)) {
    if (r.toLowerCase().includes(key.toLowerCase())) {
      return map[key];
    }
  }
  return roleStr;
}

