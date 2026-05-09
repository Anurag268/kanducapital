import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApplyForm from "../components/ApplyForm";

import { FaUserShield } from "react-icons/fa";
import { useEffect } from "react";


const LoanProtection = () => {
    useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Navbar />

      <section className="py-16 px-6 md:px-16 bg-gray-100">

        <div className="text-center">
          <FaUserShield className="text-5xl text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Loan Protection</h1>
          <p className="mt-4 text-gray-600">
            Ensure your loan repayment is protected in case of emergencies.
          </p>
        </div>

        <div className="flex justify-center mt-10">
  <ApplyForm type="Insurance" subType="Loan Protection" />
</div>

        

      </section>

      <Footer />
    </>
  );
};

export default LoanProtection;