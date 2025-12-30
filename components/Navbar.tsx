
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Contato', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-dark/95 backdrop-blur-md py-4 shadow-xl border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <a href="#" className="font-display font-extrabold text-xl md:text-2xl tracking-tighter text-light uppercase">
            JHONY SANTOS
          </a>
          <div className="h-[2px] w-8 md:w-12 bg-light/30 hidden sm:block"></div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-light/70 hover:text-primary font-medium transition-colors text-xs uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger Toggle */}
        <button 
          className="md:hidden text-light focus:outline-none z-[110]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-light transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-full bg-light transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-full bg-light transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-dark z-[105] flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-light text-2xl font-display font-bold uppercase tracking-widest hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Icons (Desktop only) */}
        <div className="hidden md:flex gap-1">
          <svg className="w-4 h-4 text-light opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l3.09 9.5h9.91l-8.02 5.82 3.09 9.5-8.07-5.88-8.07 5.88 3.09-9.5-8.02-5.82h9.91z"/></svg>
          <svg className="w-4 h-4 text-light" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l3.09 9.5h9.91l-8.02 5.82 3.09 9.5-8.07-5.88-8.07 5.88 3.09-9.5-8.02-5.82h9.91z"/></svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
