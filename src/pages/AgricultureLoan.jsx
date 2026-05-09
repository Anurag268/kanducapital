import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApplyForm from "../components/ApplyForm";
import EMICalculator from "../components/EMICalculator";


import { FaLeaf, FaPercent, FaFileAlt, FaUserCheck, FaClock, FaTractor } from "react-icons/fa";
import { useEffect } from "react";

const AgricultureLoan = () => {
    useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Navbar />

      <section className="bg-gray-100 py-16 px-6 md:px-16">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <FaLeaf className="text-5xl text-green-600 mx-auto mb-4" />

          <h1 className="text-4xl font-bold">
            Agriculture Loan
          </h1>

          <p className="mt-4 text-gray-600">
            Get financial support for farming, agricultural equipment, and land development 
            with flexible repayment options and affordable interest rates.
          </p>
        </div>

        {/* FEATURES */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaTractor className="text-3xl text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold">Farming Support</h3>
            <p className="text-gray-500 text-sm mt-2">
              Loans for seeds, fertilizers, and equipment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaPercent className="text-3xl text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold">Low Interest</h3>
            <p className="text-gray-500 text-sm mt-2">
              Interest rates starting from 10.75%.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaClock className="text-3xl text-yellow-500 mx-auto mb-3" />
            <h3 className="font-semibold">Flexible Tenure</h3>
            <p className="text-gray-500 text-sm mt-2">
              Repayment tenure from 6 to 60 months.
            </p>
          </div>

        </div>

        {/* BENEFITS */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">
            Benefits of Agriculture Loan
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>🌾 Financial support for farmers</li>
            <li>🚜 Purchase agricultural equipment</li>
            <li>💧 Irrigation & land development funding</li>
            <li>⚡ Quick loan approval</li>
          </ul>
        </div>

        {/* ELIGIBILITY */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaUserCheck /> Eligibility Criteria
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>Must be an Indian farmer</li>
            <li>Ownership of agricultural land</li>
            <li>Age between 21–65 years</li>
            <li>Basic income proof (if required)</li>
          </ul>
        </div>

        {/* DOCUMENTS */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaFileAlt /> Required Documents
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>📄 Aadhar Card</li>
            <li>📄 PAN Card</li>
            <li>🌾 Agricultural Land Documents</li>
          </ul>
        </div>

        {/* APPLY FORM */}
        <div className="flex justify-center mt-12">
          <ApplyForm type="Loan" subType="Agriculture Loan" />
        </div>

        {/* EMI CALCULATOR 🔥 */}
        <EMICalculator />

      </section>

      <Footer />
    </>
  );
};

export default AgricultureLoan;