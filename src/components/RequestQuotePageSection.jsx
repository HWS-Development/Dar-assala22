import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const RequestQuotePageSection = () => {
  const { t } = useTranslation();

    const countries = [
    "Maroc",
    "France",
    "Espagne",
    "Allemagne",
    "Italie",
    "Royaume-Uni",
    ];

  const inputClass =
    "w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:border-black";

  const labelClass = "block text-[13px] text-gray-700 mb-1";

  return (
    <section className="bg-mainBg py-16">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Breadcrumb */}
        <div className="mt-6 md:mt-8 mb-6 md:mb-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1a1a1a]">{t("requestQuote.breadcrumbs.home")}</Link>
            <ChevronRight size={14} />
            <Link to="/meetings-events" className="hover:text-[#1a1a1a]">
              {t("meetingsEvents.breadcrumbs.meetingsEvents")}
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#1a1a1a]">
              {t("requestQuote.breadcrumbs.requestQuote")}
            </span>
          </nav>
        </div>

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto py-12 md:py-16 lg:py-20">
          <h2 className="title-xl mb-6">
            {t("requestQuote.intro.title")}
          </h2>
        </div>

        {/* FORM CONTAINER */}
        <div className="bg-white p-6 md:p-10 rounded shadow-sm">

          {/* Required */}
          <p className="text-sm text-gray-500 mb-6">
            {t("requestQuote.intro.required")}
          </p>

          <form className="space-y-6">

            {/* ROW 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>{t("requestQuote.form.lastName")}</label>
                <input className={inputClass} placeholder="Dupont" required />
              </div>
              <div>
                <label className={labelClass}>{t("requestQuote.form.firstName")}</label>
                <input className={inputClass} placeholder="Jean" required />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>{t("requestQuote.form.email")}</label>
                <input className={inputClass} placeholder="contact@email.com" required/>
              </div>
              <div>
                <label className={labelClass}>{t("requestQuote.form.phone")}</label>
                <input className={inputClass} placeholder="+212 6 12 34 56 78" />
              </div>
            </div>

            {/* ADDRESS */}
            <div>
              <label className={labelClass}>{t("requestQuote.form.address")}</label>
              <input className={inputClass} />
            </div>

            {/* ROW 3 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>{t("requestQuote.form.city")}</label>
                <input className={inputClass} required/>
              </div>
              <div>
                <label className={labelClass}>{t("requestQuote.form.country")}</label>
                <select className={inputClass} required>
                    <option value="">
                        {t("requestQuote.form.selectCountry")}
                    </option>

                    {countries.map((country) => (
                        <option key={country} value={country}>
                        {country}
                        </option>
                    ))}
                </select>
              </div>
            </div>

            {/* ROW 4 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>{t("requestQuote.form.arrival")}</label>
                <input type="date" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>{t("requestQuote.form.departure")}</label>
                <input type="date" className={inputClass} />
              </div>
            </div>

            {/* ROW 5 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>{t("requestQuote.form.company")}</label>
                <input className={inputClass} placeholder={t("requestQuote.form.companyPlaceholder")} required/>
              </div>
              <div>
                <label className={labelClass}>{t("requestQuote.form.participants")}</label>
                <input className={inputClass} placeholder="30" />
              </div>
            </div>

            {/* BUDGET */}
            <div>
              <label className={labelClass}>{t("requestQuote.form.budget")}</label>
              <input className={inputClass}  placeholder={t("requestQuote.form.budgetPlaceholder")} />
            </div>

            {/* EVENT TYPE */}
            <div>
              <label className={labelClass}>{t("requestQuote.form.eventType")}</label>
              <div className="flex gap-6 mt-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  {t("requestQuote.form.personal")}
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" />
                  {t("requestQuote.form.professional")}
                </label>
              </div>
            </div>

            {/* DESTINATION */}
            <div>
              <label className={labelClass}>{t("requestQuote.form.destination")}</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2 text-sm">
                {[
                  "Lille","Paris","Ribeauville","La Baule",
                  "Deauville","Dinard","Marrakech",
                  "Enghien-les-Bains","Cannes","New York"
                ].map((city) => (
                  <label key={city} className="flex items-center gap-2">
                    <input type="checkbox" />
                    {city}
                  </label>
                ))}
              </div>
            </div>

            {/* COMMENT */}
            <div>
              <label className={labelClass}>{t("requestQuote.form.comment")}</label>
              <textarea
                className={`${inputClass} h-[120px]`}
                placeholder={t("requestQuote.form.commentPlaceholder")}
              />
            </div>

            {/* SUBMIT */}
            <div className="flex justify-end">
              <button
                className="
                  bg-[#696969]
                  text-white
                  px-6 py-3
                  rounded
                  hover:bg-[#555]
                  transition
                "
              >
                {t("requestQuote.form.submit")}
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default RequestQuotePageSection;