import React from 'react';
import { EXPERIENCES } from '../constants';
import { MapPin, Briefcase, Building2, ArrowRight } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12 bg-white rounded-[2.5rem] shadow-md mb-6 overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center gap-5 mb-16">
          <div className="p-4 bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 rounded-2xl shadow-sm border border-primary-100/50">
            <Briefcase size={32} strokeWidth={1.5} />
          </div>
          <div>
             <h2 className="font-heading text-4xl font-bold text-slate-900 tracking-tight">Work Experience</h2>
             <p className="text-slate-500 text-lg mt-2 font-light">My professional journey in Operations Research & Data Science.</p>
          </div>
        </div>

        <div className="relative">
           {/* Continuous Vertical Line (Desktop) - Adjusted position to 208px (w-48 + gap) */}
           <div className="absolute left-[208px] top-4 bottom-0 w-px bg-gradient-to-b from-slate-200 via-slate-200 to-transparent hidden md:block"></div>
           
           {/* Continuous Vertical Line (Mobile) */}
           <div className="absolute left-[19px] top-4 bottom-0 w-px bg-gradient-to-b from-slate-200 via-slate-200 to-transparent md:hidden"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.id} className="relative group">
                <div className="flex flex-col md:flex-row gap-8">
                  
                  {/* Date & Location Column (Desktop) - Increased width to w-48 (192px) for more space */}
                  <div className="hidden md:flex flex-col items-end w-48 flex-shrink-0 pt-2 text-right">
                    <div className="font-bold text-slate-900 text-sm tracking-tight">{exp.period.split('–')[0]}</div>
                    <div className="text-slate-400 text-xs mt-0.5 font-medium mb-2">to {exp.period.split('–')[1] || 'Present'}</div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-md text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      {exp.location.includes('USA') ? '🇺🇸' : exp.location.includes('Canada') ? '🇨🇦' : '🇧🇩'} {exp.location.split(',')[0]}
                    </div>
                  </div>

                  {/* Timeline Node - Adjusted to left-[208px] */}
                  <div className="absolute left-[19px] md:left-[208px] -translate-x-1/2 top-2 flex flex-col items-center z-10">
                     {/* Outer Ring */}
                     <div className={`
                       w-10 h-10 rounded-full border-4 border-white shadow-sm flex items-center justify-center transition-all duration-500
                       ${index === 0 ? 'bg-primary-500 scale-110' : 'bg-slate-200 group-hover:bg-primary-400'}
                     `}>
                       {/* Inner Dot / Icon */}
                       {index === 0 ? (
                         <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
                       ) : (
                         <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                       )}
                     </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pl-12 md:pl-8">
                    <div className="relative bg-white rounded-2xl p-6 md:p-8 ring-1 ring-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] ring-inset transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.08)] group-hover:ring-primary-100 gpu-accelerated fix-safari-radius">
                      
                      {/* Mobile Header (Date/Loc) */}
                      <div className="flex md:hidden items-center justify-between mb-4 pb-4 border-b border-slate-50">
                        <span className="text-xs font-bold text-primary-700 bg-primary-50 px-2 py-1 rounded-md">{exp.period}</span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <MapPin size={12} /> {exp.location}
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                        <div>
                          <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-primary-700 transition-colors">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-2 text-slate-600 font-medium text-[15px]">
                            <Building2 size={16} className="text-slate-400" />
                            {exp.company}
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3.5 text-[15px] text-slate-600 leading-relaxed group/item">
                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary-300 flex-shrink-0 group-hover/item:scale-125 group-hover/item:bg-primary-500 transition-all" />
                            <span className="group-hover/item:text-slate-800 transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Footer */}
                      {exp.tools && (
                        <div className="mt-auto pt-6 border-t border-slate-50">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Tech Stack:</span>
                            {exp.tools.split(',').map((tool) => (
                              <span 
                                key={tool.trim()} 
                                className="px-2.5 py-1 bg-slate-50 text-slate-600 rounded-md text-xs font-medium border border-slate-100 transition-colors hover:bg-primary-50 hover:text-primary-700 hover:border-primary-100 cursor-default"
                              >
                                {tool.trim()}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Hover Arrow Decoration */}
                      <div className="absolute top-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary-300">
                        <ArrowRight size={24} />
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;