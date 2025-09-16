import { useEffect, useState } from "react";
import { getOrders } from "../services/order";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("No token found. Please login.");
          setLoading(false);
          return;
        }

        const data = await getOrders(token);
        setOrders(data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#E5E5E5] opacity-80">Loading your exclusive orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] p-8">
      {/* Luxury Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-serif text-[#D4AF37] mb-4">
          ✨ YOUR ORDERS
        </h2>
        <div className="w-20 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#C0392B] mx-auto mb-4"></div>
        <p className="text-[#E5E5E5] opacity-80">
          Review your premium dining experiences
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-24 h-24 bg-[#2A2A2A] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#D4AF37]/30">
            <span className="text-4xl">📦</span>
          </div>
          <h3 className="text-2xl font-semibold text-[#E5E5E5] mb-4">
            No Orders Yet
          </h3>
          <p className="text-[#999] mb-8">
            Start your culinary journey with our exquisite menu
          </p>
          <a 
            href="/menu" 
            className="px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C0392B] text-white font-semibold rounded-lg hover:from-[#C0392B] hover:to-[#D4AF37] transition-all duration-300"
          >
            Explore Menu
          </a>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {orders.map((order) => {
            const total = order.items.reduce(
              (sum, item) => sum + (item.menuItem?.price || 0) * item.quantity,
              0
            );

            return (
              <div
                key={order._id}
                className="bg-[#2A2A2A] rounded-2xl border border-[#3A3A3A] p-6 hover:border-[#D4AF37]/50 transition-all duration-300 group"
              >
                {/* Gold Accent Top */}
                <div className="absolute -top-1 left-6 right-6 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C0392B] rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Order Header */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-[#D4AF37] font-serif">
                      Order #{order._id.slice(-8).toUpperCase()}
                    </h3>
                    <p className="text-sm text-[#999]">
                      Placed on {new Date(order.createdAt || new Date()).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`px-4 py-2 text-sm rounded-full font-semibold ${
                    order.status === 'completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : order.status === 'preparing'
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {order.status?.toUpperCase()}
                  </span>
                </div>

                {/* Order Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-[#1A1A1A] rounded-lg p-4 border border-[#3A3A3A]">
                    <h4 className="text-[#D4AF37] font-semibold mb-2 flex items-center gap-2">
                      <span>📅</span> Event Details
                    </h4>
                    <p className="text-[#E5E5E5] text-sm">
                      {new Date(order.eventDate).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-[#999] text-sm">Guests: {order.guests}</p>
                  </div>

                  <div className="bg-[#1A1A1A] rounded-lg p-4 border border-[#3A3A3A]">
                    <h4 className="text-[#D4AF37] font-semibold mb-2 flex items-center gap-2">
                      <span>💰</span> Payment Summary
                    </h4>
                    <p className="text-[#E5E5E5] text-sm">Items: {order.items.length}</p>
                    <p className="text-[#D4AF37] font-semibold">Total: Rs. {total}</p>
                  </div>
                </div>

                {/* Items List */}
                <div className="mb-6">
                  <h4 className="text-[#D4AF37] font-semibold mb-3 flex items-center gap-2">
                    <span>🍽️</span> Order Items
                  </h4>
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-[#3A3A3A]/50 last:border-b-0">
                        <div className="flex-1">
                          <p className="text-[#E5E5E5] font-medium">{item.menuItem?.name}</p>
                          <p className="text-[#999] text-sm">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-[#D4AF37] font-semibold">
                          Rs. {(item.menuItem?.price || 0) * item.quantity}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-[#3A3A3A]">
                  <button className="px-4 py-2 bg-[#1A1A1A] border border-[#D4AF37]/30 text-[#D4AF37] rounded-lg text-sm hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-300">
                    Track Order
                  </button>
                  <button className="px-4 py-2 bg-[#1A1A1A] border border-[#C0392B]/30 text-[#C0392B] rounded-lg text-sm hover:bg-[#C0392B] hover:text-white transition-all duration-300">
                    Reorder
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#C0392B] z-50"></div>
    </div>
  );
}