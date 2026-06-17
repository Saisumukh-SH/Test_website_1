import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

import { Home } from "./components/pages/Home";
import { Gallery } from "./components/pages/Gallery";
import { Blog, } from "./components/pages/Blog";
import { Contact } from "./components/pages/Contact";
import { ThankYou } from "./components/pages/ThankYou";
import { ScrollToTop } from "./components/ScrollToTop";
import { About } from "./components/pages/AboutUs";
import { Services } from "./components/pages/OurServices";

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
            path="/about"
            element={<About  />}
          />

          <Route
            path="/blog"
            element={<Blog />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/services"
            element={<Services />}
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