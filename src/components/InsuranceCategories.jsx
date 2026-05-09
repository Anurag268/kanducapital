import { FaHeartbeat, FaShieldAlt, FaCar, FaUserShield } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const InsuranceCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Health Insurance",
      desc: "Cover medical expenses & hospital bills",
      icon: <FaHeartbeat />,
      path: "/health-insurance"
    },
    {
      name: "Life Insurance",
      desc: "Secure your family’s financial future",
      icon: <FaShieldAlt />,
      path: "/life-insurance"
    },
    {
      name: "Vehicle Insurance",
      desc: "Protect your car/bike from damage & loss",
      icon: <FaCar />,
      path: "/vehicle-insurance"
    },
    {
      name: "Loan Protection",
      desc: "Protect your loan repayment in emergencies",
      icon: <FaUserShield />,
      path: "/loan-protection"
    },
    {
  name: "General Insurance",
  path: "/general-insurance",
  icon: <FaShieldAlt />,
  desc: "Protect your assets & risks"
}
  ];

  return (
    <section id="insurance" className="py-20 bg-gray-100 text-center">

      <h2 className="text-2xl md:text-4xl font-bold mb-12">
        Insurance Services
      </h2>

      {/* RESPONSIVE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-10">

        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer flex flex-col items-center"
          >

            {/* ICON */}
            <div className="w-14 h-14 flex items-center justify-center bg-green-100 text-green-600 rounded-full text-2xl mb-4">
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

export default InsuranceCategories;