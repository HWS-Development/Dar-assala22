import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DiningPageSection from '../components/DiningPageSection';
import Footer from '../components/Footer';

const Dining = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <DiningPageSection />
      <Footer />
    </div>
  );
};

export default Dining;
