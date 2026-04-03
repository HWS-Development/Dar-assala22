import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import Footer from "../components/Footer";
import LeVerdoyantPageSection from "../components/LeVerdoyantPageSection";

const LeVerdoyant = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LeVerdoyantPageSection />
      <Footer />
    </div>
  );
};

export default LeVerdoyant;