import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const advisors = [
  {
    name: "Krishna Maddheshiya",
    role: "Director & Loan Advisor",
    phone: "9616899133",
    email: "krishna.maddheshiya@outlook.in",
    img: "/krishna.png",
  },
  {
    name: "Prince Maddheshiya",
    role: " Loan Advisor",
    phone: "6386168932",
    email: "prince.madheshiya@outlook.in",
    img: "/prince.png",
  }
  
];

const Advisor = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">

      <h2 className="text-3xl font-bold mb-10">
        Our Advisors
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
      >

        {advisors.map((a, index) => (
          <SwiperSlide key={index}>

            <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm mx-auto">

              {/* IMAGE */}
              <img
                src={a.img}
                alt={a.name}
                className="w-32 h-32 object-cover rounded-full mx-auto"
              />

              {/* NAME */}
              <h1 className="mt-4 text-xl font-bold">
                {a.name}
              </h1>

              {/* ROLE */}
              <p className="text-sm font-semibold text-gray-600">
                {a.role}
              </p>

              {/* PHONE */}
              <div className="flex items-center justify-center gap-2 mt-3">
                <FaPhone className="text-green-500" /> {/* ✅ GREEN ICON */}
                <a
                  href={`tel:${a.phone}`}
                  className="text-gray-700 hover:text-green-600"
                >
                  {a.phone}
                </a>
              </div>

              {/* EMAIL */}
              <div className="flex items-center justify-center gap-2 mt-2">
                <FaEnvelope className="text-blue-500" /> {/* ✅ EMAIL ICON */}
                <a
                  href={`mailto:${a.email}`}   // ✅ FIXED
                  className="text-gray-700 hover:text-blue-600 break-words"
                >
                  {a.email}
                </a>
              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
};

export default Advisor;