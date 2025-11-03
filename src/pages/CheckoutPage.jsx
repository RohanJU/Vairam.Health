import React, { useState } from "react";

const CheckoutPage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // from Razorpay dashboard
      amount: 999 * 100, // amount in paise (₹999)
      currency: "INR",
      name: "Vairam",
      description: "Order Payment",
      image: "/logo.png",
      handler: function (response) {
        alert("Payment Successful ✅ Payment ID: " + response.razorpay_payment_id);
        window.location.href = "/order-success";
      },
      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },
      theme: {
        color: "#5A2654",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <section className="bg-[#FAF8F2] min-h-screen py-16 flex justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-[#2E1C2E] mb-6 text-center">
          Checkout
        </h2>
        <form onSubmit={handlePayment} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
          />
          <textarea
            name="address"
            placeholder="Address"
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
            rows="3"
          ></textarea>

          <button
            type="submit"
            className="bg-[#5A2654] text-white px-6 py-3 rounded-full w-full hover:bg-[#4A1E46] transition"
          >
            Pay ₹999
          </button>
        </form>
      </div>
    </section>
  );
};

export default CheckoutPage;
