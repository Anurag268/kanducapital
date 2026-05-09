import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApplyForm from "../components/ApplyForm";

import { FaHeartbeat,  FaUserCheck, FaFileAlt } from "react-icons/fa";
import { useEffect } from "react";


const HealthInsurance = () => {
    useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Navbar />

      <section className="py-16 px-6 md:px-16 bg-gray-100">

        <div className="text-center max-w-3xl mx-auto">
          <FaHeartbeat className="text-5xl text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Health Insurance</h1>
          <p className="mt-4 text-gray-600">
            Protect yourself and your family from unexpected medical expenses with comprehensive health insurance plans.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="font-semibold text-xl mb-4">Benefits</h2>
          <ul className="space-y-2 text-gray-600">
            <li>🏥 Covers hospitalization expenses</li>
            <li>💊 Cashless treatment at network hospitals</li>
            <li>👨‍👩‍👧 Family floater plans available</li>
            <li>📈 Tax benefits under section 80D</li>
          </ul>
        </div>

        {/* ELIGIBILITY */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="font-semibold text-xl mb-4 flex gap-2 items-center">
            <FaUserCheck /> Eligibility
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li>Age: 18–65 years</li>
            <li>Indian resident</li>
            <li>Medical check-up (if required)</li>
          </ul>
        </div>

        {/* DOCUMENTS */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="font-semibold text-xl mb-4 flex gap-2 items-center">
            <FaFileAlt /> Documents
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li>Aadhar & PAN Card</li>
            <li>Address proof</li>
            <li>Medical history (if applicable)</li>
          </ul>
        </div>

        <div className="flex justify-center mt-10">
  <ApplyForm type="Insurance" subType="Health Insurance" />
</div>

        

      </section>

      <Footer />
    </>
  );
};

export default HealthInsurance;