import { useTranslation } from 'react-i18next';
import { Calendar, Users, MapPin } from 'lucide-react';

const BookingBar = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white w-full z-30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Destination */}
          <div className="flex-1 w-full md:w-auto">
            <label className="block text-xs text-gray-600 mb-1" style={{ fontFamily: "Jost, sans-serif" }}>
              {t('hero.booking.destination')}
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={t('hero.hotelName')}
                readOnly
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
                style={{ fontFamily: "Jost, sans-serif" }}
              />
            </div>
          </div>

          {/* Dates */}
          <div className="flex-1 w-full md:w-auto">
            <label className="block text-xs text-gray-600 mb-1" style={{ fontFamily: "Jost, sans-serif" }}>
              {t('hero.booking.dates')}
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('hero.booking.dates')}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
                style={{ fontFamily: "Jost, sans-serif" }}
              />
            </div>
          </div>

          {/* Travelers */}
          <div className="flex-1 w-full md:w-auto">
            <label className="block text-xs text-gray-600 mb-1" style={{ fontFamily: "Jost, sans-serif" }}>
              {t('hero.booking.voyageurs')}
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={t('hero.booking.guests')}
                readOnly
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
                style={{ fontFamily: "Jost, sans-serif" }}
              />
            </div>
          </div>

          {/* Book Button */}
          <div className="w-full md:w-auto">
            <button 
              className="w-full md:w-auto bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              {t('hero.booking.reserver')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingBar;
