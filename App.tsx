import React from 'react';
import Starfield from './components/Starfield';
import AITerminal from './components/AITerminal';
import EnduranceStation from './components/EnduranceStation';
import { RESUME_DATA } from './constants';
import { Github, Linkedin, ArrowUpRight } from 'lucide-react';

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <div 
    className="opacity-0 animate-fade-in-up" 
    style={{ animationDelay: `${delay}ms` }}
  >
    {children}
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-space-black font-sans relative overflow-x-hidden selection:bg-white/20 selection:text-white">
      
      {/* Background Layer */}
      <Starfield />
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-8 md:py-8 flex justify-between items-center mix-blend-difference">
        <div className="font-serif font-bold text-xl tracking-tight text-white opacity-0 md:opacity-100 transition-opacity">
          TCP
        </div>
        <div className="flex gap-6 md:gap-8">
          <a href="#experience" className="text-xs md:text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">Experience</a>
          <a href="#projects" className="text-xs md:text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">Projects</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center items-center text-center px-4 md:px-6 z-10 py-24 md:py-32 overflow-hidden">
        
        {/* The 3D Art - Positioned centrally but subtle */}
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
           <EnduranceStation />
        </div>
        
        {/* Overlay Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-black/30 to-space-black/90 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto space-y-6 md:space-y-8 mt-10 md:mt-20">
          <FadeIn delay={200}>
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] md:text-xs font-medium text-zinc-300 mb-4 md:mb-6 tracking-wider uppercase">
              {RESUME_DATA.personal.title}
            </span>
          </FadeIn>
          
          <FadeIn delay={400}>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif text-white tracking-tighter leading-none mb-6 break-words drop-shadow-2xl">
              {RESUME_DATA.personal.name}
            </h1>
          </FadeIn>

          <FadeIn delay={500}>
            <p className="text-lg md:text-2xl lg:text-3xl text-zinc-400 font-serif italic tracking-wide max-w-3xl mx-auto px-4">
              Engineering Intelligence.
            </p>
          </FadeIn>
          
          <FadeIn delay={600}>
            <p className="text-sm md:text-base lg:text-lg text-zinc-500 max-w-lg mx-auto leading-relaxed font-light mt-6 md:mt-8 px-4">
              Specializing in robotics, computer vision, and the integration of AI into physical systems.
            </p>
          </FadeIn>

          <FadeIn delay={800}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-10 md:mt-16">
              <a href={`mailto:${RESUME_DATA.personal.email}`} className="group flex items-center gap-2 text-white transition-opacity text-sm md:text-base">
                <span className="border-b border-white/50 group-hover:border-white pb-0.5 transition-all">Contact Me</span> 
                <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <div className="flex gap-6">
                <a href={`https://${RESUME_DATA.personal.linkedin}`} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors"><Linkedin size={20} className="md:w-6 md:h-6" /></a>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Github size={20} className="md:w-6 md:h-6" /></a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content Wrapper */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-40 space-y-32 md:space-y-48">
        
        {/* About / Summary */}
        <section className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-24 items-start pt-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white sticky top-24 md:top-32">About</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg md:text-xl lg:text-2xl font-serif text-zinc-300 leading-relaxed font-light">
              {RESUME_DATA.personal.summary}
            </p>
            <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {['Computer Vision', 'Robotics', 'Deep Learning', 'System Design'].map(skill => (
                <div key={skill} className="pt-4 border-t border-white/10 text-xs md:text-sm tracking-wide text-zinc-500 uppercase">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-24">
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white sticky top-24 md:top-32">Experience</h2>
          </div>
          <div className="md:col-span-8 space-y-20 md:space-y-32">
            {RESUME_DATA.experience.map((exp, idx) => (
              <div key={idx} className="group border-b border-white/5 pb-16 md:pb-20 last:border-0 last:pb-0">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 md:mb-6">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white group-hover:text-zinc-300 transition-colors">
                    {exp.company}
                  </h3>
                  <span className="font-mono text-xs md:text-sm text-zinc-500 mt-2 md:mt-0 uppercase tracking-wider">
                    {exp.period}
                  </span>
                </div>
                <div className="text-base md:text-lg text-zinc-300 mb-6 md:mb-8 font-medium tracking-wide flex flex-wrap items-center gap-2 md:gap-3">
                  {exp.role} 
                  <span className="hidden md:inline w-1.5 h-1.5 rounded-full bg-white/20"></span>
                  <span className="text-zinc-500 font-normal text-sm md:text-base block md:inline w-full md:w-auto">{exp.type}</span>
                </div>
                <p className="text-zinc-400 leading-loose font-light text-base md:text-lg">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <div className="mb-12 md:mb-20 border-b border-white/10 pb-6 md:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white">Selected Projects</h2>
             <span className="text-xs md:text-sm font-mono text-zinc-500 uppercase tracking-widest">2024 — 2025</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {RESUME_DATA.projects.map((project, idx) => (
              <div key={idx} className="group relative bg-zinc-900/30 backdrop-blur-md border border-white/5 rounded-2xl md:rounded-[2rem] p-8 md:p-10 lg:p-12 hover:bg-zinc-800/40 hover:border-white/10 transition-all duration-500 flex flex-col h-full">
                <div className="mb-8 md:mb-10 flex justify-between items-start">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-2xl shadow-black/50 border border-white/5">
                     <ArrowUpRight size={18} className="md:w-[22px] md:h-[22px]" />
                  </div>
                  <span className="text-[10px] md:text-xs font-mono text-zinc-500 border border-white/5 px-2 py-1 md:px-3 rounded-full uppercase tracking-wider">
                    {project.role}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-serif leading-tight">{project.title}</h3>
                
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base font-light flex-grow">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Skills */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 pt-16 md:pt-24 border-t border-white/5">
          <div>
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-8 md:mb-12">Education</h3>
            {RESUME_DATA.education.map((edu, idx) => (
              <div key={idx} className="mb-10 md:mb-12 last:mb-0">
                <div className="text-xl md:text-2xl text-white font-medium mb-2 md:mb-3">{edu.institution}</div>
                <div className="text-zinc-400 text-base md:text-lg mb-4 font-light">{edu.degree}</div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {edu.details.map(d => (
                    <span key={d} className="text-[10px] md:text-xs font-mono border border-white/10 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-zinc-500 bg-white/5">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-8 md:mb-12">Technical Proficiency</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {RESUME_DATA.skills.flatMap(s => s.items).map((skill) => (
                <span key={skill} className="px-3 py-2 md:px-5 md:py-2.5 bg-zinc-900/50 border border-white/5 rounded-lg md:rounded-xl text-xs md:text-sm text-zinc-300 hover:border-white/20 hover:bg-zinc-800 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center pt-16 md:pt-24 pb-8 md:pb-12 border-t border-white/5 text-zinc-600 text-xs md:text-sm">
           <div className="font-mono mb-4 md:mb-0">&copy; {new Date().getFullYear()} Tan Chun Pan.</div>
           <div className="flex gap-6 md:gap-8 font-medium">
             <a href="#" className="hover:text-white transition-colors">Resume</a>
             <a href={`https://${RESUME_DATA.personal.linkedin}`} className="hover:text-white transition-colors">LinkedIn</a>
             <a href={`mailto:${RESUME_DATA.personal.email}`} className="hover:text-white transition-colors">Email</a>
           </div>
        </footer>

      </div>

      <AITerminal />
    </div>
  );
};

export default App;