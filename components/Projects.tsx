import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, ExternalLink, TrendingUp, Trophy } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-white rounded-[2.5rem] shadow-md mb-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-heading text-4xl font-bold text-slate-900 tracking-tight mb-4">Featured Projects</h2>
            <p className="text-slate-500 text-lg max-w-xl">A selection of my work in operations research, machine learning, and optimization.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project) => {
            const primaryLink = project.links && project.links.length > 0 ? project.links[0].url : null;
            
            return (
              <div key={project.id} className="group flex flex-col h-full bg-white rounded-3xl ring-1 ring-slate-100 hover:ring-slate-900 ring-inset hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 gpu-accelerated fix-safari-radius">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-slate-50 border-b border-slate-50">
                  {primaryLink ? (
                    <a href={primaryLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10 duration-500" />
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
                      />
                      <div className="absolute top-4 right-4 z-20">
                        <div className="bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                           <ArrowUpRight size={20} className="text-slate-900" />
                        </div>
                      </div>
                    </a>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10 duration-500" />
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
                      />
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-8 flex flex-col">
                  {/* Header: Title & Tools */}
                  <div className="mb-6">
                    <h3 className="font-heading text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-primary-600 transition-colors">
                      {primaryLink ? (
                        <a href={primaryLink} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-2 underline-offset-4 decoration-primary-200">
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                    
                    {/* Tools (Tags) */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map(tag => (
                          <span key={tag} className="text-[11px] font-semibold text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Body: Problem & Solution Only */}
                  <div className="space-y-4 mb-8 flex-1">
                    {/* Problem */}
                    {project.problem && (
                      <div className="text-[15px] text-slate-600 leading-relaxed">
                         <span className="font-bold text-slate-900 mr-1.5">Problem:</span> 
                         {project.problem}
                      </div>
                    )}

                    {/* Solution */}
                    {project.solution && (
                      <div className="text-[15px] text-slate-600 leading-relaxed">
                         <span className="font-bold text-slate-900 mr-1.5">Solution:</span> 
                         {project.solution}
                      </div>
                    )}
                  </div>

                  {/* Metrics (Results) - Prominently Displayed */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="mb-8">
                       <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                         <Trophy size={12} /> Key Achievements
                       </h4>
                       <div className="flex flex-wrap gap-3">
                         {project.metrics.map((metric, i) => (
                           <div key={i} className="inline-flex items-center gap-3 px-4 py-2.5 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100/60 rounded-xl shadow-[0_2px_8px_-2px_rgba(16,185,129,0.1)] hover:shadow-md transition-shadow cursor-default">
                             <div className="p-1 bg-white rounded-full shadow-sm text-emerald-600">
                               <TrendingUp size={14} strokeWidth={2.5} />
                             </div>
                             <span className="text-sm font-bold text-emerald-900">{metric}</span>
                           </div>
                         ))}
                       </div>
                    </div>
                  )}

                  {/* Links Footer */}
                  {project.links && project.links.length > 0 && (
                    <div className="pt-5 border-t border-slate-100 flex flex-wrap gap-4 mt-auto">
                      {project.links.map((link, idx) => (
                        <a 
                          key={idx} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-primary-700 transition-colors group/link"
                        >
                          <ExternalLink size={14} className="group-hover/link:-translate-y-0.5 transition-transform" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;