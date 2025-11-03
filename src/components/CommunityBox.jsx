import React from "react";

const CommunityBox = () => {
  return (
    <section className="bg-[#f5f0e9] flex justify-center items-center py-20 px-6">
      <div className="max-w-4xl w-full bg-white text-center rounded-3xl shadow-md p-10 md:p-16 border border-[#eadfd2]">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#5A2654] mb-3">
          Sex Related Queries?
        </h2>

        {/* Underline */}
        <div className="w-20 h-[3px] bg-[#5A2654] mx-auto mb-6 rounded-full"></div>

        {/* Description */}
        <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
          Join our private community to get answers to all your queries<br />
          from certified health coaches in a safe, non-judgmental space.
        </p>

        <p className="text-gray-800 text-lg md:text-xl font-medium mb-8">
          Let’s tackle our struggles together with openness and confidence.
        </p>

        {/* Button */}
        <button className="bg-[#5A2654] text-white px-8 py-3 rounded-full font-semibold tracking-wide hover:bg-[#471b44] transition-all shadow-sm hover:shadow-md">
          JOIN THE GROUP
        </button>
      </div>
    </section>
  );
};

export default CommunityBox;
