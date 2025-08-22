import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { MobileNav } from "./navigation/mobileNav";


const Header = () => {
  const navigationItems = [
    { to: "/", label: "Sobre min" },
    { to: "/aboutUs", label: "Projetos" },
    { to: "/contact", label: "Contato" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 40) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowHeader(false); // Scroll down, hide
      } else {
        setShowHeader(true); // Scroll up, show
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full bg-transparent sticky top-0 z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto max-w-6xl h-24 px-4 grid grid-cols-3 items-center">
        {/* Logo - centralizado no mobile, à esquerda no desktop */}
        <div className="col-span-1 flex justify-center md:justify-start">
          <Link to="/" className="group flex flex-col items-center md:items-start relative">
            <span className="absolute inset-0 w-full h-full bg-black rounded-2xl z-0" style={{pointerEvents: 'none'}} />
            <span className="text-2xl transition-colors text-slate-200 font-semibold leading-none z-10">Eduardo</span>
            <span className="text-2xl transition-colors text-slate-200 font-semibold leading-none z-10">Gillung</span>
          </Link>
        </div>

        {/* Navigation (desktop) - permanece centralizada */}
        <div className="hidden md:flex w-full h-full items-center justify-center col-span-1">

            <nav className="flex justify-center items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-slate-200 transition-all duration-200 transform hover:scale-110 hover:text-red-500"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
        </div>

        {/* Mobile Menu Button - totalmente à direita no mobile */}
        <div className="col-span-1 flex justify-end">
          <button
            className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-cyan-300 hover:text-cyan-500 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigationItems={navigationItems}
      />
    </header>
  );
};

export default Header;
