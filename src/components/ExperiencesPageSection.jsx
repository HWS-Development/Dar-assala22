import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";

const ExperiencesPageSection = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("excursions");

  // Experience data with categories
  const experiences = [
    {
      id: "medinaTour",
      key: "medinaTour",
      category: "excursions",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200",
    },
    {
      id: "chefchaouen",
      key: "chefchaouen",
      category: "excursions",
      image: "https://images.unsplash.com/photo-1555993538-4d0c8c0b8a9e?w=1200",
    },
    {
      id: "meknesVolubilis",
      key: "meknesVolubilis",
      category: "excursions",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200",
    },
    {
      id: "desertMerzouga",
      key: "desertMerzouga",
      category: "excursions",
      image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200",
    },
    {
      id: "middleAtlas",
      key: "middleAtlas",
      category: "excursions",
      image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200",
    },
    {
      id: "chefchaouenTrekking",
      key: "chefchaouenTrekking",
      category: "excursions",
      image: "https://images.unsplash.com/photo-1555993538-4d0c8c0b8a9e?w=1200",
    },
    {
      id: "cookingClass",
      key: "cookingClass",
      category: "workshops",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200",
    },
    {
      id: "tasteOfFes",
      key: "tasteOfFes",
      category: "workshops",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200",
    },
    {
      id: "moroccanTeaChallenge",
      key: "moroccanTeaChallenge",
      category: "workshops",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200",
    },
    {
      id: "artOfMoroccanPastry",
      key: "artOfMoroccanPastry",
      category: "workshops",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200",
    },
    {
      id: "artisanWorkshops",
      key: "artisanWorkshops",
      category: "workshops",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200",
    },
  ];

  const filters = [
    { id: "excursions", key: "excursions" },
    { id: "workshops", key: "workshops" },
  ];

  const filteredExperiences = experiences.filter(
    (exp) => exp.category === activeFilter
  );

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-[#666]" style={{ fontFamily: "Jost, sans-serif" }}>
            <Link to="/" className="hover:text-[#1a1a1a] transition-colors">
              {t("experiences.breadcrumbs.home")}
            </Link>
            <ChevronRight size={14} className="text-[#999]" />
            <span className="text-[#1a1a1a]">{t("experiences.breadcrumbs.experiences")}</span>
          </nav>
        </div>

        {/* Main Title */}
        <div className="text-center mb-8">
          <h1
            className="text-[40px] text-[#1a1a1a] mb-6"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {t("experiences.hero.title")}
          </h1>

          {/* Intro Text */}
          <p
            className="text-base text-[#666] max-w-4xl mx-auto mb-4 leading-relaxed"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {t("experiences.intro.text")}
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
              {t(`experiences.sections.${f.key}.title`)}
            </button>
          ))}
        </div>

        {/* Experience Cards Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredExperiences.map((experience) => {
            const experienceData = t(`experiences.experiences.${experience.key}`, { returnObjects: true });
            return (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                experienceData={experienceData}
                t={t}
              />
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="text-center py-12 border-t border-[#e0dcd6]">
          <h2
            className="text-2xl font-serif text-[#1a1a1a] mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("experiences.contact.title")}
          </h2>
          <button
            className="border border-[#1a1a1a] bg-white text-[#1a1a1a] px-8 py-3 rounded hover:bg-[#f5f5f5] transition-colors"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {t("experiences.contact.button")}
          </button>
        </div>
      </div>
    </section>
  );
};

// Experience Card Component
const ExperienceCard = ({ experience, experienceData, t }) => {
  return (
    <div className="bg-white border border-[#e0dcd6] rounded-lg overflow-hidden">
      {/* Image */}
      <div className="h-[400px] w-full overflow-hidden">
        <img
          src={experience.image}
          alt={experienceData.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3
          className="text-2xl font-serif text-[#1a1a1a] mb-3"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {experienceData.title}
        </h3>

        {/* Price */}
        <div className="mb-4">
          {experienceData.price ? (
            <p
              className="text-sm font-medium text-[#1a1a1a]"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              {experienceData.price}
            </p>
          ) : (
            <p
              className="text-sm font-medium text-[#666]"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              {t("experiences.priceOnRequest")}
            </p>
          )}
        </div>

        {/* Description */}
        <p
          className="text-sm text-[#555] mb-6 leading-relaxed"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          {experienceData.description}
        </p>

        {/* Includes */}
        {experienceData.includes && experienceData.includes.length > 0 && (
          <div className="mb-6">
            <p
              className="text-xs uppercase tracking-wider text-[#666] mb-2"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              {t("experiences.includes")}
            </p>
            <ul className="list-disc list-inside space-y-1">
              {experienceData.includes.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-[#555]"
                  style={{ fontFamily: "Jost, sans-serif" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Button */}
        <button
          className="w-full border border-[#1a1a1a] bg-white text-[#1a1a1a] py-3 rounded hover:bg-[#f5f5f5] transition-colors"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          {t("experiences.cta")}
        </button>
      </div>
    </div>
  );
};

export default ExperiencesPageSection;
