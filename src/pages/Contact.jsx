import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0F172A] text-white">

      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Contact Us
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 text-center">

          {/* ADDRESS */}
          <div className="bg-[#1E293B] p-6 rounded-xl shadow hover:scale-105 transition">

            <FaMapMarkerAlt className="text-3xl mx-auto mb-4 text-yellow-400" />

            <h3 className="font-semibold text-lg mb-2">
              Office Address
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              Kandu Capital <br />
              Office No. 12, 2nd Floor <br />
              Near Metro Station, Pitampura <br />
              Delhi – 110034, India
            </p>

          </div>

          {/* PHONE */}
          <div className="bg-[#1E293B] p-6 rounded-xl shadow hover:scale-105 transition">

            <FaPhone className="text-3xl mx-auto mb-4 text-green-400" />

            <h3 className="font-semibold text-lg mb-2">
              Call Us
            </h3>

            <a
              href="tel:+916386168932"
              className="text-gray-300 hover:text-white block"
            >
              +91 63861 68932
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/916386168932"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 mt-2 block hover:underline"
            >
              <FaWhatsapp className="inline mr-2" />
              Chat on WhatsApp
            </a>

          </div>

          {/* EMAIL */}
          <div className="bg-[#1E293B] p-6 rounded-xl shadow hover:scale-105 transition">

            <FaEnvelope className="text-3xl mx-auto mb-4 text-blue-400" />

            <h3 className="font-semibold text-lg mb-2">
              Email
            </h3>

            <a
              href="mailto:kanducapital@zohomail.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white underline break-words"
            >
              kanducapital@zohomail.in
            </a>

          </div>

        </div>

        {/* GOOGLE MAP (OPTIONAL BUT PRO 🔥) */}
        <div className="mt-12">
          <iframe
            title="location"
            src="https://www.google.com/maps?q=Pitampura+Delhi&output=embed"
            className="w-full h-64 rounded-xl border-0"
            loading="lazy"
          ></iframe>
        </div>

      </div>

    </section>
  );
};

export default Contact;