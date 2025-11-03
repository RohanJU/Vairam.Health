import React from "react";

const SlidingButtonsCarousel = () => {
  const issues = [
    { name: "Premature Ejaculation", url: "/premature-ejaculation" },
    { name: "Erectile Dysfunction", url: "/erectile-dysfunction" },
    { name: "Low Fertility", url: "/low-fertility" },
    { name: "Small Size", url: "/small-size" },
    { name: "Low Libido", url: "/low-libido" },     
    { name: "Performance Anxiety", url: "/performance-anxiety" },
    { name: "Weak Stamina", url: "/weak-stamina" },
  ];

  return (
    <div className="relative w-full overflow-hidden py-8"
      style={{
        background: "linear-gradient(135deg, #F4EFF5, #EDE6EB)", // Soft lavender-beige gradient
      }}
    >
      <div className="flex animate-slide whitespace-nowrap">
        {[...issues, ...issues].map((issue, index) => (
          <a
            key={index}
            href={issue.url}
            className={`mx-3 px-6 py-3 rounded-full font-medium text-sm text-white shadow-md transition-all duration-500 hover:scale-105 hover:shadow-[0_6px_20px_rgba(90,38,84,0.25)] ${
              issue.name === "Small Size" ? "bg-[#7B3F7C]" : "bg-[#5A2654]"
            }`}
            style={{
              boxShadow: "0 4px 10px rgba(90,38,84,0.25)",
              animation: `fadeInUp 1.2s ease ${index * 0.1}s both`,
            }}
          >
            {issue.name}
          </a>
        ))}
      </div>

      {/* Decorative Curved Arrows (~) */}
      <div className="absolute top-1/2 left-0 text-[#5A2654]/40 text-3xl animate-bounce-left select-none">~</div>
      <div className="absolute top-1/2 right-0 text-[#5A2654]/40 text-3xl animate-bounce-right select-none">~</div>

      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes bounce-left {
            0%, 100% { transform: translateY(-50%) translateX(0); opacity: 0.6; }
            50% { transform: translateY(-50%) translateX(5px); opacity: 1; }
          }
          @keyframes bounce-right {
            0%, 100% { transform: translateY(-50%) translateX(0); opacity: 0.6; }
            50% { transform: translateY(-50%) translateX(-5px); opacity: 1; }
          }
          .animate-slide {
            display: flex;
            animation: slide 22s linear infinite;
            width: max-content;
          }
          .animate-slide:hover {
            animation-play-state: paused;
          }
          .animate-bounce-left {
            animation: bounce-left 2s infinite ease-in-out;
          }
          .animate-bounce-right {
            animation: bounce-right 2s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default SlidingButtonsCarousel;
