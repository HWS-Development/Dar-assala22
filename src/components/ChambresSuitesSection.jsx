import { useState, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import clsx from "clsx";
import accommodationData from "../data/accommodationData";

const ChambresSuitesSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState("all");

  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Optimized data
  const rooms = useMemo(() => {
    return accommodationData.map((room) => {
      const data =
        t(`accommodation.rooms.${room.key}`, {
          returnObjects: true,
        }) || {};

      return {
        ...room,
        title: data?.name || "",
        description: data?.description || "",
        image: room.images?.[0] || "",
      };
    });
  }, [t]);

  const filters = [
    { id: "all", key: "all" },
    { id: "rooms", key: "rooms" },
    { id: "suites", key: "suites" },
  ];

  const filteredRooms =
    activeFilter === "all"
      ? rooms
      : rooms.filter((r) => r.category === activeFilter);

  // ✅ Scroll control
  const scrollToIndex = (index) => {
    const container = sliderRef.current;

    const slideWidth = container.children[0].offsetWidth;
    const gap = 24; 

  const style = window.getComputedStyle(container);
  const paddingLeft = parseFloat(style.paddingLeft);

  const offset = index * (slideWidth + gap) - paddingLeft;

    container.scrollTo({
      left: offset,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  // ✅ Navigation (no loop)
  const next = () => {
    if (currentIndex < filteredRooms.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  return (
    <section id="chambres" className="py-16 bg-mainBg">
      {/* HEADER */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 mb-10 text-center">
        <h2 className="title-xl mb-6">{t("rooms.title")}</h2>

        <button
          onClick={() => navigate("/accommodation")}
          className="inline-flex items-center gap-2 text-sm group cursor-pointer"
        >
          {t("rooms.viewAll")}
          <div className="w-8 h-8 border rounded flex items-center justify-center transition group-hover:bg-black group-hover:text-white">
            <ArrowRight size={16} />
          </div>
        </button>

        {/* FILTERS */}
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={clsx(
                "px-4 py-2 rounded-full border text-sm transition cursor-pointer",
                activeFilter === f.id
                  ? "bg-black text-white"
                  : "bg-white border-gray-300"
              )}
            >
              {t(`accommodation.filters.${f.key}`)}
            </button>
          ))}
        </div>
      </div>

      {/* SLIDER */}
      
      {/* //relative overflow-visible max-w-[1200px] mx-auto  */}
      <div className="relative overflow-visible pl-[calc((100vw-1200px)/2)]">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth"
        >
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="w-[280px] md:w-[360px] xl:w-[869px] flex-shrink-0"
            >
              <div className="bg-white rounded-xl overflow-hidden h-full flex flex-col">
                
                {/* IMAGE */}
                <div className="h-[430px] w-full overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-xl mb-2">
                    {room.title}
                  </h3>

                  {/* ✅ Balanced UI */}
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {room.description}
                  </p>

                  <div className="mt-auto flex gap-3">
                    <button
                      onClick={() => navigate(`/rooms/${room.id}`)}
                      className="flex-1 border border-black py-2 rounded-lg hover:bg-black hover:text-white transition cursor-pointer"
                    >
                      {t("accommodation.rooms.details")}
                    </button>

                    <a
                      href="https://riad-alassala-fes.hotelrunner.com/bv3/search"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border bg-black text-white py-2 rounded-lg text-center transition hover:bg-[#F1EEEA] hover:text-black"
                    >
                      {t("accommodation.rooms.book")}
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ARROWS */}
        {currentIndex > 0 && (
          <button
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow-lg cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {currentIndex < filteredRooms.length - 1 && (
          <button
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-50 bg-white p-3 rounded-full shadow-lg cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* PAGINATION */}
        <div className="flex justify-center gap-2 mt-6">
          {filteredRooms.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                currentIndex === index
                  ? "bg-black scale-110"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChambresSuitesSection;