export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-[#3A3A3A] py-12 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-[#D4AF37]/10"
            style={{
              width: `${Math.random() * 80 + 20}px`,
              height: `${Math.random() * 80 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float${i % 3} ${Math.random() * 15 + 10}s infinite ease-in-out`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-serif text-[#D4AF37] mb-4">
              SPICEHUB
            </h3>
            <p className="text-[#E5E5E5] opacity-80 text-sm mb-4">
              Where culinary excellence meets timeless elegance. Experience premium dining like never before.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="w-10 h-10 bg-[#2A2A2A] border border-[#D4AF37]/30 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-300">
                <span className="text-lg">📱</span>
              </a>
              <a href="#" className="w-10 h-10 bg-[#2A2A2A] border border-[#D4AF37]/30 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-300">
                <span className="text-lg">💬</span>
              </a>
              <a href="#" className="w-10 h-10 bg-[#2A2A2A] border border-[#D4AF37]/30 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-300">
                <span className="text-lg">📸</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {['Menu', 'Reservations', 'About Us', 'Gallery', 'Testimonials'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#E5E5E5] opacity-80 hover:text-[#D4AF37] hover:opacity-100 transition-all duration-300 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">CONTACT US</h4>
            <div className="space-y-2 text-sm">
              <p className="text-[#E5E5E5] opacity-80">📍 123 Luxury Street, Premium District</p>
              <p className="text-[#E5E5E5] opacity-80">📞 +1 (555) 123-4567</p>
              <p className="text-[#E5E5E5] opacity-80">✉️ info@spicehub.com</p>
              <p className="text-[#E5E5E5] opacity-80">⏰ Mon-Sun: 11AM - 11PM</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">NEWSLETTER</h4>
            <p className="text-[#E5E5E5] opacity-80 text-sm mb-4">
              Subscribe for exclusive offers and updates
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-[#2A2A2A] border border-[#3A3A3A] text-white px-4 py-2 rounded-lg focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 transition-all duration-300 text-sm"
              />
              <button className="bg-gradient-to-r from-[#D4AF37] to-[#C0392B] hover:from-[#C0392B] hover:to-[#D4AF37] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#E5E5E5] opacity-80 text-sm">
            © {new Date().getFullYear()} SpiceHub Catering. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-[#E5E5E5] opacity-80 hover:text-[#D4AF37] transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-[#E5E5E5] opacity-80 hover:text-[#D4AF37] transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-[#E5E5E5] opacity-80 hover:text-[#D4AF37] transition-colors duration-300 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]"></div>
      </div>

      {/* Custom CSS for floating animation */}
      <style>{`
        @keyframes float0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-15px) rotate(3deg); opacity: 0.4; }
        }
        @keyframes float1 {
          0%, 100% { transform: translateX(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateX(15px) rotate(-3deg); opacity: 0.4; }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translate(10px, -10px) rotate(4deg); opacity: 0.4; }
        }
      `}</style>
    </footer>
  );
}