import React from "react";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf7fb] to-white text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#5A2654] to-[#8B3A74] text-white py-16 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
          🌟 The Alpha Revival Program
        </h1>
        <p className="text-lg mt-3 italic">
          Reclaim Your Energy, Confidence & Performance Naturally 💥
        </p>
        <p className="text-sm text-gray-200 mt-4">
          By <span className="font-semibold">druzeanalytics@gmail.com</span> / October 12, 2025
        </p>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        {/* Section Card */}
        <section className="bg-white shadow-lg rounded-2xl p-6 border border-purple-100 hover:shadow-2xl transition-all duration-300 animate-fade-up">
          <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
            🧩 Why Men Need the Alpha Revival Program
          </h2>
          <p className="mb-3">
            Most men silently face issues like low stamina, weak erection, and performance anxiety — yet never talk about it.
            Modern lifestyle, stress, and poor sleep all lead to decreased testosterone and reduced vitality.
          </p>
          <p className="mb-3 font-medium text-gray-700">
            But here’s the truth 👇 You’re not broken. You’re just out of balance.
          </p>
          <p>
            The Alpha Revival Program by Vairam is your all-in-one system to restore male health, rebuild energy, and bring back confidence — naturally and scientifically.
          </p>
        </section>

        {/* Steps Card */}
        <section className="bg-white shadow-lg rounded-2xl p-6 border border-purple-100 hover:shadow-2xl transition-all duration-300 animate-fade-up">
          <h3 className="text-xl font-semibold text-[#5A2654] mb-3">
            ⚙️ What Exactly Is the Alpha Revival Program?
          </h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Lifestyle Correction – Guided routine adjustments that improve hormones & energy flow.</li>
            <li>Custom Supplement Plan – Tailored Ayurvedic formulation based on your online health check.</li>
            <li>Continuous Support – Ongoing guidance for sustained results.</li>
          </ol>
          <p className="mt-4">
            👉 Take the free quiz on{" "}
            <a href="https://vairam.online" className="text-[#5A2654] font-semibold underline hover:text-[#8B3A74]">
              vairam.online
            </a>{" "}
            to get your personalized plan.
          </p>
        </section>

        {/* Transformation */}
        <section className="bg-gradient-to-r from-[#fdf6ff] to-[#f8ecff] shadow-md rounded-2xl p-6 border border-purple-100 hover:shadow-2xl transition-all duration-300 animate-fade-up">
          <h3 className="text-xl font-semibold text-[#5A2654] mb-3">🔥 The 6-Week Transformation Promise</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>✅ Longer-lasting erections</li>
            <li>✅ Improved timing & stamina</li>
            <li>✅ More energy throughout the day</li>
            <li>✅ Elevated mood & confidence</li>
          </ul>
          <p className="mt-4 text-gray-700">Because this isn’t a shortcut — it’s true internal healing through Ayurvedic science 🌿</p>
        </section>

        {/* Products */}
        <section className="bg-white shadow-lg rounded-2xl p-6 border border-purple-100 hover:shadow-2xl transition-all duration-300 animate-fade-up">
          <h3 className="text-xl font-semibold text-[#5A2654] mb-4">🧴 Meet the Power Products</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "🌿 Shakti Root Capsules",
                items: [
                  "Boost natural testosterone levels 💪",
                  "Enhance libido & physical strength",
                  "Reduce fatigue and boost endurance",
                ],
              },
              {
                title: "💧 Power Root Oil",
                items: [
                  "Enhances blood flow & erection strength",
                  "Improves sensitivity",
                  "Non-sticky, fast-absorbing formula",
                ],
              },
              {
                title: "🌼 Shakti Stay Capsules",
                items: [
                  "Helps control premature ejaculation",
                  "Improves recovery & performance duration",
                  "Reduces anxiety and improves focus",
                ],
              },
              {
                title: "⚙️ Virya Boost (Only in 4-Product Kit)",
                items: [
                  "Improves semen quality",
                  "Supports hormonal balance",
                  "Enhances reproductive vitality",
                ],
              },
            ].map((product, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-purple-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <h4 className="font-semibold text-lg text-[#5A2654] mb-2">{product.title}</h4>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  {product.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Ayurveda Section */}
        <section className="bg-gradient-to-r from-[#fdf6ff] to-[#fff8fb] shadow-md rounded-2xl p-6 border border-purple-100 hover:shadow-2xl transition-all duration-300 animate-fade-up">
          <h3 className="text-xl font-semibold text-[#5A2654] mb-3">🌱 Why Ayurveda Works Better</h3>
          <p className="mb-4 text-gray-700">
            Unlike synthetic pills, Ayurvedic herbs heal the root cause, not just the symptoms. They restore blood flow,
            improve nerve response, and balance hormones — safely.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>✅ No chemicals</li>
            <li>✅ No dependency</li>
            <li>✅ 100% natural & sustainable results</li>
          </ul>
        </section>

        {/* Quote Section */}
        <section className="bg-white shadow-lg rounded-2xl p-6 border border-purple-100 hover:shadow-2xl transition-all duration-300 animate-fade-up">
          <h3 className="text-xl font-semibold text-[#5A2654] mb-3">💬 Real Experiences</h3>
          <blockquote className="italic border-l-4 border-[#5A2654] pl-4 mb-3 text-gray-700">
            “After 4 weeks, I felt energetic again — both mentally and physically.” – R.K., 32 years
          </blockquote>
          <blockquote className="italic border-l-4 border-[#5A2654] pl-4 text-gray-700">
            “This program gave me confidence I’d lost for years.” – M.S., 28 years
          </blockquote>
        </section>

        {/* CTA Section */}
        <section className="bg-[#5A2654] text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up">
          <h3 className="text-2xl font-bold mb-4">🚀 How to Join the Program</h3>
          <ol className="list-decimal inline-block text-left pl-6 space-y-1 mb-6">
            <li>Visit vairam.online</li>
            <li>Click ‘Check Your Health’</li>
            <li>Answer 6 quick questions</li>
            <li>Get your personalized supplement plan</li>
            <li>Start your Alpha Revival Journey!</li>
          </ol>
          <p className="font-semibold mb-3">
            💪 Being Alpha Is a Choice — reclaim your focus, confidence, and energy.
          </p>
          <a
            href="https://vairam.online"
            className="bg-white text-[#5A2654] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Start Now
          </a>
        </section>
      </div>
    </div>
  );
};

export default BlogPost;
