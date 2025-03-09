import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./commons/Nav";
import CarEvaluation from "./pages/CarEvaluation";
import ClaimHistory from "./pages/ClaimHistory";
import PremiumCalculator from "./pages/PremiumCalculator";
import DiscountRate from "./pages/DiscountRate";
import Footer from "./commons/Footer.jsx";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<CarEvaluation />} />
        <Route path="/claim-history" element={<ClaimHistory />} />
        <Route path="/premium-calculator" element={<PremiumCalculator />} />
        <Route path="/discount-rate" element={<DiscountRate />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
