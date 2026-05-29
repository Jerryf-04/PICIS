import React from 'react';
import { X, ShieldCheck, Compass, HeartHandshake, Eye } from 'lucide-react';

interface AboutModalProps {
  onClose: () => void;
  lang: 'zh' | 'en';
  translations: any;
}

export default function AboutModal({ onClose, lang, translations }: AboutModalProps) {
  const t = translations;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-[#fbfbfb] border border-slate-300/80 rounded-3xl w-full max-w-2xl text-slate-800 overflow-hidden shadow-2xl animate-scale-up font-sans">
        
        {/* Banner with clean light aesthetic */}
        <div className="p-6 bg-[#f1f1f1] border-b border-slate-200/80 flex justify-between items-center">
          <h2 className="text-lg font-black tracking-tighter text-slate-950 flex items-center gap-2">
            <Compass className="w-5 h-5 text-indigo-600 animate-spin-slow" />
            <span>{t.landing.aboutModalTitle}</span>
          </h2>
          <button
            onClick={onClose}
            id="close-about-btn"
            className="px-3 py-1 bg-white border border-slate-250 hover:border-slate-400 rounded-full hover:bg-slate-50 text-slate-700 hover:text-slate-950 cursor-pointer transition-all select-none text-[11px] font-bold"
          >
            {t.landing.closeBtn}
          </button>
        </div>

        {/* Content of the modal */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          <div className="space-y-3.5">
            <p className="text-xs text-slate-600 tracking-tight leading-relaxed font-medium">
              {t.landing.aboutP1}
            </p>
            <p className="text-xs text-slate-600 tracking-tight leading-relaxed font-medium">
              {t.landing.aboutP2}
            </p>
          </div>

          {/* Three pillars visual highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-200/60">
            
            <div className="p-4 bg-white border border-slate-200 rounded-2xl space-y-1.5 text-center shadow-sm hover:shadow-md transition-all">
              <Eye className="w-5 h-5 text-indigo-600 mx-auto" />
              <h4 className="text-xs font-black text-slate-950 tracking-tighter">
                {lang === 'zh' ? 'GUIDE (引导)' : 'GUIDE'}
              </h4>
              <p className="text-[10px] text-slate-500 tracking-tight leading-snug">
                {lang === 'zh' ? '通过顾问智库、导师体系及干货案例，系统引导灵感降落，不再盲目跟风。' : 'Guiding early campus ideas to solid execution maps.'}
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-2xl space-y-1.5 text-center shadow-sm hover:shadow-md transition-all">
              <Compass className="w-5 h-5 text-emerald-600 mx-auto" />
              <h4 className="text-xs font-black text-slate-950 tracking-tighter">
                {lang === 'zh' ? 'CONNECT (匹配)' : 'CONNECT'}
              </h4>
              <p className="text-[10px] text-slate-500 tracking-tight leading-snug">
                {lang === 'zh' ? '聚合散落在各美高的独立创作者与项目，在线招募设计、研发和商业合伙人。' : 'Matching raw talent directly with prospective peer teams.'}
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-2xl space-y-1.5 text-center shadow-sm hover:shadow-md transition-all">
              <ShieldCheck className="w-5 h-5 text-pink-600 mx-auto" />
              <h4 className="text-xs font-black text-slate-950 tracking-tighter">
                {lang === 'zh' ? 'PRESERVE (保存)' : 'PRESERVE'}
              </h4>
              <p className="text-[10px] text-slate-500 tracking-tight leading-snug">
                {lang === 'zh' ? '数字项目档案馆机制。学弟妹接棒细化执行，学长升入大学把控高级战略，告别烂尾。' : 'Archiving projects for future peer students to inherit.'}
              </p>
            </div>

          </div>

          {/* Legal status reminder */}
          <div className="p-4 bg-[#f3f4f6] rounded-2xl border border-slate-200 text-[10px] text-slate-500 space-y-1 leading-relaxed text-left">
            <span className="font-bold text-slate-800">
              {lang === 'zh' ? '免责声明与隐私政策：' : 'Disclaimer & Privacy Policy:'}
            </span>
            <p>
              {lang === 'zh' 
                ? '本平台暂以前期非盈利孵化与项目推荐匹配为单一使命，平台不对任何项目的具体执行结果、版权纠纷、交易质量做出最终担保（Disclaim guarantee of performance）。想法所有权属创作者自身（Teaser mechanism 为创意进行脱敏保护）。' 
                : 'This platform operates purely as a non-profit incubator and peer-matching hub. The platform does not guarantee project deliverables, dispute resolutions, or transaction quality (Disclaimer of performance guarantee). Intellectual property belongs strictly to the creators (Teaser mechanism is used for creative protection and desensitization).'}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
