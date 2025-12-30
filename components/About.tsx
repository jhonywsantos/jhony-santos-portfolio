
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-24 px-4 sm:px-6 bg-dark overflow-hidden scroll-mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="w-full lg:w-3/5">
            <div className="relative mb-8 md:mb-12">
              <span className="absolute -left-6 md:-left-12 -top-6 md:-top-12 text-6xl md:text-8xl font-display font-extrabold text-primary opacity-20 pointer-events-none select-none">
                S
              </span>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-light relative uppercase">
                SOBRE MIM
              </h2>
            </div>
            
            <div className="space-y-6 text-base sm:text-lg md:text-xl text-light/80 font-light leading-relaxed">
              <p>
                Graduando em <span className="text-light font-bold">Ciência da Computação pela UFAL</span>, apaixonado por <span className="text-light font-bold">criar soluções acessíveis e intuitivas</span>.
              </p>
              <p>
                Como um profissional multidisciplinar, atuei com suporte técnico, infraestrutura de redes e desenvolvimento web. Tenho domínio em <span className="text-light font-bold">Desenvolvimento Web, Front-End & Design</span>, busco constantemente alinhar tecnologia à experiência do usuário.
              </p>
              <p>
                Minha abordagem combina <span className="text-light font-bold">habilidades técnicas</span> com uma <span className="text-light font-bold">compreensão profunda das necessidades do usuário</span>, resultando em produtos digitais que são tanto funcionais quanto agradáveis de usar.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative w-full max-w-xs">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-4 md:border-8 border-primary rounded-[2rem] md:rounded-[3rem] -z-10 translate-x-2 md:translate-x-4 -translate-y-2 md:-translate-y-4"></div>
              <div className="w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-primary/20 p-2">
                <img 
                  src="https://raw.githubusercontent.com/jhonywsantos/JWS/main/assets/img/profile.jpg" 
                  alt="Jhony Santos" 
                  className="w-full h-auto rounded-[1.75rem] md:rounded-[2.5rem] grayscale object-cover aspect-[3/4]"
                />
              </div>
              <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-primary text-light px-4 md:px-6 py-2 md:py-4 rounded-xl md:rounded-2xl font-display font-bold text-sm md:text-lg shadow-2xl">
                Jhony Santos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
