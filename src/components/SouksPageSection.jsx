import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const SouksPageSection = () => {
  const { t } = useTranslation();

  const highlights = t("souksPage.highlights", { returnObjects: true });

  const split = (arr = []) => {
    const mid = Math.ceil(arr.length / 2);
    return [arr.slice(0, mid), arr.slice(mid)];
  };

  return (
    <section className="bg-mainBg py-16">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* BREADCRUMBS */}
        <div className="mb-6 md:mb-8">
            <nav className="flex items-center gap-2 text-sm text-[#666]">
                <Link to="/" className="hover:text-[#1a1a1a]">
                {t("exploringMedina.breadcrumbs.home")}
                </Link>
                <ChevronRight size={14} />
                <Link
                to="/exploring-medina"
                className="hover:text-[#1a1a1a]"
                >
                {t("exploringMedina.breadcrumbs.exploringMedina")}
                </Link>
                <ChevronRight size={14} />
                <span className="text-[#1a1a1a]">
                {t("souksPage.title")}
                </span>
            </nav>
        </div>

        {/* ================= HEADER ================= */}
        <div className="text-center py-12 md:py-16 lg:py-20">
          <h1 className="title-xl mb-6">
            {t("souksPage.title")}
          </h1>

          <p className="text-[#555] max-w-3xl mx-auto leading-relaxed">
            {t("souksPage.intro")}
          </p>
        </div>

        {/* ================= BLOCK 1 ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* TEXT */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              {t("souksPage.block1.title")}
            </h2>

            <p className="text-[#555] leading-relaxed">
              {t("souksPage.block1.description")}
            </p>
          </div>

          {/* IMAGE */}
          <img
            src="https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Exploring%20Medina/27_fevr_2026,%2011_05_10.png"
            alt="Souks Fes"
            className="
              w-full
              h-[260px]
              sm:h-[320px]
              md:h-[429px]
              lg:h-[514px]
              object-cover
              rounded
            "
          />

        </div>

        {/* ================= BLOCK 2 ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* IMAGE */}
          <img
            src="https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Exploring%20Medina/e3904f67-cb2d-4f72-b1d7-f022222f74d1.png"
            alt="Leather souks"
            className="
              w-full
              h-[260px]
              sm:h-[320px]
              md:h-[429px]
              lg:h-[514px]
              object-cover
              rounded
              order-2 md:order-1
            "
          />

          {/* TEXT */}
          <div className="order-1 md:order-2">
            <h2 className="text-xl font-semibold mb-4">
              {t("souksPage.block2.title")}
            </h2>

            <p className="text-[#555] leading-relaxed mb-4">
              {t("souksPage.block2.text1")}
            </p>

            <p className="text-[#555] leading-relaxed">
              {t("souksPage.block2.text2")}
            </p>
          </div>

        </div>

        {/* ================= HIGHLIGHTS ================= */}
        <div className="text-center">

          <h3 className="text-lg text-gray-600 mb-6">
            {t("souksPage.highlightsTitle")}
          </h3>

          <div className="w-full h-px bg-[#CDA73C]/60 mb-8"></div>

          <div className="grid md:grid-cols-2 gap-10 text-left max-w-3xl mx-auto">
            {split(highlights).map((col, i) => (
              <ul key={i} className="space-y-3 text-[#555]">
                {col.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                   <span className="w-2 h-2 mt-2 rounded-full bg-[#CDA73C] flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default SouksPageSection;