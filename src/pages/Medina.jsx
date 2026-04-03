import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import Footer from "../components/Footer";
import MedinaPageSection from "../components/MedinaPageSection";

const Medina = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MedinaPageSection />
      <Footer />
    </div>
  );
};

export default Medina;