
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 bg-[#181818] scroll-mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="w-full">
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tighter mb-4 uppercase">PROJETOS</h2>
            <p className="text-lg md:text-xl text-light/60 max-w-xl">Uma seleção de trabalhos que definem meu compromisso com a excelência técnica e visual.</p>
          </div>
          <div className="hidden md:flex gap-4 flex-shrink-0">
            <button className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-light/20 flex items-center justify-center hover:bg-primary transition-colors group">
              <svg className="w-6 h-6 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
            <button className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-light/20 flex items-center justify-center hover:bg-primary transition-colors group">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-video rounded-3xl md:rounded-5xl overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                  <div className="bg-light text-dark px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest shadow-xl">
                    {project.category}
                  </div>
                </div>
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-2 group-hover:text-primary transition-colors uppercase">{project.title}</h3>
              <p className="text-sm md:text-base text-light/60 line-clamp-2">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <a href="#" className="inline-flex items-center gap-4 font-display font-bold text-xl md:text-2xl hover:text-primary transition-all group">
            Ver todos no GitHub
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-all">
              <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
