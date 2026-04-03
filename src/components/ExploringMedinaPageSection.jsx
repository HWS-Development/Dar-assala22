import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ExploringMedinaPageSection = () => {
  const { t } = useTranslation();

  const sections = t("exploringMedina.sections", { returnObjects: true });
  const essentials = t("exploringMedina.essentials", { returnObjects: true });

  // ✅ Mapping images 
  const imageMap = {
    medina:
      "https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Exploring%20Medina/a9c94b12-ee71-4751-8a6f-a871de5d11a4.png",
    monuments:
      "https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Exploring%20Medina/42c94104-1caf-4a66-a484-36c588056809.png",
    souks:
      "https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Exploring%20Medina/ef426d97-fece-49f6-b78e-7754b6af49e9.png",
  };

  // ✅ Mapping routes 
  const routeMap = {
    medina: "/exploring-medina/medina",
    monuments: "/exploring-medina/monuments",
    souks: "/exploring-medina/souks",
  };

  // ✅ helper split 
  const split = (arr = []) => {
    const mid = Math.ceil(arr.length / 2);
    return [arr.slice(0, mid), arr.slice(mid)];
  };

  return (
    <section className="bg-mainBg py-16">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* ================= BREADCRUMBS ================= */}
        <div className="mb-6 md:mb-8">
          <nav className="flex items-center gap-2 text-sm text-[#666]">
            <Link to="/" className="hover:text-[#1a1a1a]">
              {t("exploringMedina.breadcrumbs.home")}
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#1a1a1a]">
              {t("exploringMedina.breadcrumbs.exploringMedina")}
            </span>
          </nav>
        </div>

       
        {/* ================= INTRO ================= */}
        <div className="text-center max-w-3xl mx-auto py-12 md:py-16 lg:py-20">
          <h2 className="title-xl mb-6">
            {t("exploringMedina.intro.title")}
          </h2>

          <p className="text-[#555] leading-relaxed">
            {t("exploringMedina.intro.description")}
          </p>
        </div>

        {/* ================= SECTIONS ================= */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
            {sections.map((item) => (
                <div key={item.id} className="flex flex-col h-full">

                    {/* IMAGE */}
                    <img
                    src={imageMap[item.id]}
                    alt={item.title}
                    className="
                        w-full
                        h-[260px]
                        sm:h-[320px]
                        md:h-[429px]
                        lg:h-[514px]
                        object-cover
                        rounded
                        mb-4
                    "
                    loading="lazy"
                    />

                    {/* CONTENT */}
                    <div className="flex flex-col flex-1">

                    <p className="text-xs uppercase text-gray-500 mb-2">
                        {item.tag}
                    </p>

                    <h3 className="text-lg font-semibold mb-2">
                        {item.title}
                    </h3>

                    <p className="text-[#555] mb-4 leading-relaxed">
                        {item.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-auto">
                        <Link
                        to={routeMap[item.id]}
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
                        {item.cta}
                        </Link>
                    </div>

                    </div>

                </div>
            ))}
        </div>

        {/* ================= HERO IMAGE ================= */}
        <img
          src="https://nvskwcjdrrrcpyiadoxy.supabase.co/storage/v1/object/public/Riad%20Al%20Assala%20Fes/Images%20of%20the%20pages/Exploring%20Medina/4f4871f3-2e05-460d-a6bf-b4e5a01c40f1.png"
          alt="Fes Medina"
          className="w-full
          h-[250px]
          sm:h-[320px]
          md:h-[400px]
          lg:h-[500px]
          rounded
          mb-12"
          loading="lazy"
        /> 

        {/* ================= ESSENTIALS ================= */}
        <div className="text-center max-w-4xl mx-auto">

          <h2 className="title-xl mb-6">
            {essentials.title}
          </h2>

          {/* TIPS */}
          <h3 className="text-lg text-gray-600 mb-6">
            {essentials.tipsTitle}
          </h3>

          <div className="w-full h-px bg-[#CDA73C]/60 mb-8"></div>

          <div className="grid md:grid-cols-2 gap-10 text-left mb-16">
            {split(essentials.tips).map((col, i) => (
                <ul key={i} className="space-y-4 text-[#333] text-[15px] leading-relaxed">
                    {col.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 rounded-full bg-[#CDA73C] flex-shrink-0"></span>
                        <span>{item}</span>
                        </li>
                    ))}
                </ul>
            ))}
          </div>

          {/* EXPERIENCES */}
          <h3 className="text-lg text-gray-600 mb-6">
            {essentials.experiencesTitle}
          </h3>

          <div className="w-full h-px bg-[#CDA73C]/60 mb-8"></div>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            {split(essentials.experiences).map((col, i) => (
              <ul key={i} className="space-y-4 text-[#333] text-[15px] leading-relaxed">
                {col.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#CDA73C] flex-shrink-0"></span>
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExploringMedinaPageSection;