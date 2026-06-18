import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import offersData from "../data/offersData";

const DiscoverOfferPageSection = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const offerConfig = offersData.details[id];

  // Fallback if offer not found
  if (!offerConfig) {
    return (
      <section className="bg-mainBg py-20 text-center">
        <p className="text-[#555]">Offer not found.</p>
        <Link to="/offers" className="text-sm underline mt-4 inline-block">
          {t("offers.breadcrumbs.offers")}
        </Link>
      </section>
    );
  }

  const { cardImage, hasDiscoverHotel, i18nKey } = offerConfig;

  const offer = t(`offers.${i18nKey}`, { returnObjects: true });
  const detail = t("offers.detail", { returnObjects: true });

  return (
    <section className="bg-mainBg pb-20">
      <div className="max-w-[820px] mx-auto px-6">

        {/* ================= BREADCRUMB ================= */}
        <div className="pt-8 pb-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <Link to="/" className="hover:text-[#1a1a1a] transition-colors">
              {t("offers.breadcrumbs.home")}
            </Link>
            <ChevronRight size={14} />
            <Link to="/offers" className="hover:text-[#1a1a1a] transition-colors">
              {t("offers.breadcrumbs.offers")}
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#1a1a1a]">{offer.title}</span>
          </nav>
        </div>

        {/* ================= TITLE + INTRO ================= */}
        <div className="text-center pt-6 pb-14">
          <h1
            className="mb-7 text-[24px] md:text-[28px] lg:text-[32px] text-[#1a1a1a] font-normal leading-snug"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {offer.title}
          </h1>

          <p className="text-sm text-[#555] leading-7 max-w-[560px] mx-auto">
            {offer.intro}
          </p>

          {offer.validity && (
            <p className="mt-6 inline-flex rounded-full border border-[#cda73c] bg-[#fbf3dd] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a5a16]">
              {offer.validity}
            </p>
          )}
        </div>

        {/* ================= TWO-COLUMN CONTENT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">

          {/* LEFT – Offer includes */}
          <div>
            <h2
              className="font-bold text-[20px] text-[#1a1a1a] mb-3 leading-snug"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {detail.includesTitle}
            </h2>

            <div className="w-full h-px bg-[#e0e0e0] mb-6" />

            <ul className="space-y-4">
              {offer.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-sm mt-0.5 flex-shrink-0 text-[#1a1a1a]">•</span>
                  <div>
                    <span className="text-sm text-[#1a1a1a] leading-snug font-medium">
                      {item.text}
                    </span>
                    {item.desc && (
                      <p className="text-xs text-[#888] mt-0.5 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT – Hotel card */}
          <div>
            {/* Image */}
            <img
              src={cardImage}
              alt={offer.title}
              className="w-full aspect-[4/3] object-cover"
            />

            {/* Card below image */}
            <div className="bg-white px-5 py-5 border border-t-0 border-gray-100">
              <p
                className="font-bold text-[18px] text-[#1a1a1a] mb-1"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {detail.riadTitle}
              </p>

              <p className="text-[15px] font-bold text-[#999] mb-3">
                {detail.riadSubtitle}
              </p>

              <p className="text-[13px] text-[#555] leading-relaxed mb-5">
                {detail.riadDescription}
              </p>

              {/* CTA Buttons */}
              {hasDiscoverHotel ? (
                <div className="flex gap-3">
                  <Link
                    to="/accommodation"
                    className="flex-1 text-center py-2.5 text-sm border border-[#cda73c] rounded text-[#1a1a1a] hover:bg-[#fdf9ef] transition-colors"
                  >
                    {detail.discoverHotelCta}
                  </Link>
                  <a
                    href="https://riad-alassala-fes.hotelrunner.com/bv3/deals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 text-sm bg-[#3d3d3d] text-white rounded hover:bg-[#2a2a2a] transition-colors"
                  >
                    {detail.bookCta}
                  </a>
                </div>
              ) : (
                <a
                  href="https://riad-alassala-fes.hotelrunner.com/bv3/deals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 text-sm bg-[#3d3d3d] text-white rounded hover:bg-[#2a2a2a] transition-colors"
                >
                  {detail.bookCta}
                </a>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* ================= OFFER CONDITIONS ================= */}
      <div className="max-w-[680px] mx-auto px-6">
        <div className="bg-[#d4d4d4] rounded px-10 py-10 text-center">
          <p
            className="text-[#1a1a1a] text-[18px] font-normal mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {detail.conditionsTitle}
          </p>

          <p className="text-sm text-[#444] leading-relaxed whitespace-pre-line max-w-[500px] mx-auto">
            {offer.conditions}
          </p>
        </div>
      </div>

    </section>
  );
};

export default DiscoverOfferPageSection;
