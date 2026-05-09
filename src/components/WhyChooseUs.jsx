import { FaPercent, FaBolt, FaFileAlt, FaUserTie } from "react-icons/fa";

const features = [
  {
    title: "Low Interest Rates",
    desc: "Get loans at the best rates available",
    icon: <FaPercent />
  },
  {
    title: "Fast Approval",
    desc: "Instant approval with minimal documents",
    icon: <FaBolt />
  },
  {
    title: "100% Paperless",
    desc: "No paperwork, fully digital process",
    icon: <FaFileAlt />
  },
  {
    title: "Expert Guidance",
    desc: "Get help from our experienced loan advisors",
    icon: <FaUserTie />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-100 text-center">

      <h2 className="text-2xl md:text-3xl font-bold mb-10">
        Why Choose Us
      </h2>

      {/* RESPONSIVE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-10">

        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col items-center text-center"
          >

            {/* ICON */}
            <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-2xl mb-4">
              {f.icon}
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-lg">
              {f.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-500 mt-2 text-sm">
              {f.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default WhyChooseUs;