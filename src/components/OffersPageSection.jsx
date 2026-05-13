import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import offersData from "../data/offersData";

const OffersPageSection = () => {
  const { t } = useTranslation();

  const featured = t("offers.featured", { returnObjects: true });
  const cards = t("offers.cards", { returnObjects: true });

  return (
    <section className="bg-mainBg pb-20">
      <div className="max-w-[820px] mx-auto px-6">

        {/* ================= BREADCRUMB ================= */}
        <div className="pt-8 pb-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1a1a1a] transition-colors">
              {t("offers.breadcrumbs.home")}
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#1a1a1a]">{t("offers.breadcrumbs.offers")}</span>
          </nav>
        </div>

        {/* ================= TITLE + INTRO ================= */}
        <div className="text-center pt-6 pb-14">
          <h1
            className="mb-8 text-[28px] md:text-[32px] lg:text-[36px] text-[#1a1a1a] font-normal"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("offers.intro.title")}
          </h1>

          <div className="text-sm text-[#555] leading-7 space-y-0.5 max-w-[600px] mx-auto">
            {t("offers.intro.description")
              .split("\n")
              .map((line, i) => (
                <p key={i}>{line}</p>
              ))}
          </div>
        </div>

        {/* ================= FEATURED – OFFER OF THE MOMENT ================= */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden mb-14 shadow-[0_1px_6px_rgba(0,0,0,0.08)]">

          {/* Image */}
          <div className="md:w-[48%] flex-shrink-0">
            <img
              src={offersData.featured.listImage}
              alt="Offer of the Moment"
              className="w-full h-full object-cover min-h-[260px] md:min-h-[320px]"
            />
          </div>

          {/* Content */}
          <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
            <h2
              className="font-bold text-[18px] text-[#1a1a1a] mb-4 leading-snug"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {featured.badge}
            </h2>

            <div className="w-full h-px bg-[#e0e0e0] mb-5" />

            <p className="text-[#333] text-[15px] mb-5 leading-relaxed">
              {featured.title}
            </p>

            <ul className="space-y-2 mb-7">
              {featured.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#444] leading-snug">
                  <span className="mt-1 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center">
              <Link
                to={`/offers/${featured.link}`}
                className="px-7 py-2 text-sm border border-[#cda73c] rounded-full text-[#1a1a1a] hover:bg-[#fdf9ef] transition-colors"
              >
                {featured.cta}
              </Link>
            </div>
          </div>
        </div>

        {/* ================= TWO-COLUMN GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cards.map((card) => {
            const offerItem = offersData.cards.find((o) => o.id === card.id);
            return (
              <div key={card.id} className="flex flex-col">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={offerItem?.listImage}
                    alt={card.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>

                {/* Text */}
                <div className="pt-5 flex flex-col flex-1">
                  <p
                    className="text-[#666] font-bold text-[17px] mb-4 leading-snug"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {card.title}
                  </p>

                  <ul className="space-y-2 mb-7 flex-1">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#444] leading-snug">
                        <span className="mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/offers/${card.id}`}
                    className="w-full text-center px-4 py-2.5 text-sm border border-[#ccc] rounded-full text-[#1a1a1a] hover:bg-gray-50 transition-colors block"
                  >
                    {card.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OffersPageSection;
