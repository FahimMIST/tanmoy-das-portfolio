import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 lg:px-12 bg-white rounded-[2.5rem] shadow-md mb-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-slate-100 text-slate-900 rounded-xl">
            <Award size={24} />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold text-slate-900 tracking-tight">Academic Background</h2>
            <p className="text-slate-500 mt-1">Foundational knowledge and research.</p>
          </div>
        </div>

        <div className="grid gap-6">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="group flex flex-col sm:flex-row gap-6 p-8 rounded-3xl bg-slate-50/50 ring-1 ring-slate-100 ring-inset hover:ring-slate-900 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 gpu-accelerated fix-safari-radius">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white rounded-2xl text-slate-900 shadow-sm border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                  <GraduationCap size={28} strokeWidth={1.5} />
                </div>
              </div>
              
              <div className="flex-1 pt-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="font-heading text-xl font-bold text-slate-900">{edu.degree}</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200 tracking-wide group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    {edu.period}
                  </span>
                </div>
                
                <p className="text-lg font-medium text-slate-700 mb-4">{edu.institution}</p>
                
                {edu.details && (
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-200/50 pt-4">
                    {edu.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;