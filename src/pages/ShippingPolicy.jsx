import React from "react";

const ShippingPolicy = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-[#f8f5f9] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#5A2654] mb-3 animate-fade-in">
            🚚 Shipping Policy
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            At <strong>Alpha Revival Program</strong>, we’re committed to delivering your order quickly, safely, and efficiently. 
            Your satisfaction drives everything we do.
          </p>
        </div>

        {/* Card Wrapper */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#5A2654] hover:scale-[1.02] animate-slide-up">
            <h2 className="text-xl font-semibold text-[#5A2654] mb-3">
              📦 Order Processing
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Orders are processed within 24–48 hours of confirmation (excluding Sundays & holidays).</li>
              <li>You’ll receive an email confirmation once your order is shipped.</li>
              <li>Every order is handled with utmost care and hygiene.</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#5A2654] hover:scale-[1.02] animate-slide-up delay-200">
            <h2 className="text-xl font-semibold text-[#5A2654] mb-3">
              🚀 Shipping Time
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Delivery within 7–10 business days depending on your location.</li>
              <li>Remote areas may experience slight delays.</li>
              <li>Track your shipment in real time with the tracking ID we provide.</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#5A2654] hover:scale-[1.02] animate-slide-up delay-300">
            <h2 className="text-xl font-semibold text-[#5A2654] mb-3">
              💰 Shipping Charges
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Free shipping on all prepaid orders across India.</li>
              <li>COD orders may include a small handling fee.</li>
              <li>All charges are transparently displayed before checkout.</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#5A2654] hover:scale-[1.02] animate-slide-up delay-400">
            <h2 className="text-xl font-semibold text-[#5A2654] mb-3">
              🏠 Address Accuracy
            </h2>
            <p className="text-gray-700">
              Please double-check your shipping details during checkout. We’re not responsible for delays caused by incomplete or incorrect addresses.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#5A2654] hover:scale-[1.02] animate-slide-up delay-500">
            <h2 className="text-xl font-semibold text-[#5A2654] mb-3">
              ⏳ Delayed Deliveries
            </h2>
            <p className="text-gray-700">
              While we work with trusted courier partners, external factors like weather or strikes may cause delays. 
              We’ll always keep you informed.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border-t-4 border-[#5A2654] hover:scale-[1.02] animate-slide-up delay-600">
            <h2 className="text-xl font-semibold text-[#5A2654] mb-3">
              🌍 International Shipping
            </h2>
            <p className="text-gray-700">
              Currently, we only ship within India — but global expansion is coming soon!
            </p>
          </div>
        </div>

        {/* Contact Card */}
        <div className="mt-12 bg-[#5A2654] text-white rounded-2xl p-8 shadow-lg animate-fade-in-up">
          <h2 className="text-2xl font-semibold mb-3">📞 Contact Us</h2>
          <p className="text-white/90 mb-4">
            If you have any questions about your delivery, our support team is happy to help:
          </p>
          <ul className="space-y-1">
            <li>
              📧 Email:{" "}
              <a
                href="mailto:alpharevivalprogram@gmail.com"
                className="underline hover:text-gray-200"
              >
                alpharevivalprogram@gmail.com
              </a>
            </li>
            <li>
              📞 Phone / WhatsApp:{" "}
              <a href="tel:+919507960456" className="underline hover:text-gray-200">
                +91 95079 60456
              </a>
            </li>
            <li>🏠 Address: House No. 519A, New Ashok Nagar, New Delhi – 110096</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ShippingPolicy;
