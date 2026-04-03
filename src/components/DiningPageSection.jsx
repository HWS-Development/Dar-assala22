import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import diningData from "../data/diningData";

const DiningPageSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-mainBg py-16">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* ================= BREADCRUMBS ================= */}
        <div className="mt-6 md:mt-8 mb-6 md:mb-8">
          <nav className="flex items-center gap-2 text-sm text-[#666]">
            <Link to="/" className="hover:text-[#1a1a1a] transition-colors">
              {t("dining.breadcrumbs.home")}
            </Link>
            <ChevronRight size={14} className="text-[#999]" />
            <span className="text-[#1a1a1a]">
              {t("dining.breadcrumbs.dining")}
            </span>
          </nav>
        </div>

        {/* ================= INTRO ================= */}
        <div className="text-center max-w-3xl mx-auto py-10 md:py-16">
          <h1 className="title-xl mb-6">
            {t("dining.intro.title")}
          </h1>

          <p className="text-[#555] leading-relaxed">
            {t("dining.intro.description")}
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="mb-16">

          {/* HALF CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {diningData
              .filter((r) => r.layout === "half")
              .map((restaurant) => {
                const data = t(`dining.restaurants.${restaurant.key}`, {
                  returnObjects: true,
                }) || {};

                return (
                  <RestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                    data={data}
                    route={`/dining/${restaurant.id}`} // ✅ dynamic route (no duplication)
                    t={t}
                  />
                );
              })}
          </div>

          {/* FULL CARD */}
          {diningData
            .filter((r) => r.layout === "full")
            .map((restaurant) => {
              const data = t(`dining.restaurants.${restaurant.key}`, {
                returnObjects: true,
              }) || {};

              return (
                <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                  data={data}
                  route={`/dining/${restaurant.id}`} // ✅ same logic
                  t={t}
                  fullWidth
                />
              );
            })}
        </div>

      </div>
    </section>
  );
};

// ================= CARD =================
const RestaurantCard = ({ restaurant, data, route, t, fullWidth = false }) => {
  return (
    <div className={fullWidth ? "w-full" : ""}>
      <div className="bg-white border border-[#e0dcd6] rounded-lg overflow-hidden flex flex-col h-full">

        {/* IMAGE */}
        <div
          className={`w-full overflow-hidden ${
            fullWidth
              ? "h-[300px] sm:h-[400px] md:h-[500px]"
              : "h-[250px] sm:h-[320px] md:h-[400px]"
          }`}
        >
          <img
            src={restaurant.image || "/fallback.jpg"} // ✅ fallback image
            alt={data?.name || "Restaurant"} // ✅ safe alt
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="p-6 flex flex-col flex-1">

          <p className="text-xs uppercase text-gray-500 mb-2">
            {data?.category || ""}
          </p>

          <h3 className="text-lg font-semibold mb-2">
            {data?.name || ""}
          </h3>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mb-4">
            {data?.tags?.map((tag, index) => ( // ✅ safe optional chaining
              <span
                key={index}
                className={
                  index === 0
                    ? "px-3 py-1 text-xs rounded bg-[#cda73c] text-[#1a1a1a]"
                    : "px-3 py-1 text-xs rounded bg-white text-[#1a1a1a] border border-[#cda73c]"
                }
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-[#555] mb-4 leading-relaxed">
            {data?.description || ""}
          </p>

          {/* CTA */}
          <div className="mt-auto">
            <Link
              to={route}
              className="
                inline-flex
                md:flex
                self-start
                items-center
                justify-center
                h-[48px]
                px-8
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
              "
            >
              {t("dining.button")}
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DiningPageSection;