import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ryan Martinez, 39",
    text: "The retreat was a deeply healing and transformative experience. I left feeling rejuvenated and more connected to my spiritual self.",
  },
  {
    name: "Mark Williams, 45",
    text: "Nadine’s counselling helped me communicate more openly with my partner. Our connection is now stronger than ever.",
  },
  {
    name: "Sophia Turner, 34",
    text: "After my first session, I noticed a huge change in how I managed my emotions. Calm, balance, and clarity returned to my life.",
  },
  {
    name: "Ethan Brown, 41",
    text: "I let go of years of suppressed emotions and now feel lighter, clearer, and more confident about my journey ahead.",
  },
  {
    name: "David Green, 37",
    text: "An incredible experience that opened my eyes to emotional clarity and self-love. Highly recommend to anyone seeking growth.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3; // visible cards at once

  const nextSlide = () => {
    if (currentIndex < testimonials.length - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="bg-[#FAF8F2] py-16 px-4 text-center font-inter">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="inline-block bg-[#FAF8F2] text-[#5A2654] text-xs font-semibold px-5 py-1 rounded-full border border-[#5A2654]/20 mb-4">
          TESTIMONIALS
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#5A2654] mb-2">
          What Clients Say
        </h2>
        <p className="text-gray-600">
          Real experiences shared by people who’ve found clarity and confidence.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        {/* Cards Wrapper */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-1/1 md:w-1/2 lg:w-1/3 flex-shrink-0 p-4"
            >
              <div className="bg-white p-8 rounded-2xl shadow-md border border-[#e8dce7] hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center text-[#5A2654] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  “{t.text}”
                </p>
                <h4 className="font-semibold text-[#5A2654]">{t.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className={`absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-[#5A2654] hover:text-white transition ${
            currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
          }`}
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className={`absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-[#5A2654] hover:text-white transition ${
            currentIndex >= testimonials.length - cardsPerView
              ? "opacity-40 cursor-not-allowed"
              : ""
          }`}
        >
          <FaChevronRight />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: testimonials.length - cardsPerView + 1 }).map(
            (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === i ? "bg-[#5A2654]" : "bg-gray-300"
                }`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
