import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ApplyForm from "../components/ApplyForm";

import { FaCreditCard, FaGift, FaPercent, FaUserCheck, FaFileAlt } from "react-icons/fa";
import { useEffect } from "react";

const CreditCard = () => {useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Navbar />

      <section className="bg-gray-100 py-16 px-6 md:px-16">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <FaCreditCard className="text-5xl text-blue-600 mx-auto mb-4" />

          <h1 className="text-4xl font-bold">Credit Card</h1>

          <p className="mt-4 text-gray-600">
            Apply for credit cards with exciting rewards, cashback offers,
            and flexible payment options.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaGift className="text-3xl text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold">Rewards & Cashback</h3>
            <p className="text-gray-500 text-sm mt-2">
              Earn rewards on every transaction.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaPercent className="text-3xl text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold">Low Interest</h3>
            <p className="text-gray-500 text-sm mt-2">
              Affordable interest rates with EMI options.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaCreditCard className="text-3xl text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold">Easy Approval</h3>
            <p className="text-gray-500 text-sm mt-2">
              Quick application and approval process.
            </p>
          </div>

        </div>

        {/* BENEFITS */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Benefits</h2>

          <ul className="space-y-2 text-gray-600">
            <li>💳 Instant purchasing power</li>
            <li>🎁 Cashback & rewards</li>
            <li>📊 EMI conversion options</li>
            <li>🌍 International usage</li>
          </ul>
        </div>

        {/* ELIGIBILITY */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 flex gap-2 items-center">
            <FaUserCheck /> Eligibility
          </h2>

          <ul className="text-gray-600 space-y-2">
            <li>Age 21–60 years</li>
            <li>Minimum income ₹15,000+</li>
            <li>Good credit score (650+)</li>
          </ul>
        </div>

        {/* DOCUMENTS */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 flex gap-2 items-center">
            <FaFileAlt /> Documents
          </h2>

          <ul className="text-gray-600 space-y-2">
            <li>Aadhar Card</li>
            <li>PAN Card</li>
            <li>Income Proof / Salary Slip</li>
          </ul>
        </div>

        {/* APPLY */}
        <div className="flex justify-center mt-12">
          <ApplyForm type="Credit Card" subType="Credit Card" />
        </div>

      </section>

      <Footer />
    </>
  );
};

export default CreditCard;
