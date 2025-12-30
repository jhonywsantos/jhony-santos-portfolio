
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 scroll-mt-20">
      <div className="container mx-auto">
        <div className="bg-primary rounded-4xl md:rounded-5xl p-8 sm:p-12 md:p-20 lg:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            <div>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-light leading-tight mb-8 uppercase">
                Vamos criar <br className="hidden md:block" /> algo incrível <br className="hidden md:block" /> <span className="text-outline italic lowercase">juntos?</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-lg md:text-xl font-medium text-light">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-light/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <span className="break-all">jhonywsantos@example.com</span>
                </div>
                <div className="flex items-center gap-4 text-lg md:text-xl font-medium text-light">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-light/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  Maceió, AL - Brasil
                </div>
              </div>

              <div className="mt-10 md:mt-12 flex flex-wrap gap-4">
                {['LinkedIn', 'GitHub', 'Instagram'].map(social => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl border-2 border-light/20 flex items-center justify-center hover:bg-light hover:text-primary transition-all duration-300 font-bold"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>

            <form className="bg-light rounded-3xl md:rounded-4xl p-8 md:p-12 shadow-2xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-dark font-bold mb-2 uppercase tracking-widest text-[10px]">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full bg-dark/5 border-b-2 border-dark/10 py-3 md:py-4 focus:border-primary outline-none text-dark transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-dark font-bold mb-2 uppercase tracking-widest text-[10px]">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full bg-dark/5 border-b-2 border-dark/10 py-3 md:py-4 focus:border-primary outline-none text-dark transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-dark font-bold mb-2 uppercase tracking-widest text-[10px]">Mensagem</label>
                  <textarea 
                    rows={3}
                    className="w-full bg-dark/5 border-b-2 border-dark/10 py-3 md:py-4 focus:border-primary outline-none text-dark transition-colors resize-none"
                    placeholder="Conte-me sobre seu projeto"
                  ></textarea>
                </div>
                <button className="w-full bg-primary text-light py-4 md:py-6 rounded-xl md:rounded-2xl font-display font-bold text-lg md:text-xl hover:shadow-lg hover:-translate-y-1 transition-all">
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
