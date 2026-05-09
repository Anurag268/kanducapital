import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApplyForm from "../components/ApplyForm";
import EMICalculator from "../components/EMICalculator";

const Apply = () => {
  return (
    <>
      <Navbar />

      <section className="py-16 bg-gray-100 px-4 md:px-10">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* APPLY FORM */}
          <div className="flex justify-center">
            <ApplyForm />
          </div>

          {/* EMI CALCULATOR */}
          <div>
            <EMICalculator />
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Apply;