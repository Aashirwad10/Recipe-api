import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = () => {
    if (!email.trim()) return;

    localStorage.setItem("contact_email", email);

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setEmail("");
    }, 3000);
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

          {/* Social Icons */}
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/vigor.spiritless"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110"
              title="Facebook"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/black_eyelol/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition transform hover:scale-110"
              title="Instagram"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.2 1.1.6 1.6 1.1.5.5.9 1 1.1 1.6.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.2.6-.6 1.1-1.1 1.6-.5.5-1 .9-1.6 1.1-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1.1-.6-1.6-1.1-.5-.5-.9-1-1.1-1.6-.2-.5-.4-1.3-.5-2.5-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.2-.6.6-1.1 1.1-1.6.5-.5 1-.9 1.6-1.1.5-.2 1.3-.4 2.5-.5 1.3-.1 1.7-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7 .1 5.6.2 4.6.5 3.8.8 2.8 1.1 2 1.6 1.3 2.3.5 3 .1 3.8-.2 4.8c-.3.8-.6 1.8-.7 3.2C-.1 9.3 0 9.7 0 12c0 2.3-.1 2.7.1 4 .1 1.4.4 2.4.7 3.2.3 1 .8 1.8 1.5 2.5.7.7 1.5 1.2 2.5 1.5.8.3 1.8.6 3.2.7 1.3.1 1.7.1 4 .1s2.7 0 4-.1c1.4-.1 2.4-.4 3.2-.7 1-.3 1.8-.8 2.5-1.5.7-.7 1.2-1.5 1.5-2.5.3-.8.6-1.8.7-3.2.1-1.3.1-1.7.1-4s0-2.7-.1-4c-.1-1.4-.4-2.4-.7-3.2-.3-1-.8-1.8-1.5-2.5-.7-.7-1.5-1.2-2.5-1.5-.8-.3-1.8-.6-3.2-.7C15.3.1 14.9 0 12 0zM12 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-11.4a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/aashirwad-budhathoki-969832347/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition transform hover:scale-110"
              title="LinkedIn"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M20.5 0H3.5C1.6 0 0 1.6 0 3.5V20.5C0 22.4 1.6 24 3.5 24H20.5C22.4 24 24 22.4 24 20.5V3.5C24 1.6 22.4 0 20.5 0ZM7.1 20.4H3.8V9H7.1V20.4ZM5.4 7.5C4.3 7.5 3.4 6.6 3.4 5.5C3.4 4.4 4.3 3.5 5.4 3.5C6.5 3.5 7.4 4.4 7.4 5.5C7.4 6.6 6.5 7.5 5.4 7.5ZM20.4 20.4H17.1V14.9C17.1 13.6 17.1 11.9 15.3 11.9C13.5 11.9 13.3 13.3 13.3 14.8V20.4H10V9H13.2V10.5H13.3C13.8 9.6 15.1 8.8 16.7 8.8C20.1 8.8 20.5 11.1 20.5 14.1V20.4H20.4Z" />
              </svg>
            </a>
            <a
              href="https://github.com/Aashirwad10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition transform hover:scale-110"
              title="GitHub"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0.5C5.4 0.5 0 5.9 0 12.5C0 17.9 3.4 22.4 8.2 23.9C8.8 24 9 23.6 9 23.3V21.1C5.7 21.9 5 19.5 5 19.5C4.5 18.3 3.7 18 3.7 18C2.6 17.3 3.8 17.3 3.8 17.3C5 17.4 5.6 18.5 5.6 18.5C6.7 20.4 8.4 19.9 9.1 19.6C9.2 18.8 9.5 18.3 9.8 18.1C7.1 17.8 4.3 16.7 4.3 11.9C4.3 10.5 4.8 9.3 5.7 8.4C5.6 8.1 5.1 6.8 5.8 5C5.8 5 6.9 4.7 9 6.1C10 5.8 11 5.7 12 5.7C13 5.7 14 5.8 15 6.1C17.1 4.7 18.2 5 18.2 5C18.9 6.8 18.4 8.1 18.3 8.4C19.2 9.3 19.7 10.5 19.7 11.9C19.7 16.7 16.9 17.8 14.2 18.1C14.6 18.4 15 19 15 20V23.3C15 23.6 15.2 24 15.8 23.9C20.6 22.4 24 17.9 24 12.5C24 5.9 18.6 0.5 12 0.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <Footer />

      {/* Inline animations */}
      <style>
        {`
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
        `}
      </style>
    </>
  );
};

export default ContactUs;
