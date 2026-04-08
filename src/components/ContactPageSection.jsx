import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const ContactPageSection = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // SUBMIT (EMAIL)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation champs obligatoires
    if (!formData.name || !formData.email || !formData.message) {
      setNotification({
        type: "error",
        message: t("contact.page.form.requiredFields")
      });
      return;
    }

    // ✅ Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setNotification({
        type: "error",
        message: t("contact.page.form.invalidEmail")
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/reservations@riadalassalafes.com", // 🔴  EMAIL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            _subject: t("contact.page.form.subjectEmail"),
          }),
        }
      );

      if (response.ok) {
        setNotification({
          type: "success",
          message: t("contact.page.form.successMessage"),
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      setNotification({
        type: "error",
        message: t("contact.page.form.errorMessage"),
      });
    } finally {
      setLoading(false);
    }
  };

  // ✅ Auto-hide notification
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <section className="container-wide py-16 md:py-24">
        <div className="max-w-4xl mx-auto">

          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
              {t('contact.page.form.title')}
            </h2>
            <p className="text-base text-neutral-600">
              {t('contact.page.form.subtitle')}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} method="POST" className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-2">
                  {t('contact.page.form.name')} *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-2">
                  {t('contact.page.form.email')} *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-2">
                  {t('contact.page.form.phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded bg-white"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-2">
                  {t('contact.page.form.subject')}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-700 mb-2">
                {t('contact.page.form.message')} *
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-neutral-300 rounded bg-white resize-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-neutral-900 text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-neutral-800 transition"
              >
                {loading ? "..." : t('contact.page.form.sendButton')}
              </button>
            </div>

          </form>
        </div>
      </section>

      {/* Toast */}
      {notification && (
        <div
          className={`fixed bottom-5 right-5 px-6 py-3 rounded shadow-lg text-white ${
            notification.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default ContactPageSection;