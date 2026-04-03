import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const MedinaPageSection = () => {
  const { t } = useTranslation();

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
             {t("medinaPage.title")}
            </span>
          </nav>
        </div>


        {/* ================= HEADER ================= */}
        <div className="text-center py-12 md:py-16 lg:py-20">
          <h1 className="title-xl mb-6">
            {t("medinaPage.title")}
          </h1>

          <p className="text-[#555] max-w-2xl mx-auto leading-relaxed">
            {t("medinaPage.subtitle")}
          </p>
        </div>

        {/* ================= BLOCK 1 ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* TEXT */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              {t("medinaPage.block1.title")}
            </h2>

            <p className="text-[#555] leading-relaxed mb-4">
              {t("medinaPage.block1.text1")}
            </p>

            <p className="text-[#555] leading-relaxed">
              {t("medinaPage.block1.text2")}
            </p>
          </div>

          {/* IMAGE */}
          <div>
            <img
              src="https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Exploring%20Medina/9e82095a-1aed-4786-8303-df9a29f9a03e.png"
              alt="Medina architecture"
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

        </div>

        {/* ================= BLOCK 2 ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="order-2 md:order-1">
            <img
              src="https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Exploring%20Medina/21fbd648-160f-4dd8-bd7c-ee8cf9623d5d.png"
              alt="Fes Medina view"
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

          {/* TEXT */}
          <div className="order-1 md:order-2">
            <h2 className="text-xl font-semibold mb-4">
              {t("medinaPage.block2.title")}
            </h2>

            <p className="text-[#555] leading-relaxed mb-4">
              {t("medinaPage.block2.text1")}
            </p>

            <p className="text-[#555] leading-relaxed">
              {t("medinaPage.block2.text2")}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MedinaPageSection;