const banks = [
   "hdfc.png","pnb.png","icici.png","aadhar.png","apri.png","axis.png","lic.png","idfc.png","chola.png",
  "grihum.png","hinduja.png",
  "muthoot.png","piramal.png",
  "poonawalla.png","shriram.png","smfg.png","shubham.jpeg","gro.jpeg","iifl.jpeg","aditya.jpeg"
];

const Banks = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">

      <h2 className="text-2xl md:text-3xl font-bold mb-10">
        Our Banking Partners
      </h2>

      {/* RESPONSIVE GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 sm:px-6 md:px-10">

        {banks.map((img, i) => (
          <div
            key={i}
            className="bg-white p-4 md:p-5 rounded-xl shadow hover:shadow-lg transition flex items-center justify-center"
          >
            <img
              src={`/banks/${img}`}
              alt={img}
              className="h-10 sm:h-12 md:h-14 object-contain"
            />
          </div>
        ))}

      </div>

    </section>
  );
};

export default Banks;