import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { Code2, Brain, Database, GitGraph, Truck, Sigma } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (title: string) => {
    switch (title) {
      case 'Machine Learning':
        return <Brain size={24} className="text-slate-700" />;
      case 'Data Science':
        return <Database size={24} className="text-slate-700" />;
      case 'OR Algorithms':
        return <GitGraph size={24} className="text-slate-700" />;
      case 'Supply Chain':
        return <Truck size={24} className="text-slate-700" />;
      case 'OR Models':
        return <Sigma size={24} className="text-slate-700" />;
      default:
        return <Code2 size={24} className="text-slate-700" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 lg:px-12 bg-white rounded-[2.5rem] shadow-md mb-6 relative overflow-hidden">
      <div className="flex items-center gap-4 mb-12 relative z-10">
        <div className="p-3 bg-slate-100 text-slate-900 rounded-xl">
          <Code2 size={24} />
        </div>
        <div>
          <h2 className="font-heading text-3xl font-bold text-slate-900 tracking-tight">Technical Proficiency</h2>
          <p className="text-slate-500 mt-1">Tools and technologies I use to solve problems.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title} className="group bg-slate-50 hover:bg-white p-8 rounded-3xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
            <h3 className="font-heading text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                {React.cloneElement(getIcon(category.title) as React.ReactElement<any>, {
                  className: "group-hover:text-white text-slate-700 transition-colors"
                })}
              </div>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium bg-white text-slate-600 border border-slate-200 rounded-lg group-hover:border-slate-400 group-hover:text-slate-900 transition-colors cursor-default shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;