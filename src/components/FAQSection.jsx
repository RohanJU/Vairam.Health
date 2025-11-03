import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What can I expect from a session?",
      answer:
        "Each session is designed to help you explore your emotions, beliefs, and experiences in a safe, compassionate space.",
    },
    {
      question: "How do I know if spiritual counselling is right for me?",
      answer:
        "If you're seeking clarity, peace, or guidance in your personal or emotional life, spiritual counselling can support you deeply.",
    },
    {
      question: "How long is a typical session?",
      answer: "A standard session usually lasts between 45 to 60 minutes.",
    },
    {
      question: "Do you offer online sessions?",
      answer:
        "Yes, online sessions are available via secure video platforms for your convenience and privacy.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-[#f9f7f2] to-[#f4eee6] py-16 px-6 text-center rounded-t-3xl">
      {/* FAQ Heading */}
      <div className="inline-block bg-[#f4eee6] text-[#5a0a20] text-xs font-semibold px-4 py-1 rounded-full border border-[#5a0a20]/20 mb-4">
        FAQ
      </div>

      <h2 className="text-3xl md:text-4xl font-semibold text-[#2d0f23] mb-2">
        Questions Answered
      </h2>
      <p className="text-gray-600 mb-10">
        If you don't see your question answered here, please get in touch.
      </p>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto text-left">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg text-[#2d0f23] font-medium">
                {faq.question}
              </h3>
              <span className="text-[#5a0a20] text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 transition-all duration-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-[#1a1525] text-white mt-16 py-10 px-8 md:px-16 rounded-2xl shadow-lg max-w-5xl mx-auto">
        <div className="md:flex justify-between items-center text-left space-y-4 md:space-y-0">
          <div>
            <h3 className="text-2xl font-medium mb-2 leading-snug">
              Take your first step towards peace and fulfilment...
            </h3>
            <p className="text-sm text-gray-300 max-w-md">
              Ready to get started or still have some questions? Perfect. Book a
              call today and we can begin your journey of self-exploration.
            </p>
          </div>

          <button className="bg-[#5a0a20] text-white font-medium px-6 py-3 rounded-full hover:bg-[#7c0f2e] transition shadow-md">
            Book My Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
