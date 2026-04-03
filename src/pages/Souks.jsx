import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import Footer from "../components/Footer";
import SouksPageSection from "../components/SouksPageSection";

const Souks = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SouksPageSection />
      <Footer />
    </div>
  );
};

export default Souks;