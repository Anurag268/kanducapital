const Stats = () => {
  return (
    <section className="py-16 bg-blue-900 text-white text-center">

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">

        <div>
          <h2 className="text-2xl md:text-3xl font-bold">5000+</h2>
          <p className="text-sm md:text-base">Happy Customers</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold">99+</h2>
          <p className="text-sm md:text-base">Bank Partners</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold">100%</h2>
          <p className="text-sm md:text-base">Trusted Service</p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold">1000Cr+</h2>
          <p className="text-sm md:text-base">Disbursed</p>
        </div>

      </div>

    </section>
  );
};

export default Stats;