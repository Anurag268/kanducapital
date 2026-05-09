// const Testimonials = () => {
//   return (
//     <section className="py-20 text-center">

//       <h2 className="text-3xl font-bold mb-10">
//         What Our Clients Say
//       </h2>

//       <div className="flex justify-center gap-8 px-10">

//         <div className="bg-white p-6 rounded-xl shadow w-80">
//           <p>"Got my loan approved within 24 hours!"</p>
//           <h4 className="mt-3 font-semibold">Rahul Sharma</h4>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow w-80">
//           <p>"Very smooth process and great support."</p>
//           <h4 className="mt-3 font-semibold">Amit Verma</h4>
//         </div>

//       </div>

//     </section>
//   );
// };

// export default Testimonials;

import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Got my personal loan approved within 24 hours. Amazing service and guidance!",
  },
  {
    name: "Ankit Verma",
    text: "Very smooth process. Prince guided me at every step. Highly recommended.",
  },
  {
    name: "Sneha Gupta",
    text: "Best loan advisor! Got lowest interest rate for my home loan.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white text-center">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold mb-12">
        What Our Clients Say
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10">

        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-left"
          >

            {/* STARS */}
            <div className="flex text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* TEXT */}
            <p className="text-gray-600 text-sm leading-relaxed">
              "{t.text}"
            </p>

            {/* USER */}
            <h4 className="mt-4 font-semibold text-gray-800">
              — {t.name}
            </h4>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Testimonials;