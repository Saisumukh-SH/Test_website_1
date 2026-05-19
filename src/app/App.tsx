import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

import { Home } from "./components/pages/Home";
import { Gallery } from "./components/pages/Gallery";
import { Journal } from "./components/pages/Journal";
import { Contact } from "./components/pages/Contact";
import { ThankYou } from "./components/pages/ThankYou";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {

  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen bg-[#F8F5F0] text-[#2B2B2B]">

        {/* NAVIGATION */}
        <Navigation />

        {/* ROUTES */}
        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/gallery"
            element={<Gallery />}
          />

          <Route
            path="/journal"
            element={<Journal />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/thank-you"
            element={<ThankYou />}
          />

        </Routes>

        {/* FOOTER */}
        <Footer />

      </div>

    </Router>
  );
}