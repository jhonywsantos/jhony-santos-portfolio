
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-light overflow-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Decorative Divider */}
        <div className="container mx-auto px-6 py-12">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-light/20 to-transparent"></div>
        </div>

        <About />
        
        <Skills />
        
        <Projects />
        
        <Experience />
        
        <Contact />
      </main>

      <Footer />

      {/* Background decoration elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
    </div>
  );
};

export default App;
