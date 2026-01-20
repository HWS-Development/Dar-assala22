import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import clsx from "clsx";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ChambresSuitesSection = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const rooms = [
    {
      id: "superior",
      title: "Chambre Supérieure",
      description:
        "Succoubez à la Chambre Supérieure. En rez-de-jardin, elle offre un accès direct au jardin et à la superbe piscine.",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
      category: "rooms",
    },
    {
      id: "deluxe",
      title: "Chambre Deluxe",
      description:
        "Située en étage, la Chambre Deluxe, 46 m², surplombe la piscine de sa vaste terrasse.",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
      category: "rooms",
    },
    {
      id: "junior",
      title: "Junior Suite",
      description:
        "Deux salles de bain pour plus d'intimité, un vaste dressing et une belle terrasse.",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
      category: "suites",
    },
  ];

  const filters = [
    { id: "all", key: "all", label: "Toutes les chambres" },
    { id: "rooms", key: "rooms", label: "Chambres" },
    { id: "suites", key: "suites", label: "Suites" },
    { id: "ryad", key: "ryad", label: "Ryad" },
  ];

  const filteredRooms =
    activeFilter === "all"
      ? rooms
      : rooms.filter((r) => r.category === activeFilter);

  return (
    <section id="chambres" className="bg-[#f1eeea] py-24">
      
      {/* Header container */}
      <div className="max-w-[1300px] mx-auto px-6 mb-12">
        <div className="text-center">
          {/* Title */}
          <h2 
            className="text-[40px] font-serif text-[#1a1a1a] mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("rooms.title")}
          </h2>

          {/* CTA Link */}
          <a 
            href="#"
            className="inline-flex items-center gap-2 text-sm text-[#1a1a1a]"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {t("rooms.viewAll")}
            <div className="w-8 h-8 border border-[#1a1a1a] rounded flex items-center justify-center">
              <ArrowRight size={16} className="text-[#1a1a1a]" />
            </div>
          </a>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mt-8">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={clsx(
                "px-5 py-2 rounded-full border text-sm transition",
                activeFilter === f.id
                  ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                  : "bg-white text-[#1a1a1a] border-[#bfbfbf]"
              )}
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              {t(`rooms.filters.${f.key}`)}
            </button>
          ))}
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

          {filteredRooms.map((room) => (
            <SwiperSlide key={room.id}>
              <div className="bg-[#f1eeea] rounded-xl overflow-hidden h-full flex flex-col border border-[#e0dcd6]">
                {/* IMAGE – height ثابت */}
                <div className="h-[430px] w-full overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-1">
                  {/* TITLE */}
                  <h3
                    className="font-serif text-xl mb-2 text-[#1a1a1a]"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {room.title}
                  </h3>

                  {/* DESCRIPTION – مقيد */}
                  <p
                    className="text-sm text-[#555] mb-6 line-clamp-3"
                    style={{ fontFamily: "Jost, sans-serif" }}
                  >
                    {room.description}
                  </p>

                  {/* CTA – مثبتة بالأسفل */}
                  <div className="mt-auto flex gap-3">
                    <button
                      className="flex-1 border border-[#1a1a1a] py-2 rounded-lg hover:bg-[#e8e4de] transition"
                      style={{ fontFamily: "Jost, sans-serif" }}
                    >
                      Découvrir
                    </button>

                    <button
                      className="flex-1 bg-[#1a1a1a] text-white py-2 rounded-lg hover:bg-[#262626] transition"
                      style={{ fontFamily: "Jost, sans-serif" }}
                    >
                      Réserver
                    </button>
                  </div>
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

export default ChambresSuitesSection;
