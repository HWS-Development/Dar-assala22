import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const MonumentsPageSection = () => {
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
             {t("monumentsPage.title")}
            </span>
          </nav>
        </div>

        {/* ================= HEADER ================= */}
        <div className="text-center py-12 py-12 md:py-16 lg:py-20">
          <h1 className="title-xl mb-6">
            {t("monumentsPage.title")}
          </h1>

          <p className="text-[#555] max-w-3xl mx-auto leading-relaxed">
            {t("monumentsPage.intro")}
          </p>
        </div>

        {/* ================= BLOCK 1 ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* TEXT */}
          <div>
            <h2 className="text-xl font-semibold mb-6">
              {t("monumentsPage.block1.title")}
            </h2>

            <div className="space-y-5 text-[#555] leading-relaxed">
              {t("monumentsPage.block1.items", { returnObjects: true }).map((item, i) => (
                <div key={i}>
                  <p className="font-semibold text-[#1a1a1a]">
                    {item.title}
                  </p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <img
            src="https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Exploring%20Medina/c0874c82-0983-4b5d-87d6-b3ae142bc4f7.png"
            alt="Fes monument"
            className="w-full sm:h-[320px] md:h-[429px] lg:h-[514px] object-cover rounded"
          />

        </div>

        {/* ================= BLOCK 2 ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* IMAGE */}
          <img
            src="https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Exploring%20Medina/5c1cb278-c1ec-4fb8-829d-a6934d2ea5a5.png"
            alt="Tanneries"
            className="w-full h-[260px] sm:h-[320px] md:h-[429px] lg:h-[514px] object-cover rounded order-2 md:order-1"
          />

          {/* TEXT */}
          <div className="order-1 md:order-2 space-y-5 text-[#555] leading-relaxed">
            {t("monumentsPage.block2.items", { returnObjects: true }).map((item, i) => (
              <div key={i}>
                <p className="font-semibold text-[#1a1a1a]">
                  {item.title}
                </p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

        </div>

        {/* ================= BLOCK 3 ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-xl font-semibold mb-6">
              {t("monumentsPage.block3.title")}
            </h2>

            <p className="text-[#555] mb-4 leading-relaxed">
              {t("monumentsPage.block3.description")}
            </p>

            <ul className="space-y-3 text-[#555]">
              {t("monumentsPage.block3.list", { returnObjects: true }).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#CDA73C] flex-shrink-0"></span>
                    {item}
                </li>
              ))}
            </ul>
           
          </div>

          {/* IMAGE */}
          <img
            src="https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Exploring%20Medina/6d3849d8-96df-4a1a-8c1e-e94ab4cc1f5d.png"
            alt="Souk"
            className="w-full h-[260px] sm:h-[320px] md:h-[429px] lg:h-[514px] object-cover rounded"
          />

        </div>

      </div>
    </section>
  );
};

export default MonumentsPageSection;