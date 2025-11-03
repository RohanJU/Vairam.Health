import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import product1 from "../assets/pngegg (28).png";
import product2 from "../assets/pngegg (28).png";
import product3 from "../assets/pngegg (28).png";

const RecommendationPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "ShaktiRoot",
      desc: "Supports stamina, energy, and hormonal balance.",
      price: 899,
      img: product1,
    },
    {
      id: 2,
      name: "Shakti Flame",
      desc: "Boosts libido and vitality with natural herbs.",
      price: 999,
      img: product2,
    },
    {
      id: 3,
      name: "Virya Boost",
      desc: "Improves sperm quality and male fertility.",
      price: 1099,
      img: product3,
    },
  ];

  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

 
  const placeOrder = () => {
  navigate("/checkout");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

  // ✅ “Take the Test Again” button
  const takeTestAgain = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/health-form"); // your HealthForm route path
  };

  return (
    <section className="bg-[#FAF8F2] min-h-screen py-16 px-8 md:px-20">
      <h1 className="text-4xl font-bold text-center text-[#2E1C2E] mb-10">
        Your Personalized Recommendations
      </h1>

      {/* Product Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            <img src={p.img} alt={p.name} className="w-32 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-[#5A2654] mb-2">
              {p.name}
            </h2>
            <p className="text-[#6B5A6B] text-sm mb-4">{p.desc}</p>
            <p className="font-semibold text-[#2E1C2E] mb-4">₹{p.price}</p>

            {cart.find((item) => item.id === p.id) ? (
              <button
                onClick={() => removeFromCart(p.id)}
                className="bg-gray-300 text-[#2E1C2E] px-4 py-2 rounded-full"
              >
                Remove
              </button>
            ) : (
              <button
                onClick={() => addToCart(p)}
                className="bg-[#5A2654] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#4A1E46] transition"
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4 text-[#5A2654]">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-[#6B5A6B] mb-4">No items added yet.</p>
        ) : (
          <>
            <ul className="mb-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between border-b py-2 text-[#2E1C2E]"
                >
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </li>
              ))}
            </ul>
            <p className="font-semibold text-right mb-4">
              Total: ₹{cart.reduce((acc, item) => acc + item.price, 0)}
            </p>
            <button
              onClick={placeOrder}
              className="bg-[#5A2654] text-white px-6 py-3 rounded-full hover:bg-[#4A1E46] transition"
            >
              Place Order
            </button>
          </>
        )}

        {/* ✅ Take Test Again Button */}
        <div className="mt-8">
          <button
            onClick={takeTestAgain}
            className="border border-[#5A2654] text-[#5A2654] font-semibold px-8 py-3 rounded-full hover:bg-[#5A2654] hover:text-white transition-all duration-300 shadow-[0_4px_10px_rgba(90,38,84,0.15)]"
          >
            Take the Test Again
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecommendationPage;
