import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const MeetingsEventsPageSection = () => {
  const { t } = useTranslation();

  const eventTypes = [
    {
      id: "diners",
      key: "diners",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200",
    },
    {
      id: "rooftop",
      key: "rooftop",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
    },
    {
      id: "privatisation",
      key: "privatisation",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-[#666]" style={{ fontFamily: "Jost, sans-serif" }}>
            <Link to="/" className="hover:text-[#1a1a1a] transition-colors">
              {t("meetingsEvents.breadcrumbs.home")}
            </Link>
            <ChevronRight size={14} className="text-[#999]" />
            <span className="text-[#1a1a1a]">{t("meetingsEvents.breadcrumbs.meetingsEvents")}</span>
          </nav>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12">
          <h1
            className="text-5xl font-serif text-[#1a1a1a] mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("meetingsEvents.hero.title")}
          </h1>

          {/* Description */}
          <p
            className="text-base text-[#666] max-w-4xl mx-auto mb-8 leading-relaxed"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {t("meetingsEvents.featured.description")}
          </p>
        </div>

        {/* Services & Amenities Section */}
        <div className="mb-16">
          <h2
            className="text-center text-sm uppercase tracking-wider text-[#1a1a1a] mb-4"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {t("meetingsEvents.services.eyebrow")}
          </h2>
          
          {/* Separator Line */}
          <div className="w-16 h-px bg-[#1a1a1a] mx-auto mb-8"></div>

          {/* Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Left Column */}
            <ul className="space-y-3">
              {t("meetingsEvents.services.items.left", { returnObjects: true }).map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[#1a1a1a]"
                  style={{ fontFamily: "Jost, sans-serif" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] mt-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Right Column */}
            <ul className="space-y-3">
              {t("meetingsEvents.services.items.right", { returnObjects: true }).map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[#1a1a1a]"
                  style={{ fontFamily: "Jost, sans-serif" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] mt-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Three Event Type Cards - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {eventTypes.map((eventType) => {
            const eventData = t(`meetingsEvents.eventTypes.${eventType.key}`, { returnObjects: true });
            return (
              <EventTypeCard
                key={eventType.id}
                eventType={eventType}
                eventData={eventData}
                t={t}
              />
            );
          })}
        </div>

        {/* Seminars & Workshops Section - Image Left, Text Right */}
        <SectionWithImage
          eyebrow={t("meetingsEvents.spaces.eyebrow")}
          title={t("meetingsEvents.spaces.seminars.title")}
          description={t("meetingsEvents.spaces.seminars.description")}
          discoverText={t("meetingsEvents.spaces.seminars.discover")}
          image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200"
          imagePosition="left"
        />

        {/* Provided Services Section - Text Left, Image Right */}
        <SectionWithImage
          eyebrow={t("meetingsEvents.spaces.eyebrow")}
          title={t("meetingsEvents.spaces.services.title")}
          description={t("meetingsEvents.spaces.services.description")}
          discoverText={t("meetingsEvents.spaces.services.discover")}
          image="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200"
          imagePosition="right"
        />

        {/* Group Offer Section - Image Left, Text Right */}
        <SectionWithImage
          eyebrow={t("meetingsEvents.groupOffer.eyebrow")}
          title=""
          description={t("meetingsEvents.groupOffer.description")}
          discoverText={t("meetingsEvents.groupOffer.discover")}
          image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200"
          imagePosition="left"
        />
      </div>

      {/* Gallery Section */}
      <MeetingsEventsGallery />
    </section>
  );
};

// Event Type Card Component
const EventTypeCard = ({ eventType, eventData, t }) => {
  return (
    <div className="bg-white border border-[#e0dcd6] rounded-lg overflow-hidden">
      {/* Image */}
      <div className="h-[300px] w-full overflow-hidden">
        <img
          src={eventType.image}
          alt={eventData.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3
          className="text-2xl font-serif text-[#1a1a1a] mb-3"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {eventData.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm text-[#555] mb-6 leading-relaxed"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          {eventData.description}
        </p>

        {/* Button */}
        <button
          className="w-full bg-[#1a1a1a] text-white py-3 rounded hover:bg-[#262626] transition-colors"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          {eventData.discover}
        </button>
      </div>
    </div>
  );
};

// Section with Image Component (Left or Right)
const SectionWithImage = ({ eyebrow, title, description, discoverText, image, imagePosition }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 ${imagePosition === "right" ? "md:flex-row-reverse" : ""}`}>
      {/* Image */}
      <div className={`h-[400px] w-full overflow-hidden rounded-lg ${imagePosition === "right" ? "md:order-2" : "md:order-1"}`}>
        <img
          src={image}
          alt={title || eyebrow}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className={`${imagePosition === "right" ? "md:order-1" : "md:order-2"}`}>
        {eyebrow && (
          <p
            className="text-xs uppercase tracking-wider text-[#666] mb-2"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {eyebrow}
          </p>
        )}
        {title && (
          <h2
            className="text-3xl font-serif text-[#1a1a1a] mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {title}
          </h2>
        )}
        <p
          className="text-base text-[#555] mb-6 leading-relaxed"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          {description}
        </p>
        <button
          className="bg-[#1a1a1a] text-white px-8 py-3 rounded hover:bg-[#262626] transition-colors"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          {discoverText}
        </button>
      </div>
    </div>
  );
};

// Gallery Component for Meetings & Events
const MeetingsEventsGallery = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  // New images for meetings & events
  const images = [
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600", // Meeting room
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800", // Event setup
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800", // Rooftop event
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800", // Private dinner
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800", // Celebration
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800", // Workshop
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800", // Conference
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800", // Outdoor event
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800", // Reception
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800", // Group gathering
  ];

  return (
    <section className="bg-[#f7f5f3] py-8 w-full mt-16">
      {/* Full-width background, inner container for content */}
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-8">
          
          {/* Title */}
          <h2
            className="text-center text-[40px] font-serif text-[#1a1a1a] mb-12"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t("gallery.title")}
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* LEFT BIG IMAGE - 16:9 aspect ratio, spans 2 columns */}
            <div className="md:col-span-2 relative overflow-hidden rounded-[4px]">
              <img
                src={images[0]}
                alt=""
                className="w-full h-[442px] object-cover"
              />
            </div>

            {/* RIGHT GRID (4 square images) */}
            <div className="grid grid-cols-2 gap-4 h-[442px]">
              
            {images.slice(1, 5).map((img, index) => {
                const isLast = index === 3;

                return (
                  <div
                    key={index}
                    className="relative overflow-hidden rounded-[4px] aspect-square"
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-[284px] object-cover"
                    />

                    {/* BUTTON ON LAST IMAGE - Centered bottom, white rounded pill */}
                    {isLast && (
                      <div className="absolute inset-0 flex items-end justify-center pb-5 pointer-events-none">
                        <button
                          onClick={() => setOpen(true)}
                          className="
                            bg-white
                            text-[#1a1a1a]
                            px-6
                            py-2.5
                            rounded-full
                            text-[13px]
                            font-medium
                            shadow-sm
                            hover:bg-gray-50
                            transition-colors
                            pointer-events-auto
                            cursor-pointer
                          "
                          style={{ fontFamily: "Jost, sans-serif" }}
                        >
                          {t("gallery.viewAllPhotos")} ({images.length})
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/70 overflow-y-auto">
          <button
            onClick={() => setOpen(false)}
            className="fixed top-6 right-6 bg-white px-3 py-2 rounded-full text-sm z-[101]"
          >
            ✕
          </button>

          <div className="max-w-[1200px] mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default MeetingsEventsPageSection;
