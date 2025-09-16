import { useState } from "react";
import { sendInquiry } from "../services/inquiry";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("⚠️ Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      await sendInquiry(formData);
      alert("✅ Inquiry sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      alert("❌ Failed to send inquiry: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center p-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-[#D4AF37]/10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float${i % 4} ${Math.random() * 15 + 10}s infinite ease-in-out`
            }}
          />
        ))}
      </div>

      {/* Luxury Contact Card */}
      <div className="relative bg-[#2A2A2A] rounded-3xl border border-[#3A3A3A] p-10 w-full max-w-md shadow-2xl shadow-[#D4AF37]/20 z-10 backdrop-blur-sm">
        {/* Gold Accent Header */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#D4AF37] to-[#C0392B] rounded-full flex items-center justify-center shadow-lg">
            <span className="text-3xl">📩</span>
          </div>
          <h2 className="text-3xl font-bold font-serif text-[#D4AF37] mb-3 tracking-wide">
            CONTACT US
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#C0392B] mx-auto mb-4"></div>
          <p className="text-[#E5E5E5] opacity-80 text-sm">
            Reach out for an exquisite dining experience
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#D4AF37]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <input
              type="text"
              name="name"
              placeholder=" "
              className="w-full bg-[#1A1A1A] border border-[#3A3A3A] text-white pl-12 pr-4 py-4 rounded-lg focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 transition-all duration-300 peer"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label className="absolute left-12 top-4 text-[#999] pointer-events-none transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
              Full Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#D4AF37]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>
            <input
              type="email"
              name="email"
              placeholder=" "
              className="w-full bg-[#1A1A1A] border border-[#3A3A3A] text-white pl-12 pr-4 py-4 rounded-lg focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 transition-all duration-300 peer"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label className="absolute left-12 top-4 text-[#999] pointer-events-none transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
              Email Address
            </label>
          </div>

          {/* Message Field */}
          <div className="relative">
            <div className="absolute left-4 top-6 text-[#D4AF37]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <textarea
              name="message"
              placeholder=" "
              className="w-full bg-[#1A1A1A] border border-[#3A3A3A] text-white pl-12 pr-4 py-4 rounded-lg focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 transition-all duration-300 peer resize-none min-h-[120px]"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <label className="absolute left-12 top-4 text-[#999] pointer-events-none transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C0392B] hover:from-[#C0392B] hover:to-[#D4AF37] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transform border border-[#D4AF37]/30 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  SENDING...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  SEND INQUIRY
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#C0392B] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-disabled:opacity-0"></div>
          </button>
        </form>

        {/* Additional Contact Info */}
        <div className="mt-8 text-center">
          <div className="w-20 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#C0392B] mx-auto mb-4"></div>
          <p className="text-[#999] text-sm">
            Prefer to call? <span className="text-[#D4AF37]">+1 (555) 123-4567</span>
          </p>
        </div>
      </div>

      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-20px) rotate(5deg); opacity: 0.4; }
        }
        @keyframes float1 {
          0%, 100% { transform: translateX(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateX(20px) rotate(-5deg); opacity: 0.4; }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translate(15px, -15px) rotate(8deg); opacity: 0.4; }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translate(-15px, 10px) rotate(-8deg); opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}