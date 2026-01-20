import { useState } from "react";
import { useTranslation } from "react-i18next";

const GallerySection = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
  ];

  return (
    <section className="bg-[#f7f5f3] py-8 w-full">
      {/* Full-width background, inner container for content */}
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-8">
          
          {/* Title */}
          <h2
            className="text-center text-[40px] font-serif text-[#1a1a1a] mb-12"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("gallery.title")}
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* LEFT BIG IMAGE - 16:9 aspect ratio, spans 2 columns */}
            <div className="md:col-span-2 relative overflow-hidden rounded-[4px]">
              <img
                src={images[0]}
                alt=""
                className="w-full h-[442px] object-cover"
              />
            </div>

            {/* RIGHT GRID (4 square images) */}
            <div className="grid grid-cols-2 gap-4 h-[442px]">
              
            {images.slice(1, 5).map((img, index) => {
                const isLast = index === 3;

                return (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-[4px] aspect-square"
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-[284px] object-cover"
                    />

                    {/* BUTTON ON LAST IMAGE - Centered bottom, white rounded pill */}
                    {isLast && (
                      <div className="absolute inset-0 flex items-end justify-center pb-5 pointer-events-none">
                        <button
                          onClick={() => setOpen(true)}
                          className="
                            bg-white
                            text-[#1a1a1a]
                            px-6
                            py-2.5
                            rounded-full
                            text-[13px]
                            font-medium
                            shadow-sm
                            hover:bg-gray-50
                            transition-colors
                            pointer-events-auto
                            cursor-pointer
                          "
                          style={{ fontFamily: "Jost, sans-serif" }}
                        >
                          {t("gallery.viewAllPhotos")} (10)
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/70 overflow-y-auto">
          <button
            onClick={() => setOpen(false)}
            className="fixed top-6 right-6 bg-white px-3 py-2 rounded-full text-sm"
          >
            ✕
          </button>

          <div className="max-w-[1200px] mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
