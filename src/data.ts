import { Project, TeamMember } from './types';

export const METRICS = {
  projects: 40,
  members: 180,
  prizePool: '$3,500'
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Jerry F',
    role: 'Platform Building',
    university: 'Columbia University \'28',
    tagline: 'Cohort Best Designer | Team Top Pitch',
    achievements: [
      'LaunchX Summer \'22',
      'Cohorts Best Designer & Top Pitch Winner',
      'Salix Apicis Student Association Co-Founder, President'
    ],
    bio: '专注于平台体验设计与用户旅程规划，结合卓越的设计美学与创业热情，将 PICIS 打造为高颜值、强交互的精美数字空间。'
  },
  {
    name: 'Sam L',
    role: 'Tech Realization',
    university: 'Emory University \'27',
    tagline: 'Create-X Startup Accelerator \'25 | Commonogy AI Founder',
    achievements: [
      'Georgia Tech Create-X Startup Accelerator \'25 Participant',
      'Commonogy AI - Founder & Primary Architect',
      '全栈软件工程师 & 交互游戏开发者'
    ],
    bio: '极客，擅长复杂交互逻辑实现与前端性能黑科技。负责 PICIS 的 3D 太空探索模块、物理模拟与低延迟渲染引擎开发。'
  },
  {
    name: 'Yoyo Z',
    role: 'Commercialization',
    university: 'University of Chicago \'28',
    tagline: 'YC AI Startup School \'25 | YZ Academy Founder & CEO',
    achievements: [
      'Y Combinator AI Startup School \'25',
      'YZ Academy Founder & CEO',
      'ChatSync AI Co-Founder & CEO'
    ],
    bio: '精通商业模型构建与渠道增长。领导 PICIS 整体商业化战略（Stage I / II）与小红书全域裂变推广。'
  },
  {
    name: 'Wilburt Z',
    role: 'Creative Marketing',
    university: 'Georgia Institute of Technology \'28',
    tagline: 'Visible Sound Project Fo Founder | False Face 3D Art Studio Co-Founder',
    achievements: [
      'Visible Sound Silent Poetry Art Philanthropy Project Fo Founder',
      'False Face 3D Art Studio Co-Founder & 3D Visual Artist',
      '留学生数字创意先锋'
    ],
    bio: '数字艺术家，融合美学思考与多维交互，负责平台品牌视觉、太空星球渲染纹理与宣传物料视觉把控。'
  },
  {
    name: 'Albert Y',
    role: 'Business',
    university: 'University of Pennsylvania \'29',
    tagline: 'NEC National Team Silver | Diamond Challenge National Semi-Finalist',
    achievements: [
      'National Economics Challenge (NEC) National Team Silver / Individual Gold',
      'Diamond Challenge Business Entrepreneurship National Semi-Finalist',
      'Beijing Cloud Intelligent Technology Co., Ltd. Co-Founder, Former CFO'
    ],
    bio: '擅长商业分析与风险合规。负责 PICIS 财务测算模型、项目质量责任（Disclaimer）机制起草以及未来 Seed Round 融资推演。'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'visible-sound',
    name: 'Visible Sound Silent Poetry Art',
    chineseName: '无声诗歌声学视觉化艺术',
    logoColor: '#6366f1',
    themeColor: 'from-indigo-500 to-purple-600',
    type: 'Philanthropy',
    status: 'operating',
    founded: '2022',
    activeMembersCount: 15,
    members: [
      { name: 'Wilburt Z', school: 'Georgia Tech \'28', role: 'Founder & Visual Artist' },
      { name: 'Emily C', school: 'UChicago \'28', role: 'Curator' }
    ],
    mission: 'To bridge acoustic soundwaves and visual spaces through experimental 3D arts, enabling the hearing-impaired to explore music through sight.',
    vision: 'A universal tactile-visual acoustic archive for schools globally.',
    description: '通过对声音频率的采集，借助 3D 打印与光影反射引擎，将数字声波雕塑转化为“看得见”的立体艺术品。本项目结合艺术公益，通过多次线下艺术联展为听障儿童康复筹集善款数万美元。',
    hiringNeeds: [
      { role: '3D Designer (Blender/C4D)', count: 2 },
      { role: 'Outreach & Non-profit relations', count: 1 }
    ],
    updates: [
      { content: '在北京知名艺术园区举办第4次线下光影联动展。', date: '2026-04' },
      { content: '无声诗歌 Web 互动套件 1.0 版发布上线。', date: '2026-02' }
    ],
    likes: 42,
    comments: [
      { id: '1', author: 'Alex_留子', text: '这个概念太酷了！对声波的 3D 可视化真的很有艺术张力。', timestamp: '2026-05-12' },
      { id: '2', author: 'UChi_Sisi', text: '之前看学长在朋友圈发过，请问非艺术专业的学生可以加入合作吗？', timestamp: '2026-05-15' }
    ],
    x: -35,
    y: 12,
    z: -10,
    radius: 12
  },
  {
    id: 'commonogy-ai',
    name: 'Commonogy AI',
    chineseName: 'Commonogy 智能学术共创助手',
    logoColor: '#14b8a6',
    themeColor: 'from-teal-400 to-emerald-500',
    type: 'Technology',
    status: 'recruiting',
    founded: '2023',
    activeMembersCount: 8,
    members: [
      { name: 'Sam L', school: 'Emory University \'27', role: 'Founder' },
      { name: 'Ryan K', school: 'UPenn \'28', role: 'Backend Dev' }
    ],
    mission: 'Seamless semantic clustering of research thesis proposals to reduce redundant literature wheels.',
    vision: 'To build the go-to AI catalog for youth independent scholars.',
    description: 'Commonogy AI 利用大语言模型进行科研论文的语义匹配与团队协同，让分布在全美各校的留学生研究课题能一键检测“研究重叠率”，促进多校联合实验与数据共创。',
    hiringNeeds: [
      { role: 'NLP Research Intern', count: 1 },
      { role: 'Frontend Engineer (React)', count: 2 }
    ],
    updates: [
      { content: '与3所顶尖国际部成立学术联动伙伴关系。', date: '2026-05' },
      { content: '语义匹配 API 成功跑通，支持数百款 PDF 在线聚类。', date: '2026-03' }
    ],
    likes: 35,
    comments: [
      { id: '1', author: 'Albert_UPenn', text: '真的切中痛点，大量留学生写论文都在重复造轮子。', timestamp: '2026-05-20' }
    ],
    x: 40,
    y: -8,
    z: 20,
    radius: 9
  },
  {
    id: 'chatsync-ai',
    name: 'ChatSync AI',
    chineseName: 'ChatSync 留声机实时翻译',
    logoColor: '#3b82f6',
    themeColor: 'from-blue-500 to-sky-600',
    type: 'Technology',
    status: 'operating',
    founded: '2024',
    activeMembersCount: 12,
    members: [
      { name: 'Yoyo Z', school: 'UChicago \'28', role: 'Co-Founder & CEO' },
      { name: 'Kevin H', school: 'Columbia \'28', role: 'AI Specialist' }
    ],
    mission: 'Breaking speech barriers for newly immigrated international students using lightweight on-device speech models.',
    vision: 'A seamless whisper translation glass interface.',
    description: '一款针对低龄留美（美初/美高）群体的超低延迟端侧语音翻译工具，不仅能翻译词汇，还能解释西方青少年习惯俚语（Slang）和学校特定的口语背景。',
    hiringNeeds: [
      { role: 'React Native / Swift Developer', count: 1 },
      { role: 'Campus Brand Ambassador (High school)', count: 5 }
    ],
    updates: [
      { content: '端侧语音降噪算法成功提速30%，消除对话卡顿。', date: '2026-04' },
      { content: '在10所波士顿/纽约地区美高开展了封闭测试。', date: '2026-02' }
    ],
    likes: 58,
    comments: [
      { id: '1', author: 'Lucy_Boston', text: '刚来美高那会儿如果有这个软件，我绝对不会社恐那么久。求下载方式！', timestamp: '2026-05-22' }
    ],
    x: 10,
    y: 35,
    z: -30,
    radius: 11
  },
  {
    id: 'salix-apicis',
    name: 'Salix Apicis Student Association',
    chineseName: 'Salix Apicis 美高领袖学社',
    logoColor: '#0ea5e9',
    themeColor: 'from-sky-500 to-indigo-600',
    type: 'Culture',
    status: 'operating',
    founded: '2022',
    activeMembersCount: 20,
    members: [
      { name: 'Jerry F', school: 'Columbia \'28', role: 'Co-Founder & President' },
      { name: 'Yoyo Z', school: 'UChicago \'28', role: 'Co-Founder' }
    ],
    mission: 'To construct an elite peer-mentor network linking alumni of top-tier prep schools to newly arrived juniors.',
    vision: 'To build a sustainable 100-member board for high-school leaders.',
    description: '一个立足美国精英私校的校友与新生交流学会，重点推动自主商业实践项目与人文社科调研，打破单一社群壁垒，为优秀学子定制“学长导师对口机制”。',
    hiringNeeds: [
      { role: 'Chapter Coordinator (West coast)', count: 2 },
      { role: 'Social Media Content Editor', count: 1 }
    ],
    updates: [
      { content: '举办年度美高线上圆桌大讲坛，参与学生达150人。', date: '2026-05' },
      { content: '开启暑期导师团大一对一匹配报名程序。', date: '2026-03' }
    ],
    likes: 81,
    comments: [
      { id: '1', author: 'Emma_Webb', text: '匹配到的Columbia学姐人超nice，学社理念支持一下！', timestamp: '2026-05-24' }
    ],
    x: -50,
    y: -25,
    z: -45,
    radius: 14
  },
  {
    id: 'beijing-cloud',
    name: 'Beijing Cloud Intelligent Technology',
    chineseName: '北京云智未来科技',
    logoColor: '#f59e0b',
    themeColor: 'from-amber-500 to-orange-600',
    type: 'Product',
    status: 'paused',
    founded: '2022',
    activeMembersCount: 6,
    members: [
      { name: 'Albert Y', school: 'UPenn \'29', role: 'Co-Founder & CFO' }
    ],
    mission: 'Providing high-performance local AI cluster virtualization solutions for education labs in standard secondary schools.',
    vision: 'AI Compute democratized for global student high-performance tasks.',
    description: '学生团队成立的边缘算力调度服务商，优化校园局域网内的冗余显卡集群，向校内课题组提供低成本的 Stable Diffusion & LLM 本地渲染服务架构。',
    hiringNeeds: [
      { role: 'Distributed Systems Dev', count: 1 }
    ],
    updates: [
      { content: '项目进入后期维护，创始人过渡至 UPenn 进行学术转移。', date: '2025-10' },
      { content: '完成在第3所高中的试点计算服务器部署试运行。', date: '2025-07' }
    ],
    likes: 19,
    comments: [
      { id: '1', author: 'Tech_Guy', text: '直接调集机房闲置算力，相当硬核的极客项目。', timestamp: '2026-05-01' }
    ],
    x: -15,
    y: -30,
    z: 30,
    radius: 8
  },
  {
    id: 'ysic',
    name: 'Youth Sustainable Investment Challenge',
    chineseName: 'YSIC 青年绿色可持续投资挑战赛',
    logoColor: '#10b981',
    themeColor: 'from-emerald-400 to-teal-600',
    type: 'Philanthropy',
    status: 'recruiting',
    founded: '2023',
    activeMembersCount: 5,
    members: [
      { name: 'Amber K', school: 'Andover \'27', role: 'Organizer' }
    ],
    mission: 'Inspiring young international students to address ESG and decarbonization targets through financial pitchbooks.',
    vision: 'An independent sustainable carbon challenge made by youths.',
    description: '面向中学生的 ESG 投资路演模拟赛，鼓励学生为真实的温室效应难题或地方能源转型项目设计商业计划和微型绿色信贷投资包。',
    hiringNeeds: [
      { role: 'Business Development & Sponsors Lead', count: 2 },
      { role: 'Graphic / Layout Designer', count: 1 }
    ],
    updates: [
      { content: '锁定新一季的绿色转型赞助，奖池全新扩容。', date: '2026-05' },
      { content: '获得一众风投机构 ESG 合伙人的线上评委连线确认。', date: '2026-03' }
    ],
    likes: 27,
    comments: [
      { id: '1', author: 'Eco_Warrior', text: '环保+商业金融的结合非常好，正是当下大热的方向。', timestamp: '2026-05-18' }
    ],
    x: 55,
    y: 28,
    z: -25,
    radius: 10
  },
  {
    id: 'gagro',
    name: 'Gather Growth',
    chineseName: 'Gather Growth 学友聚合资源库',
    logoColor: '#ec4899',
    themeColor: 'from-pink-500 to-rose-600',
    type: 'Platform',
    status: 'recruiting',
    founded: '2024',
    activeMembersCount: 14,
    members: [
      { name: 'Eric L', school: 'Groton School \'27', role: 'President' }
    ],
    mission: 'Connecting student initiatives directly to high school campus clusters through localized peer sharing.',
    vision: 'A non-fragmented information workspace for student assets.',
    description: '打破中等国际教育的信息孤岛。打造一站式共享资源、留学面试、海外比赛组队互助社区，提供最可信的学生自创资源评级库。',
    hiringNeeds: [
      { role: 'Operations & Event Coordinator', count: 2 },
      { role: 'Web developer', count: 1 }
    ],
    updates: [
      { content: '在微信、小红书渠道累计收获超过3000名学生的高黏性关注。', date: '2026-05' },
      { content: '第一批共享名校申请书样本库对校友内部解锁。', date: '2026-04' }
    ],
    likes: 64,
    comments: [
      { id: '1', author: 'Mark_G', text: '这个能让我们摆脱留学中介的单一推荐，支持自发共建！', timestamp: '2026-05-26' }
    ],
    x: -60,
    y: 30,
    z: 40,
    radius: 11
  },
  {
    id: 'andover-launchpad',
    name: 'Andover Launchpad',
    chineseName: '安多弗星光孵化港',
    logoColor: '#a855f7',
    themeColor: 'from-purple-500 to-fuchsia-600',
    type: 'Platform',
    status: 'operating',
    founded: '2021',
    activeMembersCount: 10,
    members: [
      { name: 'Jessica T', school: 'Andover \'26', role: 'Lead Director' }
    ],
    mission: 'To host cross-school pitch hackathons and physical demo days for young tech geeks.',
    vision: 'To build a mini-YC ecosystem tailored for high schools.',
    description: '美区历史悠久的高中科创项目孵化园，每年定期发布一轮“ Draft Season 统一招募”，对接大学顶尖教授实验室与硅谷早期基金路演，为优秀的硬件/软件青年创客进行第一步加速。',
    hiringNeeds: [
      { role: 'Event Manager', count: 1 },
      { role: 'CS / Technical Advisor', count: 2 }
    ],
    updates: [
      { content: '2026年度 Demo Day 成功在纽约线上举行，入驻项目成交3单天使。', date: '2026-05' },
      { content: '推出全新的一站式 PPT 培训与路演指正计划。', date: '2026-03' }
    ],
    likes: 49,
    comments: [
      { id: '1', author: 'Panda_Ch', text: '久闻大名！这个真的是美高创业的天花板项目了。', timestamp: '2026-05-19' }
    ],
    x: 25,
    y: -35,
    z: -35,
    radius: 13
  },
  {
    id: 'ecoecho',
    name: 'EcoEcho Sound of Earth',
    chineseName: 'EcoEcho 自然声音之镜',
    logoColor: '#22c55e',
    themeColor: 'from-green-400 to-emerald-600',
    type: 'Philanthropy',
    status: 'recruiting',
    founded: '2024',
    activeMembersCount: 7,
    members: [
      { name: 'Chloe X', school: 'Hotchkiss School \'27', role: 'Founder' },
      { name: 'Jason W', school: 'Stanford \'29', role: 'Acoustic Researcher' }
    ],
    mission: 'To map forest wellness and prevent illegal logging using edge-computed bioacoustic recorders.',
    vision: 'A continuous auditory monitor for low-density nature reserves.',
    description: '一款低消耗、太阳能运行的野外环境声学监测节点。通过定制的轻型音频识别模型，能够灵敏捕捉热带森林中非正常鸟鸣恐慌和电锯轰鸣声，并即时报警通知附近护林员。',
    hiringNeeds: [
      { role: 'Machine Learning (Audio Focus)', count: 1 },
      { role: 'Eco-NGO Liaison Officer', count: 2 }
    ],
    updates: [
      { content: '成功在太白山自然保护区部署第3组声学监测盒。', date: '2026-04' },
      { content: '首档自然白噪音音频专栏与腾讯公益达成推荐合作。', date: '2026-02' }
    ],
    likes: 31,
    comments: [
      { id: '1', author: 'Forest_Keeper', text: '非常有情怀的项目，用声音做生态保护很有感染力。', timestamp: '2026-05-14' }
    ],
    x: -25,
    y: 45,
    z: 10,
    radius: 9.5
  },
  {
    id: 'auramind',
    name: 'AuraMind Psych Portal',
    chineseName: 'AuraMind 留学生心灵守护站',
    logoColor: '#6366f1',
    themeColor: 'from-indigo-400 to-violet-600',
    type: 'Platform',
    status: 'operating',
    founded: '2023',
    activeMembersCount: 16,
    members: [
      { name: 'Yuki L', school: 'Emory University \'27', role: 'Psychology Lead' },
      { name: 'David C', school: 'NYU \'28', role: 'Product Manager' }
    ],
    mission: 'To build a zero-stigma peer counseling database for young Chinese students experiencing culture shock.',
    vision: 'To serve as a resilient digital warmline across global timezones.',
    description: '一个完全由心理学、社会学专业留学生志愿者发起的互助解压平台。提供双语互助倾听通道、情绪可视化树洞和留学生 culture shock 适应轻疗愈科普，协助解决学业和孤立压力。',
    hiringNeeds: [
      { role: 'Peer Counselor (Psych major preferable)', count: 10 },
      { role: 'UI/UX Designer', count: 1 }
    ],
    updates: [
      { content: '留学生考前焦虑冥想营累计报名已突破500人次。', date: '2026-05' },
      { content: '与辟奇联动发布《留学生群落孤独感情绪图鉴》。', date: '2026-03' }
    ],
    likes: 92,
    comments: [
      { id: '1', author: 'Anxious_Bean', text: '赶 due 期间真的好容易崩溃，推荐给身边每一个焦虑的留子。', timestamp: '2026-05-25' }
    ],
    x: -45,
    y: -10,
    z: 25,
    radius: 10.5
  },
  {
    id: 'bilingual-bridge',
    name: 'Bilingual Bridge PhiloGraph',
    chineseName: '语桥国粹经典双语图谱',
    logoColor: '#e11d48',
    themeColor: 'from-rose-500 to-red-600',
    type: 'Culture',
    status: 'recruiting',
    founded: '2024',
    activeMembersCount: 9,
    members: [
      { name: 'Han L', school: 'Columbia University \'28', role: 'Founder' },
      { name: 'Esther Z', school: 'Middlebury College \'27', role: 'Editorial Chief' }
    ],
    mission: 'To translate ancient Chinese philosophical concepts into visual, multi-dimensional semantic knowledge graphs.',
    vision: 'A living, modern digital gateway to traditional wisdom.',
    description: '针对外国汉学爱好者与二代移民青少年的国学出海网站。把繁琐晦涩的《道德经》、《庄子》章节，转化成具有高度视觉交互美感的思维语义网络，提供最接地气的中英典故释义。',
    hiringNeeds: [
      { role: 'Bilingual Editor (Classical Chinese focus)', count: 2 },
      { role: 'React Developer with D3 experience', count: 1 }
    ],
    updates: [
      { content: '《老子》全卷知识关系星云图谱上线内测，引得汉学届好评。', date: '2026-04' },
      { content: '获得一笔来自非盈利文化机构的种子翻译款赞助。', date: '2026-01' }
    ],
    likes: 47,
    comments: [
      { id: '1', author: 'Sinology_Fan', text: '看到D3做出来的交互图谱，把‘道’和‘万物’连起来，简直美哭。', timestamp: '2026-05-10' }
    ],
    x: 20,
    y: 15,
    z: -15,
    radius: 8.5
  },
  {
    id: 'veritas-research',
    name: 'Veritas Youth Review',
    chineseName: '求真青年学术评论',
    logoColor: '#f59e0b',
    themeColor: 'from-amber-500 to-yellow-600',
    type: 'Platform',
    status: 'operating',
    founded: '2022',
    activeMembersCount: 22,
    members: [
      { name: 'Mark W', school: 'UChicago \'28', role: 'Editor-in-Chief' },
      { name: 'Renee T', school: 'Milton Academy \'27', role: 'Operations' }
    ],
    mission: 'To empower secondary students to produce high-standard independent peer-reviewed humanities and social science journals.',
    vision: 'A democratized independent peer academy for teenage thinkers.',
    description: '一个独立的留学生学术社群及季刊出版物，秉持盲选双审原则，发表中学生在西方历史、跨文化文学、博弈论在宏观地缘领域的学术创见。破除昂贵中介包办学术论文的潜规则。',
    hiringNeeds: [
      { role: 'Associate Editors (Economics/History/PoliSci)', count: 4 },
      { role: 'Podcast Host & Broadcaster', count: 1 }
    ],
    updates: [
      { content: '发售第7期夏季学术合集《重估边界：数字劳动的景观》。', date: '2026-05' },
      { content: '邀请2名常春藤终身教授担任年度学术顾问组导师。', date: '2026-02' }
    ],
    likes: 73,
    comments: [
      { id: '1', author: 'Markus_UChi', text: '真正由中学生自己组织的Peer-Review，拒绝被机构中间商割韭菜，支持！', timestamp: '2026-05-23' }
    ],
    x: 45,
    y: 40,
    z: 15,
    radius: 11.5
  },
  {
    id: 'codeher',
    name: 'CodeHer / CodeShe NGO',
    chineseName: 'CodeHer 编程女孩科技公益',
    logoColor: '#10b981',
    themeColor: 'from-teal-400 to-cyan-600',
    type: 'Philanthropy',
    status: 'operating',
    founded: '2023',
    activeMembersCount: 18,
    members: [
      { name: 'Selena T', school: 'Groton School \'27', role: 'Founder & Leader' },
      { name: 'Lucy Q', school: 'Smith College \'28', role: 'Syllabus Developer' }
    ],
    mission: 'To introduce fundamental computational thinking and Python modules to junior school girls in rural schools.',
    vision: 'A vibrant tech mentor network bridging private tech student resources to public rural campuses.',
    description: '致力于打破乡村科学课师资匮乏和“编程不适合女孩”的偏见。高中生志愿者团队自主开发通俗易懂的 Scratch 交互画本和 Python 涂鸦趣味课程，开展线上支教与寒暑期探险营。',
    hiringNeeds: [
      { role: 'Bilingual Course Instructor', count: 5 },
      { role: 'School Partnership Outreach Coordinator', count: 2 }
    ],
    updates: [
      { content: '荣获亚太杰出青年科技公益组提名表彰。', date: '2026-05' },
      { content: '春季支教团已为宿迁/毕节2所村小超过120位女孩带来人工智能科普。', date: '2026-04' }
    ],
    likes: 85,
    comments: [
      { id: '1', author: 'Ada_Lover', text: '太赞了，给孩子们打开了一扇关于数字未来的窗！', timestamp: '2026-05-11' }
    ],
    x: -10,
    y: -15,
    z: -5,
    radius: 9
  },
  {
    id: 'zenflow',
    name: 'ZenFlow BreathSpace',
    chineseName: 'ZenFlow 瞬息解压专注空间',
    logoColor: '#06b6d4',
    themeColor: 'from-cyan-400 to-sky-600',
    type: 'Product',
    status: 'recruiting',
    founded: '2025',
    activeMembersCount: 4,
    members: [
      { name: 'Leon F', school: 'Mercersburg Academy \'27', role: 'Interaction Lead' }
    ],
    mission: 'To alleviate SAT/ACT test stress through reactive micro-rituals of soundscapes and visual breath sync widgets.',
    vision: 'A subtle elegant aesthetic focus gadget sitting in every computer menu bar.',
    description: '针对高强度备考压力设计的优雅数字小部件。融合极简的日式庭院枯山水视觉、实时心电波动呼吸气泡及精巧的白噪声键盘音校准器，帮助学生建立每日清静五分钟的心流仪式。',
    hiringNeeds: [
      { role: 'Wasm / Electron App Specialist', count: 1 },
      { role: 'Audio designer for calm soundscapes', count: 1 }
    ],
    updates: [
      { content: 'ZenFlow macOS 精巧版成功发布于 Product Hunt 独立推荐组。', date: '2026-05' },
      { content: '完成与安多弗两所心理社团的学生封闭评测反馈。', date: '2026-04' }
    ],
    likes: 39,
    comments: [
      { id: '1', author: 'ZenMaker', text: '一直在找不张扬、设计极度现代内敛的冥想软件，这款完美契合。', timestamp: '2026-05-24' }
    ],
    x: -35,
    y: -40,
    z: -15,
    radius: 10
  },
  {
    id: 'neuroglow',
    name: 'NeuroGlow Attention Pack',
    chineseName: 'NeuroGlow 多动专注训练盒子',
    logoColor: '#f43f5e',
    themeColor: 'from-rose-400 to-amber-500',
    type: 'Product',
    status: 'recruiting',
    founded: '2024',
    activeMembersCount: 6,
    members: [
      { name: 'Arthur K', school: 'UPenn \'28', role: 'Hardware & Circuit Lead' },
      { name: 'Vera Z', school: 'Lawrenceville School \'27', role: 'Child dev advisor' }
    ],
    mission: 'To design safe, tactile visual feedback toys configured to aid students with mild ADHD focus training.',
    vision: 'Hardware and sensory design harmonized for sensory rehabilitation.',
    description: '通过智能重力感应、多彩LED柔光和振动微触觉，以高互动游乐化方式训练儿童手部控球专注力的硬件外设。支持数据通过蓝牙同步到家长小程序端，给出轻度多动科学引导建议。',
    hiringNeeds: [
      { role: 'Embedded Systems Developer (Arduino/ESP32)', count: 1 },
      { role: 'Clinical Child Psychologist Intern', count: 1 }
    ],
    updates: [
      { content: '外壳3D打印模具成功验证，整机手感和触感升级。', date: '2026-05' },
      { content: '首批10台样机入驻深圳某特殊儿童启智恢复中心进行实机评测。', date: '2026-03' }
    ],
    likes: 29,
    comments: [
      { id: '1', author: 'Neuro_Scientist', text: '现在太多小孩专注力流失，用硬件而不是屏幕来训练简直太有必要了。', timestamp: '2026-05-21' }
    ],
    x: -5,
    y: 20,
    z: 45,
    radius: 8.5
  },
  {
    id: 'chinatown-heritage',
    name: 'Chinatown Oral History Core',
    chineseName: '唐人街百年口述数字史馆',
    logoColor: '#84cc16',
    themeColor: 'from-lime-500 to-green-600',
    type: 'Culture',
    status: 'operating',
    founded: '2022',
    activeMembersCount: 14,
    members: [
      { name: 'Grace Y', school: 'Wellesley College \'27', role: 'History Lead' },
      { name: 'Franklin L', school: 'UC Berkeley \'28', role: 'Web Archivist' }
    ],
    mission: 'To preserve multi-generational oral records of early immigrants, restaurant laborers, and historical Chinese blocks.',
    vision: 'A resilient, non-eradicable database of immigrant memory landscapes.',
    description: '一处交互式的双语唐人街变迁长廊。由数十位高校留学生分头在波士顿、纽约、旧金山老华人社区进行长达数季度的口述实录和家庭老照片三维数字化留存，挽救即将流失的老一辈集体回忆。',
    hiringNeeds: [
      { role: 'Oral History Recorder / Interviewer (Cantonese preferable)', count: 3 },
      { role: 'Video Editor & Graphic Archiver', count: 1 }
    ],
    updates: [
      { content: '第2个主题展览“缝纫与蒸汽：纽约洗衣工的三代沉浮”上线。', date: '2026-04' },
      { content: '与当地华人历史学会共同建立联合文献数字化工作组。', date: '2026-01' }
    ],
    likes: 83,
    comments: [
      { id: '1', author: 'GoldMountain_Kid', text: '唐人街正在老龄化和中产阶级化，这些口述历史如果不及时记下来就再也没了。', timestamp: '2026-05-16' }
    ],
    x: 30,
    y: -45,
    z: 35,
    radius: 12
  },
  {
    id: 'artisan-guild',
    name: 'Hybrid Lacquerware Guild',
    chineseName: '折纸大漆：非遗新生工作室',
    logoColor: '#d97706',
    themeColor: 'from-amber-600 to-red-700',
    type: 'Culture',
    status: 'recruiting',
    founded: '2023',
    activeMembersCount: 11,
    members: [
      { name: 'Tian G', school: 'Rhode Island School of Design \'27', role: 'Artistic Chief' },
      { name: 'Kevin X', school: 'UPenn \'28', role: 'Sponsorship Lead' }
    ],
    mission: 'To bridge traditional lacquerware artisans and futuristic generative design methodologies, creating hybrid modern collectibles.',
    vision: 'To restore stable livelihoods for heritage craftsmen through modern commercialization.',
    description: '非遗保护的赛博朋克实践。工作室携手非遗大漆传承老艺人，引入前卫造型与 3D 打印，利用传统天然漆涂刷生成一系列既包含非物质漆彩温度、又符合千禧一代桌面美学的文创潮玩。',
    hiringNeeds: [
      { role: 'Product Marketing & Global Logistics lead', count: 1 },
      { role: 'Industrial Design (Rhino/Fusion360)', count: 2 }
    ],
    updates: [
      { content: '与国内顶流非遗大师推出《折纸大漆太空头盔》并在海外众筹走红。', date: '2026-05' },
      { content: '在景德镇/大连漆局完成长达一个月的材料测试实验室入驻。', date: '2026-03' }
    ],
    likes: 67,
    comments: [
      { id: '1', author: 'Art_Is_Wild', text: '大漆是真正的东方奢侈品，能用这种方式传承，不得不赞叹主创的脑洞！', timestamp: '2026-05-22' }
    ],
    x: 60,
    y: -15,
    z: -10,
    radius: 11
  },
  {
    id: 'foodprint',
    name: 'FoodPrint Campus AI',
    chineseName: 'FoodPrint 校园餐饮AI减碳盒',
    logoColor: '#4ade80',
    themeColor: 'from-green-400 to-lime-500',
    type: 'Technology',
    status: 'operating',
    founded: '2024',
    activeMembersCount: 5,
    members: [
      { name: 'Alex Z', school: 'Georgia Tech \'28', role: 'Algorithm Engineer' }
    ],
    mission: 'To minimize school dining hall ingredients waste utilizing small-scale camera food logging and AI weight models.',
    vision: 'A smart decentralized waste-tracking hardware for colleges.',
    description: '通过在餐厅餐盘回收处部署廉价摄像头和AI重力称，秒级分类未吃完饭菜成分与碳足迹比例。统计全校最爱剩的菜品特征，自动生成食堂菜单砍量与低碳配料调优建议。',
    hiringNeeds: [
      { role: 'Computer Vision / Edge Analytics Specialist', count: 1 }
    ],
    updates: [
      { content: '在佐治亚理工第三餐厅成功试点运行2 week，剩菜率降低12%。', date: '2026-05' },
      { content: '核心分类算法完成在轻量级树莓派边缘端的推理提速。', date: '2026-03' }
    ],
    likes: 54,
    comments: [
      { id: '1', author: 'Tech_Donor', text: '校园食堂浪费真的是个隐形大污染，这个项目兼顾环保和成本。', timestamp: '2026-05-18' }
    ],
    x: 15,
    y: 50,
    z: 30,
    radius: 9.5
  },
  {
    id: 'docuverse',
    name: 'DocuVerse Theatre Library',
    chineseName: 'DocuVerse 校园戏剧文献库',
    logoColor: '#ec4899',
    themeColor: 'from-pink-400 to-rose-600',
    type: 'Platform',
    status: 'paused',
    founded: '2023',
    activeMembersCount: 8,
    members: [
      { name: 'Mia D', school: 'UChicago \'28', role: 'Curator & Dramaturgical' }
    ],
    mission: 'To archive scripts, audio files, and scenic blueprints for high school dramatists, promoting play-writing inheritance.',
    vision: 'A digital Stage Door for non-commercial student plays.',
    description: '打破中英文学校舞台剧本“演完一季即永久遗失”的困境。搭建一个涵盖学生改写名著台词本、极小舞美排演草图和原创微戏剧原声的去中心化开放舞台资料站。',
    hiringNeeds: [
      { role: 'Website Editor & Script Formatting helper', count: 1 }
    ],
    updates: [
      { content: '项目经历阶段性整理，内容全面整合进 PICIS 项目档案馆。', date: '2025-11' },
      { content: '第150款校园原创戏拟中英文原创本成功归档入站。', date: '2025-08' }
    ],
    likes: 36,
    comments: [
      { id: '1', author: 'Drama_Pr', text: '真是我们编导学生的救星！每次留下的舞美排演方案终于有个地方存了。', timestamp: '2026-05-08' }
    ],
    x: -55,
    y: 15,
    z: -20,
    radius: 10
  },
  {
    id: 'tutorup',
    name: 'TutorUp Peer Mentorship',
    chineseName: 'TutorUp 候鸟学子蓝天导师',
    logoColor: '#3b82f6',
    themeColor: 'from-blue-400 to-indigo-600',
    type: 'Philanthropy',
    status: 'recruiting',
    founded: '2022',
    activeMembersCount: 30,
    members: [
      { name: 'Tiffany W', school: 'Phillips Exeter \'27', role: 'Operations' },
      { name: 'David L', school: 'Tsinghua \'28', role: 'Teacher lead' }
    ],
    mission: 'To match outstanding high schoolers directly to urban migrant children in industrial zones for bilingual and creative thinking tutorials.',
    vision: 'A self-balancing non-profit tutoring cycle linking remote peers.',
    description: '针对中国城市外来务工落户、低资源学校随迁子女的长期双语和科创素养朋辈结对支教。由美高/留学生学长一对一带领开展趣味物理和生活地理线上启发式分享。',
    hiringNeeds: [
      { role: 'Global Cohorts Operations Core', count: 3 },
      { role: 'Local Partner NGO Community Builder', count: 2 }
    ],
    updates: [
      { content: '本季度已成功结对120对导师与候鸟学生，累计授课突破400小时。', date: '2026-05' },
      { content: '引入全新的线上地理沙盒互动教具作为全新教学大纲。', date: '2026-02' }
    ],
    likes: 71,
    comments: [
      { id: '1', author: 'Sponsor_C', text: '温暖且实效，给普通务工子女带去的不仅仅是英语，更是大千世界的眼界。', timestamp: '2026-05-24' }
    ],
    x: -5,
    y: -50,
    z: -40,
    radius: 10.5
  },
  {
    id: 'nebula-cook',
    name: 'Nebula Molecular Gastronomy',
    chineseName: '星云分子美食工坊',
    logoColor: '#f43f5e',
    themeColor: 'from-rose-500 to-orange-500',
    type: 'Product',
    status: 'recruiting',
    founded: '2025',
    activeMembersCount: 4,
    members: [
      { name: 'Chef Yuan', school: 'RISD \'28', role: 'Chief Gastronomist' }
    ],
    mission: 'To explore the boundaries of taste and visual aesthetics through molecular gastronomy and space-themed dining.',
    vision: 'A traveling sci-fi culinary gallery.',
    description: '星云分子美食工坊将食品科学与宇宙美学生态融为一体。通过低温离心、凝胶化等技术，研发出一个个“可食用星核”、“超新星超低温饮品”等系列文创美馔。',
    hiringNeeds: [
      { role: 'Food Chemist', count: 1 },
      { role: 'Visual Designer', count: 1 }
    ],
    updates: [
      { content: '首场星空感官晚宴在上海思南公馆顺利闭幕。', date: '2026-05' }
    ],
    likes: 18,
    comments: [],
    x: -80,
    y: 20,
    z: -60,
    radius: 9.5
  },
  {
    id: 'solis-energy',
    name: 'Solis Origami Solar Grid',
    chineseName: 'Solis 折纸太阳能集能伞',
    logoColor: '#eab308',
    themeColor: 'from-yellow-400 to-amber-600',
    type: 'Technology',
    status: 'operating',
    founded: '2024',
    activeMembersCount: 8,
    members: [
      { name: 'Alex H', school: 'Georgia Tech \'27', role: 'Mechanical Lead' }
    ],
    mission: 'To design highly deployable micro solar cells for disaster relief using origami structural mathematics.',
    vision: 'Deployable backup green power in 10 seconds.',
    description: '受太空卫星折叠阵列启发，Solis 利用高柔性硅片与三浦折纸（Miura-ori）数理模型，设计了手提箱大小、可一秒撑起的野外应急高效太阳能板。',
    hiringNeeds: [
      { role: 'Aerospace Engineering Intern', count: 1 }
    ],
    updates: [
      { content: '在泰山地质震区演练中成功能源应急保供。', date: '2026-04' }
    ],
    likes: 24,
    comments: [],
    x: 80,
    y: -20,
    z: 60,
    radius: 11
  },
  {
    id: 'quant-mind',
    name: 'QuantMind Educational Sandbox',
    chineseName: 'QuantMind 量子物理游戏沙盒',
    logoColor: '#8b5cf6',
    themeColor: 'from-violet-500 to-fuchsia-600',
    type: 'Technology',
    status: 'recruiting',
    founded: '2025',
    activeMembersCount: 5,
    members: [
      { name: 'Tony L', school: 'MIT \'29', role: 'Physics Lead' }
    ],
    mission: 'Democratizing quantum intuition for K12 schools through playable physical sandbox games.',
    vision: 'Making abstract quantum mechanics tangible as blocks.',
    description: '一款针对高中物理教学的量子微观粒子沙盒游戏。将薛定谔方程、量子隧穿、波粒二象性转化为可视化的引力磁场轨道，通过双手拖拉积木即可直观感知。',
    hiringNeeds: [
      { role: 'Unity / WebGL Developer', count: 1 }
    ],
    updates: [
      { content: '量子微滑梯体验版入驻浙江科技馆测试。', date: '2026-05' }
    ],
    likes: 30,
    comments: [],
    x: -20,
    y: 70,
    z: -70,
    radius: 10
  },
  {
    id: 'echo-heritage',
    name: 'EchoHeritage Dialect Map',
    chineseName: '语音方言数字化活态图谱',
    logoColor: '#10b981',
    themeColor: 'from-emerald-500 to-teal-600',
    type: 'Culture',
    status: 'operating',
    founded: '2023',
    activeMembersCount: 12,
    members: [
      { name: 'Sissi C', school: 'Columbia \'28', role: 'Linguistics Lead' }
    ],
    mission: 'Preserving dying local dialects through Crowdsourced high-fidelity storytelling maps.',
    vision: 'A decentralized phonetic legacy of regional sounds.',
    description: '通过地理众包上传系统，拯救正在流失的中国地方方言。平台将民间老奶奶的口头儿歌、传统小调转化为点对点三维声波，构建出一幅多维声控方言图谱。',
    hiringNeeds: [
      { role: 'Community Operator', count: 2 }
    ],
    updates: [
      { content: '成功录制超过300种濒临绝迹的吴方言水乡口音。', date: '2026-05' }
    ],
    likes: 41,
    comments: [],
    x: 75,
    y: 55,
    z: -40,
    radius: 10.5
  },
  {
    id: 'aqua-drop',
    name: 'AquaDrop Filtration Gear',
    chineseName: 'AquaDrop 简易多效净水吸管',
    logoColor: '#0ea5e9',
    themeColor: 'from-sky-500 to-blue-600',
    type: 'Philanthropy',
    status: 'operating',
    founded: '2023',
    activeMembersCount: 7,
    members: [
      { name: 'Daisy M', school: 'Emory \'27', role: 'Bio-Chem Engineer' }
    ],
    mission: 'To manufacture ultralight, paper-based sand-glass microbial water filtration kits for rural Wells.',
    vision: 'To provide clean drinking water blocks for 100 villages globally.',
    description: '专为极低预算环境研发的折叠纸质简易多级过滤膜。通过复合活性炭纸层和低成本的纳米银杀菌技术，帮助山区小学师生瞬间净化地表水质。',
    hiringNeeds: [
      { role: 'Field Test Volunteer', count: 3 }
    ],
    updates: [
      { content: '第三批自净吸管物资顺利空投至西非山区小学。', date: '2026-04' }
    ],
    likes: 56,
    comments: [],
    x: -70,
    y: -55,
    z: 50,
    radius: 9
  },
  {
    id: 'bio-silk',
    name: 'BioSilk Biodegradable PLA',
    chineseName: 'BioSilk 蚕丝蛋白降解餐盒',
    logoColor: '#ec4899',
    themeColor: 'from-pink-500 to-rose-500',
    type: 'Product',
    status: 'paused',
    founded: '2024',
    activeMembersCount: 3,
    members: [
      { name: 'Vince L', school: 'UPenn \'28', role: 'Polymer Scientist' }
    ],
    mission: 'To synthesize ocean-safe, silk-inspired polymers that degrade cleanly in water in under 45 days.',
    vision: 'Replace 10 million single-use take-out boxes.',
    description: '利用废弃蚕丝蛋白提取物与PLA相结合，制成具有高强力韧性又可在湿土或海水中天然速解的餐饮外卖器皿，杜绝微塑料污染遗存。',
    hiringNeeds: [],
    updates: [
      { content: '由于实验室材料重组，项目目前暂停运作并归档。', date: '2025-12' }
    ],
    likes: 12,
    comments: [],
    x: 85,
    y: -40,
    z: -50,
    radius: 8
  },
  {
    id: 'space-tack',
    name: 'SpaceTack Asteroid Catalog',
    chineseName: 'SpaceTack 国际小行星联名星网',
    logoColor: '#a855f7',
    themeColor: 'from-purple-500 to-indigo-500',
    type: 'Platform',
    status: 'recruiting',
    founded: '2026',
    activeMembersCount: 9,
    members: [
      { name: 'Kaelen W', school: 'Andover \'27', role: 'Astrophotog' }
    ],
    mission: 'To create a digital ledger celebrating youth independent telescope observations and private orbit logs.',
    vision: 'A peer-curated starry vault.',
    description: '为天文爱好者中学生打造的开放式行星档案。集结数百位业余天文好手的高保真星轨底片，自动交叉校验其深空星系轨迹，创建共建式少年繁星走廊。',
    hiringNeeds: [
      { role: 'D3 Developer', count: 1 },
      { role: 'Astro-Liaison Coordinator', count: 2 }
    ],
    updates: [
      { content: '小行星联名数据库核心测试版成功上线，跑通星等归档。', date: '2026-05' }
    ],
    likes: 27,
    comments: [],
    x: -15,
    y: 80,
    z: 60,
    radius: 11.5
  },
  {
    id: 'luna-study',
    name: 'Luna Independent Scholar Hub',
    chineseName: 'Luna 青年独行学者协作舱',
    logoColor: '#14b8a6',
    themeColor: 'from-teal-400 to-cyan-500',
    type: 'Platform',
    status: 'operating',
    founded: '2024',
    activeMembersCount: 15,
    members: [
      { name: 'Elena R', school: 'UChicago \'28', role: 'Hub Coordinator' }
    ],
    mission: 'To provide cross-institutional seminar desks and peer-review mentors for teen researchers worldwide.',
    vision: 'A virtual campus library desk for all young minds.',
    description: '一个完全打破校际和高中隔阂的在线数字研讨学社，鼓励跨校组建社科季博小组，通过周度协同写作与文献共享击碎科研孤立症。',
    hiringNeeds: [
      { role: 'Academic Writing Coach', count: 3 }
    ],
    updates: [
      { content: '本季度已组建包括中世纪文学、宏观社会在内7个协同研究室。', date: '2026-05' }
    ],
    likes: 68,
    comments: [],
    x: 90,
    y: 10,
    z: -20,
    radius: 12.5
  },
  {
    id: 'terra-farm',
    name: 'TerraFarm Agroecology Coop',
    chineseName: 'TerraFarm 黄土台地生态共耕社',
    logoColor: '#f59e0b',
    themeColor: 'from-amber-500 to-emerald-600',
    type: 'Philanthropy',
    status: 'operating',
    founded: '2023',
    activeMembersCount: 11,
    members: [
      { name: 'Minghao G', school: 'Cornell \'28', role: 'Soil Scientist' }
    ],
    mission: 'To introduce circular agricultural tech to small rural farmers to arrest land desertification.',
    vision: 'Restoring living ecosystems on damaged soil matrices.',
    description: '专为黄河流域落后土丘旱作区设计的生态保护自选化循环系统。引导村民通过种植具有固碳防沙能力的灌木和微量微生物改良菌剂，稳步守护失活良田。',
    hiringNeeds: [
      { role: 'Agricultural Tech Advisor', count: 1 }
    ],
    updates: [
      { content: '与陕北两家村社合作，共建完成40亩固碳节水实验林。', date: '2026-04' }
    ],
    likes: 49,
    comments: [],
    x: -95,
    y: -10,
    z: 15,
    radius: 10.5
  },
  {
    id: 'zen-code',
    name: 'ZenCode Tangible Sandbox',
    chineseName: 'ZenCode 积木实体编程启蒙器',
    logoColor: '#6366f1',
    themeColor: 'from-indigo-400 to-rose-400',
    type: 'Technology',
    status: 'recruiting',
    founded: '2025',
    activeMembersCount: 4,
    members: [
      { name: 'Leon S', school: 'Tsinghua \'29', role: 'Hardware Architect' }
    ],
    mission: 'To introduce fundamental logic loops to low-access children through touchable electromagnetic blocks.',
    vision: 'Programming untethered from screens.',
    description: '脱离电脑屏幕做编程启蒙！利用坚韧、具有电磁吸附响应的儿童物理积木玩具，让孩子们通过拼接“跑”、“跳”、”循环”积木直接操纵地面微型巡航车。',
    hiringNeeds: [
      { role: 'Embedded ESP32 Firmware Engineer', count: 1 }
    ],
    updates: [
      { content: '获得一笔来自大湾区创客硬件大赛的种子基金资助。', date: '2026-05' }
    ],
    likes: 35,
    comments: [],
    x: -5,
    y: -75,
    z: 75,
    radius: 9.5
  },
  {
    id: 'cyber-muse',
    name: 'CyberMuse AI Kunqu Project',
    chineseName: 'CyberMuse 赛博昆曲智能唱腔谱',
    logoColor: '#e11d48',
    themeColor: 'from-rose-500 to-purple-600',
    type: 'Culture',
    status: 'operating',
    founded: '2024',
    activeMembersCount: 6,
    members: [
      { name: 'Yiting J', school: 'UChicago \'28', role: 'Artistic Director' }
    ],
    mission: 'To preserve traditional Kunqu opera voice styles using tailored spectral voice synthesis grids.',
    vision: 'Kunqu Opera reimagined for generation Alpha.',
    description: '国风美学新玩法。提取百年昆曲经典温婉唱腔中的声音泛音序列，融合声音自适应生成等算法，让古代先贤绝句和现代流行乐能够以正宗昆腔唱颂。',
    hiringNeeds: [
      { role: 'Audio ML Researcher', count: 1 }
    ],
    updates: [
      { content: '赛博唱腔合成系统在小红书获得2万次播放点赞热潮。', date: '2026-05' }
    ],
    likes: 87,
    comments: [],
    x: 65,
    y: -65,
    z: -15,
    radius: 11
  },
  {
    id: 'pulse-card',
    name: 'PulseCard Tactile Study Helper',
    chineseName: 'PulseCard 微触觉盲人学习牌',
    logoColor: '#10b981',
    themeColor: 'from-teal-400 to-indigo-500',
    type: 'Product',
    status: 'recruiting',
    founded: '2025',
    activeMembersCount: 5,
    members: [
      { name: 'Helen Y', school: 'Phillips Exeter \'27', role: 'Industrial Lead' }
    ],
    mission: 'To construct safe, microfluidic responsive text blocks aiding the visually-impaired in memorizing letters.',
    vision: 'A dynamic, fluidic braille device.',
    description: '采用精细橡胶导轨和轻盈气塞技术制成的动态触控认知卡片。支持通过轻度充气自动微调字形，协助盲童进行多重盲触感官练习、单词拼读和形状轮廓理解。',
    hiringNeeds: [
      { role: 'Miniature Valve Designer', count: 1 }
    ],
    updates: [
      { content: '二代盲人拼读字盒通过国家专利局微触结构初步验证。', date: '2026-05' }
    ],
    likes: 29,
    comments: [],
    x: -65,
    y: 65,
    z: -30,
    radius: 10
  },
  {
    id: 'stellar-shelf',
    name: 'StellarShelf Youth Read Desk',
    chineseName: 'StellarShelf 乡村流动少年书台',
    logoColor: '#d97706',
    themeColor: 'from-amber-500 to-red-500',
    type: 'Platform',
    status: 'operating',
    founded: '2023',
    activeMembersCount: 20,
    members: [
      { name: 'Karry L', school: 'UChicago \'28', role: 'Volunteering Lead' }
    ],
    mission: 'To exchange unused high school literature collections with remote rural reading dens through unified book routes.',
    vision: 'An exchange corridor of 100,000 peer books.',
    description: '闲置书本换醒新生活。通过搭建去中心化高中流动图书馆换书通道，让名校学生在完成AP考试等退役后的成箱学术经典书箱，迅速且低成本派送到西部学校图书站。',
    hiringNeeds: [
      { role: 'Logistics Coordinator', count: 3 }
    ],
    updates: [
      { content: '向甘肃定西2所小学流动站捐赠运送第6批学术和艺术读物1500册。', date: '2026-04' }
    ],
    likes: 52,
    comments: [],
    x: 40,
    y: -70,
    z: -65,
    radius: 12
  },
  {
    id: 'eco-thread',
    name: 'EcoThread Pine Fibre Wear',
    chineseName: 'EcoThread 松针再生纤维梭织',
    logoColor: '#84cc16',
    themeColor: 'from-lime-500 to-emerald-600',
    type: 'Product',
    status: 'operating',
    founded: '2024',
    activeMembersCount: 8,
    members: [
      { name: 'Oliver F', school: 'RISD \'28', role: 'Fashion Designer' }
    ],
    mission: 'To harvest waste pine needles in logging zones and weave high-strength eco yarns for modern backpacks.',
    vision: 'Sourced purely from fallen needles, avoiding water-heavy cotton farming.',
    description: '从松树落叶松针中抽丝剥茧。通过低耗化学脱脂、超细梳理，研制出高强力、粗犷耐磨且防泼水性极佳的松针再生环保纤维面料，用于潮玩帆布包和机装硬核背袋。',
    hiringNeeds: [
      { role: 'Material Scientist', count: 1 }
    ],
    updates: [
      { content: '携手某著名越野跑大牌推出松针再生限定款腰包，走红极客野外圈。', date: '2026-05' }
    ],
    likes: 64,
    comments: [],
    x: -85,
    y: -35,
    z: -35,
    radius: 10.5
  },
  {
    id: 'himalaya-archive',
    name: 'Himalaya Heritage Database',
    chineseName: '喜马拉雅濒危藏地服饰数字谱',
    logoColor: '#dc2626',
    themeColor: 'from-red-600 to-amber-600',
    type: 'Culture',
    status: 'operating',
    founded: '2023',
    activeMembersCount: 14,
    members: [
      { name: 'Tashi D', school: 'NYU \'27', role: 'Core Archivist' }
    ],
    mission: 'To preserve rare hand-woven nomad textiles and patterns using deep high-fidelity multi-spectral photogrammetry.',
    vision: 'A permanent digital loom of ancient textures.',
    description: '针对藏区古老游牧部落中即将失传的手织氆氇和彩染藏毯服饰进行抢救性数字扫描。通过重建高维纹理模型和针织路线渲染，让濒危花纹得以永久保留于数字云端。',
    hiringNeeds: [
      { role: '3D Modeler Expert', count: 1 }
    ],
    updates: [
      { content: '第二大板块“牧人的腰带”高维模型成功入驻海外传统博物馆库。', date: '2026-03' }
    ],
    likes: 81,
    comments: [],
    x: 35,
    y: 75,
    z: -80,
    radius: 12
  },
  {
    id: 'sonic-canvas',
    name: 'SonicCanvas Ambient Painter',
    chineseName: 'SonicCanvas 环境音声可视调色盘',
    logoColor: '#6366f1',
    themeColor: 'from-indigo-500 to-cyan-500',
    type: 'Culture',
    status: 'recruiting',
    founded: '2025',
    activeMembersCount: 4,
    members: [
      { name: 'Willy X', school: 'UChicago \'28', role: 'Interaction Lead' }
    ],
    mission: 'Converting multi-channel ambient acoustics into live post-modern generative art canvases.',
    vision: 'Transforming noise pollutants into aesthetic canvases.',
    description: '一幅可以用环境噪声来调色与作画的壁式装置。将附近车辆轰鸣、雨点滴落或人群喧闹通过高动态频域分析，智能匹配色彩饱和度与线条张力，生成千人千样的艺术图景。',
    hiringNeeds: [
      { role: 'WebGL / Processing Developer', count: 1 }
    ],
    updates: [
      { content: '雨声动态模块在社区联展中获得超过100名观众现场触发体验。', date: '2026-05' }
    ],
    likes: 33,
    comments: [],
    x: -75,
    y: 10,
    z: 80,
    radius: 10
  },
  {
    id: 'future-bound',
    name: 'FutureBound Youth Carbon Kit',
    chineseName: 'FutureBound 青少年碳普惠工具包',
    logoColor: '#10b981',
    themeColor: 'from-teal-500 to-green-500',
    type: 'Philanthropy',
    status: 'recruiting',
    founded: '2024',
    activeMembersCount: 5,
    members: [
      { name: 'Cynthia Z', school: 'Columbia \'28', role: 'Carbon Lead' }
    ],
    mission: 'To scale climate science into easy-to-use carbon lifestyle trackers for school groups.',
    vision: 'School-wide decarbonization made competitive.',
    description: '面向年轻人在校园中发起的小微减排追踪器，将少点一份外卖、双面打印、骑行一公里自动转换成高对比度的像素级环保积分。支持多校联合开展碳足迹周赛排位。',
    hiringNeeds: [
      { role: 'Platform Developer', count: 1 }
    ],
    updates: [
      { content: '与国内4所美高中建立首批低碳先锋校际联盟。', date: '2026-04' }
    ],
    likes: 21,
    comments: [],
    x: 70,
    y: -30,
    z: 85,
    radius: 9
  },
  {
    id: 'meta-globe',
    name: 'MetaGlobe Interactive Earth',
    chineseName: 'MetaGlobe 三维交互史地地球仪',
    logoColor: '#2563eb',
    themeColor: 'from-blue-600 to-cyan-500',
    type: 'Platform',
    status: 'operating',
    founded: '2023',
    activeMembersCount: 16,
    members: [
      { name: 'Kobe Y', school: 'Stanford \'28', role: 'Map Architect' }
    ],
    mission: 'To construct multi-epoch historic geopolitics on a playable interactive Globe WebGL canvas.',
    vision: 'A virtual timeline globe for schools.',
    description: '把历史和地理学科无缝缝合。构建一款WebGL驱动的动态虚拟地球仪，师生可以在不同的历史区间拖动滑轨，直观预览丝绸之路路线改道、古帝国边界收缩及气候板块变迁。',
    hiringNeeds: [
      { role: 'ThreeJS Developer Specialized in Map Projections', count: 2 }
    ],
    updates: [
      { content: '《大航海时代：1500-1700历史洋流与航线》主题专包开发完成。', date: '2026-05' }
    ],
    likes: 72,
    comments: [],
    x: -30,
    y: -65,
    z: -75,
    radius: 12
  },
  {
    id: 'alpha-health',
    name: 'AlphaHealth Posture Monitor',
    chineseName: 'AlphaHealth 智能久坐坐姿守护带',
    logoColor: '#ec4899',
    themeColor: 'from-rose-400 to-indigo-500',
    type: 'Technology',
    status: 'recruiting',
    founded: '2025',
    activeMembersCount: 4,
    members: [
      { name: 'Jerry Q', school: 'Emory \'27', role: 'Wearable Dev' }
    ],
    mission: 'To protect teen spine health utilizing miniature stretch-sensors and non-invasive haptic alerts.',
    vision: 'Invisible spine posture guardians.',
    description: '专门针对高强度写作业的初高中、留学生群体设计的微型隐形护脊拉力感应器。当学生疲劳严重探头和耸肩时，通过极轻度微动触觉震颤即时提醒纠正，无累脑屏幕警报干扰。',
    hiringNeeds: [
      { role: 'HW Engineer specialized in flexible circuits', count: 1 }
    ],
    updates: [
      { content: '完成基于弹力微变感应纸第一批柔韧弯曲测定。', date: '2026-05' }
    ],
    likes: 19,
    comments: [],
    x: -85,
    y: 45,
    z: -45,
    radius: 9.5
  },
  {
    id: 'aurora-network',
    name: 'Aurora Career Co-mentor',
    chineseName: '极光青年职业探索联盟',
    logoColor: '#0ea5e9',
    themeColor: 'from-cyan-400 to-sky-600',
    type: 'Platform',
    status: 'operating',
    founded: '2024',
    activeMembersCount: 25,
    members: [
      { name: 'Vicky Z', school: 'Columbia \'28', role: 'President' }
    ],
    mission: 'To bridge gap stages for high school students by providing cross-industry shadow placements and peer job mentors.',
    vision: 'A transparent peer-curated vocational database.',
    description: '打破象牙塔与真实职场的厚墙。一个完全免费的青年影子见习交流联盟，由分布在全球大厂、学术机构的杰出留学生学长学姐提供第一手工作干货，带领学弟学妹开展微型实操协作。',
    hiringNeeds: [
      { role: 'Field Mentors Coordinator', count: 2 }
    ],
    updates: [
      { content: '暑期“数字游民影子实习体验”开启招募报名通道。', date: '2026-05' }
    ],
    likes: 95,
    comments: [],
    x: 80,
    y: 40,
    z: 45,
    radius: 13
  }
];

export const CHINESE_TRANSLATIONS = {
  landing: {
    subtitle: '辟奇 PICIS (Project Incubator for Chinese International Students) 致力于为海外中国留学生、美高中/大学学生以及国际学校学生打造一个集项目展示、人才匹配、思路引导与数字继承于一体的网页游戏化孵化共创平台。帮助每一位留子把真正热爱、独特的兴趣转化为真实可见、富有生命力的项目成果。',
    statsUnits: {
      projects: '个入驻项目',
      members: '名注册成员',
      prizePool: '累积奖池'
    },
    aboutLink: '关于辟奇',
    teamLink: '创始团队',
    exploreBtn: '立即探索空间',
    langToggle: 'Eng | 中',
    modeSwitch: '列表模式',
    modeSwitchGame: '3D 太空探索',
    ideaCount: 'Make our passions count.',
    aboutModalTitle: '关于 辟奇 PICIS',
    aboutP1: '为什么开始做 Independent Project？在同质化竞赛与中介推销泛滥的今天，留学生的独特个性、纯粹兴趣被“背景提升”这套千篇一律的简历模板压扁了。主流竞赛与夏校越来越高门槛、高筛选、强周期性，大部分学生只能被推到同质化的赛道里。',
    aboutP2: '辟奇（PICIS）为中国留学生提供了解药：Guide（引导创新，提供方法论与智库咨询）、Connect（一站式匹配技能型合伙人与类似项目，不再全靠熟人朋友圈）、Preserve（打造数字档案馆，破除“申请一过，项目烂尾”的西西弗斯推石头怪圈，支持学弟学妹进行项目继承与高层大学生指导）。',
    teamModalTitle: '辟奇创始团队',
    closeBtn: '关闭',
    exploreNow: '点击此处，探索辟奇星系'
  },
  game: {
    instructions: '探索指令',
    keys: {
      forward: '方向键 ▲ / W : 前进',
      backward: '方向键 ▼ / S : 后退',
      left: '方向键 ◀ / A : 向左',
      right: '方向键 ▶ / D : 向右',
      up: '空格键 Space / Q : 上升',
      down: '左 Shift 键 / E : 下降',
      mouseLook: '拖拽鼠标 : 旋转视角'
    },
    hoverTip: '悬停查看基础信息，点击探索项目',
    closeDetail: '合上舱门',
    visitWebsite: '造访官网',
    hiringTitle: '正在高燃招募：',
    updatesTitle: '最新项目动态：',
    commentPlaceholder: '留下你对这个星球的感悟(匿名)...',
    commentBtn: '发布星语',
    likesCount: '赞同能量',
    membersTitle: '星宿成员',
    statusUnit: {
      'yet to start': '待启航',
      paused: '低谷盘整',
      recruiting: '高燃招募中',
      operating: '稳定公转中'
    },
    filterType: '按项目类型筛选',
    filterStatus: '按项目状态筛选',
    all: '全部',
    foundDate: '创立年份'
  }
};

export const ENGLISH_TRANSLATIONS = {
  landing: {
    subtitle: 'PICIS (Project Incubator for Chinese International Students) is dedicated to building a project incubation and co-creation platform for overseas Chinese students, helping each member transform their interests, insights, and ideas into tangible and visible project outcomes.',
    statsUnits: {
      projects: 'Projects',
      members: 'Members',
      prizePool: 'Prize Pool'
    },
    aboutLink: 'About PICIS',
    teamLink: 'The Team',
    exploreBtn: 'Explore Now',
    langToggle: '中 | Eng',
    modeSwitch: 'List Mode',
    modeSwitchGame: 'Space Mode',
    ideaCount: 'Make our passions count.',
    aboutModalTitle: 'Why PICIS?',
    aboutP1: 'Why start an independent project? Today, the unique identities and authentic pure passions of Chinese international students are flattened by standardized "resume polishing" packages and mainstream competitions. Mainstream competitions are highly homogenized and summer schools are highly seasonal.',
    aboutP2: 'PICIS provides the antidote: Guide (methodology & expert consultations), Connect (the ultimate marketplace for tech-art cofounders), and Preserve (a digital project archiver preventing "post-admission project deaths" by enabling seamless student inheritance).',
    teamModalTitle: 'Meet the Founders',
    closeBtn: 'Close',
    exploreNow: 'Explore Now'
  },
  game: {
    instructions: 'Navigation Instructions',
    keys: {
      forward: 'Arrow Up / W : Forward',
      backward: 'Arrow Down / S : Backward',
      left: 'Arrow Left / A : Left',
      right: 'Arrow Right / D : Right',
      up: 'Spacebar / Q : Upward',
      down: 'L-Shift / E : Downward',
      mouseLook: 'Drag / Move Mouse : 360° View Orbit'
    },
    hoverTip: 'Hover for basic info, click to explore project',
    closeDetail: 'Close Records',
    visitWebsite: 'Visit Website',
    hiringTitle: 'Open Opportunities:',
    updatesTitle: 'Stellar Progress Log:',
    commentPlaceholder: 'Leave your anonymous cosmic feedback...',
    commentBtn: 'Transmit',
    likesCount: 'Pulse Energy',
    membersTitle: 'Stellar Crew',
    statusUnit: {
      'yet to start': 'Awaiting Ignition',
      paused: 'In Hibernate',
      recruiting: 'Recruiting Crew',
      operating: 'Stable Orbit'
    },
    filterType: 'Filter by Type',
    filterStatus: 'Filter by Status',
    all: 'All',
    foundDate: 'Founded'
  }
};
