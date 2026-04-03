import { useState, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate , Link} from "react-router-dom";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";

import experiencesData from "../data/experiencesData";

const ExperiencesPageSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("riad");

  // ✅ Refs for scroll
  const riadRef = useRef(null);
  const nearbyRef = useRef(null);

  const tabs = [
    { id: "riad", label: t("experiences.tabs.riad") },
    { id: "nearby", label: t("experiences.tabs.nearby") },
  ];

  // ✅ Handle scroll
  const handleTabClick = (tab) => {
    setActiveTab(tab);

    const ref = tab === "riad" ? riadRef : nearbyRef;

    window.scrollTo({
      top: ref.current.offsetTop - 80,
      behavior: "smooth",
    });
  };

  // ✅ Merge i18n + data
  const experiences = useMemo(() => {
    const riadData = t("experiences.riad", { returnObjects: true });
    const nearbyData = t("experiences.nearby", { returnObjects: true });

    return experiencesData.map((item) => {
      const source =
        item.category === "riad" ? riadData : nearbyData;

      const data =
        source.find((el) => el.id === item.id) || {};

      return {
        ...item,
        title: data.title,
        description: data.description,
        categoryLabel: data.category,
      };
    });
  }, [t]);

  // ✅ Split data
  const riadItems = experiences.filter(
    (e) => e.category === "riad"
  );
  const nearbyItems = experiences.filter(
    (e) => e.category === "nearby"
  );

  return (
    <section className="bg-mainBg py-16">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Breadcrumbs */}
        <div className="mt-6 md:mt-8 mb-6 md:mb-8">
          <nav className="flex items-center gap-2 text-sm text-[#666]">
            <Link to="/" className="hover:text-[#1a1a1a]">
              {t("experiences.breadcrumbs.home")}
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#1a1a1a]">
              {t("experiences.breadcrumbs.experiences")}
            </span>
          </nav>
        </div>

        {/* INTRO */}
        <div className="text-center py-12 md:py-16 lg:py-20">   
          {/* TITLE */}
          <h1 className="title-xl mb-6">
            {t("experiences.title")}  
          </h1>

          <div className="flex justify-center max-w-3xl mx-auto gap-4 mb-8 flex-wrap">
            {/* TABS */}
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={clsx(
                  "text-sm pb-2 transition cursor-pointer",
                  activeTab === tab.id
                    ? "border-b border-black text-black"
                    : "text-gray-500 hover:text-black"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <p className="text-[#555] mb-4 max-w-3xl mx-auto leading-relaxed">
            {t("experiences.intro")}
          </p>
        </div>

        
        {/* ================= RIAD ================= */}
        <div ref={riadRef} className="mb-20">
          <h2 className="text-center text-2xl mb-10">
            {t("experiences.tabs.riad")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {riadItems.map((item) => (
              <Card
                key={item.id}
                item={item}
                navigate={navigate}
              />
            ))}
          </div>
        </div>

        {/* ================= NEARBY ================= */}
        <div ref={nearbyRef}>
          <h2 className="text-center text-2xl mb-10">
            {t("experiences.tabs.nearby")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {nearbyItems.map((item) => (
              <Card
                key={item.id}
                item={item}
                navigate={navigate}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// ================= CARD =================
const Card = ({ item, navigate }) => {
    const { t } = useTranslation();
  return (
    <div className="group h-full flex flex-col">

      {/* IMAGE */}
      <div className="overflow-hidden mb-4">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full  aspect-[644/429]  object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-1">
        {/* CATEGORY */}
        <p className="text-xs uppercase text-gray-500 mb-2">
          {item.categoryLabel}
        </p>

        {/* TITLE */}
        <h3 className="text-xl mb-3">
          {item.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-[#555] leading-relaxed mb-3">
          {item.description}
        </p>

        {/* BUTTON */}
        <button
          onClick={() => navigate(`/experiences/${item.id}`)}
          className="
          mt-auto  
            inline-flex
            md:flex
            self-start
            items-center
            justify-center
            h-[48px]
            px-8
            mt-8
            md:w-1/2
            border
            border-[#1a1a1a]
            rounded-md
            text-sm
            font-medium
            text-[#1a1a1a]
            transition-all
            duration-300
            hover:bg-[#1a1a1a]
            hover:text-white
            cursor-pointer
          "
        >
          {t("experiences.cta")}
        </button>
      </div>
    </div>
  );
};

export default ExperiencesPageSection;