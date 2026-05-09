

import { useState } from "react";
import { FaUser, FaPhone, FaMoneyBill, FaCheckCircle } from "react-icons/fa";
import { supabase } from "../supabase";

const ApplyForm = ({ type = "Loan", subType = "" }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    amount: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔍 VALIDATION
  const validate = () => {
    if (form.name.trim().length < 3) return "Enter valid name";
    if (!/^[6-9]\d{9}$/.test(form.phone)) return "Enter valid 10-digit phone";
    return null;
  };

  // 🚀 FINAL HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMsg = validate();
    if (errorMsg) {
      alert(errorMsg);
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("leads")
        .insert([
          {
            name: form.name,
            phone: form.phone,
            type: type,
            sub_type: subType,
            amount: form.amount || null,
          },
        ])
        .select(); // 🔥 ensures response comes back

      if (error) throw error;

      console.log("Inserted:", data);

      setSuccess(true);

      setForm({
        name: "",
        phone: "",
        amount: "",
      });

      // Auto hide success
      setTimeout(() => setSuccess(false), 3000);

    } catch (err) {
      console.error("Supabase Error:", err.message);
      alert("Submission Failed ❌ Check console");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 md:p-8">

      {/* HEADER */}
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Apply for {subType || type}
      </h2>

      <p className="text-center text-gray-500 text-sm mt-1 mb-6">
        Quick approval • Minimal documentation
      </p>

      {/* SUCCESS */}
      {success && (
        <div className="flex items-center gap-2 bg-green-100 text-green-700 p-3 rounded mb-4">
          <FaCheckCircle />
          <span>Application submitted successfully!</span>
        </div>
      )}

      {/* FORM */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* NAME */}
        <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
          <FaUser className="text-gray-400 mr-2" />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full outline-none"
            required
          />
        </div>

        {/* PHONE */}
        <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
          <FaPhone className="text-gray-400 mr-2" />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full outline-none"
            required
          />
        </div>

        {/* AMOUNT */}
        <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
          <FaMoneyBill className="text-gray-400 mr-2" />
          <input
            type="number"
            name="amount"
            placeholder="Amount (optional)"
            value={form.amount}
            onChange={handleChange}
            className="w-full outline-none"
          />
        </div>

        {/* BUTTON */}
        <button
          disabled={loading}
          className={`py-3 rounded-lg font-semibold text-white transition duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-blue-800 hover:scale-105"
          }`}
        >
          {loading ? "Submitting..." : "Apply Now"}
        </button>

      </form>

      {/* FOOTER */}
      <p className="text-xs text-gray-400 text-center mt-4">
        Your information is safe & secure 🔒
      </p>

    </div>
  );
};

export default ApplyForm;