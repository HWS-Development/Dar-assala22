import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AccommodationDetailsPageSection from '../components/AccommodationDetailsPageSection';
import Footer from '../components/Footer';

const AccommodationDetails = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AccommodationDetailsPageSection />
      <Footer />
    </div>
  );
};

export default AccommodationDetails;
