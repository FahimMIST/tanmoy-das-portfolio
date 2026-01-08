import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80; // Adjust offset for visual breathing room to match Sidebar logic
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center py-12 lg:py-20 px-6 lg:px-16 bg-white rounded-[2.5rem] shadow-md mb-6 relative overflow-hidden group">
      
      {/* Subtle Monochrome Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none"></div>

      <div className="w-full relative z-10">
        
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-8 w-full">
          Architecting Intelligence for <span className="border-b-4 border-slate-200 pb-1">Complex Systems.</span>
        </h1>
        
        <div className="space-y-6 text-lg lg:text-xl text-slate-600 leading-relaxed font-normal w-full">
           <p>
             I bridge the gap between mathematical theory and real-world impact. As an Operations Research Scientist, I don't just analyze data—I <strong>engineer the algorithms</strong> that drive efficiency in logistics, supply chains, and FinTech.
           </p>
           <p>
             Currently pushing the boundaries of <strong>Vehicle Routing</strong> and <strong>Exact Algorithms</strong> (Column Generation, Benders) to solve large-scale optimization problems that standard models can't touch.
           </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a 
            href={SOCIAL_LINKS.resume}
            target="_blank"
            rel="noopener noreferrer" 
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-black transition-all font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            Download Resume
          </a>
          <a 
            href="#projects" 
            onClick={handleScrollToProjects}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-900 transition-all font-medium shadow-sm hover:shadow-md active:translate-y-0"
          >
            Explore My Work
            <ArrowRight size={18} className="text-slate-400 group-hover:translate-x-1 transition-transform group-hover:text-slate-900" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;