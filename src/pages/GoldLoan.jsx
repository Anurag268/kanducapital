import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApplyForm from "../components/ApplyForm";
import EMICalculator from "../components/EMICalculator";
import { FaCoins, FaPercent, FaBolt, FaUserCheck, FaFileAlt } from "react-icons/fa";
import { useEffect } from "react";  


const GoldLoan = () => {
    useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Navbar />

      <section className="bg-gray-100 py-16 px-6 md:px-16">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <FaCoins className="text-5xl text-yellow-500 mx-auto mb-4" />

          <h1 className="text-4xl font-bold">Gold Loan</h1>

          <p className="mt-4 text-gray-600">
            Get instant loan against your gold with minimal documentation,
            quick approval, and attractive interest rates.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaBolt className="text-3xl text-yellow-500 mx-auto mb-3" />
            <h3 className="font-semibold">Instant Disbursal</h3>
            <p className="text-gray-500 text-sm mt-2">
              Get loan within hours with quick processing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaPercent className="text-3xl text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold">Low Interest Rates</h3>
            <p className="text-gray-500 text-sm mt-2">
              Competitive interest rates starting from 9% onwards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaCoins className="text-3xl text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold">High Loan Value</h3>
            <p className="text-gray-500 text-sm mt-2">
              Get up to 75–90% of gold value.
            </p>
          </div>

        </div>

        {/* BENEFITS */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Benefits</h2>

          <ul className="space-y-2 text-gray-600">
            <li>💰 No income proof required</li>
            <li>⚡ Fast approval & disbursal</li>
            <li>🔐 Safe gold storage</li>
            <li>📉 Lower interest compared to personal loans</li>
          </ul>
        </div>

        {/* ELIGIBILITY */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 flex gap-2 items-center">
            <FaUserCheck /> Eligibility
          </h2>

          <ul className="text-gray-600 space-y-2">
            <li>Age 18–65 years</li>
            <li>Ownership of gold jewellery</li>
            <li>Indian resident</li>
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
          </ul>
        </div>

        {/* APPLY */}
        <div className="flex justify-center mt-12">
          <ApplyForm type="Loan" subType="Gold Loan" />
        </div>
        <EMICalculator />

      </section>

      <Footer />
    </>
  );
};

export default GoldLoan;