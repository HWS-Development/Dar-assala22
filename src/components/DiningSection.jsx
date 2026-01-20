import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DiningSection = () => {
  const { t } = useTranslation();

  const diningItems = [
    {
      id: "wardya",
      title: t("dining.wardya.title"),
      category: t("dining.wardya.category"),
      tags: [
        { text: t("dining.wardya.tags.0"), accent: true },
        { text: t("dining.wardya.tags.1"), accent: false },
        { text: t("dining.wardya.tags.2"), accent: false },
      ],
      description: t("dining.wardya.description"),
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200",
    },
    {
      id: "lounge",
      title: t("dining.lounge.title"),
      category: t("dining.lounge.category"),
      tags: [
        { text: t("dining.lounge.tags.0"), accent: false },
        { text: t("dining.lounge.tags.1"), accent: false },
        { text: t("dining.lounge.tags.2"), accent: false },
      ],
      description: t("dining.lounge.description"),
      image:
        "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1200",
    },
    {
      id: "bar",
      title: t("dining.bar.title"),
      category: t("dining.bar.category"),
      tags: [
        { text: t("dining.bar.tags.0"), accent: true },
        { text: t("dining.bar.tags.1"), accent: false },
        { text: t("dining.bar.tags.2"), accent: false },
      ],
      description: t("dining.bar.description"),
      image:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200",
    },
    {
      id: "terrace",
      title: t("dining.terrace.title"),
      category: t("dining.terrace.category"),
      tags: [
        { text: t("dining.terrace.tags.0"), accent: false },
        { text: t("dining.terrace.tags.1"), accent: true },
        { text: t("dining.terrace.tags.2"), accent: false },
      ],
      description: t("dining.terrace.description"),
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
    },
    {
      id: "breakfast",
      title: t("dining.breakfast.title"),
      category: t("dining.breakfast.category"),
      tags: [
        { text: t("dining.breakfast.tags.0"), accent: false },
        { text: t("dining.breakfast.tags.1"), accent: false },
        { text: t("dining.breakfast.tags.2"), accent: true },
      ],
      description: t("dining.breakfast.description"),
      image:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1200",
    },
  ];

  return (
    <section id="dining" className="bg-[#f1eeea] py-24">
      
      {/* Header container */}
      <div className="max-w-[1300px] mx-auto px-6 mb-12">
        <div className="text-center">
          {/* Title */}
          <h2 
            className="text-[40px] font-serif text-[#1a1a1a] mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("dining.title")}
          </h2>

          {/* Description */}
          <p
            className="text-base text-[#4d4d4d] mb-8 max-w-3xl mx-auto"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {t("dining.description")}
          </p>

          {/* CTA Button */}
          <a 
            href="#"
            className="inline-flex items-center gap-2 text-sm text-[#1a1a1a] border border-[#1a1a1a] rounded px-4 py-2 hover:bg-[#e8e4de] transition"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {t("dining.viewAll")}
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
          {diningItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-xl overflow-hidden h-full flex flex-col border border-[#e0dcd6]">
                {/* IMAGE */}
                <div className="h-[430px] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-1">
                  {/* CATEGORY LABEL */}
                  <p
                    className="text-xs uppercase text-[#1a1a1a] mb-2"
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    {item.category}
                  </p>

                  {/* TITLE */}
                  <h3
                    className="font-serif text-xl mb-4 text-[#1a1a1a]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {item.title}
                  </h3>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={tag.accent
                          ? "px-3 py-1 text-xs rounded-full bg-[#cda73c] text-white"
                          : "px-3 py-1 text-xs rounded-full bg-white text-[#1a1a1a] border border-[#bfbfbf]"
                        }
                        style={{ fontFamily: "Jost, sans-serif" }}
                      >
                        {tag.text}
                      </span>
                    ))}
                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className="text-sm text-[#555] mb-6"
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    {item.description}
                  </p>

                  {/* BUTTON */}
                  <button
  className="w-80 border border-[#1a1a1a] bg-white text-[#1a1a1a] py-3 rounded-md
             hover:bg-black hover:text-white transition
             pointer-events-auto"
  style={{ fontFamily: "Jost, sans-serif" }}
>
  {t("dining.button")}
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

export default DiningSection;
