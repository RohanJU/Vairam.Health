
const ThreeStepsSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#FAF8F4] via-[#F6F0EC] to-[#EFE7E3] text-center py-20 px-6 font-inter overflow-hidden">
      {/* Top Quote */}
      <p className="italic text-[#3C2340] text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
        "I hold a space for you to be fully seen and heard—this is when healing begins."
      </p>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff9f6]/50 to-[#f5ecf0]/70 opacity-90"></div>

      <div className="relative z-10 max-w-6xl mx-auto animate-fadeInUp">
        {/* Section Tag */}
        <div className="inline-block bg-[#FAF8F4] text-[#5A2654] text-xs font-semibold px-4 py-1 rounded-full border border-[#5A2654]/20 shadow-sm mb-4">
          HOW IT WORKS
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#2B0F28] tracking-tight">
          Just Three Easy Steps
        </h2>
        <p className="text-gray-700 mt-3 text-base md:text-lg max-w-2xl mx-auto">
          I keep the process simple, so we can focus on what truly matters.
        </p>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-start">
          {/* Step 1 */}
          <div className="relative bg-white/70 rounded-2xl p-8 shadow-[0_6px_18px_rgba(90,38,84,0.15)] hover:shadow-[0_10px_25px_rgba(90,38,84,0.25)] transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-5xl font-extrabold text-[#5A2654] mb-3">1.</h3>
            <h4 className="text-lg font-semibold text-[#2B0F28] tracking-wide">
              TAKE THE TEST
            </h4>
            <p className="text-gray-700 mt-3 leading-relaxed">
              An online test that assess the root cause of your problem </p>
            <div className="hidden md:block absolute top-1/2 right-[-70px] transform -translate-y-1/2 text-[#5A2654] text-6xl font-light opacity-70">
              ~
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white/70 rounded-2xl p-8 shadow-[0_6px_18px_rgba(90,38,84,0.15)] hover:shadow-[0_10px_25px_rgba(90,38,84,0.25)] transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-5xl font-extrabold text-[#5A2654] mb-3">2.</h3>
            <h4 className="text-lg font-semibold text-[#2B0F28] tracking-wide">
              BUY THE PLAN
            </h4>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Based on your responses, our Experts recommend a customized plan.
            </p>
            <div className="hidden md:block absolute top-1/2 right-[-70px] transform -translate-y-1/2 text-[#5A2654] text-6xl font-light opacity-70">
              ~
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white/70 rounded-2xl p-8 shadow-[0_6px_18px_rgba(90,38,84,0.15)] hover:shadow-[0_10px_25px_rgba(90,38,84,0.25)] transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-5xl font-extrabold text-[#5A2654] mb-3">3.</h3>
            <h4 className="text-lg font-semibold text-[#2B0F28] tracking-wide">
              GET COACH GUIDANCE
            </h4>
            <p className="text-gray-700 mt-3 leading-relaxed">
              After u buy the plan, Vairam expert Coaches assist you and get you started on your journey.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-14">
          <button className="bg-[#5A2654] text-white font-medium px-10 py-4 rounded-full shadow-[0_6px_18px_rgba(90,38,84,0.3)] hover:shadow-[0_8px_25px_rgba(90,38,84,0.4)] hover:scale-105 transition-all duration-300">
            Book My Free Consultation
          </button>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1.2s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default ThreeStepsSection;
