import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ChambresSuitesSection from '../components/ChambresSuitesSection';
import GallerySection from '../components/GallerySection';
import DiningSection from '../components/DiningSection';
import ExperiencesSection from '../components/ExperiencesSection';
import ContactMapSection from '../components/ContactMapSection';
import FAQSection from '../components/FAQSection';
import SocialMediaSection from '../components/SocialMediaSection';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ChambresSuitesSection />
      
      <DiningSection />
      <ExperiencesSection />
      <ContactMapSection />
      <GallerySection />
      <FAQSection />
      <SocialMediaSection />
      <Footer />
    </div>
  );
};

export default Home;
