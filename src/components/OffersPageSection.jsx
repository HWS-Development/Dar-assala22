import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const OffersPageSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-mainBg py-16">
        <div className="max-w-[1200px] mx-auto px-6">
            {/* ================= BREADCRUMB ================= */}
            <div className="mt-6 md:mt-8 mb-6 md:mb-8">
                <nav className="flex items-center gap-2 text-sm text-gray-500">
                    <Link to="/" className="hover:text-[#1a1a1a]">{t("offers.breadcrumbs.home")}</Link>
                    <ChevronRight size={14} />
                    <span className="text-[#1a1a1a]">
                    {t("offers.breadcrumbs.offers")}
                    </span>
                </nav>
            </div>


            {/* ================= INTRO ================= */}
            <div className="text-center max-w-3xl mx-auto py-12 md:py-16 lg:py-20">
                <h2 className="title-xl mb-6">
                    {t("offers.intro.title")}
                </h2>

                <p className="text-[#555] mb-4 leading-relaxed">
                    {t("offers.intro.description")}
                </p>
            </div>


            {/* ================= OFFER OF THE MOMENT ================= */}
           <div className="grid md:grid-cols-2 gap-10 items-center p-6 md:p-12">

                {/* IMAGE */}
                <div className="flex justify-center">
                    <img
                    src="https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Offres/_DSC2091.png"
                    alt="Offer"
                    className="w-full max-w-[545px] aspect-[545/363] object-cover rounded-2xl shadow-lg"
                    />
                </div>

                {/* CONTENT */}
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">

                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
                    {t("offers.main.title")}
                    </h2>

                    <div className="w-full h-px bg-[#CDA73C]/60 mb-8"></div>

                    <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                    {t("offers.main.subtitle")}
                    </p>

                    <ul className="space-y-3 text-gray-700 text-sm md:text-[15px] leading-relaxed mb-8">
                    {t("offers.main.list", { returnObjects: true }).map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 rounded-full bg-[#CDA73C] flex-shrink-0"></span>
                        <span>{item}</span>
                        </li>
                    ))}
                    </ul>

                    {/* CTA (inchangé comme demandé) */}
                    <Link to='/DiscoverOffer' className="flex justify-center gap-4 mb-8 flex-wrap">
                    <span className="px-4 py-2 rounded-full text-sm px-4 py-2 text-sm rounded-full border border-[#cda73c]">
                        {t("offers.main.cta")}
                    </span>
                    </Link>

                </div>
            </div>
        </div>

    </section>
  );
};

export default OffersPageSection;