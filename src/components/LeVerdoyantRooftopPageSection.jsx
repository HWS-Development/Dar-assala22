import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ContactMapSection from "../components/ContactMapSection";
import FAQSection from "../components/FAQSection_Restaurant";
import ServicesAmenities from "../components/ServicesAmenities";

const LeVerdoyantRooftopPageSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-mainBg py-16">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* ================= BREADCRUMBS ================= */}
        <div className="mt-6 md:mt-8 mb-6 md:mb-8">
          <nav className="flex items-center gap-2 text-sm text-[#666]">
            <Link to="/" className="hover:text-[#1a1a1a]">
              {t("dining.breadcrumbs.home")}
            </Link>
            <ChevronRight size={14} />
            <Link to="/dining" className="hover:text-[#1a1a1a]">
              {t("dining.breadcrumbs.dining")}
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#1a1a1a]">
              {t("leVerdoyantRooftop.title")}
            </span>
          </nav>
        </div>

        {/* ================= HEADER ================= */}
        <div className="text-center py-12 md:py-16 lg:py-20">

          <h1 className="title-xl mb-4">
            {t("leVerdoyantRooftop.title")}
          </h1>

          {/* TAGS */}
          <div className="flex justify-center gap-3 mb-6 flex-wrap">
            {t("leVerdoyantRooftop.tags", { returnObjects: true }).map((tag, i) => (
              <span
                key={i}
                className={
                  i === 0
                    ? "px-4 py-2 text-sm rounded-full bg-[#cda73c] text-[#1a1a1a]"
                    : "px-4 py-2 text-sm rounded-full border border-[#cda73c]"
                }
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-[#555] max-w-3xl mx-auto leading-relaxed mb-4">
            {t("leVerdoyantRooftop.intro")}
          </p>

          <p className="mt-6 text-[#666]">
            <strong>{t("leVerdoyantRooftop.openLabel")}</strong>{" "}
            {t("leVerdoyantRooftop.openHours")}
          </p>
        </div>

        {/* ================= MENU ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          <img
            src="https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Restaurant/IMG_7485.png"
            className="w-full h-[260px] sm:h-[320px] md:h-[429px] lg:h-[514px] object-cover rounded"
            alt=""
          />

          <div>
            <p className="text-sm text-gray-500 uppercase mb-2">
              {t("leVerdoyantRooftop.menu.eyebrow")}
            </p>

            <h2 className="text-xl font-semibold mb-4">
              {t("leVerdoyantRooftop.menu.title")}
            </h2>

            <p className="text-[#555] mb-4 leading-relaxed">
              {t("leVerdoyantRooftop.menu.text1")}
            </p>

            <p className="text-[#555] leading-relaxed">
              {t("leVerdoyantRooftop.menu.text2")}
            </p>
          </div>

        </div>

        {/* ================= SETTING ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          <div>
            <p className="text-sm text-gray-500 uppercase mb-2">
              {t("leVerdoyantRooftop.setting.eyebrow")}
            </p>

            <h2 className="text-xl font-semibold mb-4">
              {t("leVerdoyantRooftop.setting.title")}
            </h2>

            <p className="text-[#555] mb-4 leading-relaxed">
              {t("leVerdoyantRooftop.setting.text1")}
            </p>

            <p className="text-[#555] leading-relaxed">
              {t("leVerdoyantRooftop.setting.text2")}
            </p>
          </div>

          <img
            src="https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Restaurant/Riad%20Alassala%20Fes%20-%20hotel%20photoshoot%20in%20morocco%20fez%201.jpg"
            className="w-full h-[260px] sm:h-[320px] md:h-[429px] lg:h-[514px] object-cover rounded"
            alt=""
          />

        </div>

        {/* FULL IMAGE */}
        <img
          src="https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Restaurant/_DSC2018-HDR.png"
          className="w-full h-[260px] sm:h-[320px] md:h-[429px] lg:h-[514px] object-cover rounded mb-20"
          alt=""
        />

        {/* ================= SERVICES ================= */}
        <ServicesAmenities translationKey="leVerdoyantRooftop.services" />

      </div>

      {/* ================= MAP ================= */}
      <ContactMapSection />

      {/* ================= FAQ ================= */}
      <FAQSection translationKey="leVerdoyantRooftop.faq" withTabs={false} />

    </section>
  );
};

export default LeVerdoyantRooftopPageSection;