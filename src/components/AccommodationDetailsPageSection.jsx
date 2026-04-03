import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import accommodationData from "../data/accommodationData";
import { ChevronRight } from "lucide-react";

const AccommodationDetailsPageSection = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const room = accommodationData.find((r) => r.id === id);

  if (!room) return <div>Not found</div>;

  const roomData = t(`accommodation.rooms.${room.key}`, {
    returnObjects: true,
  }) || {};

  const generalServices = t("accommodation.services.general", {
    returnObjects: true,
  }) || [];

  const specificServices = t(
    `accommodation.services.${room.key}`,
    { returnObjects: true }
  ) || [];

  const images = room.images || [];

  const currentIndex = images.indexOf(selectedImage);

  const nextImage = () => {
    setSelectedImage(images[(currentIndex + 1) % images.length]);
  };

  const prevImage = () => {
    setSelectedImage(
      images[(currentIndex - 1 + images.length) % images.length]
    );
  };

  return (
    <section className="py-16 bg-mainBg">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* BREADCRUMBS */}
        <div className="mb-6 md:mb-8">
          <nav className="flex items-center gap-2 text-sm text-[#666]">
            <Link to="/">{t("accommodation.breadcrumbs.home")}</Link>
            <ChevronRight size={14} />
            <Link to="/accommodation">
              {t("accommodation.breadcrumbs.accommodation")}
            </Link>
            <ChevronRight size={14} />
            <span>{roomData?.name}</span>
          </nav>
        </div>

        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto py-12 md:py-16 lg:py-20">
          <h2 className="title-xl mb-6">{roomData?.name}</h2>

          {/* FEATURES */}
          <p className="text-[#1B1B1A] mb-4 leading-relaxed">
            {roomData?.features?.join(" • ")}
          </p>

          {/* DESCRIPTION */}
          <p className="text-[#555] mb-4 leading-relaxed">
          {roomData?.description}
          </p>

            <div className="mt-8 flex justify-center">
              <a
                href="https://riad-alassala-fes.hotelrunner.com/bv3/search"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  px-8 py-3
                  text-sm md:text-base
                  font-medium
                  tracking-wide
                  bg-black text-white
                  border border-black
                  rounded-md
                  transition-all duration-300
                  hover:bg-transparent hover:text-black
                  hover:border-black
                  hover:shadow-md
                "
              >
                {t("accommodation.rooms.book")}
              </a>
            </div>
        </div>

        {/* ===== GALLERY  ===== */}
        <div className="grid grid-cols-1 md:grid-cols-[642px_1fr] gap-6 mb-10">

          {/* LEFT */}
          <div className="w-full md:w-[642px] h-[300px] md:h-[514px]">
            <img
              src={images[0]}
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 grid-rows-2 gap-6 h-[300px] md:h-[514px]">
            {images.slice(1, 5).map((img, index) => {
              const isLast = index === 3;

              return (
                <div key={index} className="relative rounded overflow-hidden">
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                  />

                  {/* BUTTON OVERLAY */}
                  {isLast && (
                    <div className="absolute inset-0 flex items-end justify-center pb-4">
                      <div className="absolute inset-0 bg-black/10"></div>

                      <button
                        onClick={() => {
                          setSelectedImage(images[0]);
                          setOpen(true);
                        }}
                        className="relative z-10 bg-white px-5 py-2 rounded-full text-sm shadow-md hover:bg-black/40 hover:text-white transition cursor-pointer"
                      >
                        {t("accommodation.services.viewAllPhotos")} ({images.length})
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== SERVICES ===== */}
        <div className="py-20 px-6">


            <div className="max-w-[1000px] mx-auto">
                <h2 className="text-center title-xl mb-12">
                    {t("accommodation.services.title")}
                </h2>

                {/* GENERAL (only rooms) */}
                {room.category === "rooms" && (
                    <>
                    <h3 className="text-center title-lg mb-4">
                        {t("accommodation.services.riadFeaturesTitle")}
                    </h3>

                    <div className="w-full h-px bg-[#CDA73C]/60 mb-8"></div>

                    <div className="grid md:grid-cols-2 gap-10">
                            {(() => {
                                const mid = Math.ceil(generalServices.length / 2);
                                const columns = [
                                generalServices.slice(0, mid),
                                generalServices.slice(mid),
                                ];

                                return columns.map((col, i) => (
                                <ul
                                    key={i}
                                    className="space-y-4 text-[#333] text-[15px] leading-relaxed"
                                >
                                    {col.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="w-2 h-2 mt-2 rounded-full bg-[#CDA73C] flex-shrink-0"></span>
                                        <span>{item}</span>
                                    </li>
                                    ))}
                                </ul>
                                ));
                            })()}
                        </div>
                    </>
                )}

                {/* SPECIFIC */}
                <h3 className="text-center title-lg mb-4 mt-12">
                    {t("accommodation.services.roomFeatures")}
                </h3>

                <div className="w-full h-px bg-[#CDA73C]/60 mb-8"></div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {(() => {
                            const mid = Math.ceil(specificServices.length / 2);
                            const columns = [
                            specificServices.slice(0, mid),
                            specificServices.slice(mid),
                            ];

                            return columns.map((col, i) => (
                            <ul
                                key={i}
                                className="space-y-4 text-[#333] text-[15px] leading-relaxed"
                            >
                                {col.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-[#CDA73C] flex-shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                                ))}
                            </ul>
                            ));
                        })()}
                    </div>


            </div>
        </div>

      </div>

      {/* ===== MODAL ===== */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              className="w-full max-h-[80vh] object-contain rounded mb-4"
            />

            {/* NAV */}
             <button
              onClick={prevImage}
              className="
                absolute left-2 sm:left-4 top-1/2 -translate-y-1/2
                 w-9 h-9 sm:w-10 sm:h-10
                flex items-center justify-center
                rounded-full
                bg-white/20
                backdrop-blur-md
                text-white text-xl sm:text-2xl
                shadow-md
                transition-all duration-200
                hover:bg-white/40
                hover:scale-110
                cursor-pointer
              "
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="
                absolute right-2 sm:right-4 top-1/2 -translate-y-1/2
                w-9 h-9 sm:w-10 sm:h-10
                flex items-center justify-center
                rounded-full
                bg-white/20
                backdrop-blur-md
                text-white text-xl sm:text-2xl
                shadow-md
                transition-all duration-200
                hover:bg-white/40
                hover:scale-110
                cursor-pointer
              "
            >
              ›
            </button>

            {/* THUMB */}
            <div className="flex gap-2 overflow-x-auto mt-4">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 object-cover cursor-pointer ${
                    selectedImage === img ? "border border-white" : ""
                  }`}
                />
              ))}
            </div>

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute top-3 right-3 sm:top-4 sm:right-4
                w-9 h-9 sm:w-10 sm:h-10
                flex items-center justify-center
                rounded-full
                bg-white/90
                text-black
                shadow-md
                hover:scale-110
                transition
                cursor-pointer
              "
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AccommodationDetailsPageSection;