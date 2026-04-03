import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AccommodationSection from '../components/AccommodationSection';
import Footer from '../components/Footer';

const Accommodation = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <AccommodationSection />
      <Footer />
    </div>
  );
};

export default Accommodation;
