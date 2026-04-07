import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import BOOKINGBAR from '../components/BookingBar';
import accommodationData from '../data/accommodationData';
import experiencesHeroImages from "../data/experiencesHeroImages";

const Hero = () => {
  const { t } = useTranslation();
  const location = useLocation();

  // 🔹 Base config 
  const BASE_CONFIG = {
    height: 'min-h-[60vh] md:h-[70vh]',
    showTitle: false,
    showBookingBar: false,
  };

  // 🔹 Pages config
  const CONFIG = {
    '/accommodation': {
      bg: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop',
    },
    '/dining/leVerdoyant': {
      bg: 'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Restaurant/_DSC1982-HDR.png',
      cta: {
        label: t('leVerdoyant.cta'),
        link: '#',
      },
    },
    '/dining/LeVerdoyantRooftop': {
      bg: 'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Restaurant/_DSC1997-HDR.png',
      cta: {
        label: t('leVerdoyantRooftop.cta'),
        link: '#',
      },
    },
    '/dining/LeVerdoyantCoffeeShop': {
      bg: 'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Restaurant/Riad%20Alassala%20Fes%20-%20hotel%20photoshoot%20in%20morocco%204.jpg',
      cover: true,
      cta: {
        label: t('leVerdoyantCoffeeShop.cta'),
        link: '#',
      },
    },
    '/experiences': {
      bg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop',
    },
    '/meetings-events': {
      bg: 'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Hero/_DSC1982-HDR.jpg?w=1920&h=1080&fit=crop',
      cta: {
        label: t('meetingsEvents.hero.cta'),
        link: '/request-quote',
      },
    },
    '/exploring-medina': {
      bg: 'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Exploring%20Medina/1530641f-8cbe-49eb-a2d8-3604d3e994f2.png',
    },
    '/exploring-medina/medina': {
      bg: 'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Exploring%20Medina/f04dc945-f820-4c6b-b1c5-e58d15e06502.png',
    },
    '/exploring-medina/monuments': {
      bg: 'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Exploring%20Medina/b3a6ae2d-4875-45be-90e9-d718fa544f47.png',
    },
    '/exploring-medina/souks': {
      bg: 'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Exploring%20Medina/ef426d97-fece-49f6-b78e-7754b6af49e9.png',
      cover: true,
    },
    '/gallery': {
      bg: 'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Gallery/_DSC1982-HDR.png?w=800',
    },
    '/contact': {
      bg: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=1080&fit=crop',
    },
  };

  // 🔹 Default (homepage)
  const defaultConfig = {
    title: t('hero.hotelName'),
    bg: 'https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Gallery/_DSC1949-HDR.png?w=800',
    height: 'h-screen',
    showTitle: true,
    showBookingBar: true,
  };

  


let currentConfig = CONFIG[location.pathname];

// 👉 DYNAMIC ROOM BACKGROUND
if (!currentConfig && location.pathname.startsWith("/rooms/")) {
  const roomId = location.pathname.split("/rooms/")[1];

  const room = accommodationData.find(r => r.id === roomId);

  currentConfig = {
    bg: room?.images?.[0] || defaultConfig.bg,
  };
}

// 👉 EXPERIENCES HERO 🔥
if (!currentConfig && location.pathname.startsWith("/experiences/")) {
  const expId = location.pathname.split("/experiences/")[1]?.split("?")[0];

  currentConfig = {
    bg: experiencesHeroImages[expId] || defaultConfig.bg,
    cover: ["hammam", "medina"].includes(expId),
  };
}

// 🔹 Merge config 
const pageConfig = {
  ...BASE_CONFIG,
  ...(currentConfig || {}),
  ...(currentConfig ? {} : defaultConfig),
};

 
  return (
    <section className={`relative w-full overflow-hidden ${pageConfig.height}`}>
      
      {/* Background */}
      <div className="absolute inset-0">
         <img
          src={pageConfig.bg}
          alt="Hero background"
          className={`w-full h-full ${pageConfig.cover ? "object-cover" : ""}`}
          loading="eager"
        />
        <div className="absolute inset-0" />
      </div>


     {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">

        {/* Title + Stars */}
        {pageConfig.showTitle && (
          <>
            <h1 className="text-3xl sm:text-4xl md:text-6xl max-w-4xl mx-auto text-center px-4">
              {pageConfig.title}
            </h1>

            <div className="flex items-center space-x-1 mb-10 sm:mb-16">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 sm:w-6 sm:h-6 fill-white"
                />
              ))}
            </div>
          </>
        )}

        {/* CTA Button */}
        {pageConfig.cta && (
          <Link
            to={pageConfig.cta.link}
            className={`
              absolute 
              ${pageConfig.showBookingBar ? 'bottom-20' : 'bottom-10'}
              left-1/2 -translate-x-1/2
              bg-white backdrop-blur-lg
              text-[#1a1a1a]
              px-5 sm:px-6
              py-2.5 sm:py-3
              rounded-xl
              border border-white/20
              text-sm sm:text-base
              hover:bg-white/10
              hover:text-white
              hover:border-white/40
              hover:backdrop-blur-md
              transition-all duration-300
              shadow-lg
            `}
          >
            {pageConfig.cta.label}
          </Link>
        )}

      </div>

      {/* Booking Bar */}
      {pageConfig.showBookingBar && <BOOKINGBAR />}

    </section>
  );
};

export default Hero;




  