import React from 'react';
import { TEAM_MEMBERS } from '../data';
import { TEAM_MEMBERS_TRANSLATIONS } from '../translations';
import { Award, GraduationCap, Sparkles, X } from 'lucide-react';

interface TeamModalProps {
  onClose: () => void;
  lang: 'zh' | 'en';
  translations: any;
}

export default function TeamModal({ onClose, lang, translations }: TeamModalProps) {
  const t = translations;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-[#fbfbfb] border border-slate-300/80 rounded-3xl w-full max-w-4xl text-slate-800 overflow-hidden shadow-2xl animate-scale-up font-sans flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-[#f1f1f1] border-b border-slate-200/80 flex justify-between items-center">
          <h2 className="text-lg font-black tracking-tighter text-slate-950 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600 rotate-12" />
            <span>{t.landing.teamModalTitle}</span>
          </h2>
          <button
            onClick={onClose}
            id="close-team-btn"
            className="px-3 py-1 bg-white border border-slate-250 hover:border-slate-400 rounded-full hover:bg-slate-50 text-slate-700 hover:text-slate-950 cursor-pointer transition-all select-none text-[11px] font-bold"
          >
            {t.landing.closeBtn}
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[75vh] space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-slate-300 p-5 rounded-2xl flex flex-col justify-between transition-all shadow-sm hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-sm font-black text-slate-950 tracking-tight hover:text-indigo-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-[10px] text-indigo-600 font-mono mt-0.5 font-bold uppercase tracking-wider">{member.role}</p>
                    </div>
                    <span className="flex items-center gap-1 text-[9px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-mono border border-slate-200/60 font-medium">
                      <GraduationCap className="w-3 h-3 text-indigo-500" />
                      <span>{member.university}</span>
                    </span>
                  </div>

                  <p className="text-[10px] text-slate-500 italic leading-snug tracking-tight">
                    "{member.tagline}"
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed tracking-tight font-medium mt-1">
                    {lang === 'zh' ? member.bio : (TEAM_MEMBERS_TRANSLATIONS[member.name]?.bio || member.bio)}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <h4 className="text-[9px] uppercase font-mono tracking-widest font-bold text-slate-400 mb-1.5 flex items-center gap-1">
                    <Award className="w-3 h-3 text-amber-500" /> Key Honors
                  </h4>
                  <ul className="space-y-1">
                    {((lang === 'zh' ? member.achievements : TEAM_MEMBERS_TRANSLATIONS[member.name]?.achievements) || member.achievements).map((item, idy) => (
                      <li key={idy} className="text-[10px] text-slate-500 list-disc list-inside font-medium tracking-tight">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

