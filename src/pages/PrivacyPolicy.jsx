import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf7fb] to-white text-gray-800 leading-relaxed">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#5A2654] to-[#8B3A74] text-white py-16 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
          Vairam Wellness Privacy Policy
        </h1>
        <p className="text-sm text-gray-200">Last Updated: October 2025</p>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        {/* Section Template */}
        <section className="bg-white shadow-lg rounded-2xl p-6 border-l-8 border-[#5A2654] hover:shadow-2xl transition-all duration-300 animate-fade-up">
          <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">🔒 Introduction</h2>
          <p className="mb-3">
            At <strong>Vairam Wellness</strong>, accessible from{" "}
            <a
              href="https://www.vairam.online"
              className="text-[#5A2654] font-semibold hover:underline"
            >
              www.vairam.online
            </a>
            , protecting your privacy is our top priority. This Privacy Policy
            explains how we collect, use, and protect your personal information.
          </p>
          <p>
            By using our website or our Alpha Revival Program, you agree to the
            practices outlined in this policy.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-6 border-l-8 border-[#5A2654] hover:shadow-2xl transition-all duration-300 animate-fade-up">
          <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
            🧭 Information We Collect
          </h2>
          <div className="bg-[#faf7fb] p-5 rounded-lg border border-purple-100 mb-5">
            <h3 className="text-lg font-bold mb-2">Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, phone number, billing/shipping address</li>
              <li>Payment details (processed securely via third-party gateways)</li>
              <li>Any information you voluntarily share (e.g., contact forms)</li>
            </ul>
          </div>
          <div className="bg-[#faf7fb] p-5 rounded-lg border border-purple-100">
            <h3 className="text-lg font-bold mb-2">Non-Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Browser type, device info, IP address, and pages visited</li>
              <li>Cookies and analytics for performance improvement</li>
            </ul>
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-6 border-l-8 border-[#5A2654] hover:shadow-2xl transition-all duration-300 animate-fade-up">
          <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
            💡 How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process and fulfill your orders</li>
            <li>Provide customer support</li>
            <li>Send updates, offers (only with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal and security obligations</li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-[#fdf6ff] to-[#fff8fb] shadow-lg rounded-2xl p-6 border-l-8 border-[#5A2654] hover:shadow-2xl transition-all duration-300 animate-fade-up">
          <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
            🔐 Data Security
          </h2>
          <p>
            We use advanced encryption and security measures to protect your
            data from unauthorized access, disclosure, or alteration. Payments
            are processed securely via trusted gateways, and financial data is
            never stored on our servers.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-6 border-l-8 border-[#5A2654] hover:shadow-2xl transition-all duration-300 animate-fade-up">
          <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">🍪 Cookies Policy</h2>
          <p>
            We use cookies to enhance your browsing experience and analyze site
            performance. You may disable cookies in your browser, but some
            features may not function properly as a result.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-6 border-l-8 border-[#5A2654] hover:shadow-2xl transition-all duration-300 animate-fade-up">
          <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">📤 Data Sharing</h2>
          <p className="mb-3">We never sell, rent, or trade your personal data.</p>
          <p>We may share information only with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Trusted service providers (logistics, payment processors)</li>
            <li>Legal authorities, if required by law</li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-[#fdf6ff] to-[#fff8fb] shadow-lg rounded-2xl p-6 border-l-8 border-[#5A2654] hover:shadow-2xl transition-all duration-300 animate-fade-up">
          <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">📩 Your Rights</h2>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>Access, correct, or delete your personal data</li>
            <li>Withdraw consent for marketing</li>
            <li>Request data portability or restriction</li>
          </ul>
          <p>
            To exercise your rights, email us at{" "}
            <a
              href="mailto:alpharevivalprogram@gmail.com"
              className="text-[#5A2654] font-semibold hover:underline"
            >
              alpharevivalprogram@gmail.com
            </a>
            .
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl p-6 border-l-8 border-[#5A2654] hover:shadow-2xl transition-all duration-300 animate-fade-up">
          <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">⏳ Data Retention</h2>
          <p>
            We retain your personal information only as long as necessary for
            business, legal, or security reasons.
          </p>
        </section>

        <section className="bg-gradient-to-r from-[#fdf6ff] to-[#fff8fb] shadow-lg rounded-2xl p-6 border-l-8 border-[#5A2654] hover:shadow-2xl transition-all duration-300 animate-fade-up">
          <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">🧭 Policy Updates</h2>
          <p>
            We may update this policy periodically. The latest version will
            always be available on this page.
          </p>
          <p className="mt-2 font-semibold">Last Updated: October 2025</p>
        </section>

        <section className="bg-[#5A2654] text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up">
          <h2 className="text-2xl font-bold mb-4">📞 Contact Us</h2>
          <p className="mb-2">
            If you have any questions about this Privacy Policy, contact us:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:alpharevivalprogram@gmail.com"
              className="text-yellow-300 hover:underline"
            >
              alpharevivalprogram@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone / WhatsApp:</strong>{" "}
            <a
              href="tel:+919507960456"
              className="text-yellow-300 hover:underline"
            >
              +91 95079 60456
            </a>
          </p>
          <p>
            <strong>Address:</strong> House No. 519A, New Ashok Nagar, New Delhi
            – 110096, India
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
