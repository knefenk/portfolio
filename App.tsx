import React, { useState } from 'react';
import Starfield from './components/Starfield';
import AITerminal from './components/AITerminal';
import EnduranceStation from './components/EnduranceStation';
import { RESUME_DATA } from './constants';
import { Github, Linkedin, Mail, ArrowUpRight, Download } from 'lucide-react';

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
    <div className="min-h-screen bg-space-black text-zinc-300 font-sans selection:bg-white/20 selection:text-white relative overflow-x-hidden">
      
      {/* Background Layer */}
      <Starfield />
      
      {/* Navbar (Minimal) */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference pointer-events-none">
        <div className="font-serif font-semibold text-lg tracking-tight text-white pointer-events-auto opacity-0 md:opacity-100 transition-opacity">
          {/* Hidden on mobile since it's big in hero now */}
          TCP
        </div>
        <div className="flex gap-6 pointer-events-auto">
          <a href="#experience" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Projects</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 z-10">
        
        {/* The 3D Art - Positioned centrally but subtle */}
        <div className="absolute inset-0 z-0 opacity-60">
           <EnduranceStation />
        </div>
        
        {/* Overlay Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-black/30 to-space-black z-0 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-6 mt-10">
          <FadeIn delay={200}>
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-zinc-300 mb-4">
              {RESUME_DATA.personal.title}
            </span>
          </FadeIn>
          
          <FadeIn delay={400}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-white tracking-tight leading-[1.1] mb-2">
              Tan Chun Pan
            </h1>
          </FadeIn>

          <FadeIn delay={500}>
            <p className="text-2xl md:text-4xl text-zinc-500 font-serif italic tracking-wide">
              Engineering Intelligence.
            </p>
          </FadeIn>
          
          <FadeIn delay={600}>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed font-light mt-8">
              Specializing in robotics, computer vision, and the integration of AI into physical systems.
            </p>
          </FadeIn>

          <FadeIn delay={800}>
            <div className="flex justify-center gap-6 mt-8">
              <a href={`mailto:${RESUME_DATA.personal.email}`} className="flex items-center gap-2 text-white border-b border-white pb-0.5 hover:opacity-70 transition-opacity">
                <span>Contact Me</span> <ArrowUpRight size={14} />
              </a>
              <div className="flex gap-4">
                <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Github size={20} /></a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content Wrapper */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 pb-32 space-y-40">
        
        {/* About / Summary */}
        <section className="grid md:grid-cols-12 gap-12 items-start pt-20">
          <div className="md:col-span-4">
            <h2 className="text-4xl font-serif text-white sticky top-32">About</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl md:text-3xl font-serif text-zinc-200 leading-relaxed">
              {RESUME_DATA.personal.summary}
            </p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Computer Vision', 'Robotics', 'Deep Learning', 'System Design'].map(skill => (
                <div key={skill} className="pt-4 border-t border-white/10 text-sm text-zinc-400">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-4xl font-serif text-white sticky top-32">Experience</h2>
          </div>
          <div className="md:col-span-8 space-y-24">
            {RESUME_DATA.experience.map((exp, idx) => (
              <div key={idx} className="group border-b border-white/5 pb-16 last:border-0 last:pb-0">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                  <h3 className="text-3xl font-serif text-white group-hover:text-zinc-300 transition-colors">
                    {exp.company}
                  </h3>
                  <span className="font-mono text-base text-zinc-400 mt-2 md:mt-0 bg-white/5 px-3 py-1 rounded-md">
                    {exp.period}
                  </span>
                </div>
                <div className="text-xl text-zinc-300 mb-6 font-medium tracking-wide">{exp.role}</div>
                <p className="text-zinc-400 leading-loose font-light text-lg">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
             <h2 className="text-4xl font-serif text-white">Selected Projects</h2>
             <span className="text-base font-mono text-zinc-400">2024 — 2025</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {RESUME_DATA.projects.map((project, idx) => (
              <div key={idx} className="group relative bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-10 hover:bg-zinc-800/40 hover:border-white/10 transition-all duration-500">
                <div className="mb-8">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-black/50">
                     <ArrowUpRight size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-serif">{project.title}</h3>
                  <p className="text-sm font-mono text-zinc-400 uppercase tracking-wider">{project.role}</p>
                </div>
                <p className="text-zinc-400 leading-relaxed text-base">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Skills */}
        <section className="grid md:grid-cols-2 gap-20 pt-20 border-t border-white/10">
          <div>
            <h3 className="text-3xl font-serif text-white mb-10">Education</h3>
            {RESUME_DATA.education.map((edu, idx) => (
              <div key={idx} className="mb-10 last:mb-0">
                <div className="text-xl text-white font-medium mb-2">{edu.institution}</div>
                <div className="text-zinc-400 text-base mb-4">{edu.degree}</div>
                <div className="flex gap-3">
                  {edu.details.map(d => (
                    <span key={d} className="text-xs font-mono border border-white/10 px-3 py-1.5 rounded-full text-zinc-400 bg-white/5">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-3xl font-serif text-white mb-10">Technical Proficiency</h3>
            <div className="flex flex-wrap gap-3">
              {RESUME_DATA.skills.flatMap(s => s.items).map((skill) => (
                <span key={skill} className="px-4 py-2 bg-zinc-900 border border-white/5 rounded-xl text-base text-zinc-300 hover:border-white/20 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center pt-24 border-t border-white/5 text-zinc-500 text-sm">
           <div>&copy; {new Date().getFullYear()} Tan Chun Pan. All rights reserved.</div>
           <div className="flex gap-8 mt-6 md:mt-0 font-medium">
             <a href="#" className="hover:text-white transition-colors">Resume</a>
             <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
             <a href={`mailto:${RESUME_DATA.personal.email}`} className="hover:text-white transition-colors">Email</a>
           </div>
        </footer>

      </div>

      <AITerminal />
    </div>
  );
};

export default App;