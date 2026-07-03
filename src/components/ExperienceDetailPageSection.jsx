import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import experiencesImages from "../data/experiencesImages";
import { ChevronRight } from "lucide-react";

const ExperienceDetailPageSection = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const data = t(`experiencesDetails.${id}`, {
    returnObjects: true,
  });

  const galleryImages = id === "cooking" ? experiencesImages.cooking.gallery : [];
  const currentIndex = galleryImages.indexOf(selectedImage);

  const nextImage = () => {
    setSelectedImage(galleryImages[(currentIndex + 1) % galleryImages.length]);
  };

  const prevImage = () => {
    setSelectedImage(
      galleryImages[(currentIndex - 1 + galleryImages.length) % galleryImages.length]
    );
  };

  if (!data) {
    return <div className="p-10">Not found</div>;
  }

  return (
    <section className="bg-mainBg py-16">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* BREADCRUMBS */}
        <div className="mb-6 md:mb-8">
          <nav className="flex items-center gap-2 text-sm text-[#666]">
            <Link to="/">{t("experiences.breadcrumbs.home")}</Link>
            <ChevronRight size={14} />
            <Link to="/experiences">
              {t("experiences.breadcrumbs.experiences")}
            </Link>
            <ChevronRight size={14} />
            <span>{data.title}</span>
          </nav>
        </div>

        {/* INTRO */}
        <div className="text-center max-w-3xl mx-auto py-12 md:py-16 lg:py-20">
          <h2 className="title-xl font-bold text-black mb-6">
            {data.title}
          </h2>
          <p className="text-[#555] leading-relaxed">{data.intro}</p>
        </div>

        {/* SECTIONS */}
        <div className="space-y-20">
          {data.sections?.map((section) => {
            const isImageLeft = section.layout === "image-left";
            const isCenter = section.layout === "center";
            const image = experiencesImages[id]?.[section.id];

            // =========================
            // CENTER LAYOUT
            // =========================
            if (isCenter) {
              return (
                <div key={section.id} className="text-center max-w-3xl mx-auto">

                  {/* TITLE */}
                  <h2 className="title-lg font-bold !text-black mb-2">
                    {section.title}
                  </h2>

                  {/* SUBTITLE */}
                  {section.subtitle && (
                    <p className="font-semibold text-black mb-4">
                      {section.subtitle}
                    </p>
                  )}

                  <div className="w-full h-px bg-[#CDA73C]/60 mb-8"></div>

                  {Array.isArray(section.content) ? (
                    <ul className="space-y-4 text-[#333] text-[15px] leading-relaxed">
                      {section.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <>
                      <p className="text-gray-700 mb-6">
                        {section.content}
                      </p>

                      {/* MENU */}
                      {section.menu && (
                        <div className="mb-6">
                          <p className="font-semibold text-black">
                            {t("experiencesDetails.labels.menu")}
                          </p>
                          <p className="text-gray-700">
                            {section.menu}
                          </p>
                        </div>
                      )}

                      {/* INCLUDES */}
                      {section.includes && (
                        <div>
                          <p className="font-semibold text-black">
                            {t("experiencesDetails.labels.includes")}
                          </p>
                          <p className="text-gray-700">
                            {section.includes}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            }

            // =========================
            // IMAGE LAYOUT
            // =========================
            return (
              <div
                key={section.id}
                className="flex flex-col md:flex-row items-center gap-10"
              >
                {/* IMAGE */}
                <div
                  className={`w-full md:w-1/2 ${
                    isImageLeft ? "" : "md:order-2"
                  }`}
                >
                  <img
                    src={image}
                    alt={section.title}
                    className="w-full aspect-[400/400] object-cover rounded"
                  />
                </div>

                {/* CONTENT */}
                <div className="w-full md:w-1/2">

                  {/* TITLE */}
                  <h2 className="text-xl font-bold text-black mb-2">
                    {section.title}
                  </h2>

                  {/* SUBTITLE */}
                  {section.subtitle && (
                    <p className="font-semibold text-black mb-4">
                      {section.subtitle}
                    </p>
                  )}

                  {Array.isArray(section.content) ? (
                    <ul className="space-y-4 text-[#333] text-[15px] leading-relaxed">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 mt-2 rounded-full bg-[#CDA73C] flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <>
                      <p className="text-gray-700 mb-6">
                        {section.content}
                      </p>

                      {/* MENU */}
                      {section.menu && (
                        <div className="mb-6">
                          <p className="font-semibold text-black">
                            {t("experiencesDetails.labels.menu")}
                          </p>
                          <p className="text-gray-700">
                            {section.menu}
                          </p>
                        </div>
                      )}

                      {/* INCLUDES */}
                      {section.includes && (
                        <div>
                          <p className="font-semibold text-black">
                            {t("experiencesDetails.labels.includes")}
                          </p>
                          <p className="text-gray-700">
                            {section.includes}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== GALLERY  ===== */}
        {galleryImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-[642px_1fr] gap-6 mt-20 mb-10">

            {/* LEFT */}
            <div className="w-full md:w-[642px] h-[300px] md:h-[514px]">
              <img
                src={galleryImages[0]}
                className="w-full h-full object-cover rounded"
              />
            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 grid-rows-2 gap-6 h-[300px] md:h-[514px]">
              {galleryImages.slice(1, 5).map((img, index) => {
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
                            setSelectedImage(galleryImages[0]);
                            setOpen(true);
                          }}
                          className="relative z-10 bg-white px-5 py-2 rounded-full text-sm shadow-md hover:bg-black/40 hover:text-white transition cursor-pointer"
                        >
                          {t("accommodation.services.viewAllPhotos")} ({galleryImages.length})
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

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
              {galleryImages.map((img, i) => (
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

export default ExperienceDetailPageSection;
