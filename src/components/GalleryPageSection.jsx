import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { galleryPhotos } from "../data/gallery";

const GalleryPageSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-mainBg py-16">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* ================= BREADCRUMB ================= */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-[#666]">
            <Link to="/" className="hover:text-[#1a1a1a] transition">
              {t("gallery.breadcrumbs.home")}
            </Link>
            <ChevronRight size={14} className="text-[#999]" />
            <span className="text-[#1a1a1a]">
              {t("gallery.breadcrumbs.gallery")}
            </span>
          </nav>
        </div>

        {/* ================= PHOTOS ================= */}
        <div className="py-16">

          <h2 className="text-center title-xl uppercase tracking-wider mb-10">
            {t("gallery.photos.eyebrow")}
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {galleryPhotos.map((photo, index) => (
              <div
                key={index}
                className="
                  relative overflow-hidden rounded-lg
                  border border-[#e0dcd6]
                  group
                "
              >
                <img
                  src={photo}
                  alt={`gallery-${index}`}
                  loading="lazy"
                  className="
                    w-full h-[280px] sm:h-[320px] md:h-[400px]
                    object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                />
              </div>
            ))}

          </div>
        </div>

        {/* ================= AMBIANCE ================= */}
        <div className="mb-16">

          <h2 className="text-center text-sm uppercase tracking-wider mb-12">
            {t("gallery.ambiance.eyebrow")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <AmbianceCard
              title={t("gallery.ambiance.day.title")}
              description={t("gallery.ambiance.day.description")}
            />

            <AmbianceCard
              title={t("gallery.ambiance.night.title")}
              description={t("gallery.ambiance.night.description")}
            />

          </div>
        </div>

      </div>
    </section>
  );
};


// ================= COMPONENT =================
const AmbianceCard = ({ title, description }) => {
  return (
    <div className="
      border border-[#e0dcd6]
      rounded-lg
      p-8
      bg-white
      transition hover:shadow-md
    ">
      <h3 className="text-2xl font-serif text-[#1a1a1a] mb-4">
        {title}
      </h3>

      <p className="text-base text-[#555] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default GalleryPageSection;