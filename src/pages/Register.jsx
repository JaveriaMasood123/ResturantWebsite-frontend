import { useState } from "react";
import { register } from "../services/auth";
import { Link} from "react-router-dom";
export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await register(formData);
      alert("Registration successful!");
      console.log(data);
    } catch (err) {
      alert("Registration failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center p-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-[#D4AF37]/10"
            style={{
              width: `${Math.random() * 120 + 30}px`,
              height: `${Math.random() * 120 + 30}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float${i % 4} ${Math.random() * 12 + 8}s infinite ease-in-out`
            }}
          />
        ))}
      </div>

      {/* Luxury Registration Card */}
      <div className="relative bg-[#2A2A2A] rounded-2xl border border-[#3A3A3A] p-10 w-full max-w-md shadow-2xl shadow-[#D4AF37]/15 z-10 backdrop-blur-sm">
        {/* Gold Accent Header */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#D4AF37] to-[#C0392B] rounded-full flex items-center justify-center shadow-lg">
            <span className="text-3xl">👑</span>
          </div>
          <h2 className="text-3xl font-bold font-serif text-[#D4AF37] mb-3 tracking-wide">
            JOIN THE EXPERIENCE
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#C0392B] mx-auto mb-4"></div>
          <p className="text-[#E5E5E5] opacity-80 text-sm">
            Create your exclusive account for premium dining
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
              onChange={handleChange}
              required
            />
            <label className="absolute left-12 top-4 text-[#999] pointer-events-none transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
              Email Address
            </label>
          </div>

          {/* Password Field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#D4AF37]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <input
              type="password"
              name="password"
              placeholder=" "
              className="w-full bg-[#1A1A1A] border border-[#3A3A3A] text-white pl-12 pr-4 py-4 rounded-lg focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 transition-all duration-300 peer"
              onChange={handleChange}
              required
            />
            <label className="absolute left-12 top-4 text-[#999] pointer-events-none transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
              Password
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C0392B] hover:from-[#C0392B] hover:to-[#D4AF37] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform border border-[#D4AF37]/30 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              CREATE ACCOUNT
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#C0392B] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-8 text-center">
          <div className="w-20 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#C0392B] mx-auto mb-4"></div>
          <p className="text-[#999] text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-[#D4AF37] hover:text-[#C0392B] transition-colors duration-300 font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Custom CSS for floating animation */}
      <style>{`
        @keyframes float0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(5deg); opacity: 0.6; }
        }
        @keyframes float1 {
          0%, 100% { transform: translateX(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateX(20px) rotate(-5deg); opacity: 0.6; }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translate(15px, -15px) rotate(8deg); opacity: 0.6; }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translate(-15px, 10px) rotate(-8deg); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
