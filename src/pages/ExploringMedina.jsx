import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ExploringMedinaPageSection from '../components/ExploringMedinaPageSection';
import Footer from '../components/Footer';

const ExploringMedina = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ExploringMedinaPageSection />
      <Footer />
    </div>
  );
};

export default ExploringMedina;
