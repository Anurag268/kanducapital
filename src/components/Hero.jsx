import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaPhone } from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 md:px-10 overflow-hidden text-white"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(59,130,246,0.25), transparent),
          radial-gradient(circle at 80% 70%, rgba(234,179,8,0.2), transparent),
          linear-gradient(to right, rgba(15,23,42,0.75), rgba(30,58,138,0.6)),
          url('/logo.png')
        `,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center"
      }}
    >

      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 opacity-20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl z-10"
      >
        {/* TITLE */}
        <h1 className="text-5xl font-extrabold leading-tight">
          Fast & Easy Loans <br />
          <span className="text-yellow-400">
            With Trusted Advisor
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="mt-5 text-gray-300 text-lg">
          Get instant approvals with expert guidance from our team
          {/* <span className="text-white font-semibold">
            {" "}Prince Maddheshiya
          </span> */}
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-8">

          {/* APPLY NOW */}
          <button
            onClick={() => navigate("/apply")}
            className="px-6 py-3 bg-yellow-400 text-black rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Apply Now
          </button>

          {/* CALL BUTTON */}
          <a
            href="tel:6386168932"
            className="flex items-center gap-2 px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
          >
            <FaPhone />
            Talk to Advisor
          </a>

        </div>

        {/* TRUST POINTS */}
        <ul className="mt-8 space-y-3">
          <li className="flex items-center gap-3">
            ✅ Instant Loan Approval
          </li>
          <li className="flex items-center gap-3">
            ✅ Low Interest Rates
          </li>
          <li className="flex items-center gap-3">
            ✅ 100% Paperless Process
          </li>
        </ul>

      </motion.div>
    </section>
  );
};

export default Hero;