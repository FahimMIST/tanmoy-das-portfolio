import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import { PanelLeftOpen } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-slate-100 selection:bg-slate-900 selection:text-white">
      <Sidebar 
        isMobileOpen={isMobileMenuOpen} 
        setIsMobileOpen={setIsMobileMenuOpen}
        isDesktopOpen={isDesktopSidebarOpen}
        setIsDesktopOpen={setIsDesktopSidebarOpen}
      />
      
      {/* Main Content Area */}
      <main className={`
        transition-all duration-300 ease-in-out
        ${isDesktopSidebarOpen ? 'lg:ml-80' : 'lg:ml-0'}
        min-h-screen
        p-4 lg:p-8 max-w-[1400px] mx-auto
      `}>
        
        {/* Toggle Button for Desktop when closed */}
        <button
          onClick={() => setIsDesktopSidebarOpen(true)}
          className={`fixed top-6 left-6 z-30 p-3 bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl shadow-md text-slate-500 hover:text-primary-600 transition-all duration-300 hidden lg:flex items-center justify-center group ${isDesktopSidebarOpen ? 'opacity-0 pointer-events-none -translate-x-full' : 'opacity-100 translate-x-0'}`}
          aria-label="Open Sidebar"
          title="Expand Sidebar"
        >
          <PanelLeftOpen size={24} className="group-hover:scale-110 transition-transform" />
        </button>

        <div className="space-y-6">
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;