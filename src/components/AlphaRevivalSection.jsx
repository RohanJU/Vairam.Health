import { Link } from "react-router-dom";

const AlphaRevivalSection = () => {
  return (
    <section className="bg-[#FAF8F2] text-center py-20 px-6 font-inter relative overflow-hidden">
      {/* Gradient Accent Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E9] via-[#FAF8F2] to-[#FFF] opacity-90 -z-10"></div>

      {/* Header */}
      <div className="max-w-4xl mx-auto animate-fadeInUp">
        <h3 className="text-sm font-semibold text-[#5A2654]/80 tracking-widest uppercase">
          Launching India's First Holistic Approach for Male Sexual Health
        </h3>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#2B0A14] mt-3">
          Alpha Revival Programme
        </h1>

        <p className="text-[#5A2654] font-bold mt-3 tracking-wide text-lg">
          Guaranteed 100% Success Rate
        </p>

        <p className="text-[#5B4B4B] mt-2 text-sm md:text-base">
          Focus on these three powerful pillars for complete transformation
        </p>
      </div>

      {/* 3 Feature Cards */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 animate-fadeInUp">
        {/* Card 1 */}
        <div className="bg-white border border-[#E9E0E5] rounded-2xl p-8 shadow-[0_10px_25px_rgba(90,38,84,0.1)] hover:shadow-[0_15px_35px_rgba(90,38,84,0.2)] hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-xl font-semibold text-[#5A2654] mb-3">
            Lifestyle Changes
          </h2>
          <p className="text-[#4B3C4B] text-sm leading-relaxed">
            Take our in-depth online assessment that identifies the root cause
            of your challenge — physical, emotional, or lifestyle-based.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-[#E9E0E5] rounded-2xl p-8 shadow-[0_10px_25px_rgba(90,38,84,0.1)] hover:shadow-[0_15px_35px_rgba(90,38,84,0.2)] hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-xl font-semibold text-[#5A2654] mb-3">
            Supplements
          </h2>
          <p className="text-[#4B3C4B] text-sm leading-relaxed">
            Get personalized herbal formulations based on your assessment —
            designed to naturally enhance vitality and endurance.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-[#E9E0E5] rounded-2xl p-8 shadow-[0_10px_25px_rgba(90,38,84,0.1)] hover:shadow-[0_15px_35px_rgba(90,38,84,0.2)] hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-xl font-semibold text-[#5A2654] mb-3">
            Regular Guidance
          </h2>
          <p className="text-[#4B3C4B] text-sm leading-relaxed">
            Once enrolled, our expert coaches track your progress, guide your
            routine, and ensure consistent improvement throughout your journey.
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto mt-16 text-[#3F2E3F] text-base md:text-lg leading-relaxed animate-fadeInUp">
        <p>
          Experience the fusion of{" "}
          <span className="text-[#5A2654] font-semibold">Ayurveda</span> and
          modern science through our{" "}
          <span className="text-[#5A2654] font-semibold">
            Alpha Revival Programme
          </span>{" "}
          — a unique, personalized plan combining herbal therapies, expert
          nutrition, and tailored fitness routines to restore confidence,
          stamina, and overall wellness.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4 animate-fadeInUp">
        <button className="bg-[#5A2654] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#4A1E46] hover:scale-105 transition-all duration-300 shadow-[0_10px_25px_rgba(90,38,84,0.3)]">
          Take the Test
        </button>
        <Link to="/blog-post">
          <button className="border border-[#5A2654] text-[#5A2654] font-semibold px-8 py-3 rounded-full hover:bg-[#5A2654] hover:text-white hover:scale-105 transition-all duration-300 shadow-[0_6px_15px_rgba(90,38,84,0.2)]">
            More About Alpha Revival Programme
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AlphaRevivalSection;
