import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const DiscoverOfferPageSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-mainBg py-16">
        
        <div className="max-w-[1200px] mx-auto px-6">
            {/* ================= BREADCRUMB ================= */}
            <div className="mt-6 md:mt-8 mb-6 md:mb-8">
                <nav className="flex items-center gap-2 text-sm text-gray-500">
                    <Link to="/" className="hover:text-[#1a1a1a]">{t("offers.breadcrumbs.home")}</Link>
                    <ChevronRight size={14} />
                    <Link to="/offers" className="hover:text-[#1a1a1a]">
                    {t("offers.breadcrumbs.offers")}
                    </Link>
                    <ChevronRight size={14} />
                    <span className="text-[#1a1a1a]">
                    {t("offers.direct.title")}
                    </span>
                </nav>
            </div>


            {/* ================= INTRO ================= */}
            <div className="text-center max-w-3xl mx-auto py-12 md:py-16 lg:py-20">
                <h2 className="title-xl mb-6">
                    {t("offers.direct.title")}
                </h2>

                <p className="text-[#555] mb-4 leading-relaxed">
                    {t("offers.direct.description")}
                </p>

            </div>


            <div className="grid md:grid-cols-2 gap-10 items-center ">
                {/* LEFT */}
                <div>
                    <h2 className="text-2xl mb-3 font-medium">
                        {t("offers.direct.includesTitle")}
                    </h2>

                    <div className="w-full h-px bg-[#CDA73C]/60 mb-8"></div>

                    <ul className="space-y-4 text-[#333] text-[15px] leading-relaxed mb-6">
                        {t("offers.direct.list", { returnObjects: true }).map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="w-2 h-2 mt-2 rounded-full bg-[#CDA73C] flex-shrink-0"></span>
                            <span>{item}</span>
                        </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT CARD */}
                <div className="
                    bg-white
                    rounded-xl
                    overflow-hidden
                    shadow-md
                    border border-[#eee]
                    transition hover:shadow-lg
                    ">

                    {/* IMAGE */}
                    <div className="relative">
                        <img
                        src="https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Offres/_DSC2117.png"
                        className="w-full max-w-[545px] aspect-[545/420] object-cover rounded-2xl shadow-lg"
                        />

                        {/* overlay léger */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">

                        <h4 className="text-lg font-medium mb-1">
                        {t("offers.direct.card.title")}
                        </h4>

                        <p className="text-sm text-[#999] mb-3">
                        {t("offers.direct.card.subtitle")}
                        </p>

                        <p className="text-sm text-[#555] leading-relaxed mb-6">
                        {t("offers.direct.card.description")}
                        </p>

                        {/* CTA (GARDÉ EXACTEMENT TON STYLE) */}
                        <div className="flex justify-center gap-4 mb-2 flex-wrap">

                        <button className="flex justify-center gap-4 flex-wrap">
                            <span className="px-4 py-2 text-sm rounded-full border border-[#cda73c]">
                            {t("offers.direct.card.cta1")}
                            </span>
                        </button>

                        <button className="flex justify-center gap-4 flex-wrap">
                            <span className="px-4 py-2 text-sm rounded-full bg-[#cda73c] text-[#1a1a1a]">
                            {t("offers.direct.card.cta2")}
                            </span>
                        </button>

                        </div>

                    </div>
                </div>
            </div>
            
        </div>


        {/* ================= CONDITIONS ================= */}
        <div className="max-w-[1000px] mx-auto px-6 py-20">
            <div className="
                bg-[#f8f8f8]
                border border-[#CDA73C]/30
                rounded-xl
                p-8 md:p-12
                text-center
            ">

                {/* TITLE */}
                <h2 className="title-xl mb-6">
                {t("offers.conditions.title")}
                </h2>

                {/* SEPARATOR */}
                <div className="w-16 h-[2px] bg-[#CDA73C] mx-auto mb-8"></div>

                {/* TEXT */}
                <p className="
                text-[#555]
                leading-relaxed
                whitespace-pre-line
                text-[15px]
                max-w-2xl
                mx-auto
                ">
                {t("offers.conditions.description")}
                </p>

            </div>
        </div>

    </section>
  );
};

export default DiscoverOfferPageSection;








