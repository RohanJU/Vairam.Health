import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HealthForm() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    phone: "",
    email: "",
    energy: "",
    stress: "",
    fatigue: "",
    performance: "",
    ejaculation: "",
    desire: "",
    constipation: "",
    bloated: "",
    friedFood: "",
    detoxInterest: "",
    goals: [],
    ayurvedicConsult: "",
    otherConcerns: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        goals: checked
          ? [...prev.goals, value]
          : prev.goals.filter((g) => g !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  // ✅ On form submit — redirect to /recommendations
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/recommendations");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center py-16 bg-[#FAF8F2]">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-[#2E1C2E] text-center">
          Take the Vairam Health Test
        </h2>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-[#5A2654] h-2 rounded-full transition-all duration-500"
            style={{ width: `${(step / 6) * 100}%` }}
          ></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="font-semibold">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                  required
                />
              </div>
              <div className="flex gap-4">
                <div>
                  <label className="font-semibold">Gender</label>
                  <div className="flex flex-col">
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleChange}
                      />{" "}
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleChange}
                      />{" "}
                      Female
                    </label>
                  </div>
                </div>
                <div className="flex-1">
                  <label className="font-semibold">Age</label>
                  <input
                    type="number"
                    name="age"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-4">
              <Question
                q="How do you feel during the day?"
                name="energy"
                options={["Energetic", "Normal", "Tired", "Always exhausted"]}
                handleChange={handleChange}
              />
              <Question
                q="Do you experience frequent stress or anxiety?"
                name="stress"
                options={["Yes", "No", "Sometimes"]}
                handleChange={handleChange}
              />
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-4">
              <Question
                q="Do you experience early ejaculation?"
                name="ejaculation"
                options={["Yes", "No", "Occasionally"]}
                handleChange={handleChange}
              />
              <Question
                q="Do you feel a decrease in sexual desire?"
                name="desire"
                options={["Yes", "No", "Occasionally"]}
                handleChange={handleChange}
              />
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className="space-y-4">
              <Question
                q="Do you experience constipation or irregular motion?"
                name="constipation"
                options={["Yes", "Sometimes", "No"]}
                handleChange={handleChange}
              />
              <Question
                q="Do you feel bloated after eating?"
                name="bloated"
                options={["Yes", "Sometimes", "No"]}
                handleChange={handleChange}
              />
            </div>
          )}

          {/* Step 5 */}
          {step === 5 && (
            <div className="space-y-3">
              <p className="font-semibold">What are your top health goals?</p>
              {[
                "Boost stamina & energy",
                "Improve timing & performance",
                "Increase confidence in intimacy",
                "Improve digestion & gut health",
                "Reduce stress & anxiety",
              ].map((goal) => (
                <label key={goal} className="block">
                  <input
                    type="checkbox"
                    value={goal}
                    onChange={handleChange}
                  />{" "}
                  {goal}
                </label>
              ))}
            </div>
          )}

          {/* Step 6 */}
          {step === 6 && (
            <div className="space-y-4">
              <Question
                q="Would you like a free Ayurvedic consultation?"
                name="ayurvedicConsult"
                options={["Yes", "No"]}
                handleChange={handleChange}
              />
              <div>
                <label className="font-semibold">
                  Any other concerns you’d like to share?
                </label>
                <textarea
                  name="otherConcerns"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                  rows="3"
                ></textarea>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="bg-gray-300 px-4 py-2 rounded-md"
              >
                Previous
              </button>
            )}
            {step < 6 ? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-[#5A2654] text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

const Question = ({ q, name, options, handleChange }) => (
  <div>
    <p className="font-semibold mb-2">{q}</p>
    {options.map((opt) => (
      <label key={opt} className="block">
        <input type="radio" name={name} value={opt} onChange={handleChange} />{" "}
        {opt}
      </label>
    ))}
  </div>
);
