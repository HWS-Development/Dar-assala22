import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const DiningPageSection = () => {
  const { t } = useTranslation();

  const restaurants = [
    {
      id: "leVerdoyant",
      key: "leVerdoyant",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200",
      layout: "half", // half width
    },
    {
      id: "nupharBar",
      key: "nupharBar",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200",
      layout: "half", // half width
    },
    {
      id: "brunch",
      key: "brunch",
      image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1200",
      layout: "full", // full width
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-[#666]" style={{ fontFamily: "Jost, sans-serif" }}>
            <Link to="/" className="hover:text-[#1a1a1a] transition-colors">
              {t("dining.breadcrumbs.home")}
            </Link>
            <ChevronRight size={14} className="text-[#999]" />
            <span className="text-[#1a1a1a]">{t("dining.breadcrumbs.dining")}</span>
          </nav>
        </div>

        {/* Main Title */}
        <div className="text-center mb-8">
          <h1
            className="text-5xl font-serif text-[#1a1a1a] mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("dining.intro.title")}
          </h1>

          {/* Description */}
          <p
            className="text-base text-[#666] max-w-4xl mx-auto mb-4 leading-relaxed"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {t("dining.intro.description")}
            <a
              href="#"
              className="text-[#1a1a1a] hover:underline ml-1"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              {t("dining.intro.seeMore")}
            </a>
          </p>
        </div>

        {/* Restaurant Cards Grid */}
        <div className="mb-16">
          {/* First Row - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {restaurants
              .filter((r) => r.layout === "half")
              .map((restaurant) => {
                const restaurantData = t(`dining.restaurants.${restaurant.key}`, { returnObjects: true });
                return (
                  <RestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                    restaurantData={restaurantData}
                    t={t}
                  />
                );
              })}
          </div>

          {/* Full Width Card */}
          {restaurants
            .filter((r) => r.layout === "full")
            .map((restaurant) => {
              const restaurantData = t(`dining.restaurants.${restaurant.key}`, { returnObjects: true });
              return (
                <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                  restaurantData={restaurantData}
                  t={t}
                  fullWidth={true}
                />
              );
            })}
        </div>

        {/* Menu Download Block */}
        <section className="py-14 md:py-20 border-t border-[#e0dcd6] mt-16">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2
              className="text-3xl md:text-4xl tracking-[0.18em] uppercase text-[#1a1a1a]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t("dining.menu.title")}
            </h2>
            <a
              href="/menus/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1a1a1a] text-white px-8 py-3 text-xs tracking-[0.24em] uppercase hover:text-[#cda73c] hover:border-[#cda73c] border-2 border-transparent transition-colors duration-300"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              {t("dining.menu.downloadButton")}
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

// Restaurant Card Component
const RestaurantCard = ({ restaurant, restaurantData, t, fullWidth = false }) => {
  return (
    <div className={fullWidth ? "w-full" : ""}>
      <div className="bg-white border border-[#e0dcd6] rounded-lg overflow-hidden">
        {/* Image */}
        <div className={`w-full overflow-hidden ${fullWidth ? "h-[500px]" : "h-[400px]"}`}>
          <img
            src={restaurant.image}
            alt={restaurantData.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category Label */}
          <p
            className="text-xs uppercase tracking-wider text-[#666] mb-2"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {restaurantData.category}
          </p>

          {/* Name */}
          <h3
            className="text-2xl font-serif text-[#1a1a1a] mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {restaurantData.name}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {restaurantData.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded bg-[#f5f0e8] text-[#1a1a1a]"
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            className="text-sm text-[#555] mb-6 leading-relaxed"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {restaurantData.description}
          </p>

          {/* Button */}
          <button
            className="border border-[#1a1a1a] bg-white text-[#1a1a1a] px-6 py-3 rounded hover:bg-[#f5f5f5] transition-colors"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {t("dining.button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiningPageSection;
