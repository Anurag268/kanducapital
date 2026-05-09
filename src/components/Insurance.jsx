const insurance = [
  "sbi.jpeg",
  "tata.jpeg",
  "icici.jpeg",
  "axis.jpeg",
  "hdfc.jpeg",
  "bajaj.jpeg",
  "royal.jpeg",
  "shri.jpeg",
  "niva.jpeg"
];

const Insurance = () => {
  return (
    <section className="py-16 bg-white text-center">

      <h2 className="text-3xl font-bold mb-10">
        Our Insurance Partners
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 md:px-10">

        {insurance.map((img, i) => (
          <div
            key={i}
            className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg transition flex items-center justify-center"
          >
            <img
              src={`/insurance/${img}`}
              alt="insurance"
              className="h-10 md:h-12 object-contain"
            />
          </div>
        ))}

      </div>

    </section>
  );
};

export default Insurance;