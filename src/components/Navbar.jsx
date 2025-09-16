import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="bg-[#1A1A1A] border-b border-[#3A3A3A] px-8 py-5 flex justify-between items-center sticky top-0 z-50 backdrop-blur-sm">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
          <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#C0392B] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-xl">🍴</span>
          </div>
          <h1 className="text-2xl font-bold font-serif text-[#D4AF37] tracking-wide">
            SPICEHUB
          </h1>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { path: "/", label: "HOME" },
            { path: "/menu", label: "MENU" },
            { path: "/orders", label: "ORDERS" },
            { path: "/contact", label: "CONTACT" }
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-3 py-2 font-semibold transition-all duration-300 group ${
                location.pathname === item.path
                  ? "text-[#D4AF37]"
                  : "text-[#E5E5E5] hover:text-[#D4AF37]"
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#C0392B]"></div>
              )}
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#C0392B] group-hover:w-full transition-all duration-300"></div>
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="px-6 py-2 bg-transparent border border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-300 font-semibold text-sm"
          >
            SIGN IN
          </Link>
          <Link
            to="/register"
            className="px-6 py-2 bg-gradient-to-r from-[#D4AF37] to-[#C0392B] text-white rounded-lg hover:from-[#C0392B] hover:to-[#D4AF37] transition-all duration-300 font-semibold text-sm"
          >
            JOIN US
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 relative z-60 justify-center items-center"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className={`w-6 h-0.5 bg-[#D4AF37] rounded transition-all duration-300 ${
            isMobileMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''
          }`}></div>
          <div className={`w-6 h-0.5 bg-[#D4AF37] rounded transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}></div>
          <div className={`w-6 h-0.5 bg-[#D4AF37] rounded transition-all duration-300 ${
            isMobileMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''
          }`}></div>
        </button>
      </nav>

      {/* Mobile Menu Overlay - Placed outside the nav for better z-index management */}
      <div className={`fixed inset-0 bg-[#1A1A1A] md:hidden transition-all duration-300 z-40 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none delay-300'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-10 relative p-8">
          {/* Close Button */}
          <button
            onClick={closeMobileMenu}
            className="absolute top-8 right-8 w-12 h-12 bg-[#2A2A2A] border-2 border-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-all duration-300"
            aria-label="Close menu"
          >
            <span className="text-2xl text-[#D4AF37] hover:text-[#1A1A1A]">✕</span>
          </button>

          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-8">
            {[
              { path: "/", label: "HOME" },
              { path: "/menu", label: "MENU" },
              { path: "/orders", label: "ORDERS" },
              { path: "/contact", label: "CONTACT" },
              { path: "/login", label: "SIGN IN" },
              { path: "/register", label: "JOIN US" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={`text-4xl font-bold transition-all duration-300 hover:scale-110 ${
                  location.pathname === item.path
                    ? "text-[#D4AF37] scale-110"
                    : "text-[#E5E5E5] hover:text-[#D4AF37]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Backdrop Blur Overlay */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300 z-30 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none delay-300'
      }`}></div>
    </>
  );
}
