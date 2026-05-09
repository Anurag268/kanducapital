import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApplyForm from "../components/ApplyForm";
import { FaBuilding, FaBolt, FaFileAlt, FaPercent, FaUserCheck, FaChartLine } from "react-icons/fa";
import EMICalculator from "../components/EMICalculator";
import { useEffect } from "react";

const BusinessLoan = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Navbar />

      <section className="bg-gray-100 py-16 px-6 md:px-16">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <FaBuilding className="text-5xl text-blue-600 mx-auto mb-4" />

          <h1 className="text-4xl font-bold">
            Business Loan
          </h1>

          <p className="mt-4 text-gray-600">
            Grow your business with flexible financing options, quick approvals,
            and high loan amounts tailored to your business needs.
          </p>
        </div>

        {/* FEATURES */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaChartLine className="text-3xl text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold">High Loan Amount</h3>
            <p className="text-gray-500 text-sm mt-2">
              Get funding up to several crores based on business profile.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaBolt className="text-3xl text-yellow-500 mx-auto mb-3" />
            <h3 className="font-semibold">Quick Approval</h3>
            <p className="text-gray-500 text-sm mt-2">
              Fast processing and approval within a few days.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaPercent className="text-3xl text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold">Competitive Interest</h3>
            <p className="text-gray-500 text-sm mt-2">
              Interest rates starting from around 11% onwards.
            </p>
          </div>

        </div>

        {/* BENEFITS */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Benefits of Business Loan</h2>

          <ul className="space-y-2 text-gray-600">
            <li>💼 Expand your business operations</li>
            <li>📈 Increase working capital</li>
            <li>🛠️ Purchase equipment & machinery</li>
            <li>🚀 Improve cash flow management</li>
            <li>🏢 Support startup & MSME growth</li>
          </ul>
        </div>

        {/* ELIGIBILITY */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaUserCheck /> Eligibility Criteria
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>Business vintage: Minimum 1–2 years</li>
            <li>Stable revenue & profit records</li>
            <li>Good credit score (650+ preferred)</li>
            <li>Valid business registration</li>
            <li>Indian resident/business entity</li>
          </ul>
        </div>

        {/* DOCUMENTS */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaFileAlt /> Required Documents
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>📄 PAN Card & Aadhar Card</li>
            <li>📄 Business Registration Proof</li>
            <li>📄 Bank Statements (6–12 months)</li>
            <li>📄 ITR Returns (last 2–3 years)</li>
            <li>📄 GST Returns (if applicable)</li>
          </ul>
        </div>

        {/* PROCESS */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">How to Apply</h2>

          <ol className="space-y-2 text-gray-600">
            <li>1️⃣ Fill the application form</li>
            <li>2️⃣ Submit business documents</li>
            <li>3️⃣ Loan evaluation & approval</li>
            <li>4️⃣ Funds disbursed to your account</li>
          </ol>
        </div>

        {/* APPLY FORM */}
        <div className="flex justify-center mt-12">
          <ApplyForm type="Loan" subType="Business Loan" />
        </div>
        <EMICalculator />

      </section>

      <Footer />
    </>
  );
};

export default BusinessLoan;