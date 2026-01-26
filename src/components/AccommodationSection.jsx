import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import clsx from "clsx";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const AccommodationSection = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  // Room data with 4 images each for slider
  const rooms = [
    {
      id: "superior",
      key: "superior",
      category: "rooms",
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      ],
    },
    {
      id: "patio",
      key: "patio",
      category: "suites",
      images: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      ],
    },
    {
      id: "rooftop",
      key: "rooftop",
      category: "suites",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      ],
    },
    {
      id: "grand",
      key: "grand",
      category: "ryad",
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      ],
    },
    {
      id: "standardDoubleRoom",
      key: "standardDoubleRoom",
      category: "rooms",
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      ],
    },
    {
      id: "standardDoubleRoom2",
      key: "standardDoubleRoom2",
      category: "rooms",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      ],
    },
    {
      id: "juniorSuiteS2",
      key: "juniorSuiteS2",
      category: "suites",
      images: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      ],
    },
    {
      id: "juniorSuiteS1",
      key: "juniorSuiteS1",
      category: "suites",
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      ],
    },
    {
      id: "juniorSuite2mez",
      key: "juniorSuite2mez",
      category: "suites",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      ],
    },
    {
      id: "executiveSuite",
      key: "executiveSuite",
      category: "suites",
      images: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      ],
    },
    {
      id: "duplex",
      key: "duplex",
      category: "ryad",
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      ],
    },
    {
      id: "budgetSingleRoom",
      key: "budgetSingleRoom",
      category: "rooms",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      ],
    },
    {
      id: "budgetSingleRoom2",
      key: "budgetSingleRoom2",
      category: "rooms",
      images: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      ],
    },
  ];

  const filters = [
    { id: "all", key: "all" },
    { id: "suites", key: "suites" },
    { id: "rooms", key: "rooms" },
    { id: "ryad", key: "ryad" },
  ];

  const filteredRooms =
    activeFilter === "all"
      ? rooms
      : rooms.filter((r) => r.category === activeFilter);

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-[#666]" style={{ fontFamily: "Jost, sans-serif" }}>
            <Link to="/" className="hover:text-[#1a1a1a] transition-colors">
              {t("accommodation.breadcrumbs.home")}
            </Link>
            <ChevronRight size={14} className="text-[#999]" />
            <span className="text-[#1a1a1a]">{t("accommodation.breadcrumbs.accommodation")}</span>
          </nav>
        </div>

        {/* Main Title */}
        <div className="text-center mb-8">
          <h1
            className="text-[40px] text-[#1a1a1a] mb-6"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {t("accommodation.section.title")}
          </h1>

          {/* Description */}
          <p
            className="text-base text-[#666] max-w-4xl mx-auto mb-4 leading-relaxed"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {t("accommodation.section.description")}
            <a
              href="#"
              className="text-[#1a1a1a] hover:underline ml-1"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              {t("accommodation.section.seeMore")}
            </a>
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={clsx(
                "px-6 py-2 rounded border text-sm transition",
                activeFilter === f.id
                  ? "bg-transparent text-[#1a1a1a] border-[#1a1a1a]"
                  : "bg-transparent text-[#666] border-[#e0dcd6] hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
              )}
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              {t(`accommodation.filters.${f.key}`)}
            </button>
          ))}
        </div>

        {/* Room Cards Grid - 2 columns */}
        <RoomCardGrid rooms={filteredRooms} t={t} />
      </div>
    </section>
  );
};

// Separate component for room card to handle state
const RoomCard = ({ room, t }) => {
  const roomData = t(`accommodation.rooms.${room.key}`, { returnObjects: true });
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="bg-white border border-[#e0dcd6] rounded-lg overflow-hidden">
      {/* Image Container with Swiper Slider */}
      <div className="relative h-[400px] w-full overflow-hidden group">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: `.swiper-button-next-${room.id}`,
            prevEl: `.swiper-button-prev-${room.id}`,
          }}
          pagination={{
            clickable: true,
            el: `.swiper-pagination-${room.id}`,
          }}
          loop={true}
          onSwiper={setSwiperInstance}
          className="h-full w-full accommodation-room-swiper"
        >
          {room.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`${roomData.name} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          className={`swiper-button-prev-${room.id} absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100`}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 text-[#1a1a1a]" />
        </button>
        <button
          className={`swiper-button-next-${room.id} absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100`}
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 text-[#1a1a1a]" />
        </button>

        {/* Pagination Dots Overlay */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
          <div className={`swiper-pagination swiper-pagination-${room.id}`}></div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Category Label */}
        <p
          className="text-xs uppercase tracking-wider text-[#666] mb-2"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          {roomData.category}
        </p>

        {/* Room Name */}
        <h3
          className="text-2xl font-serif text-[#1a1a1a] mb-3"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {roomData.name}
        </h3>

        {/* Features */}
        <p
          className="text-sm text-[#666] mb-4"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          {roomData.features}
        </p>

        {/* Description */}
        <p
          className="text-sm text-[#555] mb-6 leading-relaxed"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          {roomData.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 border border-[#1a1a1a] bg-white text-[#1a1a1a] py-3 rounded hover:bg-[#f5f5f5] transition-colors"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {t("accommodation.rooms.details")}
          </button>
          <button
            className="flex-1 bg-[#1a1a1a] text-white py-3 rounded hover:bg-[#262626] transition-colors"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {t("accommodation.rooms.book")}
          </button>
        </div>
      </div>
    </div>
  );
};

// Grid component
const RoomCardGrid = ({ rooms, t }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} t={t} />
      ))}
    </div>
  );
};

export default AccommodationSection;
