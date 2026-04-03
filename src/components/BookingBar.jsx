import { useTranslation } from 'react-i18next';
import { Calendar, Users, MapPin } from 'lucide-react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState, useEffect } from 'react';

const BookingBar = () => {
  const { t } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const today = new Date();

  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isTravelersOpen, setIsTravelersOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [step, setStep] = useState('start');

  const [selectionRange, setSelectionRange] = useState({
    startDate: null,
    endDate: null,
    key: 'selection',
  });

  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  });

  const [childrenAges, setChildrenAges] = useState([]);

  // responsive
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  // close outside
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('.booking-container')) {
        setIsDateOpen(false);
        setIsTravelersOpen(false);
        setStep('start');
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // sync children ages
  useEffect(() => {
    setChildrenAges(prev => {
      if (guests.children > prev.length) {
        return [...prev, ...Array(guests.children - prev.length).fill('')];
      }
      return prev.slice(0, guests.children);
    });
  }, [guests.children]);

  // =========================
  // ✅ HANDLE BOOK (LOGIQUE FINALE)
  // =========================
 const handleBook = () => {
  try {
    if (!selectionRange.startDate || !selectionRange.endDate) {
      setIsDateOpen(true);
      return;
    }

    const baseUrl = "https://riad-alassala-fes.hotelrunner.com/bv3/search";

    // format date (safe timezone)
    const formatDate = (date) => {
      const d = new Date(date);
      d.setHours(12, 0, 0, 0);
      return d.toISOString().split("T")[0];
    };

    const checkin = formatDate(selectionRange.startDate);
    const checkout = formatDate(selectionRange.endDate);

    const dayCount = Math.ceil(
      (selectionRange.endDate - selectionRange.startDate) / (1000 * 60 * 60 * 24)
    );

    // clean ages
    const parsedAges = childrenAges
      .map(age => (age === "0-1" ? 0 : Number(age)))
      .filter(age => !isNaN(age));

    // =========================
    // ✅ DISTRIBUTION ROOMS FIX
    // =========================

    const roomData = Array.from({ length: guests.rooms }, (_, i) => {
      let adultsPerRoom = Math.floor(guests.adults / guests.rooms);
      let extraAdults = guests.adults % guests.rooms;

      let adults = adultsPerRoom + (i < extraAdults ? 1 : 0);

      return {
        adult_count: adults,
        child_count: i === 0 ? guests.children : 0,
        child_ages: i === 0 ? parsedAges : [],
        guest_count: adults + (i === 0 ? guests.children : 0),
      };
    });

    // guest_rooms index MUST start from 0
    const guest_rooms = {};
    roomData.forEach((room, index) => {
      guest_rooms[index] = room;
    });

    const searchObj = {
      checkin_date: checkin,
      checkout_date: checkout,
      day_count: dayCount,
      room_count: guests.rooms,
      total_adult: guests.adults,
      total_child: guests.children,
      rooms: roomData,
      guest_rooms: guest_rooms,
    };

    const encodedSearch = encodeURIComponent(JSON.stringify(searchObj));
    const url = `${baseUrl}?search=${encodedSearch}`;

    window.open(url, "_blank", "noopener,noreferrer");

  } catch (error) {
    console.error("Booking error:", error);
  }
};

  return (
      <div
        className={`booking-container z-20 w-full max-w-6xl px-4
          ${isSticky
            ? "fixed top-0 left-1/2 -translate-x-1/2 mt-2"
            : "absolute bottom-8 left-1/2 -translate-x-1/2"
          }
        `}
      >

      {/* ===== BAR ===== */}
      <div className="bg-white rounded-xl shadow-xl flex flex-col md:flex-row overflow-visible">

        {/* DESTINATION */}
        <div className="flex-1 px-4 md:px-5 py-3 md:py-4 border-b md:border-b-0 md:border-r border-gray-200">
          <p className="text-xs text-gray-500 mb-1">
            {t('hero.booking.destination')}
          </p>
          <div className="flex items-center gap-2">
            <MapPin className="text-gray-400" size={18} />
            <span className="font-medium">{t('hero.hotelName')}</span>
          </div>
        </div>

        {/* ===== DATES ===== */}
        <div className="relative flex-1 px-4 md:px-5 py-3 md:py-4 border-b md:border-b-0 md:border-r border-gray-200">

          <div
           onClick={() => {
              setIsDateOpen(!isDateOpen);
              setIsTravelersOpen(false);
              setStep('start');
            }}
            className="cursor-pointer"
          >
            <p className="text-xs text-gray-500 mb-1">
              {t('hero.booking.dates')}
            </p>

            <div className="flex items-center gap-2">
              <Calendar className="text-gray-400" size={18} />
              <span className="font-medium">
                {selectionRange.startDate && selectionRange.endDate
                  ? `${selectionRange.startDate.toLocaleDateString()} - ${selectionRange.endDate.toLocaleDateString()}`
                  : t('hero.booking.dates')}
              </span>
            </div>
          </div>

          {/* 🔥 POPUP DATE */}
          {isDateOpen && (
             <div className={`absolute left-1/2 -translate-x-1/2 z-[999] bg-white rounded-xl shadow-2xl p-4 w-[95vw] md:w-auto animate-fadeIn
                ${isSticky ? "top-full mt-3" : "bottom-full mb-3"}
              `}>

              <DateRange
                ranges={[selectionRange]}
                onChange={(ranges) => {
                  const { startDate, endDate } = ranges.selection;
                  setSelectionRange({ startDate, endDate, key: 'selection' });
                }}
                minDate={today}
                months={isMobile ? 1 : 2}
                direction={isMobile ? 'vertical' : 'horizontal'}
                rangeColors={['#000']}
              />

            </div>
          )}
        </div>

        {/* ===== TRAVELERS ===== */}
        <div className="relative flex-1 px-4 md:px-5 py-3 md:py-4 border-b md:border-b-0 md:border-r border-gray-200">

          <div
           onClick={() => {
              setIsTravelersOpen(!isTravelersOpen);
              setIsDateOpen(false);
            }}
            className="cursor-pointer"
          >
            <p className="text-xs text-gray-500 mb-1">
              {t('hero.booking.voyageurs')}
            </p>

            <div className="flex items-center gap-2">
              <Users className="text-gray-400" size={18} />
              <span className="font-medium">
                {guests.adults} {t('hero.booking.adults')}, {guests.rooms} {t('hero.booking.rooms')}
              </span>
            </div>
          </div>

          {/* 🔥 POPUP TRAVELERS */}
          {isTravelersOpen && (
            <div className={`absolute left-1/2 -translate-x-1/2 z-[999] bg-white rounded-xl shadow-2xl p-6 w-[90vw] max-w-[320px] animate-fadeIn
                ${isSticky ? "top-full mt-3" : "bottom-full mb-3"}
            `}>

              {/* Adults */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-medium">{t('hero.booking.adults_label')}</p>
                  <p className="text-xs text-gray-400">{t('hero.booking.adults_desc')}</p>
                </div>
                <div className="flex gap-3 items-center">
                  <button onClick={() => setGuests(g => ({...g, adults: Math.max(1, g.adults - 1)}))}>-</button>
                  <span>{guests.adults}</span>
                  <button onClick={() => setGuests(g => ({...g, adults: g.adults + 1}))}>+</button>
                </div>
              </div>

              <hr className="my-3"/>

              {/* Children */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-medium">{t('hero.booking.children_label')}</p>
                  <p className="text-xs text-gray-400">{t('hero.booking.children_desc')}</p>
                </div>
                <div className="flex gap-3 items-center">
                  <button onClick={() => setGuests(g => ({...g, children: Math.max(0, g.children - 1)}))}>-</button>
                  <span>{guests.children}</span>
                  <button onClick={() => setGuests(g => ({...g, children: g.children + 1}))}>+</button>
                </div>
              </div>

             {/* Ages */}
              {guests.children > 0 && (
                <div className="mt-4 space-y-3">
                  {childrenAges.map((age, i) => (
                    <div key={i} className="flex items-center justify-between">

                      {/* Label */}
                      <span className="text-sm text-gray-700">
                        Age de l'enfant {i + 1}
                      </span>

                      {/* Select stylé */}
                      <div className="relative">
                        <select
                          value={age}
                          onChange={(e) => {
                            const val = e.target.value;
                            setChildrenAges(prev => {
                              const copy = [...prev];
                              copy[i] = val;
                              return copy;
                            });
                          }}
                          className="appearance-none border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
                        >
                          <option value="">-</option>
                          <option value="0-1">0-1</option>
                          {Array.from({ length: 11 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>

                        {/* Chevron icon */}
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                          ▼
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              )}
              <hr className="my-3"/>

              {/* Rooms */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{t('hero.booking.rooms_label')}</p>
                  <p className="text-xs text-gray-400">{t('hero.booking.rooms_desc')}</p>
                </div>
                <div className="flex gap-3 items-center">
                  <button onClick={() => setGuests(g => ({...g, rooms: Math.max(1, g.rooms - 1)}))}>-</button>
                  <span>{guests.rooms}</span>
                  <button onClick={() => setGuests(g => ({...g, rooms: g.rooms + 1}))}>+</button>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* BUTTON */}
        <div className="px-4 py-4 flex items-center justify-center w-full md:w-auto">
          <button 
            className="w-full md:w-auto bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-3 rounded-lg transition" 
            onClick={handleBook}
          >
            {t('hero.booking.reserver')}
          </button>
        </div>

      </div>
    </div>
  );
};

export default BookingBar;