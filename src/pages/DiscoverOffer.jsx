import Navbar from "../components/Navbar";
import Hero from '../components/Hero';
import Footer from "../components/Footer";
import DiscoverOfferPageSection from "../components/DiscoverOfferPageSection";

const DiscoverOffer = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DiscoverOfferPageSection />
      <Footer />
    </div>
  );
};

export default DiscoverOffer;