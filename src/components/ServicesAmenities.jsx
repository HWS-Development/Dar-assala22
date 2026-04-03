import { useTranslation } from "react-i18next";

const ServicesAmenities = ({ translationKey }) => {
  const { t } = useTranslation();

  const items = t(`${translationKey}.items`, { returnObjects: true });

  const split = (arr = []) => {
    const mid = Math.ceil(arr.length / 2);
    return [arr.slice(0, mid), arr.slice(mid)];
  };

  return (
    <div className="text-center max-w-4xl mx-auto mt-16">

      <h3 className="text-lg text-gray-600 mb-6">
        {t(`${translationKey}.title`)}
      </h3>

      <div className="w-full h-px bg-[#CDA73C]/60 mb-8"></div>

      <div className="grid md:grid-cols-2 gap-10 text-left">
        {split(items).map((col, i) => (
          <ul key={i} className="space-y-3 text-[#555]">
            {col.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#CDA73C] flex-shrink-0"></span> {item}
              </li>
            ))}
          </ul>
        ))}
      </div>

    </div>
  );
};

export default ServicesAmenities;


