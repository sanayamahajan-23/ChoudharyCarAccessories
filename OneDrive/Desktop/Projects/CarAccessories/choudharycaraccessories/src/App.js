import React, { useEffect, useState, Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import MobileNavbar from "./components/MobileNavbar";
import CarCustomization from "./pages/CarCustomization";
import InteriorUpgradation from "./pages/InteriorUpgradation";
import CarAccessories from "./pages/CarAccessories";
import LightingSolutions from "./pages/LightingSolutions";
import MusicSystem from "./pages/MusicSystem";
import CarCare from "./pages/CarCare";
import OffRoading from "./pages/OffRoading";
import Footer from "./components/Footer";
const AboutUs = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const Brands = lazy(() => import("./pages/Brands"));
const Contact = lazy(() => import("./pages/Contact"));
const BookUs = lazy(() => import("./pages/BookUs"));
const AnimatedRoutes = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingScreen />}>
        <div className="App">
          {isMobile ? <MobileNavbar /> : <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/book-us" element={<BookUs />} />
            <Route path="/car-customization" element={<CarCustomization />} />
            <Route
              path="/interior-upgradation"
              element={<InteriorUpgradation />}
            />
            <Route path="/car-accessories" element={<CarAccessories />} />
            <Route path="/lighting-solutions" element={<LightingSolutions />} />
            <Route path="/music-system" element={<MusicSystem />} />
            <Route path="/car-care" element={<CarCare />} />
            <Route path="/off-roading" element={<OffRoading />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </AnimatePresence>
  );
};
const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
