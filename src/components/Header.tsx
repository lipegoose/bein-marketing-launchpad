
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#" className="flex items-center hover:opacity-90 transition-opacity duration-300">
          <img 
            src="/lovable-uploads/ccf5c56c-1c75-43cc-8b09-7afdd0fb84ac.png" 
            alt="useBein Logo" 
            className="h-10 hover:scale-105 transition-all duration-300" 
          />
        </a>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="nav-link">Home</a>
          <a href="#features" className="nav-link">Funcionalidades</a>
          <a href="#pricing" className="nav-link">Preços</a>
          <a href="#help" className="nav-link">Ajuda</a>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <button className="btn-primary animate-pulse-light">
            Experimente a versão beta
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg py-4 absolute w-full top-[72px] left-0 z-50">
          <div className="container-custom flex flex-col space-y-4">
            <a 
              href="#" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#features" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Funcionalidades
            </a>
            <a 
              href="#pricing" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Preços
            </a>
            <a 
              href="#help" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Ajuda
            </a>
            <button 
              className="btn-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Experimente a versão beta
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
