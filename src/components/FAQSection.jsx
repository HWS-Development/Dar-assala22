import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Plus, Minus } from "lucide-react";
import clsx from "clsx";

const FAQSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("sejour");
  const [expandedItems, setExpandedItems] = useState(new Set([0]));

  const tabs = [
    { id: "sejour", key: "sejour", label: t("faq.tabs.sejour") },
    { id: "restaurants", key: "restaurants", label: t("faq.tabs.restaurants") },
    { id: "bienetre", key: "bienetre", label: t("faq.tabs.bienetre") },
    { id: "experiences", key: "experiences", label: t("faq.tabs.experiences") },
  ];

  const toggleItem = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const faqItems = t(`faq.items.${activeTab}`, { returnObjects: true });

  return (
    <section id="faq" className="bg-[#f1eeea] py-24">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* Title */}
        <h2
          className="text-center text-[40px] font-serif text-[#1a1a1a] mb-12"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {t("faq.title")}
        </h2>

        {/* Tabs */}
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
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="bg-white border border-[#e0dcd6] rounded-lg p-6 max-w-4xl mx-auto">
          {faqItems && Array.isArray(faqItems) && faqItems.map((item, index) => {
            const isExpanded = expandedItems.has(index);
            
            return (
              <div
                key={index}
                className={clsx(
                  "border-b border-[#e0dcd6] last:border-b-0",
                  index !== faqItems.length - 1 && "pb-6 mb-6"
                )}
              >
                <button
                  onClick={() => toggleItem(index)}
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

                  {/* Question */}
                  <div className="flex-1">
                    <h3
                      className="text-base font-medium text-[#1a1a1a] mb-2"
                      style={{ fontFamily: "Jost, sans-serif" }}
                    >
                      {item.question}
                    </h3>

                    {/* Answer */}
                    {isExpanded && (
                      <p
                        className="text-sm text-[#555] leading-relaxed"
                        style={{ fontFamily: "Jost, sans-serif" }}
                      >
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
