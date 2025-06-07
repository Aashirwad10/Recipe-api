import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

const handleSubmit = async () => {
  if (!email.trim()) return;

  // Simple email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setErrorMessage("Please enter a valid email address.");
    return;
  }

  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, { email });
    if (response.data.success) {
      setShowToast(true);
      setErrorMessage("");
      localStorage.setItem("contact_email", email);
      setEmail("");
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } else {
      setErrorMessage(response.data.message || "Something went wrong.");
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      setErrorMessage(error.response.data.message);
    } else {
      setErrorMessage("Server error. Please try again later.");
    }
  }
};


  return (
    <>
      <Header />

      <div className="relative w-full h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center overflow-hidden font-sans">

        {/* Animated Background Bubbles */}
        <div className="absolute w-[300px] h-[300px] bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-[float1_6s_ease-in-out_infinite]"></div>
        <div className="absolute w-[250px] h-[250px] bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-[float2_8s_ease-in-out_infinite]"></div>
        <div className="absolute w-[200px] h-[200px] bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-[float3_10s_ease-in-out_infinite]"></div>

        {/* Contact Card */}
        <div className="relative z-10 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-10 max-w-lg w-full text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2 animate-header-bounce">
            Say Hello 👋
          </h1>
          <p className="text-gray-700 mb-6 animate-fadein-slow">
            Drop your email — we’ll reach out when the stars align ✨
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 text-gray-800"
            />
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all duration-300"
            >
              Drop ✨
            </button>
          </div>

          {showToast && (
            <div className="mt-6 text-green-700 bg-green-100 px-4 py-2 rounded-lg shadow-lg animate-fadein">
              Thank you! We'll be in touch.
            </div>
          )}

          {errorMessage && (
            <div className="mt-6 text-red-700 bg-red-100 px-4 py-2 rounded-lg shadow-lg animate-fadein">
              {errorMessage}
            </div>
          )}

          {/* Social Icons */}
          <div className="mt-8 flex justify-center space-x-6">
            {/* social icon links unchanged */}
            {/* ... */}
          </div>
        </div>
      </div>

      <Footer />

      {/* Inline animations */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(20px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(30px) translateX(-30px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-40px) translateX(10px); }
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-fadein {
          animation: fadein 0.5s ease-out;
        }
        .animate-fadein-slow {
          animation: fadein 1s ease-out;
        }
        .animate-header-bounce {
          animation: bounce 1.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default ContactUs;
