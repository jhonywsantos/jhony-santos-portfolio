
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-display font-extrabold text-2xl text-light">
          JHONY SANTOS
        </div>
        
        <p className="text-light/40 text-sm">
          &copy; {new Date().getFullYear()} Jhony Santos. Desenvolvido com foco em UX/UI.
        </p>

        <div className="flex gap-8">
          <a href="#" className="text-light/60 hover:text-primary transition-colors text-xs uppercase tracking-widest font-bold">Privacidade</a>
          <a href="#" className="text-light/60 hover:text-primary transition-colors text-xs uppercase tracking-widest font-bold">Termos</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
