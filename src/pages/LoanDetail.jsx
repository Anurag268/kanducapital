import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApplyForm from "../components/ApplyForm";

import { FaHome, FaUser, FaBuilding, FaCar, FaUniversity } from "react-icons/fa";

const loanData = {
  "home-loan": {
    title: "Home Loan",
    icon: <FaHome className="text-4xl text-blue-600" />,
    description: "Get affordable home loans with low interest rates and flexible tenure.",
    features: [
      "Interest rates starting from 8.5%",
      "Loan tenure up to 30 years",
      "High loan amount eligibility",
      "Quick approval process"
    ]
  },

  "personal-loan": {
    title: "Personal Loan",
    icon: <FaUser className="text-4xl text-green-600" />,
    description: "Instant personal loans for your financial needs with minimal documentation.",
    features: [
      "No collateral required",
      "Instant approval",
      "Flexible repayment options",
      "Minimal documentation"
    ]
  },

  "business-loan": {
    title: "Business Loan",
    icon: <FaBuilding className="text-4xl text-purple-600" />,
    description: "Expand your business with easy and quick business loans.",
    features: [
      "High loan amount",
      "Quick disbursal",
      "Flexible tenure",
      "Competitive interest rates"
    ]
  },

  "car-loan": {
    title: "Car Loan",
    icon: <FaCar className="text-4xl text-red-600" />,
    description: "Drive your dream car with our affordable car loan options.",
    features: [
      "Up to 100% financing",
      "Low EMI options",
      "Quick processing",
      "Flexible repayment"
    ]
  },

  "property-loan": {
    title: "Loan Against Property",
    icon: <FaUniversity className="text-4xl text-yellow-600" />,
    description: "Unlock the value of your property with easy loan options.",
    features: [
      "High loan value",
      "Lower interest rates",
      "Long tenure",
      "Easy approval"
    ]
  }
};

const LoanDetail = () => {
  const { type } = useParams();
  const loan = loanData[type];

  if (!loan) {
    return <h1 className="text-center py-20">Loan not found</h1>;
  }

  return (
    <>
      <Navbar />

      <section className="py-20 px-10 bg-gray-100">

        {/* HEADER */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            {loan.icon}
          </div>

          <h1 className="text-4xl font-bold">
            {loan.title}
          </h1>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            {loan.description}
          </p>
        </div>

        {/* FEATURES */}
        <div className="mt-10 max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Key Features
          </h2>

          <ul className="space-y-2">
            {loan.features.map((f, i) => (
              <li key={i} className="flex gap-2">
                ✅ {f}
              </li>
            ))}
          </ul>
        </div>

        {/* APPLY FORM */}
        <div className="flex justify-center mt-10">
          <ApplyForm loanType={loan.title} />
        </div>

      </section>

      <Footer />
    </>
  );
};

export default LoanDetail;