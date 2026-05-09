import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApplyForm from "../components/ApplyForm";


import { FaShieldAlt } from "react-icons/fa";
import { useEffect } from "react";



const LifeInsurance = () => {
    useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Navbar />

      <section className="py-16 px-6 md:px-16 bg-gray-100">

        <div className="text-center">
          <FaShieldAlt className="text-5xl text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Life Insurance</h1>
          <p className="mt-4 text-gray-600">
            Secure your family’s future with reliable life insurance coverage.
          </p>
        </div>

        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="font-semibold text-xl mb-4">Benefits</h2>
          <ul className="space-y-2 text-gray-600">
            <li>👨‍👩‍👧 Financial security for family</li>
            <li>💰 Maturity benefits</li>
            <li>📊 Tax benefits</li>
          </ul>
        </div>

       <div className="flex justify-center mt-10">
  <ApplyForm type="Insurance" subType="Life Insurance" />
</div>

        

      </section>

      <Footer />
    </>
  );
};

export default LifeInsurance;