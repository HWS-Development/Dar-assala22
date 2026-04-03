import { useState } from "react";
import { useTranslation } from "react-i18next";
import { galleryPhotos } from "../data/gallery";

const GallerySection = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ images FIRST (important)
  const images = galleryPhotos.map((img) =>
    typeof img === "string" ? img : img.src
  );

  // ✅ safe index
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
    <section className="bg-mainBg  py-8 w-full">
      <div className="max-w-[1440px] mx-auto px-8">

        {/* TITLE */}
        
        <h2 className="text-center text-[40px] font-serif mb-12">
          {t("gallery.title")}
        </h2>

        {/* GRID */}
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
              </div>
            );
          })}
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
            {/* IMAGE */}
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

            {/* THUMBS */}
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

export default GallerySection;