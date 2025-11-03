import React from "react";

const TalkToDoctor = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#faf5f9] min-h-screen py-16 px-6 text-gray-800 font-inter">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-extrabold text-[#5A2654] mb-3">
            🩺 Talk to a Certified Doctor
          </h1>
          <p className="text-gray-500">Private, Judgment-Free & 100% Confidential</p>
          <div className="w-24 h-1 bg-[#5A2654] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Doctor Info Sections */}
        <div className="space-y-10">
          {/* Section 1 */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
              💬 Get Expert Guidance from Certified Doctors
            </h2>
            <p>
              Our doctors (MBBS/MD) specialize in men’s sexual wellness and mental health, including:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Erectile Dysfunction (ED)</li>
              <li>Premature Ejaculation (PE)</li>
              <li>Low Libido & Hormonal Balance</li>
              <li>Vitality & Stress Management</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
              🔒 100% Private & Judgment-Free Consultation
            </h2>
            <p>
              Every session happens via encrypted WhatsApp chat. 
              No clinics, no queues — just a comfortable, confidential conversation from home.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
              🎁 First 3 Consultations — Absolutely FREE!
            </h2>
            <p>
              Your first three sessions are <strong>completely free</strong>. 
              Continue only if you’re satisfied — no hidden charges.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
              ⏰ Flexible Timing — We Value Your Schedule
            </h2>
            <p>
              Choose your preferred time, and our team will ensure the doctor contacts you accordingly.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">📝 How It Works</h2>
            <ol className="list-decimal ml-6 mt-2 space-y-1">
              <li>Fill out the consultation form below.</li>
              <li>Our medical team reviews your request.</li>
              <li>You get a WhatsApp message from your assigned doctor.</li>
              <li>Discuss openly and receive personalized advice.</li>
            </ol>
          </div>

          {/* Section 6 */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">🌟 Why Choose Vairam?</h2>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Certified Indian Medical Practitioners</li>
              <li>Private, WhatsApp-Based Counseling</li>
              <li>Free First 3 Consultations</li>
              <li>Confidentiality Guaranteed</li>
              <li>Guidance on Lifestyle, Diet & Supplements</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-[#5A2654] text-white rounded-2xl p-10 shadow-md animate-fadeInUp">
            <h2 className="text-2xl font-semibold mb-4">
              📲 Take the First Step Toward Better Performance & Confidence
            </h2>
            <p className="mb-6">
              Your health deserves care — not hesitation. Fill out the form below 👇 and start your journey with our doctors today.
            </p>
            <a
              href="#consult-form"
              className="inline-block bg-[#ffd700] text-[#5A2654] font-semibold py-3 px-10 rounded-full shadow-md hover:bg-white hover:text-[#5A2654] transition-all"
            >
              Start Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkToDoctor;
