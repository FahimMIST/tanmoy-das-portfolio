import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';

const ShareFAB: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'Tanmoy Das | Operations Research Scientist',
      text: 'Check out this professional portfolio of Tanmoy Das, specializing in Operations Research and Data Science.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Tooltip for copy feedback */}
      <div 
        className={`
          pointer-events-auto
          px-4 py-2 bg-slate-800/90 backdrop-blur-md text-white text-sm font-medium rounded-xl shadow-xl border border-slate-700
          transition-all duration-300 transform origin-right
          ${copied ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 translate-x-4'}
        `}
      >
        Link copied to clipboard!
      </div>

      <button
        onClick={handleShare}
        className={`
          pointer-events-auto
          group relative flex items-center justify-center w-14 h-14 
          rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
          transition-all duration-300 hover:scale-110 active:scale-95
          ${copied ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-slate-900 hover:bg-black'}
        `}
        aria-label="Share Portfolio"
      >
        <div className="relative z-10 text-white">
          {copied ? (
            <Check size={24} className="animate-in zoom-in duration-300" />
          ) : (
            <Share2 size={24} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
          )}
        </div>
        
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-white/20 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
      </button>
    </div>
  );
};

export default ShareFAB;