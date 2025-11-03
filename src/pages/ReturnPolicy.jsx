import React from "react";

const ReturnPolicy = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#faf5f9] min-h-screen py-16 px-6 text-gray-800 font-inter">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-extrabold text-[#5A2654] mb-3">
            Return & Refund Policy
          </h1>
          <p className="text-gray-500">Effective as of October 2025</p>
          <div className="w-24 h-1 bg-[#5A2654] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Policy Card Wrapper */}
        <div className="space-y-10">
          {/* Card Template */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
              🧾 Overview
            </h2>
            <p className="mb-3">
              At <strong>Vairam Wellness</strong>, customer satisfaction is our top
              priority. We take pride in offering premium-quality, safe, and
              authentic wellness products. If you're not completely satisfied with
              your purchase, our Return & Refund Policy ensures a transparent and
              hassle-free experience.
            </p>
            <p>
              This policy applies to all orders placed via{" "}
              <a
                href="https://www.vairam.online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5A2654] font-medium hover:underline"
              >
                www.vairam.online
              </a>
              .
            </p>
          </div>

          {/* Eligibility */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
              🔁 Eligibility for Returns
            </h2>
            <p className="mb-3">
              Returns are accepted within <strong>15 days</strong> of delivery, if the
              following conditions are met:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Product must be unused, unopened, and in its original packaging.</li>
              <li>Items opened or used are not returnable due to hygiene standards.</li>
              <li>
                Promotional items or combos are non-returnable unless defective.
              </li>
              <li>Proof of purchase (invoice) is required.</li>
            </ul>
          </div>

          {/* How to Initiate */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp delay-200">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
              📦 How to Initiate a Return
            </h2>
            <p className="mb-2">
              Please follow the steps below to initiate your return:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Contact our support team within 15 days via:
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:alpharevivalprogram@gmail.com"
                      className="text-[#5A2654] hover:underline"
                    >
                      alpharevivalprogram@gmail.com
                    </a>
                  </li>
                  <li>
                    WhatsApp / Call:{" "}
                    <a
                      href="tel:+919507960456"
                      className="text-[#5A2654] hover:underline"
                    >
                      +91 95079 60456
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                Share Order ID, reason for return, and photos of product/packaging.
              </li>
              <li>
                Once approved, follow the return shipping instructions provided.
              </li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              <strong>Note:</strong> Return shipping cost is borne by the customer unless
              the product is defective or incorrect.
            </p>
          </div>

          {/* Refund Process */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp delay-300">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
              💰 Refund Process
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Refunds are processed within 5–7 business days after approval.</li>
              <li>
                Refunds are credited to the original payment method or via UPI for COD
                orders.
              </li>
              <li>
                Shipping charges are non-refundable unless caused by our error.
              </li>
            </ul>
          </div>

          {/* Damaged Items */}
          <div className="bg-white shadow-md rounded-2xl p-8 border border-[#e8dce7] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp delay-400">
            <h2 className="text-2xl font-semibold text-[#5A2654] mb-3">
              🚚 Damaged or Wrong Product
            </h2>
            <p className="mb-2">
              If your product is damaged or incorrect, contact us within{" "}
              <strong>48 hours</strong> of delivery with photos of the issue.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We may offer a free replacement, refund, or store credit.</li>
            </ul>
          </div>

          {/* Commitment */}
          <div className="bg-[#5A2654] text-white rounded-2xl p-10 shadow-md animate-fadeInUp delay-500">
            <h2 className="text-2xl font-semibold mb-4">🤝 Our Commitment</h2>
            <p className="mb-4">
              We understand that men’s wellness is personal and sensitive. Every
              interaction with <strong>Vairam</strong> is handled with trust,
              transparency, and care.
            </p>
            <p>
              For assistance, email us at{" "}
              <a
                href="mailto:alpharevivalprogram@gmail.com"
                className="underline font-semibold"
              >
                alpharevivalprogram@gmail.com
              </a>{" "}
              or WhatsApp us at{" "}
              <a
                href="tel:+919507960456"
                className="underline font-semibold"
              >
                +91 95079 60456
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnPolicy;
