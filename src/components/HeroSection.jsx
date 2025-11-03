import React from "react";
import { Link } from "react-router-dom";
import heroimage from "../assets/pngegg (28).png";
import { GrYoga } from "react-icons/gr";
import { GiMeditation } from "react-icons/gi";
import { IoBody } from "react-icons/io5";

const HeroSection = () => {
  return (
    <section className="bg-[#F5F0E9] py-16 px-8 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* === Left Content === */}
        <div className="md:w-1/2 space-y-6 animate-fadeInLeft">
          <span className="inline-block bg-[#EFE8E1] text-[#5A2654] text-sm px-3 py-1 rounded-full font-medium shadow-[0_4px_8px_rgba(90,38,84,0.15)]">
            ALPHA REVIVAL PROGRAMME
          </span>
          <h1 className="text-5xl font-bold text-[#2E1C2E] leading-tight">
            RECLAIM YOUR <br /> CONFIDENCE
          </h1>
          <p className="text-[#4A3B4A] leading-relaxed">
            You’re not alone. Up to 90% of men experience sexual health challenges,
            and it’s time to take control. Our comprehensive programme and
            science-backed formulas show visible results in just 4 weeks.
            Experience discretion and judgment-free support — designed for you.
          </p>

          <Link to="/health-form">
            <button className="bg-[#5A2654] text-white px-6 py-3 rounded-full shadow-[0_10px_20px_rgba(90,38,84,0.25)] hover:bg-[#4A1E46] transition">
              TAKE THE TEST
            </button>
          </Link>
        </div>

        {/* === Right Image === */}
        <div className="md:w-1/2 flex justify-center animate-fadeInRight">
          <div className="relative bg-[#F5F0E9] p-6 rounded-full border-4 border-[#E3DED6] shadow-[0_15px_30px_rgba(90,38,84,0.2)]">
            <img
              src={heroimage}
              alt="Meditating Woman"
              className="rounded-2xl w-80 h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* === Bottom Features === */}
      <div className="grid md:grid-cols-3 gap-8 text-center mt-20 text-[#2E1C2E] animate-fadeInUp">
        {/* 1️⃣ Confidence Restoration */}
        <div>
          <div className="w-12 h-12 mx-auto bg-[#E0CCE0] rounded-full mb-4 shadow-[0_4px_10px_rgba(90,38,84,0.25)] flex items-center justify-center">
            <GiMeditation size={24} className="text-[#5A2654]" />
          </div>
          <h3 className="font-semibold text-lg">CONFIDENCE RESTORATION</h3>
          <p className="text-sm text-[#6B5A6B]">
            Rebuild your inner strength and regain complete control in every moment.
          </p>
        </div>

        {/* 2️⃣ Vitality & Stamina */}
        <div>
          <div className="w-12 h-12 mx-auto bg-[#E0CCE0] rounded-full mb-4 shadow-[0_4px_10px_rgba(90,38,84,0.25)] flex items-center justify-center">
            <IoBody size={24} className="text-[#5A2654]" />
          </div>
          <h3 className="font-semibold text-lg">VITALITY & STAMINA</h3>
          <p className="text-sm text-[#6B5A6B]">
            Boost your energy, endurance, and drive — naturally and sustainably.
          </p>
        </div>

        {/* 3️⃣ Mind-Body Balance */}
        <div>
          <div className="w-12 h-12 mx-auto bg-[#E0CCE0] rounded-full mb-4 shadow-[0_4px_10px_rgba(90,38,84,0.25)] flex items-center justify-center">
            <GrYoga size={24} className="text-[#5A2654]" />
          </div>
          <h3 className="font-semibold text-lg">MIND-BODY BALANCE</h3>
          <p className="text-sm text-[#6B5A6B]">
            Reduce stress, enhance focus, and improve overall performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
