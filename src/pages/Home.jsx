export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-screen" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')" }}>
        
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/80 via-[#1A1A1A]/60 to-[#1A1A1A]/90 flex flex-col items-center justify-center text-center text-white px-6">
          
          {/* Luxury Header */}
          <div className="mb-8">
            <h1 className="text-6xl font-bold font-serif text-[#D4AF37] mb-4 tracking-wide">
              SPICEHUB
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C0392B] mx-auto mb-4"></div>
            <p className="text-xl text-[#E5E5E5] opacity-90 font-light">
              Where Culinary Excellence Meets Timeless Elegance
            </p>
          </div>

          {/* Premium Tagline */}
          <div className="mb-12">
            <div className="flex justify-center items-center gap-6 text-[#D4AF37] mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                <span className="text-sm">Authentic Flavors</span>
              </div>
              <div className="w-1 h-1 bg-[#D4AF37] rounded-full"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                <span className="text-sm">Fresh Ingredients</span>
              </div>
              <div className="w-1 h-1 bg-[#D4AF37] rounded-full"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                <span className="text-sm">Great Ambiance</span>
              </div>
            </div>
          </div>

          {/* Luxury CTA Buttons */}
          <div className="flex gap-6">
            <a 
              href="/Menu" 
              className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C0392B] text-white font-semibold rounded-lg hover:from-[#C0392B] hover:to-[#D4AF37] transition-all duration-300 hover:shadow-2xl hover:scale-105 transform border border-[#D4AF37]/30"
            >
              EXPLORE MENU
            </a>
            <a 
              href="/"
              className="px-8 py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-300 hover:shadow-2xl hover:scale-105 transform"
            >
              RESERVE TABLE
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#D4AF37] rounded-full mt-2"></div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-8 left-8">
          <div className="w-4 h-4 bg-[#D4AF37] rounded-full"></div>
        </div>
        <div className="absolute top-8 right-8">
          <div className="w-4 h-4 bg-[#C0392B] rounded-full"></div>
        </div>
        <div className="absolute bottom-8 left-8">
          <div className="w-4 h-4 bg-[#C0392B] rounded-full"></div>
        </div>
        <div className="absolute bottom-8 right-8">
          <div className="w-4 h-4 bg-[#D4AF37] rounded-full"></div>
        </div>
      </div>

      {/* Luxury Features Section */}
      <div className="py-20 bg-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-[#D4AF37] mb-4">
              WHY CHOOSE SPICEHUB
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#C0392B] mx-auto mb-6"></div>
            <p className="text-[#E5E5E5] opacity-80 text-lg">
              Experience the pinnacle of culinary excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#C0392B] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Master Chefs</h3>
              <p className="text-[#E5E5E5] opacity-80">World-class culinary experts crafting perfection</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#C0392B] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fresh Ingredients</h3>
              <p className="text-[#E5E5E5] opacity-80">Locally sourced, organic produce daily</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#C0392B] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">5-Star Experience</h3>
              <p className="text-[#E5E5E5] opacity-80">Impeccable service in an elegant atmosphere</p>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Footer CTA */}
      <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] py-16 text-center">
        <h3 className="text-3xl font-bold font-serif text-[#D4AF37] mb-6">
          READY FOR AN EXQUISITE EXPERIENCE?
        </h3> 
         <a 
          href="/Contact" 
          className="inline-block px-12 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C0392B] text-white font-semibold rounded-lg hover:from-[#C0392B] hover:to-[#D4AF37] transition-all duration-300 hover:shadow-2xl hover:scale-105 transform border border-[#D4AF37]/30"
        >
          MAKE RESERVATION
        </a>
      </div>
    </div>
  );
}
