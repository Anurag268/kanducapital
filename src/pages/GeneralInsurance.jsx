import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


import {
  FaShieldAlt,
  FaCar,
  FaHome,
  FaPlane,
  FaBriefcase,
  FaMobileAlt,
  FaUserCheck,
  FaFileAlt
} from "react-icons/fa";
import { useEffect } from "react";
import ApplyForm from "../components/ApplyForm";
const GeneralInsurance = () => {
    useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Navbar />

      <section className="bg-gray-100 py-16 px-6 md:px-16">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <FaShieldAlt className="text-5xl text-blue-600 mx-auto mb-4" />

          <h1 className="text-4xl font-bold">
            General Insurance
          </h1>

          <p className="mt-4 text-gray-600">
            Protect your assets, health, and business from unexpected risks with
            comprehensive general insurance solutions designed for complete financial security.
          </p>
        </div>

        {/* TYPES OF INSURANCE */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaCar className="text-3xl text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold">Motor Insurance</h3>
            <p className="text-gray-500 text-sm">
              Covers vehicle damage, accidents, and theft.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaHome className="text-3xl text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold">Home Insurance</h3>
            <p className="text-gray-500 text-sm">
              Protects your home against fire, theft, and disasters.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaPlane className="text-3xl text-yellow-500 mx-auto mb-3" />
            <h3 className="font-semibold">Travel Insurance</h3>
            <p className="text-gray-500 text-sm">
              Covers trip cancellations, emergencies, and losses.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaBriefcase className="text-3xl text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold">Commercial Insurance</h3>
            <p className="text-gray-500 text-sm">
              Protects businesses from financial risks and liabilities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaMobileAlt className="text-3xl text-pink-500 mx-auto mb-3" />
            <h3 className="font-semibold">Mobile Insurance</h3>
            <p className="text-gray-500 text-sm">
              Covers loss, theft, or damage of smartphones.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <FaShieldAlt className="text-3xl text-red-500 mx-auto mb-3" />
            <h3 className="font-semibold">Rural Insurance</h3>
            <p className="text-gray-500 text-sm">
              Covers agricultural assets, livestock, and rural risks.
            </p>
          </div>

        </div>

        {/* BENEFITS */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">
            Benefits of General Insurance
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>🛡️ Financial protection against unexpected losses</li>
            <li>⚡ Quick claim support and assistance</li>
            <li>💸 Affordable premium options</li>
            <li>📊 Wide coverage across multiple sectors</li>
            <li>🔒 Protection for assets, health, and business</li>
          </ul>
        </div>

        {/* ELIGIBILITY */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaUserCheck /> Eligibility
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>Indian resident</li>
            <li>Valid identity proof</li>
            <li>Ownership of asset (vehicle, home, business, etc.)</li>
          </ul>
        </div>

        {/* DOCUMENTS */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaFileAlt /> Required Documents
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>📄 Aadhar Card</li>
            <li>📄 PAN Card</li>
            <li>📄 Address Proof</li>
            <li>📄 Asset Documents (Vehicle RC / Property Papers)</li>
          </ul>
        </div>

        {/* APPLY FORM */}
        <div className="flex justify-center mt-12">
          <ApplyForm type="Insurance" subType="General Insurance" />
        </div>

      </section>

      <Footer />
    </>
  );
};

export default GeneralInsurance;