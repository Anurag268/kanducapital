import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApplyForm from "../components/ApplyForm";
import { FaCar, FaPercent, FaBolt, FaFileAlt, FaUserCheck, FaMoneyBill } from "react-icons/fa";
import EMICalculator from "../components/EMICalculator";
import { useEffect } from "react";

const CarLoan = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Navbar />

      <section className="bg-gray-100 py-16 px-6 md:px-16">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <FaCar className="text-5xl text-blue-600 mx-auto mb-4" />

          <h1 className="text-4xl font-bold">
            Car Loan
          </h1>

          <p className="mt-4 text-gray-600">
            Drive your dream car with easy financing options, low interest rates,
            and quick loan approvals tailored to your needs.
          </p>
        </div>

        {/* FEATURES */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaMoneyBill className="text-3xl text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold">Up to 100% Financing</h3>
            <p className="text-gray-500 text-sm mt-2">
              Finance almost the entire cost of your car.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaBolt className="text-3xl text-yellow-500 mx-auto mb-3" />
            <h3 className="font-semibold">Quick Approval</h3>
            <p className="text-gray-500 text-sm mt-2">
              Fast loan processing and approval within 24–48 hours.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaPercent className="text-3xl text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold">Low Interest Rates</h3>
            <p className="text-gray-500 text-sm mt-2">
              Interest rates starting from around 7.5% onwards.
            </p>
          </div>

        </div>

        {/* BENEFITS */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Benefits of Car Loan</h2>

          <ul className="space-y-2 text-gray-600">
            <li>🚗 Own your dream car easily</li>
            <li>💰 Flexible EMI options</li>
            <li>📊 Long repayment tenure (up to 7 years)</li>
            <li>⚡ Quick disbursal</li>
            <li>🎯 Special offers on new & used cars</li>
          </ul>
        </div>

        {/* ELIGIBILITY */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaUserCheck /> Eligibility Criteria
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>Age between 21–65 years</li>
            <li>Stable income (salaried/self-employed)</li>
            <li>Minimum income criteria as per lender</li>
            <li>Good credit score (650+ preferred)</li>
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
            <li>📄 Vehicle quotation from dealer</li>
          </ul>
        </div>

        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaFileAlt /> Required Documents for Used Car Loan
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>📄 Aadhar Card & PAN Card</li>
            <li>📄 Address Proof</li>
            <li>📄 Salary Slips / Income Proof</li>
            <li>📄 Bank Statement (last 6 months)</li>
            <li>📄 RC Paper & Insurance</li>
          </ul>
        </div>

        {/* PROCESS */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">How to Apply</h2>

          <ol className="space-y-2 text-gray-600">
            <li>1️⃣ Fill application form</li>
            <li>2️⃣ Submit required documents</li>
            <li>3️⃣ Get loan approval</li>
            <li>4️⃣ Loan amount disbursed to dealer</li>
          </ol>
        </div>

        {/* APPLY FORM */}
        <div className="flex justify-center mt-12">
          <ApplyForm type="Loan" subType="Car Loan" />
        </div>
        <EMICalculator />

      </section>

      <Footer />
    </>
  );
};

export default CarLoan;