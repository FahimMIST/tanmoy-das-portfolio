import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Linkedin, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-white rounded-[2.5rem] shadow-md mb-6 relative overflow-hidden">
      
      <div className="flex items-center gap-4 mb-10">
        <div className="p-3 bg-slate-100 text-slate-900 rounded-xl">
          <Send size={24} />
        </div>
        <h2 className="font-heading text-3xl font-bold text-slate-900 tracking-tight">Let's Connect</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
           <h3 className="font-heading text-xl font-bold text-slate-900 mb-4">Open to Opportunities</h3>
           <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-2xl font-light">
            I am currently available for collaborations and new roles in Operations Research, Data Science, and Supply Chain Optimization. If you have a complex problem that needs solving, I'd love to hear about it.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-4">
             <a 
               href={SOCIAL_LINKS.linkedin} 
               target="_blank" 
               rel="noreferrer"
               className="group flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-all font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
               aria-label="Connect on LinkedIn"
             >
               <Linkedin size={20} className="text-slate-300 group-hover:text-white transition-colors" />
               <span>Connect on LinkedIn</span>
             </a>
           </div>
        </div>

        <div className="lg:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col justify-center">
           <div className="flex items-start gap-4 mb-8">
             <div className="p-3 bg-white rounded-xl shadow-sm text-slate-900 border border-slate-200">
               <MapPin size={24} />
             </div>
             <div>
               <h4 className="font-bold text-slate-900 mb-0.5">Current Location</h4>
               <p className="text-slate-600 font-medium">{SOCIAL_LINKS.location}</p>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;