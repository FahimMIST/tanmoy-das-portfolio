import React, { useState, useEffect } from 'react';
import { 
  User, 
  Briefcase, 
  Code, 
  GraduationCap, 
  Cpu, 
  Mail,
  Linkedin,
  Menu,
  X,
  MapPin,
  PanelLeftClose
} from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

interface SidebarProps {
  isMobileOpen: boolean;
  setIsMobileOpen: (isOpen: boolean) => void;
  isDesktopOpen: boolean;
  setIsDesktopOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isMobileOpen, 
  setIsMobileOpen,
  isDesktopOpen,
  setIsDesktopOpen
}) => {
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { label: 'About', icon: User, href: '#about' },
    { label: 'Experience', icon: Briefcase, href: '#experience' },
    { label: 'Projects', icon: Cpu, href: '#projects' },
    { label: 'Skills', icon: Code, href: '#skills' },
    { label: 'Education', icon: GraduationCap, href: '#education' },
    { label: 'Contact', icon: Mail, href: '#contact' },
  ];

  // Handle smooth scrolling with offset
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; // Adjust offset for visual breathing room
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      setIsMobileOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we are at the bottom of the page
      if (scrollY + innerHeight >= documentHeight - 50) {
        // Find the 'contact' section or the last section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          setActiveSection('contact');
          return;
        } else if (sections.length > 0) {
           const lastId = sections[sections.length - 1].getAttribute('id');
           if (lastId) {
             setActiveSection(lastId);
             return;
           }
        }
      }

      let current = 'about';
      
      sections.forEach((section) => {
        const element = section as HTMLElement;
        const rect = element.getBoundingClientRect();
        
        // We define the active area as a line 1/3 down the viewport.
        // If a section crosses this line, it's active.
        const triggerPoint = innerHeight / 3;

        if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
          current = element.getAttribute('id') || 'about';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 right-4 z-50 p-3 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full shadow-lg lg:hidden text-slate-700 hover:text-slate-900 transition-all active:scale-95"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed top-0 left-0 h-full w-80 bg-white border-r border-slate-100 z-50 
          transform transition-transform duration-300 ease-out
          overflow-y-auto custom-scrollbar shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)]
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
          ${isDesktopOpen ? 'lg:translate-x-0' : 'lg:-translate-x-full'}
        `}
      >
        <div className="relative flex flex-col h-full p-8">
          
          {/* Desktop Collapse Button */}
          <button 
            onClick={() => setIsDesktopOpen(false)}
            className="hidden lg:flex absolute top-3 right-3 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors duration-200"
            title="Collapse Sidebar"
          >
            <PanelLeftClose size={20} />
          </button>

          {/* Profile Header */}
          <div className="flex flex-col items-center mb-8 pt-4">
            <div className="relative group cursor-default">
              <div className="absolute inset-0 bg-slate-200 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 scale-110"></div>
              <div className="w-24 h-24 rounded-full bg-slate-50 relative z-10 border-4 border-white shadow-sm flex items-center justify-center text-2xl font-heading font-bold text-slate-400 overflow-hidden">
                 <img 
                   src="https://lh3.googleusercontent.com/d/1cgkTxAAqpC048mF1QgJWbyGoh4k0SyTD" 
                   alt="Tanmoy Das" 
                   className="w-full h-full object-cover"
                 />
              </div>
            </div>
            
            <h1 className="text-2xl font-heading font-bold text-slate-900 mt-5 tracking-tight">Tanmoy Das</h1>
            <p className="text-sm font-medium text-slate-500 mt-1">Operations Research Scientist</p>
            
            <div className="flex items-center gap-1.5 mt-3 text-xs text-slate-500 font-medium bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
               <MapPin size={12} />
               {SOCIAL_LINKS.location}
            </div>
            
            <div className="flex gap-2 mt-6">
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 bg-slate-50 text-slate-500 hover:text-white hover:bg-slate-900 hover:shadow-sm rounded-xl transition-all duration-300 group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} className="transition-transform" />
              </a>
              <a 
                href={`mailto:${SOCIAL_LINKS.email}`} 
                className="p-2.5 bg-slate-50 text-slate-500 hover:text-white hover:bg-slate-900 hover:shadow-sm rounded-xl transition-all duration-300 group"
                aria-label="Send Email"
              >
                <Mail size={18} className="transition-transform" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`
                    flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all group font-medium text-[15px] border cursor-pointer
                    ${isActive 
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md' 
                      : 'text-slate-500 border-transparent hover:bg-slate-50 hover:text-slate-900 hover:border-slate-200'
                    }
                  `}
                >
                  <item.icon 
                    size={18} 
                    className={`
                      transition-transform stroke-[2px]
                      ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-900'}
                    `} 
                  />
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="mt-auto pt-8 text-[11px] text-slate-400 text-center font-medium tracking-wide uppercase opacity-60">
            © {new Date().getFullYear()} Tanmoy Das
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;