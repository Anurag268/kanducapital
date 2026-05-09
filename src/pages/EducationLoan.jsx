import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApplyForm from "../components/ApplyForm";
import EMICalculator from "../components/EMICalculator";
import { useEffect } from "react";

import { FaGraduationCap, FaUserCheck, FaFileAlt } from "react-icons/fa";

const EducationLoan = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Navbar />

      <section className="py-16 px-6 md:px-16 bg-gray-100">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <FaGraduationCap className="text-5xl text-blue-600 mx-auto mb-4" />

          <h1 className="text-4xl font-bold">
            Education Loan
          </h1>

          <p className="mt-4 text-gray-600">
            Finance your higher education in India or abroad with flexible repayment options.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">
            Benefits of Education Loan
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>🎓 Covers tuition & living expenses</li>
            <li>🌍 Study in India & abroad</li>
            <li>⏳ Flexible repayment after course completion</li>
            <li>📊 Tax benefits under section 80E</li>
          </ul>
        </div>

        {/* ELIGIBILITY */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaUserCheck /> Eligibility
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>Indian student</li>
            <li>Admission in recognized institution</li>
            <li>Co-applicant (parent/guardian) required</li>
          </ul>
        </div>

        {/* STUDENT DOCUMENTS */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaFileAlt /> Student Documents
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>Aadhar Card</li>
            <li>PAN Card</li>
            <li>Academic Records</li>
            <li>Entrance Exam Result</li>
            <li>Passport Size Photo</li>
            <li>Email ID</li>
            <li>Mobile Number</li>
          </ul>
        </div>

        {/* CO-APPLICANT DOCUMENTS */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">
            Co-Applicant (Parents) Documents
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>Aadhar Card</li>
            <li>PAN Card</li>
            <li>Photo</li>
            <li>Income Proof</li>
          </ul>
        </div>

        {/* COURSE DOCUMENTS */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">
            Course & Institution Documents
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>Admission Proof</li>
            <li>Fee Structure</li>
          </ul>
        </div>

        {/* APPLY FORM */}
        <div className="flex justify-center mt-10">
          <ApplyForm type="Loan" subType="Education Loan" />
        </div>

          {/* EMI CALCULATOR */}  

        <EMICalculator />

  

      </section>

      <Footer />
    </>
  );
};

export default EducationLoan;