import { useEffect, useState } from "react";
import { getMenuItems } from "../services/menu";
import { createOrder } from "../services/order"; 
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMenu() {
      try {
        const data = await getMenuItems();
        setMenu(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchMenu();
  }, []);

  async function handleOrder(itemId) {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("❌ Please login to place an order");
        navigate("/login");
        return;
      }

      const orderData = {
        items: [{ menuItem: itemId, quantity: 1 }],
        eventDate: new Date().toISOString(),
        guests: 1,
      };

      await createOrder(orderData, token);
      alert("✅ Order placed successfully!");
      navigate("/orders");
    } catch (err) {
      console.error("❌ Order failed:", err.response?.data || err.message);
      alert("Order failed!");
    }
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] p-8">
      {/* Luxury Header */}
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h2 className="text-5xl font-bold text-[#D4AF37] mb-4 font-serif tracking-wider">
            ✨ EXQUISITE MENU ✨
          </h2>
          {/* <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C0392B]"></div> */}
        </div>
        <p className="text-[#E5E5E5] text-lg max-w-2xl mx-auto opacity-90 font-light">
          Indulge in our curated selection of premium culinary masterpieces
        </p>
      </div>

      {/* Luxury Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {menu.map((item) => (
          <div
            key={item._id}
            className="bg-[#2A2A2A] rounded-xl border border-[#3A3A3A] hover:border-[#D4AF37] transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/20 overflow-hidden group relative"
          >
            {/* Gold Accent Border Top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C0392B]"></div>
            
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"}
                alt={item.name}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-[#1A1A1A]/90 backdrop-blur-md text-[#D4AF37] text-xs font-semibold px-3 py-2 rounded-full border border-[#D4AF37]/30">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 font-serif">
                {item.name}
              </h3>
              
              {/* Divider */}
              <div className="w-12 h-0.5 bg-[#D4AF37] mb-4"></div>
              
              {/* Price and Button */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[#D4AF37]">
                    Rs. {item.price}
                  </span>
                  <span className="text-xs text-[#999]">Exclusive</span>
                </div>
                <button
                  onClick={() => handleOrder(item._id)}
                  className="bg-gradient-to-r from-[#D4AF37] to-[#C0392B] hover:from-[#C0392B] hover:to-[#D4AF37] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 border border-[#D4AF37]/30"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Luxury Loading State */}
      {menu.length === 0 && (
        <div className="text-center py-20">
          <div className="relative">
            <div className="w-16 h-16 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#D4AF37] rounded-full"></div>
          </div>
          <p className="text-[#E5E5E5] text-lg opacity-80">Curating your luxury experience...</p>
        </div>
      )}

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#C0392B] z-50"></div>
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#C0392B] to-[#D4AF37] z-50"></div>
    </div>
  );
}