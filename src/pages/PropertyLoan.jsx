import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApplyForm from "../components/ApplyForm";
import EMICalculator from "../components/EMICalculator";


import {
  FaUniversity,
  FaPercent,
  FaFileAlt,
  FaUserCheck,
  FaMoneyBill,
  FaHome,
} from "react-icons/fa";
import { useEffect } from "react";

const PropertyLoan = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Navbar />

      <section className="bg-gray-100 py-16 px-6 md:px-16">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <FaUniversity className="text-5xl text-blue-600 mx-auto mb-4" />

          <h1 className="text-4xl font-bold">
            Loan Against Property
          </h1>

          <p className="mt-4 text-gray-600">
            Unlock the value of your property and get high loan amounts at lower
            interest rates for personal or business needs.
          </p>
        </div>

        {/* FEATURES */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaMoneyBill className="text-3xl text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold">High Loan Amount</h3>
            <p className="text-gray-500 text-sm mt-2">
              Get up to 50–75% of your property value as loan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaPercent className="text-3xl text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold">Lower Interest Rates</h3>
            <p className="text-gray-500 text-sm mt-2">
              Interest rates start from around 8.5% per annum.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaHome className="text-3xl text-yellow-500 mx-auto mb-3" />
            <h3 className="font-semibold">Flexible Usage</h3>
            <p className="text-gray-500 text-sm mt-2">
              Use funds for business, education, medical, or personal needs.
            </p>
          </div>

        </div>

        {/* BENEFITS */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">
            Benefits of Loan Against Property
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>🏦 High loan value based on property</li>
            <li>📉 Lower interest than personal loans</li>
            <li>📊 Long tenure (5–20 years)</li>
            <li>🎯 Multipurpose loan usage</li>
            <li>📈 Improves credit score on timely repayment</li>
          </ul>
        </div>

        {/* ELIGIBILITY */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaUserCheck /> Eligibility Criteria
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>Must be an Indian citizen</li>
            <li>Age between 21–65 years</li>
            <li>Stable income source (salaried/self-employed)</li>
            <li>Good credit score</li>
            <li>Ownership of property with clear title</li>
            {/* <li>Property should not be mortgaged elsewhere</li> */}
          </ul>
        </div>

        {/* DOCUMENTS */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaFileAlt /> Required Documents
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>📄 Identity & Address Proof</li>
            <li>📄 Income Proof (salary slip / ITR)</li>
            <li>📄 Property Documents (title deed, etc.)</li>
            <li>📄 Bank Statements (last 6 months)</li>
            <li>📄 Business proof (for self-employed)</li>
          </ul>

          <p className="text-sm text-gray-500 mt-3">
            Documents may vary depending on lender requirements
          </p>
        </div>

        {/* FEES & CHARGES */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Fees & Charges</h2>

          <ul className="space-y-2 text-gray-600">
            <li>Processing Fee: 0.25% – 2%</li>
            <li>Foreclosure Charges: 0–4%</li>
            <li>Legal & Valuation Charges applicable</li>
            {/* <li>Penalty Charges: ~2% per month</li> */}
          </ul>
        </div>

        {/* APPLY FORM */}
        <div className="flex justify-center mt-12">
          <ApplyForm type="Loan" subType="Loan Against Property" />
        </div>

        {/* EMI CALCULATOR */}
        <EMICalculator />

       

      </section>

      <Footer />
    </>
  );
};

export default PropertyLoan;