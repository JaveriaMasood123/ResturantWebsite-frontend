import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-[#1A1A1A] border-b border-[#3A3A3A] px-8 py-5 flex justify-between items-center sticky top-0 z-50 backdrop-blur-sm">
      {/* Brand Logo */}
      <Link to="/" className="flex items-center gap-3 group">
        <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#C0392B] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <span className="text-xl">🍴</span>
        </div>
        <h1 className="text-2xl font-bold font-serif text-[#D4AF37] tracking-wide">
          SPICEHUB
        </h1>
      </Link>

      {/* Navigation Links */}
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

      {/* Auth Buttons */}
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
      <button className="md:hidden flex flex-col gap-1.5 w-6 h-6">
        <div className="w-full h-0.5 bg-[#D4AF37] rounded"></div>
        <div className="w-full h-0.5 bg-[#D4AF37] rounded"></div>
        <div className="w-full h-0.5 bg-[#D4AF37] rounded"></div>
      </button>

      {/* Mobile Menu Overlay (would be toggled with state) */}
      <div className="fixed inset-0 bg-[#1A1A1A]/95 backdrop-blur-sm md:hidden opacity-0 pointer-events-none transition-opacity duration-300">
        <div className="flex flex-col items-center justify-center h-full gap-8">
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
              className={`text-2xl font-semibold transition-all duration-300 ${
                location.pathname === item.path
                  ? "text-[#D4AF37]"
                  : "text-[#E5E5E5] hover:text-[#D4AF37]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
    </nav>
  );
}