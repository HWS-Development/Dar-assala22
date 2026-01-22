import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MeetingsEventsPageSection from '../components/MeetingsEventsPageSection';
import Footer from '../components/Footer';

const MeetingsEvents = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MeetingsEventsPageSection />
      <Footer />
    </div>
  );
};

export default MeetingsEvents;
