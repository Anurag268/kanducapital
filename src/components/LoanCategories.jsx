import {
  FaHome,
  FaUser,
  FaBuilding,
  FaCar,
  FaUniversity,
  FaGraduationCap,
  FaCoins,
  FaCreditCard,
  FaLeaf
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const LoanCategories = () => {
  const navigate = useNavigate();

  const services = [
    {
      name: "Home Loan",
      path: "/home-loan",
      icon: <FaHome />,
      desc: "Affordable housing loans"
    },
    {
      name: "Personal Loan",
      path: "/personal-loan",
      icon: <FaUser />,
      desc: "Instant approval loans"
    },
    {
      name: "Business Loan",
      path: "/business-loan",
      icon: <FaBuilding />,
      desc: "Grow your business"
    },
    {
      name: "Car Loan",
      path: "/car-loan",
      icon: <FaCar />,
      desc: "Drive your dream car"
    },
    {
      name: "Loan Against Property",
      path: "/property-loan",
      icon: <FaUniversity />,
      desc: "Unlock property value"
    },
    {
      name: "Education Loan",
      path: "/education-loan",
      icon: <FaGraduationCap />,
      desc: "Finance your higher education"
    },
    {
      name: "Gold Loan",
      path: "/gold-loan",
      icon: <FaCoins />,
      desc: "Instant loan against gold"
    },
    {
      name: "Credit Card",
      path: "/credit-card",
      icon: <FaCreditCard />,
      desc: "Get rewards & cashback cards"
    },
    {
  name: "Agriculture Loan",
  path: "/agriculture-loan",
  icon: <FaLeaf />, // import from react-icons
  desc: "Loan for farmers & agricultural needs"
}
  ];

  return (
    <section id="loans" className="py-20 bg-gray-100 text-center">

      <h2 className="text-2xl md:text-4xl font-bold mb-12">
        Our Services
      </h2>

      {/* RESPONSIVE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-10">

        {services.map((item, i) => (
          <div
            key={i}
            onClick={() => navigate(item.path)}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer group flex flex-col items-center text-center min-h-[180px]"
          >

            {/* ICON */}
            <div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 text-2xl mb-4 group-hover:bg-yellow-400 group-hover:text-black transition">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-lg">
              {item.name}
            </h3>

            {/* DESC */}
            <p className="text-gray-500 mt-2 text-sm">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default LoanCategories;