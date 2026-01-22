import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import GalleryPageSection from '../components/GalleryPageSection';
import Footer from '../components/Footer';

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <GalleryPageSection />
      <Footer />
    </div>
  );
};

export default Gallery;
