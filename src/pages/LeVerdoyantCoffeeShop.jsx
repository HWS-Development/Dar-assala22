import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import Footer from "../components/Footer";
import LeVerdoyantCoffeeShopPageSection from "../components/LeVerdoyantCoffeeShopPageSection";

const LeVerdoyantCoffeeShop = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LeVerdoyantCoffeeShopPageSection />
      <Footer />
    </div>
  );
};

export default LeVerdoyantCoffeeShop;