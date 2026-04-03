import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import accommodationData from "../data/accommodationData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AccommodationSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", key: "all" },
    { id: "suites", key: "suites" },
    { id: "rooms", key: "rooms" },
  ];

  const filteredRooms =
    activeFilter === "all"
      ? accommodationData
      : accommodationData.filter((r) => r.category === activeFilter);

  return (
    <section className="bg-mainBg py-16">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Breadcrumb */}
        <div className="mt-6 md:mt-8 mb-6 md:mb-8">
          <nav className="flex items-center gap-2 text-sm text-[#666]">
            <Link to="/"  className="hover:text-[#1a1a1a]">{t("accommodation.breadcrumbs.home")}</Link>
            <ChevronRight size={14} />
            <span className="text-[#1a1a1a]">{t("accommodation.breadcrumbs.accommodation")}</span>
          </nav>
        </div>

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto py-12 md:py-16 lg:py-20">
          <h1 className="title-xl mb-6">
            {t("accommodation.section.title")}
          </h1>
          <p className="text-[#555] mb-4 leading-relaxed">
            {t("accommodation.section.description")}
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2 text-sm border rounded cursor-pointer ${
                activeFilter === f.id
                  ? "border-black text-black"
                  : "border-gray-300 text-gray-500"
              }`}
            >
              {t(`accommodation.filters.${f.key}`)}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} t={t} navigate={navigate} />
          ))}
        </div>

      </div>
    </section>
  );
};


// ================= CARD =================
const RoomCard = ({ room, t, navigate }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const roomData = t(`accommodation.rooms.${room.key}`, {
    returnObjects: true,
  });

  return (
    <div className="h-full flex flex-col group">

      {/* ===== SLIDER ===== */}
      <div className="relative overflow-hidden">

        <Swiper
          modules={[Navigation, Pagination]}
          loop
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}
          className="w-full aspect-[574/383]"
        >
          {room.images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={roomData.name}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ARROWS */}
        <button
          ref={prevRef}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          ref={nextRef}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronRight size={18} />
        </button>

      </div>

      {/* ===== CONTENT ===== */}
      <div className="flex flex-col flex-1 mt-4">

        <p className="text-xs uppercase text-gray-500 mb-1">
          {roomData.category}
        </p>

        <h3 className="text-lg font-medium mb-1">
          {roomData.name}
        </h3>

        <p className="text-[#1B1B1A] mb-4 leading-relaxed">
          {roomData.features.join(" • ")}
        </p>

        <p className="text-sm text-gray-600 mb-4">
          {roomData.description}
        </p>

        {/* ===== BUTTONS ALIGNÉS ===== */}
        <div className="flex gap-3 mt-auto">

          <button
            onClick={() => navigate(`/rooms/${room.id}`)}
            className="flex-1 border border-black py-2 text-sm hover:bg-black hover:text-white transition cursor-pointer"
          >
            {t("accommodation.rooms.details")}
          </button>

          <a
            href="https://riad-alassala-fes.hotelrunner.com/bv3/search"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-black border text-white py-2 text-sm text-center  transition-all duration-300 hover:shadow-md hover:bg-[#F1EEEA] hover:text-black hover:bg-[#F1EEEA] hover:border-black"
          >
            {t("accommodation.rooms.book")}
          </a>

        </div>

      </div>

    </div>
  );
};

export default AccommodationSection;