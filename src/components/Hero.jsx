import { useTranslation } from 'react-i18next';
import { Star, Calendar, Users, MapPin } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-gray-900/60">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&h=1080&fit=crop')] bg-cover bg-center" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
        {/* Hotel Name */}
        <h1 className="text-6xl md:text-8xl font-light mb-4 tracking-wide">
          {t('hero.hotelName')}
        </h1>

        {/* Star Rating */}
        <div className="flex items-center space-x-1 mb-16">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-6 h-6 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
      </div>

      {/* Booking Bar Overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Destination */}
            <div className="flex-1 w-full md:w-auto">
              <label className="block text-xs text-gray-600 mb-1">
                {t('hero.booking.destination')}
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={t('hero.hotelName')}
                  readOnly
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
                />
              </div>
            </div>

            {/* Dates */}
            <div className="flex-1 w-full md:w-auto">
              <label className="block text-xs text-gray-600 mb-1">
                {t('hero.booking.dates')}
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={t('hero.booking.dates')}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
                />
              </div>
            </div>

            {/* Travelers */}
            <div className="flex-1 w-full md:w-auto">
              <label className="block text-xs text-gray-600 mb-1">
                {t('hero.booking.voyageurs')}
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={t('hero.booking.guests')}
                  readOnly
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
                />
              </div>
            </div>

            {/* Book Button */}
            <div className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                {t('hero.booking.reserver')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
