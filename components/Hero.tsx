import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-[50vh] flex flex-col justify-center py-12 lg:py-20 px-6 lg:px-16 bg-white rounded-[2.5rem] shadow-md mb-6 relative overflow-hidden group">
      
      {/* Subtle Monochrome Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none"></div>

      <div className="w-full relative z-10">
        
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-8 w-full">
          Optimizing complex <span className="border-b-4 border-slate-200 pb-1">real-world systems</span>
        </h1>
        
        <div className="space-y-6 text-lg lg:text-xl text-slate-600 leading-relaxed font-normal w-full max-w-6xl">
           <p>
             I love <strong>story-telling with data</strong>. I use data to make business decisions in fast-paced and customer-centric environments.
           </p>
           <p>
             As a data professional, I specialize in applying analytics, <strong>machine learning</strong>, and <strong>optimization tools</strong> to solve real-world problems and recommend data-driven solutions. My background includes building and deploying models for logistics, supply chains, and complex systems.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;