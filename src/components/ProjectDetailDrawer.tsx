import React, { useState } from 'react';
import { Project, Comment } from '../types';
import { PROJECTS_ENGLISH_TRANSLATIONS, PROJECTS_CHINESE_TRANSLATIONS, translateSchool, translateRole } from '../translations';
import { X, Heart, MessageSquare, Send, Globe, Users, Calendar, Award, Compass, RefreshCw } from 'lucide-react';

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
    // Mock volunteer success
    setVolunteerSubmitted(true);
    setTimeout(() => {
      setIsVolunteering(false);
      setVolunteerSubmitted(false);
      setVolunteerName('');
      setVolunteerEmail('');
      setVolunteerRole('');
    }, 2000);
  };

  // Dynamic aesthetic class maps supporting elegant Space (Dark) and List (Light) styles
  const bgClass = isSpaceMode 
    ? "bg-slate-950/95 border-slate-800/80 text-slate-100" 
    : "bg-white/95 border-slate-200/85 text-slate-800";

  const thumbClass = isSpaceMode ? "scrollbar-thumb-slate-800" : "scrollbar-thumb-slate-300";

  const textHeaderClass = isSpaceMode ? "text-white" : "text-slate-900";
  const textSubHeaderClass = isSpaceMode ? "text-slate-400" : "text-slate-500";
  const borderHeaderClass = isSpaceMode ? "border-slate-900" : "border-slate-100";

  const closeBtnClass = isSpaceMode
    ? "text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800"
    : "text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200/80";

  const labelTitleClass = isSpaceMode ? "text-slate-400" : "text-slate-500";

  const statBoxBgClass = isSpaceMode
    ? "bg-slate-900/60 border border-slate-850"
    : "bg-slate-50 border border-slate-100";
  
  const statTextValClass = isSpaceMode ? "text-slate-200" : "text-slate-900";

  const quoteTextClass = isSpaceMode ? "text-slate-300" : "text-slate-600";

  const descBoxBgClass = isSpaceMode
    ? "bg-slate-900/35 border border-slate-90s text-slate-305"
    : "bg-slate-50 border border-slate-105 text-slate-600";

  const cardBgClass = isSpaceMode
    ? "bg-slate-900/50 border border-slate-800/60"
    : "bg-slate-50 border border-slate-100";

  const cardTitleClass = isSpaceMode ? "text-slate-200" : "text-slate-800";
  const cardDescClass = isSpaceMode ? "text-slate-400" : "text-slate-500";

  const hiringBgClass = isSpaceMode
    ? "bg-emerald-950/20 border border-emerald-500/20"
    : "bg-emerald-50/60 border border-emerald-100";

  const hiringTitleClass = isSpaceMode ? "text-emerald-400" : "text-emerald-700";
  const hiringRoleTextClass = isSpaceMode ? "text-slate-200" : "text-slate-705";
  const hiringBadgeClass = isSpaceMode
    ? "bg-emerald-500/20 text-emerald-400"
    : "bg-emerald-100 text-emerald-800";

  const formInputBgClass = isSpaceMode
    ? "bg-slate-900 border border-slate-800 text-slate-100 focus:border-emerald-500"
    : "bg-white border border-slate-200 text-slate-800 focus:border-emerald-600";

  const applyBtnClass = isSpaceMode
    ? "bg-emerald-500 hover:bg-emerald-600"
    : "bg-emerald-600 hover:bg-emerald-700";

  const volunteerCancelBtnClass = isSpaceMode
    ? "bg-slate-800 hover:bg-slate-700 text-slate-350"
    : "bg-slate-100 hover:bg-slate-200 text-slate-650";

  const timelineConnectorClass = isSpaceMode ? "bg-slate-800" : "bg-slate-200";
  const timelineDotRingClass = isSpaceMode ? "ring-slate-950" : "ring-white";
  const timelineTextClass = isSpaceMode ? "text-slate-300" : "text-slate-700";

  const commentFormInputClass = isSpaceMode
    ? "bg-slate-900 border border-slate-800 text-slate-200 focus:border-indigo-500"
    : "bg-white border border-slate-200 text-slate-800 focus:border-indigo-500";

  const commentCardClass = isSpaceMode
    ? "bg-slate-900/40 border border-slate-900"
    : "bg-slate-50 border border-slate-100";

  const commentTimeTextClass = isSpaceMode ? "text-slate-500" : "text-slate-400";
  const commentBodyTextClass = isSpaceMode ? "text-slate-300" : "text-slate-600";

  return (
    <div className={`fixed inset-y-0 right-0 w-full md:w-[480px] shadow-2xl z-50 flex flex-col font-sans overflow-hidden animate-slide-in border-l ${bgClass}`}>
      {/* Pristine Minimalist Header Layout */}
      <div className={`p-6 relative border-b flex flex-col pt-8 ${borderHeaderClass}`}>
        <button 
          onClick={onClose}
          id="close-drawer-btn"
          className={`absolute top-5 right-5 p-2 rounded-full transition-all cursor-pointer pointer-events-auto ${closeBtnClass}`}
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col gap-2.5 pr-8">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: project.logoColor }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: project.logoColor }} />
            </span>
            <span className={`text-[10px] font-mono font-bold tracking-widest uppercase select-none ${textSubHeaderClass}`}>
              {project.type}
            </span>
          </div>

          <div>
            <h2 className={`text-[23px] font-black tracking-tight leading-snug ${textHeaderClass}`}>{project.name}</h2>
            {lang === 'zh' && project.chineseName && (
              <p className={`text-xs font-sans font-medium mt-1 ${textSubHeaderClass}`}>{project.chineseName}</p>
            )}
          </div>
        </div>
      </div>

      {/* Content scroll area */}
      <div className={`flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin ${thumbClass}`}>
        
        {/* Core Quick Stats */}
        <div className={`grid grid-cols-3 gap-3 p-4 rounded-xl ${statBoxBgClass}`}>
          <div className="text-center p-2">
            <Calendar className="w-5 h-5 mx-auto mb-1" style={{ color: project.logoColor }} />
            <p className={`text-[10px] uppercase font-mono ${labelTitleClass}`}>{t.game.foundDate}</p>
            <p className={`text-sm font-bold font-mono ${statTextValClass}`} style={{ color: isSpaceMode ? undefined : '#0f172a' }}>{project.founded}</p>
          </div>
          <div className="text-center p-2 border-x" style={{ borderColor: isSpaceMode ? '#1e293b' : '#e2e8f0' }}>
            <Users className="w-5 h-5 mx-auto mb-1" style={{ color: project.logoColor }} />
            <p className={`text-[10px] uppercase font-mono ${labelTitleClass}`}>{lang === 'zh' ? '常驻星宿' : 'Crew Size'}</p>
            <p className={`text-sm font-bold font-mono ${statTextValClass}`} style={{ color: isSpaceMode ? undefined : '#0f172a' }}>{project.activeMembersCount}</p>
          </div>
          <div className="text-center p-2">
            <Compass className="w-5 h-5 mx-auto mb-1" style={{ color: project.logoColor }} />
            <p className={`text-[10px] uppercase font-mono ${labelTitleClass}`}>Status</p>
            <p className={`text-[11px] font-bold whitespace-nowrap overflow-hidden text-ellipsis ${statTextValClass}`} style={{ color: isSpaceMode ? undefined : '#0f172a' }}>
              {t.game.statusUnit[project.status]}
            </p>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="space-y-4">
          <div className="border-l-2 pl-4 py-1" style={{ borderColor: project.logoColor }}>
            <h4 className="text-sm uppercase tracking-wider font-bold" style={{ color: project.logoColor }}>
              {lang === 'zh' ? '使命' : 'MISSION'}
            </h4>
            <p className={`text-sm font-light mt-1 ${lang === 'zh' ? 'not-italic' : 'italic'} ${quoteTextClass}`}>
              {lang === 'zh' 
                ? `“${PROJECTS_CHINESE_TRANSLATIONS[project.id]?.mission || project.mission}”` 
                : `"${project.mission}"`}
            </p>
          </div>
          <div className="border-l-2 pl-4 py-1" style={{ borderColor: project.logoColor }}>
            <h4 className="text-sm uppercase tracking-wider font-bold" style={{ color: project.logoColor }}>
              {lang === 'zh' ? '愿景' : 'VISION'}
            </h4>
            <p className={`text-sm font-light mt-1 ${lang === 'zh' ? 'not-italic' : 'italic'} ${quoteTextClass}`}>
              {lang === 'zh' 
                ? `“${PROJECTS_CHINESE_TRANSLATIONS[project.id]?.vision || project.vision}”` 
                : `"${project.vision}"`}
            </p>
          </div>
        </div>

        {/* Long Description */}
        <div className="space-y-2">
          <h4 className={`text-xs uppercase tracking-widest font-mono font-bold ${labelTitleClass}`}>
            {lang === 'zh' ? '深度星体纪要' : 'Core Abstract'}
          </h4>
          <p className={`text-sm leading-relaxed font-light p-4 rounded-xl border ${descBoxBgClass}`}>
            {lang === 'zh' ? project.description : (PROJECTS_ENGLISH_TRANSLATIONS[project.id]?.description || `${project.mission} Additionally, ${project.vision}`)}
          </p>
        </div>

        {/* Crew members */}
        <div className="space-y-3">
          <h4 className={`text-xs uppercase tracking-widest font-mono font-bold ${labelTitleClass}`}>
            {t.game.membersTitle}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.members.map((m, idx) => (
              <div key={idx} className={`p-3 rounded-lg border flex items-center gap-3 ${cardBgClass}`}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white border" style={{ backgroundColor: project.logoColor, borderColor: project.logoColor + '40' }}>
                  {m.name.charAt(0)}
                </div>
                <div>
                  <h5 className={`text-xs font-semibold ${cardTitleClass}`}>{m.name}</h5>
                  <p className={`text-[10px] ${cardDescClass}`}>{translateSchool(m.school, lang)}</p>
                  <p className="text-[9px] font-mono mt-0.5" style={{ color: project.logoColor }}>{translateRole(m.role, lang)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring / Open opportunities */}
        {project.hiringNeeds && project.hiringNeeds.length > 0 && (
          <div className={`p-4 rounded-xl border space-y-3 ${hiringBgClass}`}>
            <h4 className={`text-xs uppercase tracking-widest font-mono font-bold flex items-center gap-2 ${hiringTitleClass}`}>
              <Award className="w-4 h-4 animate-pulse" /> {t.game.hiringTitle}
            </h4>
            <div className="space-y-2">
              {project.hiringNeeds.map((need, idx) => (
                <div key={idx} className={`flex justify-between items-center text-xs px-3 py-2 rounded border ${isSpaceMode ? 'bg-slate-900/40 border-slate-800/40' : 'bg-white border-emerald-100/50'}`}>
                  <span className={`font-medium ${hiringRoleTextClass}`}>{translateRole(need.role, lang)}</span>
                  <span className={`font-mono px-2 py-0.5 rounded font-bold text-[11px] ${hiringBadgeClass}`}>
                    {need.count} {lang === 'zh' ? '人' : 'crew'}
                  </span>
                </div>
              ))}
            </div>

            {/* Volunteer Form Trigger */}
            {!isVolunteering ? (
              <button
                onClick={() => setIsVolunteering(true)}
                id={`apply-btn-${project.id}`}
                className={`w-full mt-2 py-2 text-white font-medium text-xs rounded-lg transition-all shadow-md cursor-pointer text-center ${applyBtnClass}`}
              >
                {lang === 'zh' ? '投递合伙人/队员契约申请' : 'Apply to Join Crew'}
              </button>
            ) : (
              <form onSubmit={handleVolunteerSubmit} className={`space-y-3 border-t pt-3 mt-2 animate-fade-in ${isSpaceMode ? 'border-indigo-950/45' : 'border-emerald-100'}`}>
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
                    {volunteerSubmitted ? (lang === 'zh' ? '发送中...' : 'Transmitting...') : (lang === 'zh' ? '确认投递' : 'Transmit Contract')}
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
                  <p className={`text-[10px] text-center animate-bounce mt-1 ${isSpaceMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    🚀 {lang === 'zh' ? '契约已传输！PICIS 团队或创始成员将与你取得联系。' : 'Signal locked! PICIS team will reach out soon.'}
                  </p>
                )}
              </form>
            )}
          </div>
        )}

        {/* Project logs & updates */}
        <div className="space-y-3">
          <h4 className={`text-xs uppercase tracking-widest font-mono font-bold flex items-center gap-2 ${labelTitleClass}`}>
            <RefreshCw className="w-4 h-4" style={{ color: project.logoColor }} /> {t.game.updatesTitle}
          </h4>
          <div className="relative pl-4 space-y-4" style={{ backgroundColor: 'transparent' }}>
            {/* Custom line marker */}
            <div className={`absolute inset-y-1 left-[5px] w-0.5 ${timelineConnectorClass}`} />
            {project.updates.map((update, idx) => (
              <div key={idx} className="relative space-y-1">
                <span className={`absolute -left-[15px] top-1.5 w-2.5 h-2.5 rounded-full ring-4 ${timelineDotRingClass}`} style={{ backgroundColor: project.logoColor }}></span>
                <p className={`text-[10px] font-mono ${labelTitleClass}`}>{update.date}</p>
                <p className={`text-xs font-sans font-light ${timelineTextClass}`}>
                  {lang === 'zh' ? update.content : (PROJECTS_ENGLISH_TRANSLATIONS[project.id]?.updates[idx] || update.content)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Liking & Interactive commenting block */}
        <div className="pt-4 border-t space-y-4" style={{ borderColor: isSpaceMode ? '#1e293b' : '#e2e8f0' }}>
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-1.5 text-xs ${timelineTextClass}`}>
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>{project.likes} {t.game.likesCount}</span>
            </div>
            <button
              onClick={() => onLike(project.id)}
              id={`like-btn-${project.id}`}
              className={`flex items-center gap-1 px-3 py-1.5 border hover:bg-rose-500/10 text-xs rounded-full font-semibold transition-all cursor-pointer ${
                isSpaceMode 
                  ? 'bg-rose-500/10 border-rose-500/25 text-rose-400 hover:text-rose-300' 
                  : 'bg-rose-55 hover:bg-rose-100 border-rose-200 text-rose-600'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '注入爱心' : 'Pulse Planet'}</span>
            </button>
          </div>

          {/* Comment form */}
          <form onSubmit={handleSendComment} className="space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder={lang === 'zh' ? '大名(非必填)' : 'Name (Optional)'}
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
                className={`w-1/3 text-xs rounded-lg px-3 py-2 focus:outline-none ${commentFormInputClass}`}
              />
              <input
                type="text"
                required
                placeholder={t.game.commentPlaceholder}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className={`flex-1 text-xs rounded-lg px-3 py-2 focus:outline-none ${commentFormInputClass}`}
              />
              <button
                type="submit"
                id="comment-submit-btn"
                className="p-2 rounded-lg text-white transition-all cursor-pointer flex items-center justify-center font-semibold"
                style={{ backgroundColor: project.logoColor }}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Comments List */}
          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
            {project.comments.map((comment, commentIdx) => {
              const englishComment = PROJECTS_ENGLISH_TRANSLATIONS[project.id]?.comments[commentIdx];
              const author = lang === 'zh' ? comment.author : (englishComment?.author || comment.author);
              const text = lang === 'zh' ? comment.text : (englishComment?.text || comment.text);
              return (
                <div key={comment.id} className={`p-3 rounded-lg border space-y-1 ${commentCardClass}`}>
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="font-semibold font-mono" style={{ color: project.logoColor }}>{author}</span>
                    <span className={`font-mono ${commentTimeTextClass}`}>{comment.timestamp}</span>
                  </div>
                  <p className={`text-xs font-sans font-light leading-relaxed ${commentBodyTextClass}`}>{text}</p>
                </div>
              );
            })}
            {project.comments.length === 0 && (
              <p className={`text-center text-xs py-3 italic ${commentTimeTextClass}`}>
                {lang === 'zh' ? '星宿尚无回音，来留下第一句星语吧！' : 'This planet is quiet. Leave the first signal!'}
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
