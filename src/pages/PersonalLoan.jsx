import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApplyForm from "../components/ApplyForm";
import EMICalculator from "../components/EMICalculator";   // ✅ ADD
   

import { FaUser, FaBolt, FaFileAlt, FaPercent, FaUserCheck } from "react-icons/fa";
import { useEffect } from "react";

const PersonalLoan = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Navbar />

      <section className="bg-gray-100 py-16 px-6 md:px-16">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <FaUser className="text-5xl text-blue-600 mx-auto mb-4" />

          <h1 className="text-4xl font-bold">
            Personal Loan
          </h1>

          <p className="mt-4 text-gray-600">
            Get instant personal loans with minimal documentation, quick approval,
            and flexible repayment options for all your financial needs.
          </p>
        </div>

        {/* FEATURES */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaBolt className="text-3xl text-yellow-500 mx-auto mb-3" />
            <h3 className="font-semibold">Instant Approval</h3>
            <p className="text-gray-500 text-sm mt-2">
              Loan approval within 24–48 hours with fast processing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaFileAlt className="text-3xl text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold">Minimal Documentation</h3>
            <p className="text-gray-500 text-sm mt-2">
              Easy application process with very few documents required.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaPercent className="text-3xl text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold">Flexible Interest Rates</h3>
            <p className="text-gray-500 text-sm mt-2">
              Interest rates starting from around 9.99% onwards.
            </p>
          </div>

        </div>

        {/* BENEFITS */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Benefits of Personal Loan</h2>

          <ul className="space-y-2 text-gray-600">
            <li>💸 No collateral required (unsecured loan)</li>
            <li>⚡ Quick disbursal within 24–48 hours</li>
            <li>📊 Flexible repayment tenure (up to 5–7 years)</li>
            <li>🎯 Can be used for any purpose (medical, travel, education)</li>
            <li>🔄 Paperless Loan</li>
          </ul>
        </div>

        {/* ELIGIBILITY */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaUserCheck /> Eligibility Criteria
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>Age between 21–60 years</li>
            <li>Minimum salary ₹15,000/month</li>
            <li>Good credit score (650+ preferred)</li>
            <li>Stable employment</li>
            <li>Indian resident</li>
          </ul>
        </div>

        {/* DOCUMENTS */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaFileAlt /> Required Documents
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>📄 Aadhar Card / PAN Card</li>
            <li>📄 Address Proof</li>
            <li>📄 Salary Slips (last 3 months)</li>
            <li>📄 Bank Statement (last 6 months)</li>
            <li>📄 2 Year Form-16 / 26AS</li>
          </ul>
        </div>

        {/* PROCESS */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">How to Apply</h2>

          <ol className="space-y-2 text-gray-600">
            <li>1️⃣ Fill application form</li>
            <li>2️⃣ Submit documents</li>
            <li>3️⃣ Get approval</li>
            <li>4️⃣ Loan disbursed to your account</li>
          </ol>
        </div>

        {/* APPLY FORM */}
        <div className="flex justify-center mt-12">
          <ApplyForm type="Loan" subType="Personal Loan" />
        </div>

        {/* EMI CALCULATOR 🔥 */}
        <EMICalculator />

        

      </section>

      <Footer />
    </>
  );
};

export default PersonalLoan;