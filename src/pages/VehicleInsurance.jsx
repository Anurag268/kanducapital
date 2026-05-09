import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApplyForm from "../components/ApplyForm";

import { FaCar } from "react-icons/fa";
import { useEffect } from "react";
import { i } from "framer-motion/client";


const VehicleInsurance = () => {
    useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Navbar />

      <section className="py-16 px-6 md:px-16 bg-gray-100">

        <div className="text-center">
          <FaCar className="text-5xl text-orange-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Vehicle Insurance</h1>
          <p className="mt-4 text-gray-600">
            Protect your vehicle from accidents, theft, and damages.
          </p>
        </div>

        <div className="flex justify-center mt-10">
  <ApplyForm type="Insurance" subType="Vehicle Insurance" />
</div>


      </section>

      <Footer />
    </>
  );
};

export default VehicleInsurance;