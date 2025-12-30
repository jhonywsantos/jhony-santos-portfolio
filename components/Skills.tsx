
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mb-4 tracking-tighter uppercase">HABILIDADES</h2>
          <div className="h-2 w-24 md:w-32 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {SKILLS.map((skill, index) => (
            <div 
              key={skill.name} 
              className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl md:rounded-4xl flex flex-col items-center justify-center group hover:bg-primary transition-all duration-500 hover:-translate-y-2"
            >
              <span className="text-4xl md:text-5xl mb-4 group-hover:scale-125 transition-transform duration-500">
                {skill.icon}
              </span>
              <h3 className="font-bold text-lg md:text-xl mb-1 group-hover:text-light transition-colors">
                {skill.name}
              </h3>
              <span className="text-[10px] md:text-xs text-light/40 group-hover:text-light/60 transition-colors uppercase tracking-widest font-bold text-center">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
