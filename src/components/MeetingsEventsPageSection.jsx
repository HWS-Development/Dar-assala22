import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const MeetingsEventsPageSection = () => {
  const { t } = useTranslation();
  
  const sections = t("meetingsEvents.activities.sections", { returnObjects: true });
  
  const splitArray = (arr = []) => {
    if (!Array.isArray(arr)) return [[], []];

    const mid = Math.ceil(arr.length / 2);
    return [arr.slice(0, mid), arr.slice(mid)];
  };

  return (
    <section className="bg-mainBg py-16">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Breadcrumbs */}
        <div className="mb-6 md:mb-8">
          <nav className="flex items-center gap-2 text-sm text-[#666]">
            <Link to="/" className="hover:text-[#1a1a1a]">
              {t("meetingsEvents.breadcrumbs.home")}
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#1a1a1a]">
              {t("meetingsEvents.breadcrumbs.meetingsEvents")}
            </span>
          </nav>
        </div>

        {/* INTRO */}
        <div className="text-center max-w-3xl mx-auto py-12 md:py-16 lg:py-20">
          <h2 className="title-xl mb-6">
            {t("meetingsEvents.intro.title")}
          </h2>

          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {t("meetingsEvents.badges", { returnObjects: true }).map((badge, i) => (
              <span
                key={i}
                className={`px-4 py-2 rounded-full text-sm ${
                  i === 0
                    ? "px-4 py-2 text-sm rounded-full bg-[#cda73c] text-[#1a1a1a]"
                    : "px-4 py-2 text-sm rounded-full border border-[#cda73c]"
                }`}
              >
                {badge}
              </span>
            ))}
          </div>

          <p className="text-[#555] mb-4 leading-relaxed">
            {t("meetingsEvents.intro.description")} <br /> {t("meetingsEvents.intro.highlight")}
          </p>

        </div>

        {/* 2 BLOCKS */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          {/* EXCLUSIVITY */}
          <div>
            <img
              src="https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Meetings%20&%20Events/_DSC2347.png"
              alt=""
              className="
              w-full
              aspect-[574/383]
              md:w-[574px]
              md:h-[383px]
              object-cover
              mb-4
              rounded"
              loading="lazy"
            />

            <p className="text-xs uppercase text-gray-500 mb-2">
              {t("meetingsEvents.blocks.exclusivity.eyebrow")}
            </p>

            <h3 className="text-xl mb-3">
              {t("meetingsEvents.blocks.exclusivity.title")}
            </h3>

            <p className="text-[#555] leading-relaxed">
              {t("meetingsEvents.blocks.exclusivity.description")}
            </p>
          </div>

          {/* CELEBRATIONS */}
          <div>
            <img
              src="https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Meetings%20&%20Events/_DSC2423.png"
              alt=""
              className="
                w-full
                aspect-[574/383]
                md:w-[574px]
                md:h-[383px]
                object-cover
                mb-4
                rounded
              "
              loading="lazy"
            />

            <p className="text-xs uppercase text-gray-500 mb-2">
              {t("meetingsEvents.blocks.celebrations.eyebrow")}
            </p>

            <h3 className="text-xl mb-3">
              {t("meetingsEvents.blocks.celebrations.title")}
            </h3>

            <p className="text-[#555] leading-relaxed">
              {t("meetingsEvents.blocks.celebrations.description")}
            </p>
          </div>

        </div>

      </div>

      {/* ACTIVITIES / INCENTIVES / SERVICES */}
      <div className="py-20 px-6">

        <div className="max-w-[1000px] mx-auto">

          {/* TITLE */}
          <h2 className="text-center title-xl mb-12">
            {t("meetingsEvents.activities.title")}
          </h2>

          {/* ===== ACTIVITIES ===== */}
          {Object.entries(sections).map(([key, section]) => (
            <div key={key} className="mb-16">

              <h3 className="text-center title-lg mb-4">
                {section.title}
              </h3>

              <div className="w-full h-px bg-[#CDA73C]/60 mb-8"></div>

              <div className="grid md:grid-cols-2 gap-10">
                {splitArray(section.items).map((col, i) => (
                  <ul key={i} className="space-y-4 text-[#333] text-[15px] leading-relaxed">
                    {col.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 rounded-full bg-[#CDA73C] flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* GALLERY (inchangée) */}
      <MeetingsEventsGallery />
    </section>
  );
};

/* ===========================
   GALLERY (inchangée)
=========================== */

const MeetingsEventsGallery = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Meetings%20&%20Events/_DSC2419.png?w=1600",
    "https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Meetings%20&%20Events/_DSC2420.png?w=800",
    "https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Meetings%20&%20Events/Riad%20Alassala%20Fes%20-%20hotel%20photoshoot%20in%20morocco%20fez%2010.png?w=800",
    "https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Meetings%20&%20Events/_DSC2347.png?w=800",
    "https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Meetings%20&%20Events/_DSC2423-2.png?w=800",
  ];

  const handleOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

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
    <section className="max-w-[1200px] mx-auto">

      {/* TITLE */}
      {/*
      <h2 className="text-center title-xl mb-10">
        {t("gallery.title")}
      </h2>
      */}

      {/* GRID RESPONSIVE */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch">
          {/* LEFT */}
          <div className="w-full md:w-[642px] flex-shrink-0">
            <img
              src={images[0]}
              className="w-full h-[250px] sm:h-[320px] md:h-[442px] object-cover rounded"
            />
          </div>

          {/* RIGHT */}
          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4 h-[250px] sm:h-[320px] md:h-[442px]">
            {images.slice(1, 5).map((img, index) => {
              const isLast = index === 3;

              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-[4px]"
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover rounded"
                  />


                {/*
                  {isLast && (
                    <div className="absolute inset-0 flex items-end justify-center pb-4">
                      <div className="absolute inset-0 bg-black/10"></div>

                      <button
                        onClick={() => {
                          setSelectedImage(images[0]);
                          setOpen(true);
                        }}
                        className="
                          relative z-10
                          bg-white
                          text-[#1a1a1a]
                          px-5 py-2
                          rounded-full
                          text-sm
                          font-medium
                          shadow-md
                          transition-all duration-300
                          hover:bg-black/40
                          hover:text-white
                          cursor-pointer
                        "
                      >
                        {t("gallery.viewAllPhotos")} ({images.length})
                      </button>
                    </div>
                  )}
                */}
                </div>
              );
            })}
          </div>

      </div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MAIN IMAGE */}
            <img
              src={selectedImage}
              className="w-full max-h-[80vh] object-contain rounded mb-4"
            />

            {/* NAVIGATION */}
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

            {/* THUMBNAILS */}
            <div className="flex gap-2 overflow-x-auto mt-4">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded cursor-pointer border ${
                    selectedImage === img
                      ? "border-white"
                      : "border-transparent"
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

export default MeetingsEventsPageSection;