import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApplyForm from "../components/ApplyForm";
import EMICalculator from "../components/EMICalculator";
import { useEffect } from "react";

import {
  FaHome,
  FaPercent,
  FaFileAlt,
  FaUserCheck,
  FaMoneyBill,
  FaClock,
} from "react-icons/fa";

const HomeLoan = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Navbar />

      <section className="bg-gray-100 py-16 px-6 md:px-16">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <FaHome className="text-5xl text-blue-600 mx-auto mb-4" />

          <h1 className="text-4xl font-bold">
            Home Loan
          </h1>

          <p className="mt-4 text-gray-600">
            Make your dream home a reality with affordable interest rates,
            flexible repayment options, and quick loan approvals.
          </p>
        </div>

        {/* FEATURES */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaMoneyBill className="text-3xl text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold">High Loan Amount</h3>
            <p className="text-gray-500 text-sm mt-2">
              Get up to 80–90% of property value as loan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaPercent className="text-3xl text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold">Low Interest Rates</h3>
            <p className="text-gray-500 text-sm mt-2">
              Attractive interest rates starting from 6.99% onwards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaClock className="text-3xl text-yellow-500 mx-auto mb-3" />
            <h3 className="font-semibold">Long Tenure</h3>
            <p className="text-gray-500 text-sm mt-2">
              Flexible repayment tenure up to 30 years.
            </p>
          </div>

        </div>

        {/* BENEFITS */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">
            Benefits of Home Loan
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>🏠 Purchase or construct your dream home</li>
            <li>📉 Low interest rates compared to other loans</li>
            <li>📊 Flexible repayment options</li>
            <li>🔄 Balance transfer facility available</li>
            <li>➕ Top-up loan options available</li>
            <li>⚡ Quick approval & disbursal</li>
          </ul>
        </div>

        {/* ELIGIBILITY */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaUserCheck /> Eligibility Criteria
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>Age between 21–65 years</li>
            <li>Minimum income required</li>
            <li>Good credit score (550+ preferred)</li>
            <li>Stable employment or business</li>
            <li>Indian resident</li>
          </ul>
        </div>

        {/* DOCUMENTS */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaFileAlt /> Required Documents
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>📄 Aadhar Card & PAN Card</li>
            <li>📄 Address Proof</li>
            <li>📄 Salary Slips / Income Proof</li>
            <li>📄 Bank Statement (last 6 months)</li>
            <li>📄 Property Documents</li>
          </ul>
        </div>

        {/* EXTRA FEATURES (RULOANS STYLE) */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">
            Additional Features
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>🔄 Balance Transfer Facility</li>
            <li>➕ Top-Up Loan Option</li>
            <li>🚫 No prepayment penalty (floating rate)</li>
            <li>💸 Tax benefits on interest & principal</li>
          </ul>
        </div>

        {/* APPLY FORM */}
        <div className="flex justify-center mt-12">
          <ApplyForm type="Loan" subType="Home Loan" />
        </div>

        {/* EMI CALCULATOR */}
        <EMICalculator />


      </section>

      <Footer />
    </>
  );
};

export default HomeLoan;