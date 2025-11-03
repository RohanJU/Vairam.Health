import React from "react";

const YoutubeVideos = () => {
  const videos = [
    "https://www.youtube.com/embed/P2GujYgcEpg?si=_Bh9hl4WFBvX3wFq",
    "https://www.youtube.com/embed/NVjLeANYF6g?si=nwDG4kT449h43rlU",
  ];

  return (
    <section className="bg-gradient-to-b from-white to-[#faf5f9] min-h-screen py-16 px-6 text-gray-800 font-inter">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-extrabold text-[#5A2654] mb-3">
            🎥 Wellness Talks & Expert Insights
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Watch our doctors and wellness experts share knowledge to help you lead a confident, healthy life.
          </p>
          <div className="w-24 h-1 bg-[#5A2654] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Video Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6 px-2">
            {videos.map((url, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] md:w-[500px] snap-center rounded-2xl shadow-lg border border-[#e8dce7] bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative w-full h-[200px] md:h-[280px] overflow-hidden rounded-2xl">
                  <iframe
                    className="w-full h-full rounded-2xl"
                    src={url}
                    title={`YouTube Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#faf5f9] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#faf5f9] to-transparent"></div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/talk-to-doctor"
            className="inline-block bg-[#5A2654] text-white font-semibold py-3 px-10 rounded-full shadow-md hover:bg-[#471b44] hover:shadow-lg transition-all"
          >
            🩺 Talk to a Certified Doctor
          </a>
        </div>
      </div>
    </section>
  );
};

export default YoutubeVideos;
