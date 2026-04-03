import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import experiencesImages from "../data/experiencesImages";
import { ChevronRight } from "lucide-react";

const ExperienceDetailPageSection = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const data = t(`experiencesDetails.${id}`, {
    returnObjects: true,
  });

  if (!data) {
    return <div className="p-10">Not found</div>;
  }

  return (
    <section className="bg-mainBg py-16">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* BREADCRUMBS */}
        <div className="mb-6 md:mb-8">
          <nav className="flex items-center gap-2 text-sm text-[#666]">
            <Link to="/">{t("experiences.breadcrumbs.home")}</Link>
            <ChevronRight size={14} />
            <Link to="/experiences">
              {t("experiences.breadcrumbs.experiences")}
            </Link>
            <ChevronRight size={14} />
            <span>{data.title}</span>
          </nav>
        </div>

        {/* INTRO */}
        <div className="text-center max-w-3xl mx-auto py-12 md:py-16 lg:py-20">
          <h2 className="title-xl font-bold text-black mb-6">
            {data.title}
          </h2>
          <p className="text-[#555] leading-relaxed">{data.intro}</p>
        </div>

        {/* SECTIONS */}
        <div className="space-y-20">
          {data.sections?.map((section) => {
            const isImageLeft = section.layout === "image-left";
            const isCenter = section.layout === "center";
            const image = experiencesImages[id]?.[section.id];

            // =========================
            // CENTER LAYOUT
            // =========================
            if (isCenter) {
              return (
                <div key={section.id} className="text-center max-w-3xl mx-auto">

                  {/* TITLE */}
                  <h2 className="title-lg font-bold !text-black mb-2">
                    {section.title}
                  </h2>

                  {/* SUBTITLE */}
                  {section.subtitle && (
                    <p className="font-semibold text-black mb-4">
                      {section.subtitle}
                    </p>
                  )}

                  <div className="w-full h-px bg-[#CDA73C]/60 mb-8"></div>

                  {Array.isArray(section.content) ? (
                    <ul className="space-y-4 text-[#333] text-[15px] leading-relaxed">
                      {section.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <>
                      <p className="text-gray-700 mb-6">
                        {section.content}
                      </p>

                      {/* MENU */}
                      {section.menu && (
                        <div className="mb-6">
                          <p className="font-semibold text-black">
                            {t("experiencesDetails.labels.menu")}
                          </p>
                          <p className="text-gray-700">
                            {section.menu}
                          </p>
                        </div>
                      )}

                      {/* INCLUDES */}
                      {section.includes && (
                        <div>
                          <p className="font-semibold text-black">
                            {t("experiencesDetails.labels.includes")}
                          </p>
                          <p className="text-gray-700">
                            {section.includes}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            }

            // =========================
            // IMAGE LAYOUT
            // =========================
            return (
              <div
                key={section.id}
                className="flex flex-col md:flex-row items-center gap-10"
              >
                {/* IMAGE */}
                <div
                  className={`w-full md:w-1/2 ${
                    isImageLeft ? "" : "md:order-2"
                  }`}
                >
                  <img
                    src={image}
                    alt={section.title}
                    className="w-full aspect-[400/400] object-cover rounded"
                  />
                </div>

                {/* CONTENT */}
                <div className="w-full md:w-1/2">

                  {/* TITLE */}
                  <h2 className="text-xl font-bold text-black mb-2">
                    {section.title}
                  </h2>

                  {/* SUBTITLE */}
                  {section.subtitle && (
                    <p className="font-semibold text-black mb-4">
                      {section.subtitle}
                    </p>
                  )}

                  {Array.isArray(section.content) ? (
                    <ul className="space-y-4 text-[#333] text-[15px] leading-relaxed">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 mt-2 rounded-full bg-[#CDA73C] flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <>
                      <p className="text-gray-700 mb-6">
                        {section.content}
                      </p>

                      {/* MENU */}
                      {section.menu && (
                        <div className="mb-6">
                          <p className="font-semibold text-black">
                            {t("experiencesDetails.labels.menu")}
                          </p>
                          <p className="text-gray-700">
                            {section.menu}
                          </p>
                        </div>
                      )}

                      {/* INCLUDES */}
                      {section.includes && (
                        <div>
                          <p className="font-semibold text-black">
                            {t("experiencesDetails.labels.includes")}
                          </p>
                          <p className="text-gray-700">
                            {section.includes}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ExperienceDetailPageSection;