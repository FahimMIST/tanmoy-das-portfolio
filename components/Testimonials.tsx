import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { MessageSquareQuote, Quote, ChevronDown, ChevronUp } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, 6);

  return (
    <section id="testimonials" className="py-24 px-6 lg:px-12 bg-white rounded-[2.5rem] shadow-md mb-6 relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-slate-100 text-slate-900 rounded-xl">
            <MessageSquareQuote size={24} />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold text-slate-900 tracking-tight">Recommendations</h2>
            <p className="text-slate-500 mt-1">Feedback from colleagues, professors, and students.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTestimonials.map((item) => (
            <div 
              key={item.id} 
              className="group relative flex flex-col bg-slate-50/50 hover:bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-slate-200 transition-all duration-300 gpu-accelerated"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-slate-200 group-hover:text-primary-100 transition-colors">
                <Quote size={40} className="fill-current" />
              </div>

              {/* Author Header */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-lg border-2 border-white shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                  {item.initials}
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-slate-900">{item.name}</h3>
                  <div className="text-xs font-medium text-slate-500 mt-0.5">
                    {item.role}
                    {item.company && <span className="block opacity-75">{item.company}</span>}
                  </div>
                </div>
              </div>

              {/* Text */}
              <p className="text-[15px] leading-relaxed text-slate-600 italic relative z-10 flex-1">
                "{item.text}"
              </p>

            </div>
          ))}
        </div>

        {/* Show More Button */}
        {TESTIMONIALS.length > 6 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 px-6 py-3 bg-white text-slate-600 font-bold text-sm rounded-full border border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-sm"
            >
              <span>{showAll ? 'Show Less' : `View ${TESTIMONIALS.length - 6} More`}</span>
              {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;