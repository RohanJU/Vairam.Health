import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#FAF8F2] text-center p-8">
      <h1 className="text-4xl font-bold text-[#2E1C2E] mb-4">
        🎉 Order Confirmed!
      </h1>
      <p className="text-[#5A2654] mb-6">
        Thank you for your purchase! Your wellness journey with Vairam begins now.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-[#5A2654] text-white px-6 py-3 rounded-full hover:bg-[#4A1E46] transition"
      >
        Go to Home
      </button>
    </section>
  );
};

export default OrderSuccess;
