import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ExperiencesSection = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      id: "medinaTour",
      title: t("experiences.experiences.medinaTour.title"),
      price: t("experiences.experiences.medinaTour.price"),
      description: t("experiences.experiences.medinaTour.description"),
      includes: t("experiences.experiences.medinaTour.includes", { returnObjects: true }),
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200",
    },
    {
      id: "chefchaouen",
      title: t("experiences.experiences.chefchaouen.title"),
      price: t("experiences.experiences.chefchaouen.price"),
      description: t("experiences.experiences.chefchaouen.description"),
      includes: t("experiences.experiences.chefchaouen.includes", { returnObjects: true }),
      image: "https://images.unsplash.com/photo-1555993538-4d0c8c0b8a9e?w=1200",
    },
    {
      id: "meknesVolubilis",
      title: t("experiences.experiences.meknesVolubilis.title"),
      price: t("experiences.experiences.meknesVolubilis.price"),
      description: t("experiences.experiences.meknesVolubilis.description"),
      includes: t("experiences.experiences.meknesVolubilis.includes", { returnObjects: true }),
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200",
    },
    {
      id: "desertMerzouga",
      title: t("experiences.experiences.desertMerzouga.title"),
      price: t("experiences.experiences.desertMerzouga.price"),
      description: t("experiences.experiences.desertMerzouga.description"),
      includes: t("experiences.experiences.desertMerzouga.includes", { returnObjects: true }),
      image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200",
    },
  ];

  return (
    <section id="experiences" className="bg-[#f1eeea] py-24">
      
      {/* Header container */}
      <div className="max-w-[1300px] mx-auto px-6 mb-12">
        <div className="text-center">
          {/* Title */}
          <h2 
            className="text-[40px] font-serif text-[#1a1a1a] mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("experiences.hero.title")}
          </h2>

          {/* Description */}
          <p
            className="text-base text-[#4d4d4d] mb-8 max-w-3xl mx-auto"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {t("experiences.hero.subtitle")}
          </p>

         {/* CTA Button */}
         <a 
            href="#"
            className="inline-flex items-center gap-2 text-sm text-[#1a1a1a] border border-[#1a1a1a] rounded px-4 py-2 hover:bg-[#e8e4de] transition"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {t("experiences.cta")}
            <div className="w-4 h-4 border border-[#1a1a1a] rounded flex items-center justify-center">
              <ArrowRight size={16} className="text-[#1a1a1a]" />
            </div>
          </a>
        </div>
      </div>

      {/* FULL WIDTH SWIPER */}
      <div className="relative overflow-visible pl-[calc((100vw-1300px)/2)]">
        <Swiper
          className="pointer-events-none"
          modules={[Navigation, Pagination]}
          slidesPerView={2.2}
          spaceBetween={24}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 2.4 },
          }}
        >
          {experiences.map((experience) => (
            <SwiperSlide key={experience.id}>
              <div className="bg-white rounded-xl overflow-hidden h-[750px] flex flex-col border border-[#e0dcd6]">
                {/* IMAGE */}
                <div className="h-[430px] w-full overflow-hidden flex-shrink-0">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-1 min-h-0">
                  {/* TITLE */}
                  <h3
                    className="font-serif text-xl mb-2 text-[#1a1a1a] line-clamp-2"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {experience.title}
                  </h3>

                  {/* PRICE */}
                  <div className="h-6 mb-3">
                    {experience.price && (
                      <p
                        className="text-sm font-medium text-[#1a1a1a]"
                        style={{ fontFamily: "Jost, sans-serif" }}
                      >
                        {experience.price}
                      </p>
                    )}
                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className="text-sm text-[#555] mb-4 line-clamp-3 flex-shrink-0"
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    {experience.description}
                  </p>

                
                  {/* BUTTON */}
                 <button
  className="w-80 border border-[#1a1a1a] bg-white text-[#1a1a1a] py-3 rounded-md
             hover:bg-black hover:text-white transition
             pointer-events-auto mt-auto"
  style={{ fontFamily: "Jost, sans-serif" }}
>
  {t("experiences.cta")}
</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* NAVIGATION */}
        <button 
          className="swiper-prev absolute left-6 top-1/2 -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          type="button"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-[#1a1a1a]" />
        </button>
        <button 
          className="swiper-next absolute right-6 top-1/2 -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          type="button"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-[#1a1a1a]" />
        </button>
      </div>
    </section>
  );
};

export default ExperiencesSection;
