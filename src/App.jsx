import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1A]">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-[#D4AF37]/5"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float${i % 4} ${Math.random() * 20 + 15}s infinite ease-in-out`
            }}
          />
        ))}
      </div>

      <Navbar />

      <main className="flex-grow relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-30px) rotate(5deg); opacity: 0.3; }
        }
        @keyframes float1 {
          0%, 100% { transform: translateX(0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translateX(30px) rotate(-5deg); opacity: 0.3; }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translate(20px, -20px) rotate(8deg); opacity: 0.3; }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); opacity: 0.1; }
          50% { transform: translate(-20px, 15px) rotate(-8deg); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}

export default App;