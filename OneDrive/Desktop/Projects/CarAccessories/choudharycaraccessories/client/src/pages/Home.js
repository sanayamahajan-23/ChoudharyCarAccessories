import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CarCarousel from "../components/CarCarousel";
import ReviewSection from "../components/Review";
import BrandSection from "../components/BrandSection";
import Contact from "../components/Contact"
import "../css/Home.css";
import PageWrapper from "../components/PageWrapper";
const services = [
  { title: "Car Customization", image: "/assets/icon1.png", link: "/car-customization" },
  {
    title: "Interior Upgradation",
    image: "/assets/icon2.png",
    link: "/interior-upgradation",
  },
  {
    title: "Music System Upgradation",
    image: "/assets/icon3.png",
    link: "/music-system",
  },
  {
    title: "Car Accessories",
    image: "/assets/icon4.png",
    link: "/car-accessories",
  },
  { title: "Car Care", image: "/assets/icon5.png", link: "/car-care" },
  {
    title: "Lighting Solutions",
    image: "/assets/icon6.png",
    link: "/lighting-solutions",
  },

  {
    title: "Off-Roading TrailTrek",
    image: "/assets/icon7.png",
    link: "/off-roading",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div
        className="home-container"
        style={{ backgroundImage: `url("/assets/carbon-fibre.png")` }}
      >
        {/* Car Carousel */}
        <CarCarousel />

        <h1 className="text-3xl font-bold mt-8 mb-6 text-center">
          OUR SERVICES
        </h1>

        {/* Services Grid */}
        <div className="services-container">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(service.link)}
              className="service-card"
            >
              <img src={service.image} alt={service.title} />
              <h1>{service.title}</h1>
            </motion.div>
          ))}
        </div>
        <h1 className="text-3xl font-bold mt-8 mb-6 text-center">
          LET'S HEAR FROM OUR CLIENTS!
        </h1>
        <ReviewSection />
        <h1 className="text-3xl font-bold mt-8 mb-6 text-center">OUR BRANDS</h1>
        <BrandSection />
        <h1 className="text-3xl font-bold mt-8 mb-6 text-center">CONTACT US</h1>
        <Contact />
      </div>
    </PageWrapper>
  );
};

export default Home;
