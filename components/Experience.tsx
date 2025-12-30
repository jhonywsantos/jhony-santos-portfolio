
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-24 px-4 sm:px-6 scroll-mt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-8 leading-[1.1] uppercase">
              JORNADA <br className="hidden sm:block" />
              <span className="text-primary">PROFISSIONAL</span>
            </h2>
            <p className="text-base md:text-xl text-light/60 max-w-md">Evoluindo constantemente, enfrentando novos desafios e entregando resultados que impactam usuários reais.</p>
            
            <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex-1 min-w-[120px] bg-primary/10 p-5 md:p-6 rounded-2xl md:rounded-3xl border border-primary/20 text-center lg:text-left transition-all hover:bg-primary/20">
                <span className="block text-3xl md:text-4xl font-bold text-primary mb-1">+5</span>
                <span className="text-[10px] md:text-xs text-light/40 uppercase tracking-widest font-bold">Anos de Experiência</span>
              </div>
              <div className="flex-1 min-w-[120px] bg-primary/10 p-5 md:p-6 rounded-2xl md:rounded-3xl border border-primary/20 text-center lg:text-left transition-all hover:bg-primary/20">
                <span className="block text-3xl md:text-4xl font-bold text-primary mb-1">50+</span>
                <span className="text-[10px] md:text-xs text-light/40 uppercase tracking-widest font-bold">Projetos Entregues</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 mt-8 lg:mt-0">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 border-l-2 border-white/10 pb-6 md:pb-8 last:pb-0">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(46,53,255,0.8)]"></div>
                <span className="text-primary font-bold text-[10px] md:text-sm tracking-widest uppercase mb-1 md:mb-2 block">{exp.period}</span>
                <h3 className="text-lg md:text-2xl font-bold text-light mb-1 leading-tight">{exp.role}</h3>
                <h4 className="text-sm md:text-lg text-light/40 mb-3 md:mb-4">{exp.company}</h4>
                <p className="text-sm md:text-base text-light/60 leading-relaxed font-light">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
