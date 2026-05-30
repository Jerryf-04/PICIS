import React, { useState } from 'react';
import { Project, Comment } from '../types';
import { PROJECTS_ENGLISH_TRANSLATIONS, PROJECTS_CHINESE_TRANSLATIONS, translateSchool, translateRole } from '../translations';
import { X, Heart, MessageSquare, Send, Users, Calendar, Award, Compass, RefreshCw } from 'lucide-react';

interface ProjectDetailDrawerProps {
  project: Project;
  onClose: () => void;
  lang: 'zh' | 'en';
  translations: any;
  onLike: (projectId: string) => void;
  onAddComment: (projectId: string, author: string, text: string) => void;
  isSpaceMode?: boolean;
}

export default function ProjectDetailDrawer({
  project,
  onClose,
  lang,
  translations,
  onLike,
  onAddComment,
  isSpaceMode = false
}: ProjectDetailDrawerProps) {
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [isVolunteering, setIsVolunteering] = useState(false);
  const [volunteerName, setVolunteerName] = useState('');
  const [volunteerEmail, setVolunteerEmail] = useState('');
  const [volunteerRole, setVolunteerRole] = useState('');
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'crew' | 'roles' | 'timeline' | 'signals'>('crew');

  const t = translations;

  const handleSendComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    const author = commentName.trim() || (lang === 'zh' ? '太空漫游者' : 'Cosmic Explorer');
    onAddComment(project.id, author, commentText.trim());
    setCommentText('');
    setCommentName('');
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerName || !volunteerEmail || !volunteerRole) return;
    setVolunteerSubmitted(true);
    setTimeout(() => {
      setVolunteerSubmitted(false);
      setIsVolunteering(false);
      setVolunteerName('');
      setVolunteerEmail('');
      setVolunteerRole('');
    }, 2200);
  };

  // Dynamic aesthetic style configurations supporting elegant Dark Space & Clean List themes
  const bgClass = isSpaceMode 
    ? "bg-slate-950/98 border-slate-900 shadow-3xl text-slate-100" 
    : "bg-white/98 border-slate-100 shadow-2xl text-slate-800";

  const thumbClass = isSpaceMode ? "scrollbar-thumb-slate-900" : "scrollbar-thumb-slate-200";

  const textHeaderClass = isSpaceMode ? "text-white" : "text-slate-900";
  const textSubHeaderClass = isSpaceMode ? "text-slate-400" : "text-slate-500";
  const borderHeaderClass = isSpaceMode ? "border-slate-900" : "border-slate-100";

  const closeBtnClass = isSpaceMode
    ? "text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800"
    : "text-slate-500 hover:text-slate-800 bg-slate-100/60 hover:bg-slate-250";

  const labelTitleClass = isSpaceMode ? "text-slate-500" : "text-slate-400";

  const statBoxBgClass = isSpaceMode
    ? "bg-slate-900/40 border border-slate-900/60"
    : "bg-slate-50 border border-slate-100";
  
  const statTextValClass = isSpaceMode ? "text-slate-200" : "text-slate-800";

  const descBoxBgClass = isSpaceMode
    ? "bg-slate-900/30 border border-slate-900/40 text-slate-300"
    : "bg-slate-50/50 border border-slate-100 text-slate-600";

  const cardBgClass = isSpaceMode
    ? "bg-slate-900/40 border border-slate-900"
    : "bg-slate-50 border border-slate-100";

  const cardTitleClass = isSpaceMode ? "text-slate-200" : "text-slate-800";
  const cardDescClass = isSpaceMode ? "text-slate-400" : "text-slate-500";

  const hiringBgClass = isSpaceMode
    ? "bg-emerald-950/20 border border-emerald-900/35"
    : "bg-emerald-50/40 border border-emerald-100/50";

  const hiringTitleClass = isSpaceMode ? "text-emerald-400" : "text-emerald-700";
  const hiringRoleTextClass = isSpaceMode ? "text-slate-200" : "text-slate-700";
  const hiringBadgeClass = isSpaceMode
    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
    : "bg-emerald-100 text-emerald-800";

  const formInputBgClass = isSpaceMode
    ? "bg-slate-900/60 border border-slate-850 text-slate-100 focus:border-emerald-500"
    : "bg-white border border-slate-200 text-slate-800 focus:border-emerald-500";

  const applyBtnClass = isSpaceMode
    ? "bg-emerald-500 hover:bg-emerald-600"
    : "bg-emerald-600 hover:bg-emerald-700";

  const volunteerCancelBtnClass = isSpaceMode
    ? "bg-slate-900 hover:bg-slate-800 text-slate-400"
    : "bg-slate-100 hover:bg-slate-200 text-slate-600";

  const timelineConnectorClass = isSpaceMode ? "bg-slate-900" : "bg-slate-200";
  const timelineDotRingClass = isSpaceMode ? "ring-slate-950" : "ring-white";
  const timelineTextClass = isSpaceMode ? "text-slate-300" : "text-slate-600";

  const commentFormInputClass = isSpaceMode
    ? "bg-slate-900 border border-slate-850 text-slate-200 focus:border-indigo-500/80"
    : "bg-white border border-slate-200 text-slate-800 focus:border-indigo-400";

  const commentCardClass = isSpaceMode
    ? "bg-slate-900/20 border border-slate-900/60"
    : "bg-slate-50 border border-slate-100";

  const commentTimeTextClass = isSpaceMode ? "text-slate-500" : "text-slate-400";
  const commentBodyTextClass = isSpaceMode ? "text-slate-300" : "text-slate-600";

  const tabs = [
    { id: 'crew', label: lang === 'zh' ? '星宿成员' : 'Crew', icon: Users },
    { id: 'roles', label: lang === 'zh' ? '寻找贤才' : 'Roles', icon: Award },
    { id: 'timeline', label: lang === 'zh' ? '纪要日志' : 'Timeline', icon: RefreshCw },
    { id: 'signals', label: lang === 'zh' ? '交流回音' : 'Signals', icon: MessageSquare }
  ] as const;

  const projectMission = lang === 'zh' 
    ? (PROJECTS_CHINESE_TRANSLATIONS[project.id]?.mission || project.mission)
    : project.mission;

  const projectVision = lang === 'zh' 
    ? (PROJECTS_CHINESE_TRANSLATIONS[project.id]?.vision || project.vision)
    : project.vision;

  return (
    <div className={`fixed inset-y-0 right-0 w-full md:w-[480px] shadow-3xl z-50 flex flex-col font-sans overflow-hidden animate-slide-in border-l ${bgClass}`}>
      
      {/* 1. Header: category chip, project title, close button */}
      <div className={`p-6 relative flex flex-col pt-8 pb-4 border-b ${borderHeaderClass}`}>
        <button 
          onClick={onClose}
          id="close-drawer-btn"
          className={`absolute top-5 right-5 p-2 rounded-full transition-all cursor-pointer pointer-events-auto ${closeBtnClass}`}
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col gap-1 pr-10">
          <div className="flex items-center">
            <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase" style={{ backgroundColor: `${project.logoColor}12`, color: project.logoColor, border: `1px solid ${project.logoColor}20` }}>
              {project.type}
            </span>
          </div>

          <h2 className={`text-[23px] font-black tracking-tight leading-tight mt-2 ${textHeaderClass}`}>{project.name}</h2>
          {lang === 'zh' && project.chineseName && (
            <p className={`text-xs font-semibold ${textSubHeaderClass}`}>{project.chineseName}</p>
          )}
        </div>
      </div>

      {/* Content scroll area */}
      <div className={`flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin ${thumbClass}`}>
        
        {/* 2. Short one-line project summary */}
        <div>
          <p className="text-[13px] leading-relaxed font-light text-slate-400" style={{ color: isSpaceMode ? '#cbd5e1' : '#475569' }}>
            {projectMission}
          </p>
        </div>

        {/* 3. Compact facts row: Founded, Crew Size, Status */}
        <div className={`grid grid-cols-3 gap-0.5 p-3 rounded-xl ${statBoxBgClass}`}>
          <div className="text-center py-1">
            <p className={`text-[9.5px] uppercase font-mono tracking-wider ${labelTitleClass}`}>{t.game.foundDate}</p>
            <p className={`text-xs font-semibold font-mono mt-0.5 ${statTextValClass}`}>{project.founded}</p>
          </div>
          <div className="text-center py-1 border-x border-slate-800/10 dark:border-slate-800/30">
            <p className={`text-[9.5px] uppercase font-mono tracking-wider ${labelTitleClass}`}>{lang === 'zh' ? '常驻星宿' : 'Crew Size'}</p>
            <p className={`text-xs font-semibold font-mono mt-0.5 ${statTextValClass}`}>{project.activeMembersCount}</p>
          </div>
          <div className="text-center py-1">
            <p className={`text-[9.5px] uppercase font-mono tracking-wider ${labelTitleClass}`}>Status</p>
            <p className="text-xs font-semibold tracking-wider font-mono mt-0.5" style={{ color: project.logoColor }}>
              {t.game.statusUnit[project.status]}
            </p>
          </div>
        </div>

        {/* 4. Primary CTA: Apply to Join. Secondary action: Pulse */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => {
              setActiveTab('roles');
              setIsVolunteering(true);
            }}
            id={`apply-btn-${project.id}`}
            className={`flex-1 py-2.5 px-4 text-white text-xs font-mono font-bold tracking-wider uppercase rounded-xl transition-all shadow-md active:scale-95 duration-100 cursor-pointer flex items-center justify-center gap-1.5 ${applyBtnClass}`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? '投递契约申请' : 'Apply to Join Crew'}</span>
          </button>
          
          <button
            onClick={() => onLike(project.id)}
            id={`like-btn-${project.id}`}
            className="py-2.5 px-4 text-xs font-mono font-semibold tracking-wider rounded-xl transition-all active:scale-95 duration-100 cursor-pointer flex items-center justify-center gap-1.5 border"
            style={{
              backgroundColor: `${project.logoColor}10`,
              borderColor: `${project.logoColor}30`,
              color: project.logoColor
            }}
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>{project.likes}</span>
          </button>
        </div>

        {/* 5. Overview: short abstract, short mission, short vision */}
        <div className="space-y-4">
          <div className={`p-4 rounded-xl text-xs sm:text-[13px] leading-relaxed font-light ${descBoxBgClass}`}>
            {lang === 'zh' ? project.description : (PROJECTS_ENGLISH_TRANSLATIONS[project.id]?.description || `${project.mission} Additionally, ${project.vision}`)}
          </div>

          <div className="grid grid-cols-2 gap-4 pt-1">
            <div>
              <span className="text-[10px] font-mono text-slate-505 tracking-wider uppercase block mb-1">
                {lang === 'zh' ? '☉ 使命 ' : 'Mission'}
              </span>
              <p className="text-[11px] sm:text-xs text-slate-400 font-light leading-snug">
                {projectMission}
              </p>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-505 tracking-wider uppercase block mb-1">
                {lang === 'zh' ? '☉ 愿景 ' : 'Vision'}
              </span>
              <p className="text-[11px] sm:text-xs text-slate-400 font-light leading-snug">
                {projectVision}
              </p>
            </div>
          </div>
        </div>

        {/* 6. Tabs or collapsible sections for: Team, Open Roles, Updates, Community */}
        <div className="space-y-4 pt-2">
          {/* Tabs Selector Navigation bar */}
          <div className="flex border-b border-slate-900/10 dark:border-slate-900/60 pb-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 pb-2 text-center flex flex-col items-center gap-1 cursor-pointer transition-all border-b-2 ${
                    isActive 
                      ? 'text-white border-white font-medium' 
                      : 'text-slate-500 border-transparent hover:text-slate-300'
                  }`}
                  style={{
                    borderBottomColor: isActive ? project.logoColor : 'transparent'
                  }}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'scale-110' : ''}`} style={{ color: isActive ? project.logoColor : undefined }} />
                  <span className="text-[10px] tracking-tight">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display Area */}
          <div className="animate-fade-in pt-1">
            
            {/* Tab Pane: CREW */}
            {activeTab === 'crew' && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.members.map((m, idx) => (
                    <div key={idx} className={`p-3 rounded-xl border flex items-center gap-3 transition-colors ${cardBgClass}`}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs text-white border" style={{ backgroundColor: project.logoColor, borderColor: project.logoColor + '30' }}>
                        {m.name.charAt(0)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h5 className={`text-xs font-semibold truncate ${cardTitleClass}`}>{m.name}</h5>
                        <p className={`text-[10px] truncate ${cardDescClass}`}>{translateSchool(m.school, lang)}</p>
                        <p className="text-[9px] font-mono mt-0.5 truncate" style={{ color: project.logoColor }}>
                          {translateRole(m.role, lang)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab Pane: ROLES (Hiring & Opportunities) */}
            {activeTab === 'roles' && (
              <div className="space-y-4">
                {project.hiringNeeds && project.hiringNeeds.length > 0 ? (
                  <div className={`p-4 rounded-xl border space-y-4 ${hiringBgClass}`}>
                    <div className="space-y-2">
                      {project.hiringNeeds.map((need, idx) => (
                        <div key={idx} className={`flex justify-between items-center text-xs px-3 py-2 rounded-lg border ${isSpaceMode ? 'bg-slate-900/40 border-slate-800/40' : 'bg-white border-emerald-100/50'}`}>
                          <span className={`font-medium ${hiringRoleTextClass}`}>{translateRole(need.role, lang)}</span>
                          <span className={`font-mono px-2 py-0.5 rounded font-bold text-[10px] ${hiringBadgeClass}`}>
                            {need.count} {lang === 'zh' ? '人' : 'crew'}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Inline Recruiting registration form */}
                    <div className="border-t border-emerald-500/10 pt-4">
                      {!isVolunteering ? (
                        <button
                          onClick={() => setIsVolunteering(true)}
                          className={`w-full py-2 text-white font-medium text-xs rounded-lg transition-all shadow-sm cursor-pointer text-center ${applyBtnClass}`}
                        >
                          {lang === 'zh' ? '投递合伙人/队员契约申请' : 'Apply to Join Crew'}
                        </button>
                      ) : (
                        <form onSubmit={handleVolunteerSubmit} className="space-y-3 animate-fade-in">
                          <p className="text-[10.5px] font-mono tracking-tight text-slate-400">
                            ⚡ {lang === 'zh' ? '建立星系引力联结契约' : 'Sign interstellar partnership covenant'}
                          </p>
                          <input
                            type="text"
                            required
                            placeholder={lang === 'zh' ? '你的大名' : 'Your Name'}
                            value={volunteerName}
                            onChange={(e) => setVolunteerName(e.target.value)}
                            className={`w-full text-xs rounded px-3 py-2 focus:outline-none ${formInputBgClass}`}
                          />
                          <input
                            type="email"
                            required
                            placeholder={lang === 'zh' ? '联系邮箱/微信ID' : 'WeChat ID / Email'}
                            value={volunteerEmail}
                            onChange={(e) => setVolunteerEmail(e.target.value)}
                            className={`w-full text-xs rounded px-3 py-2 focus:outline-none ${formInputBgClass}`}
                          />
                          <select
                            value={volunteerRole}
                            required
                            onChange={(e) => setVolunteerRole(e.target.value)}
                            className={`w-full text-xs rounded px-3 py-2 focus:outline-none ${formInputBgClass}`}
                          >
                            <option value="">{lang === 'zh' ? '选择投递岗位' : 'Select Desired Role'}</option>
                            {project.hiringNeeds.map((need, idx) => (
                              <option key={idx} value={need.role}>{translateRole(need.role, lang)}</option>
                            ))}
                          </select>

                          <div className="flex gap-2">
                            <button
                              type="submit"
                              className="flex-1 py-1.5 bg-emerald-600 hover:bg-emerald-700 rounded text-xs font-semibold text-white transition-all cursor-pointer"
                            >
                              {volunteerSubmitted ? (lang === 'zh' ? '传输中...' : 'Transmitting...') : (lang === 'zh' ? '确认传输契约' : 'Transmit Contract')}
                            </button>
                            <button
                              type="button"
                              onClick={() => setIsVolunteering(false)}
                              className={`px-3 py-1.5 rounded text-xs transition-all cursor-pointer ${volunteerCancelBtnClass}`}
                            >
                              {lang === 'zh' ? '取消' : 'Cancel'}
                            </button>
                          </div>
                          {volunteerSubmitted && (
                            <p className="text-[10px] text-center animate-bounce mt-1 text-emerald-400">
                              🚀 {lang === 'zh' ? '契约已传输！PICIS 团队或创始成员将与你取得联系。' : 'Signal locked! PICIS team will reach out soon.'}
                            </p>
                          )}
                        </form>
                      )}
                    </div>
                  </div>
                ) : (
                  <p className="text-center text-xs py-6 italic text-slate-500">
                    {lang === 'zh' ? '该星宿目前没有常设岗位招募，可以关注后续航行脉搏。' : 'No active roles recruited at this moment.'}
                  </p>
                )}
              </div>
            )}

            {/* Tab Pane: TIMELINE (Logs & Log Entries) */}
            {activeTab === 'timeline' && (
              <div className="relative pl-4 space-y-4 ml-1">
                <div className={`absolute inset-y-1 left-[5px] w-0.5 ${timelineConnectorClass}`} />
                {project.updates.map((update, idx) => (
                  <div key={idx} className="relative space-y-1">
                    <span className={`absolute -left-[14px] top-1.5 w-2 h-2 rounded-full ring-4 ${timelineDotRingClass}`} style={{ backgroundColor: project.logoColor }} />
                    <p className={`text-[9.5px] font-mono ${labelTitleClass}`}>{update.date}</p>
                    <p className={`text-xs font-sans font-light leading-relaxed ${timelineTextClass}`}>
                      {lang === 'zh' ? update.content : (PROJECTS_ENGLISH_TRANSLATIONS[project.id]?.updates[idx] || update.content)}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab Pane: SIGNALS (Likes & Interleaved chat replies) */}
            {activeTab === 'signals' && (
              <div className="space-y-4">
                {/* Commenting form */}
                <form onSubmit={handleSendComment} className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder={lang === 'zh' ? '大名' : 'Name'}
                      value={commentName}
                      onChange={(e) => setCommentName(e.target.value)}
                      className={`w-1/4 text-xs rounded-xl px-3 py-2 focus:outline-none ${commentFormInputClass}`}
                    />
                    <input
                      type="text"
                      required
                      placeholder={t.game.commentPlaceholder}
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      className={`flex-1 text-xs rounded-xl px-3 py-2 focus:outline-none ${commentFormInputClass}`}
                    />
                    <button
                      type="submit"
                      id="comment-submit-btn"
                      className="p-2.5 rounded-xl text-white transition-all cursor-pointer flex items-center justify-center font-semibold"
                      style={{ backgroundColor: project.logoColor }}
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>

                {/* Sub-signals Comment stack */}
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {project.comments.map((comment, commentIdx) => {
                    const englishComment = PROJECTS_ENGLISH_TRANSLATIONS[project.id]?.comments[commentIdx];
                    const author = lang === 'zh' ? comment.author : (englishComment?.author || comment.author);
                    const text = lang === 'zh' ? comment.text : (englishComment?.text || comment.text);
                    return (
                      <div key={comment.id} className={`p-3 rounded-xl border space-y-1 ${commentCardClass}`}>
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="font-semibold font-mono" style={{ color: project.logoColor }}>{author}</span>
                          <span className={`font-mono ${commentTimeTextClass}`}>{comment.timestamp}</span>
                        </div>
                        <p className={`text-xs font-sans font-light leading-relaxed ${commentBodyTextClass}`}>{text}</p>
                      </div>
                    );
                  })}
                  {project.comments.length === 0 && (
                    <p className={`text-center text-xs py-6 italic text-slate-500`}>
                      {lang === 'zh' ? '星宿尚无回音，来留下第一句星语吧！' : 'This planet is quiet. Leave the first signal!'}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
