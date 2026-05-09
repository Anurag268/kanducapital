import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// ✅ Move outside (no re-creation on every render)
const sections = ["home", "loans", "insurance", "contact"];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // ✅ SCROLL SPY + NAVBAR EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // ✅ no warning now

  // ✅ SCROLL NAVIGATION
  const handleScroll = (id) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ NAV ITEM
  const navItem = (id, label) => (
    <button
      onClick={() => handleScroll(id)}
      className={`relative font-medium transition duration-300 ${
        active === id ? "text-blue-600" : "text-gray-700"
      }`}
    >
      {label}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300 ${
          active === id ? "w-full" : "w-0"
        }`}
      ></span>
    </button>
  );

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg shadow-md py-3"
            : "bg-transparent py-5"
        } px-4 sm:px-6 md:px-10 flex justify-between items-center`}
      >
        {/* LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <img
            src="/logo.png"
            alt="logo"
            className="w-10 md:w-11 transition group-hover:scale-110"
          />

          <div className="flex flex-col leading-none">
            <h1 className="text-lg md:text-xl font-bold uppercase text-blue-900 tracking-wide">
              KANDU CAPITAL
            </h1>
            <span className="text-xs md:text-sm text-blue-500 font-medium tracking-wider">
              Finance Services
            </span>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8">
          {navItem("home", "Home")}
          {navItem("loans", "Loans")}
          {navItem("insurance", "Insurance")}
          {navItem("contact", "Contact")}
        </div>

        {/* APPLY BUTTON */}
        <button
          onClick={() => navigate("/apply")}
          className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-2 rounded-lg shadow hover:scale-105 transition"
        >
          Apply Now
        </button>

        {/* MOBILE ICON */}
        <div
          className="md:hidden text-2xl cursor-pointer z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-xs bg-white shadow-xl z-50 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition duration-300 flex flex-col items-center justify-center gap-8`}
      >
        {navItem("home", "Home")}
        {navItem("loans", "Loans")}
        {navItem("insurance", "Insurance")}
        {navItem("contact", "Contact")}

        <button
          onClick={() => {
            setOpen(false);
            navigate("/apply");
          }}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Apply Now
        </button>
      </div>
    </>
  );
};

export default Navbar;