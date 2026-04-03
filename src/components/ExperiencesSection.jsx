import { useRef, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import experiencesData from "../data/experiencesData";

const ExperiencesSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔥 récupérer data depuis JSON
 const experiences = useMemo(() => {
  const riad = t("experiences.riad", { returnObjects: true });
  const nearby = t("experiences.nearby", { returnObjects: true });

  const all = [...riad, ...nearby];

  return experiencesData.map((item) => {
    const data = all.find((exp) => exp.id === item.id) || {};

    return {
      ...item,
      title: data.title,
      description: data.description,
      category: data.category,
    };
  });
}, [t]);

  // 🔥 scroll logic
  const scrollToIndex = (index) => {
    const container = sliderRef.current;
    const slideWidth = container.children[0].offsetWidth;
    const gap = 24;

    const offset = index * (slideWidth + gap);

    container.scrollTo({
      left: offset,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  const next = () => {
    if (currentIndex < experiences.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-16 bg-mainBg">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* TITLE */}
        <h2 className="title-xl text-center mb-10">
          {t("experiences.title")} 
        </h2>

        {/* INTRO */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          {t("experiences.intro")}
        </p>

        {/* SLIDER */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-hidden"
          >
            {experiences.map((item) => (
              <div
                key={item.id}
                className="w-[280px] md:w-[360px] xl:w-[421px] flex-shrink-0"
              >
                <div className="bg-white rounded-xl overflow-hidden flex flex-col h-full border border-[#e0dcd6]">

                  {/* IMAGE */}
                  <div className="h-[250px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 flex flex-col flex-1">

                    {/* CATEGORY */}
                    <p className="text-xs text-gray-400 mb-2 uppercase">
                      {item.category} 
                    </p>

                    {/* TITLE */}
                    <h3 className="font-semibold mb-2">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-gray-600 mb-4">
                      {item.description}
                    </p>

                    {/* BUTTON */}
                    <button
                      onClick={() => navigate(`/experiences/${item.id}`)}
                      className="mt-auto border py-2 rounded hover:bg-black hover:text-white transition"
                    >
                      {t("experiences.cta")}
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* ARROWS */}
          {currentIndex > 0 && (
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow cursor-pointer"
            >
              <ChevronLeft />
            </button>
          )}

          {currentIndex < experiences.length - 1 && (
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow cursor-pointer"
            >
              <ChevronRight />
            </button>
          )}

          {/* DOTS */}
          <div className="flex justify-center mt-6 gap-2">
            {experiences.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`w-2.5 h-2.5 rounded-full ${
                  currentIndex === i ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;