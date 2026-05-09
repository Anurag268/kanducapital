import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


import PageWrapper from "./components/PageWrapper";



/* PAGES */
import Home from "./pages/home";
import HomeLoan from "./pages/HomeLoan";
import PersonalLoan from "./pages/PersonalLoan";
import BusinessLoan from "./pages/BusinessLoan";
import CarLoan from "./pages/CarLoan";
import PropertyLoan from "./pages/PropertyLoan";
import EducationLoan from "./pages/EducationLoan";
import GoldLoan from "./pages/GoldLoan";
import CreditCard from "./pages/CreditCard";
import AgricultureLoan from "./pages/AgricultureLoan";

import HealthInsurance from "./pages/HealthInsurance";
import LifeInsurance from "./pages/LifeInsurance";
import VehicleInsurance from "./pages/VehicleInsurance";
import LoanProtection from "./pages/LoanProtection";
import GeneralInsurance from "./pages/GeneralInsurance";

import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";

import Apply from "./pages/Apply";

/* 🔥 ANIMATED ROUTES */
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        {/* HOME */}
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />

        {/* LOANS */}
        <Route path="/home-loan" element={<PageWrapper><HomeLoan /></PageWrapper>} />
        <Route path="/personal-loan" element={<PageWrapper><PersonalLoan /></PageWrapper>} />
        <Route path="/business-loan" element={<PageWrapper><BusinessLoan /></PageWrapper>} />
        <Route path="/car-loan" element={<PageWrapper><CarLoan /></PageWrapper>} />
        <Route path="/property-loan" element={<PageWrapper><PropertyLoan /></PageWrapper>} />
        <Route path="/education-loan" element={<PageWrapper><EducationLoan /></PageWrapper>} />
        <Route path="/gold-loan" element={<PageWrapper><GoldLoan /></PageWrapper>} />
        <Route path="/credit-card" element={<PageWrapper><CreditCard /></PageWrapper>} />
        <Route path="/agriculture-loan" element={<PageWrapper><AgricultureLoan /></PageWrapper>} />

        {/* INSURANCE */}
        <Route path="/health-insurance" element={<PageWrapper><HealthInsurance /></PageWrapper>} />
        <Route path="/life-insurance" element={<PageWrapper><LifeInsurance /></PageWrapper>} />
        <Route path="/vehicle-insurance" element={<PageWrapper><VehicleInsurance /></PageWrapper>} />
        <Route path="/loan-protection" element={<PageWrapper><LoanProtection /></PageWrapper>} />
        <Route path="/general-insurance" element={<PageWrapper><GeneralInsurance /></PageWrapper>} />

        {/* APPLY */}
        <Route path="/apply" element={<PageWrapper><Apply /></PageWrapper>} />

        <Route path="/admin-login" element={<AdminLogin />} />
<Route path="/admin" element={<Admin />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <PageWrapper>
              <h1 className="text-center py-20 text-2xl font-bold">
                404 Page Not Found
              </h1>
            </PageWrapper>
          }
        />

      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      
      <AnimatedRoutes /> {/* 🔥 ENABLES ANIMATION */}
    </Router>
  );
}

export default App;