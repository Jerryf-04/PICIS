import React, { useState } from 'react';
import { Project, ProjectType, ProjectStatus } from '../types';
import { Search, Filter, Layers, CheckCircle2, CircleDollarSign, Compass } from 'lucide-react';

interface InfoModeViewProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  lang: 'zh' | 'en';
  translations: any;
}

const TYPE_COLORS: Record<string, string> = {
  Technology: '#2563eb',   // Indigo/Blue
  Platform: '#0d9488',     // Teal
  Culture: '#d97706',      // Amber/Gold
  Product: '#475569',      // Slate/Charcoal
  Philanthropy: '#db2777'   // Rose/Pink
};

export default function InfoModeView({
  projects,
  onSelectProject,
  lang,
  translations
}: InfoModeViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<ProjectType | 'All'>('All');
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | 'All'>('All');

  const t = translations;

  // Filter projects computed
  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.chineseName && p.chineseName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.mission.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = selectedType === 'All' || p.type === selectedType;
    const matchesStatus = selectedStatus === 'All' || p.status === selectedStatus;

    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 font-sans animate-fade-in relative z-10">
      
      {/* Control bar / Filters */}
      <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-200/80 p-5 shadow-sm mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            id="projects-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={lang === 'zh' ? '搜索星宿项目内容...' : 'Search projects...'}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800"
          />
        </div>

        {/* Type Filter */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-medium text-slate-500 uppercase whitespace-nowrap hidden lg:inline">
            {t.game.filterType}:
          </span>
          <select
            value={selectedType}
            id="project-type-select"
            onChange={(e) => setSelectedType(e.target.value as any)}
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          >
            <option value="All">{t.game.all} - {lang === 'zh' ? '全部分类' : 'All Types'}</option>
            <option value="Technology">Technology</option>
            <option value="Platform">Platform</option>
            <option value="Culture">Culture</option>
            <option value="Product">Product</option>
            <option value="Philanthropy">Philanthropy</option>
          </select>
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-medium text-slate-500 uppercase whitespace-nowrap hidden lg:inline">
            {t.game.filterStatus}:
          </span>
          <select
            value={selectedStatus}
            id="project-status-select"
            onChange={(e) => setSelectedStatus(e.target.value as any)}
            className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          >
            <option value="All">{t.game.all} - {lang === 'zh' ? '全部状态' : 'All Status'}</option>
            <option value="operating">{lang === 'zh' ? '稳定公转中' : 'Stable Orbit / Operating'}</option>
            <option value="recruiting">{lang === 'zh' ? '高燃招募中' : 'Recruiting Crew'}</option>
            <option value="paused">{lang === 'zh' ? '低谷盘整' : 'In Hibernate / Paused'}</option>
            <option value="yet to start">{lang === 'zh' ? '待启航' : 'Awaiting Ignition'}</option>
          </select>
        </div>

      </div>

      {/* Grid List */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => {
            const accentColor = TYPE_COLORS[p.type] || '#4f46e5';
            return (
              <div
                key={p.id}
                onClick={() => onSelectProject(p)}
                id={`project-card-${p.id}`}
                className="group relative bg-[#fbfbfb] border border-slate-300/60 hover:border-slate-400 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                {/* Clean Type Color-coded top bar */}
                <div 
                  className="absolute top-0 inset-x-0 h-1 transition-all" 
                  style={{ backgroundColor: accentColor }}
                />

                {/* Card Top */}
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span 
                      className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest font-mono border"
                      style={{ 
                        color: accentColor, 
                        borderColor: `${accentColor}33`, 
                        backgroundColor: `${accentColor}0a` 
                      }}
                    >
                      {p.type}
                    </span>
                    <span className={`text-[9px] font-black font-mono px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      p.status === 'recruiting' ? 'bg-emerald-500/10 text-emerald-700 border border-emerald-500/10' :
                      p.status === 'operating' ? 'bg-indigo-500/10 text-indigo-700 border border-indigo-500/10' :
                      'bg-slate-200/60 text-slate-650'
                    }`}>
                      {t.game.statusUnit[p.status]}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-medium text-slate-900 tracking-tight hover:text-indigo-600 transition-colors leading-tight">
                      {p.name}
                    </h3>
                    {lang === 'zh' && p.chineseName && (
                      <p className="text-[11px] text-slate-500 font-light mt-1 tracking-tight">{p.chineseName}</p>
                    )}
                  </div>

                  <p className="text-[11px] text-slate-500 line-clamp-3 leading-relaxed tracking-tight font-light">
                    {lang === 'zh' ? p.description : p.mission}
                  </p>
                </div>

                {/* Card Bottom / Stats */}
                <div className="border-t border-slate-200/50 mt-5 pt-3.5 flex justify-between items-center text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 font-bold">
                    <Layers className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{lang === 'zh' ? '星宿' : 'Founded'}: {p.founded}</span>
                  </span>
                  <span className="text-indigo-600 font-black hover:underline tracking-tight select-none">
                    {lang === 'zh' ? '启航探索 →' : 'Launch Deep-dive →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 border border-dashed border-slate-200 rounded-3xl">
          <Compass className="w-12 h-12 text-slate-300 mx-auto mb-4 animate-spin-slow" />
          <h3 className="text-base font-bold text-slate-700">
            {lang === 'zh' ? '星图空白，未搜索到匹配星体' : 'No stellar planets match your sweep'}
          </h3>
          <p className="text-xs text-slate-400 mt-2">
            {lang === 'zh' ? '请尝试重置或调校您的偏好过滤器' : 'Try adjusting your sweep fields'}
          </p>
        </div>
      )}

    </div>
  );
}
