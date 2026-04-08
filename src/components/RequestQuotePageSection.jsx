import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const RequestQuotePageSection = () => {
  const { t } = useTranslation();

  const countries = [
    "Maroc","France","Espagne","Allemagne","Italie","Royaume-Uni"
  ];

  // STATE
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    arrival: "",
    departure: "",
    company: "",
    participants: "",
    eventType: "",
    comment: ""
  });

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const inputClass =
    "w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:border-black";

  const labelClass = "block text-[13px] text-gray-700 mb-1";

  // HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => {
      const updated = { ...prev, [name]: value };

      // 👉 SI utilisateur change ARRIVEE
      if (name === "arrival") {
        updated.departure = value; // même date automatiquement
      }

      return updated;
    });
  };

  // SUBMIT (EMAIL)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.lastName || !formData.firstName || !formData.email) {
      setNotification({
        type: "error",
        message: t("requestQuote.form.requiredFields")
      });
      return;
    }

    // ✅ Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setNotification({
        type: "error",
        message: t("requestQuote.form.invalidEmail")
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/reservations@riadalassalafes.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            _subject: t("requestQuote.form.subjectEmail"),

            Nom: formData.lastName,
            Prenom: formData.firstName,
            Email: formData.email,
            Telephone: formData.phone,
            Adresse: formData.address,
            Ville: formData.city,
            Pays: formData.country,
            Arrivee: formData.arrival,
            Depart: formData.departure,
            Entreprise: formData.company,
            Participants: formData.participants,
            Type_evenement: formData.eventType,
            Message: formData.comment,
          })
        }
      );

      if (response.ok) {
        setNotification({
          type: "success",
          message:  t("requestQuote.form.successMessage"),
        });

        // RESET
        setFormData({
          lastName: "",
          firstName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          country: "",
          arrival: "",
          departure: "",
          company: "",
          participants: "",
          eventType: "",
          comment: ""
        });

      } else {
        throw new Error();
      }

    } catch (error) {
      setNotification({
        type: "error",
        message: t("requestQuote.form.errorMessage"),
      });
    } finally {
      setLoading(false);
    }
  };

  // AUTO HIDE TOAST
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="bg-mainBg py-16">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Breadcrumb */}
        <div className="mt-6 md:mt-8 mb-6 md:mb-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#1a1a1a]">
              {t("requestQuote.breadcrumbs.home")}
            </Link>
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

          <p className="text-sm text-gray-500 mb-6">
            {t("requestQuote.intro.required")}
          </p>

          
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* ROW 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>{t("requestQuote.form.lastName")}</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Dupont"
                  required
                />
              </div>
              <div>
                <label className={labelClass}>{t("requestQuote.form.firstName")}</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Jean"
                  required
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>{t("requestQuote.form.email")}</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="contact@email.com"
                  required
                />
              </div>
              <div>
                <label className={labelClass}>{t("requestQuote.form.phone")}</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="+212 6 12 34 56 78"
                />
              </div>
            </div>

            {/* ADDRESS */}
            <div>
              <label className={labelClass}>{t("requestQuote.form.address")}</label>
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* ROW 3 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>{t("requestQuote.form.city")}</label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>{t("requestQuote.form.country")}</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="">{t("requestQuote.form.selectCountry")}</option>
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
                <input
                  type="date"
                  name="arrival"
                  value={formData.arrival}
                  onChange={handleChange}
                  min={today}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>{t("requestQuote.form.departure")}</label>     
                <input
                  type="date"
                  name="departure"
                  value={formData.departure}
                  disabled
                  className={`${inputClass} opacity-50 cursor-not-allowed`}
                />
              </div>
            </div>

            {/* ROW 5 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>{t("requestQuote.form.company")}</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder={t("requestQuote.form.companyPlaceholder")}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>{t("requestQuote.form.participants")}</label>
                <input
                  name="participants"
                  value={formData.participants}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="30"
                />
              </div>
            </div>

            {/* EVENT TYPE */}
            <div>
              <label className={labelClass}>{t("requestQuote.form.eventType")}</label>
              <div className="flex gap-6 mt-2 text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="eventType"
                    value="personal"
                    onChange={handleChange}
                  />
                  {t("requestQuote.form.personal")}
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="eventType"
                    value="professional"
                    onChange={handleChange}
                  />
                  {t("requestQuote.form.professional")}
                </label>
              </div>
            </div>

            {/* COMMENT */}
            <div>
              <label className={labelClass}>{t("requestQuote.form.comment")}</label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className={`${inputClass} h-[120px]`}
                placeholder={t("requestQuote.form.commentPlaceholder")}
              />
            </div>

            {/* SUBMIT */}
            <div className="flex justify-end">
              <button
                disabled={loading}
                className="bg-[#696969] text-white px-6 py-3 rounded hover:bg-[#555] transition"
              >
                {loading ? "..." : t("requestQuote.form.submit")}
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* TOAST */}
      {notification && (
        <div className={`fixed bottom-5 right-5 px-6 py-3 rounded shadow-lg text-white ${
          notification.type === "success" ? "bg-green-600" : "bg-red-600"
        }`}>
          {notification.message}
        </div>
      )}
    </section>
  );
};

export default RequestQuotePageSection;