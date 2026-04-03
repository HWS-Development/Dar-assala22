import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Plus, Minus } from "lucide-react";
import clsx from "clsx";

const FAQSection = ({ translationKey = "faq", withTabs = true }) => {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState("sejour");
  const [expandedItems, setExpandedItems] = useState(new Set([0]));

  const toggleItem = (index) => {
    const newExpanded = new Set(expandedItems);
    newExpanded.has(index)
      ? newExpanded.delete(index)
      : newExpanded.add(index);
    setExpandedItems(newExpanded);
  };

  // ✅ SAFE DATA (évite crash si mauvais format)
  const rawItems = withTabs
    ? t(`${translationKey}.items.${activeTab}`, { returnObjects: true })
    : t(`${translationKey}.items`, { returnObjects: true });

  const faqItems = Array.isArray(rawItems) ? rawItems : [];

  const tabs = withTabs
    ? [
        { id: "sejour", label: t(`${translationKey}.tabs.sejour`) },
        { id: "restaurants", label: t(`${translationKey}.tabs.restaurants`) },
        { id: "bienetre", label: t(`${translationKey}.tabs.bienetre`) },
        { id: "experiences", label: t(`${translationKey}.tabs.experiences`) },
      ]
    : [];

  return (
    <section className="bg-[#f1eeea] py-24">
      <div className="max-w-[1300px] mx-auto px-6">

        {/* ================= TITLE ================= */}
        <h2 className="text-center text-[40px] font-serif text-[#1a1a1a] mb-12">
          {t(`${translationKey}.title`)}
        </h2>

        {/* ================= TABS ================= */}
        {withTabs && (
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setExpandedItems(new Set([0]));
                }}
                className={clsx(
                  "px-6 py-2 rounded text-sm transition",
                  activeTab === tab.id
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-white text-[#1a1a1a] border border-[#bfbfbf] hover:bg-[#f7f5f3]"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* ================= ITEMS ================= */}
        <div className="bg-white border border-[#e0dcd6] rounded-lg p-6 max-w-4xl mx-auto">
          {faqItems.map((item, index) => {
            const isExpanded = expandedItems.has(index);

            return (
              <div
                key={index}
                className="border-b border-[#e0dcd6] last:border-b-0 pb-6 mb-6 last:mb-0"
              >
                <button
                  onClick={() => toggleItem(index)}
                  aria-expanded={isExpanded}
                  className="w-full flex items-start gap-4 text-left"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-1">
                    {isExpanded ? (
                      <Minus size={20} className="text-[#1a1a1a]" />
                    ) : (
                      <Plus size={20} className="text-[#1a1a1a]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-[#1a1a1a] mb-2">
                      {item.question}
                    </h3>

                    {isExpanded && (
                      <p className="text-sm text-[#555] leading-relaxed">
                        {item.answer}
                      </p>
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;