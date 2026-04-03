import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import Footer from "../components/Footer";
import LeVerdoyantRooftopPageSection from "../components/LeVerdoyantRooftopPageSection";

const LeVerdoyantRooftop = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LeVerdoyantRooftopPageSection />
      <Footer />
    </div>
  );
};

export default LeVerdoyantRooftop;