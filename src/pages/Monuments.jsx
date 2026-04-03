import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import Footer from "../components/Footer";
import MonumentsPageSection from "../components/MonumentsPageSection";

const Monuments = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MonumentsPageSection />
      <Footer />
    </div>
  );
};

export default Monuments;