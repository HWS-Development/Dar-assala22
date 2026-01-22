import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactPageSection from '../components/ContactPageSection';
import ContactMapSection from '../components/ContactMapSection';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ContactPageSection />
      <ContactMapSection />
      <Footer />
    </div>
  );
};

export default Contact;
