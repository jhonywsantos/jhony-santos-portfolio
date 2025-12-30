import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="bg-primary rounded-4xl md:rounded-5xl p-8 sm:p-12 md:p-20 lg:p-24 relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh]">
          {/* Abstract Vector Elements */}
          <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 z-10 w-full">
            <div className="relative group flex-shrink-0">
              {/* Profile Image Container fixed to be perfectly square and rounded */}
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 lg:w-80 aspect-square rounded-full overflow-hidden border-4 border-light/20 relative z-10 transition-transform duration-500 group-hover:scale-105 shadow-2xl">
                <img 
                  src="assets/profile-home.png" 
                  alt="Jhony Santos" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -inset-4 bg-light/10 rounded-full blur-xl group-hover:bg-light/20 transition-all"></div>
            </div>

            <div className="text-center lg:text-left max-w-4xl">
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-light leading-[1.1] tracking-tight mb-8 break-words uppercase">
                Criando experiências <br className="hidden md:block" />
                <span className="italic font-light opacity-90 lowercase">intuitivas &</span> significativas
              </h1>
              
              <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start">
                <a 
                  href="#projects" 
                  className="bg-light text-dark px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
                >
                  Ver Projetos
                </a>
                <a 
                  href="#contact" 
                  className="bg-transparent border-2 border-light/30 text-light px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-light/10 transition-all flex items-center gap-2 group"
                >
                  Contato
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

npm install react @types/react
