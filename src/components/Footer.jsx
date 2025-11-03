import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#1A111A] text-white py-16 px-6 md:px-12 font-poppins overflow-hidden">
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#5A2654]/15 via-transparent to-transparent pointer-events-none"></div>

      {/* === Top Row === */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-wrap justify-between gap-10 mb-10 animate-fadeInUp">
        {/* Column 1 */}
        <div className="min-w-[220px]">
          <h4 className="text-[#DCC9DA] font-bold text-lg uppercase mb-4">Vairam Journey</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/faq" className="hover:text-[#DCC9DA] transition">FAQ</Link></li>
            <li><Link to="/talk-to-doctor" className="hover:text-[#DCC9DA] transition">Online Diagnosis</Link></li>
            <li><Link to="/youtube-videos" className="hover:text-[#DCC9DA] transition">Customer Stories</Link></li>
            <li><Link to="/our-vision" className="hover:text-[#DCC9DA] transition">Our Vision</Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="min-w-[220px]">
          <h4 className="text-[#DCC9DA] font-bold text-lg uppercase mb-4">About Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-[#DCC9DA] transition">About Us</Link></li>
            <li><Link to="/career" className="hover:text-[#DCC9DA] transition">Careers</Link></li>
            <li><Link to="/our-team" className="hover:text-[#DCC9DA] transition">Our Team</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="min-w-[220px]">
          <h4 className="text-[#DCC9DA] font-bold text-lg uppercase mb-4">Help & Policy</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/privacy-policy" className="hover:text-[#DCC9DA] transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-[#DCC9DA] transition">Terms of Service</Link></li>
            <li><Link to="/shipping-policy" className="hover:text-[#DCC9DA] transition">Shipping Policy</Link></li>
            <li><Link to="/return-policy" className="hover:text-[#DCC9DA] transition">Return Policy</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="min-w-[260px]">
          <h4 className="text-[#DCC9DA] font-bold text-lg uppercase mb-4">Stay Updated</h4>
          <p className="text-sm mb-3 text-gray-300 opacity-90">
            Subscribe to our newsletter for health tips and exclusive offers.
          </p>
          <form className="flex mb-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-[#2B1B2B] text-white text-sm px-3 py-2 rounded-l-md focus:outline-none placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="bg-[#5A2654] text-white font-semibold px-4 py-2 rounded-r-md hover:bg-[#733072] hover:scale-105 transition-all duration-300 shadow-[0_4px_15px_rgba(90,38,84,0.25)]"
            >
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#3b5998] hover:scale-110 hover:shadow-[0_0_15px_rgba(90,38,84,0.25)] transition"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#c4302b] hover:scale-110 hover:shadow-[0_0_15px_rgba(90,38,84,0.25)] transition"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 border-t border-[#ffffff22] my-6"></div>

      {/* Bottom Row */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left text-xs text-gray-400 opacity-90 space-y-3 md:space-y-0">
        <p>
          Registered Office: Tatvartha Health Pvt. Ltd., Unit no 101, B wing, Building 16, Mumbai.
        </p>
        <p>
          © 2024 <span className="text-[#DCC9DA] font-semibold">Vairam Health</span>. All rights reserved. | Registered Since 2020
        </p>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }
        `}
      </style>
    </footer>
  );
};

export default Footer;
