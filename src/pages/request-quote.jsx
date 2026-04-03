import Navbar from '../components/Navbar';
import RequestQuotePageSection from '../components/RequestQuotePageSection';
import Footer from '../components/Footer';

const RequestQuote = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <RequestQuotePageSection />
      <Footer />
    </div>
  );
};

export default RequestQuote;
