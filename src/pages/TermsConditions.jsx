import React from "react";

const TermsConditions = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#faf5f9] min-h-screen py-16 px-6 text-gray-800 font-inter">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-extrabold text-[#5A2654] mb-3">
            Terms & Conditions
          </h1>
          <p className="text-gray-500">Effective as of October 2025</p>
          <div className="w-24 h-1 bg-[#5A2654] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Terms Section Wrapper */}
        <div className="space-y-10">
          {/* Introduction */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
              ⚖️ Introduction
            </h2>
            <p className="mb-3">
              Welcome to <strong>Vairam Wellness</strong>. By accessing or using our
              website{" "}
              <a
                href="https://www.vairam.online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5A2654] font-medium hover:underline"
              >
                www.vairam.online
              </a>
              , you agree to comply with and be bound by these Terms &
              Conditions. Please read them carefully before using our platform or
              purchasing any products.
            </p>
          </div>

          {/* Eligibility */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
              👤 Eligibility
            </h2>
            <p>
              You must be at least <strong>18 years old</strong> to use this website
              or make a purchase. By agreeing to these terms, you confirm that
              you are legally capable of entering into a binding contract.
            </p>
          </div>

          {/* Use of Website */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp delay-100">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
              🌐 Use of Website
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Do not misuse or hack the website or interfere with its operation.</li>
              <li>
                You agree not to reproduce, duplicate, or exploit any part of the
                website or its content without written consent.
              </li>
              <li>
                Misleading, abusive, or unlawful behavior will result in account
                suspension.
              </li>
            </ul>
          </div>

          {/* Product Information */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp delay-200">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
              🧴 Product Information
            </h2>
            <p className="mb-2">
              Our products are based on traditional Ayurvedic formulations and are
              not intended to replace medical advice. Individual results may vary
              depending on lifestyle, body type, and other health factors.
            </p>
            <p>
              Always consult your healthcare professional before starting any new
              supplement or treatment program.
            </p>
          </div>

          {/* Pricing & Payments */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp delay-300">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
              💳 Pricing & Payments
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>All prices are displayed in INR and include applicable taxes.</li>
              <li>
                We reserve the right to modify prices or discontinue products
                without notice.
              </li>
              <li>
                Payments can be made securely via Credit/Debit Cards, UPI, or Net
                Banking.
              </li>
            </ul>
          </div>

          {/* Shipping & Delivery */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp delay-400">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
              🚚 Shipping & Delivery
            </h2>
            <p>
              Orders are typically processed within <strong>1–2 business days</strong>{" "}
              and delivered within <strong>5–7 business days</strong>. Delivery
              timelines may vary depending on your location and courier partners.
            </p>
          </div>

          {/* Returns & Refunds */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp delay-500">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
              🔁 Returns & Refunds
            </h2>
            <p>
              Returns are accepted within 15 days of delivery for unopened and
              unused items. Please refer to our{" "}
              <a
                href="/return-policy"
                className="text-[#5A2654] font-medium hover:underline"
              >
                Return & Refund Policy
              </a>{" "}
              for detailed guidelines.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp delay-600">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
              🧠 Intellectual Property
            </h2>
            <p>
              All content on this site — including text, images, and logos — is the
              property of <strong>Vairam Wellness</strong>. Unauthorized
              reproduction, copying, or redistribution is prohibited.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp delay-700">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
              ⚠️ Limitation of Liability
            </h2>
            <p>
              <strong>Vairam Wellness</strong> shall not be liable for any indirect,
              incidental, or consequential damages arising from the use or
              inability to use our website or products.
            </p>
          </div>

          {/* Governing Law */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp delay-800">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
              ⚖️ Governing Law
            </h2>
            <p>
              These Terms & Conditions are governed by the laws of India. Any
              disputes shall fall under the jurisdiction of the courts of{" "}
              <strong>New Delhi</strong>.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-[#5A2654] text-white rounded-2xl p-10 shadow-md animate-fadeInUp delay-900">
            <h2 className="text-2xl font-semibold mb-4">📩 Contact Us</h2>
            <p className="mb-2">
              For any questions about these Terms & Conditions, reach out to us:
            </p>
            <ul className="space-y-1">
              <li>
                📧 Email:{" "}
                <a
                  href="mailto:alpharevivalprogram@gmail.com"
                  className="underline font-semibold"
                >
                  alpharevivalprogram@gmail.com
                </a>
              </li>
              <li>
                📞 WhatsApp:{" "}
                <a
                  href="tel:+919507960456"
                  className="underline font-semibold"
                >
                  +91 95079 60456
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;
