import { useState } from 'react';
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  // Google Maps embed URL for Riad Alassala Fes
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.5!2d-4.9781406!3d34.0596204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9ff4a9bae5a97d%3A0x79ad14c9dc151882!2sRiad%20Alassala%20Fes!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus`;

  return (
    <div className="bg-[#fafafa] min-h-screen">
      {/* Form Section */}
      <section className="container-wide py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Title and Subtitle */}
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t('contact.page.form.title')}
            </h2>
            <p 
              className="text-base text-neutral-600"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              {t('contact.page.form.subtitle')}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label 
                  className="block text-xs uppercase tracking-wider text-neutral-700 mb-2"
                  style={{ fontFamily: "Jost, sans-serif" }}
                >
                  {t('contact.page.form.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  style={{ fontFamily: "Jost, sans-serif" }}
                />
              </div>
              <div>
                <label 
                  className="block text-xs uppercase tracking-wider text-neutral-700 mb-2"
                  style={{ fontFamily: "Jost, sans-serif" }}
                >
                  {t('contact.page.form.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  style={{ fontFamily: "Jost, sans-serif" }}
                />
              </div>
            </div>

            {/* Row 2: Phone and Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label 
                  className="block text-xs uppercase tracking-wider text-neutral-700 mb-2"
                  style={{ fontFamily: "Jost, sans-serif" }}
                >
                  {t('contact.page.form.phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  style={{ fontFamily: "Jost, sans-serif" }}
                />
              </div>
              <div>
                <label 
                  className="block text-xs uppercase tracking-wider text-neutral-700 mb-2"
                  style={{ fontFamily: "Jost, sans-serif" }}
                >
                  {t('contact.page.form.subject')}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  style={{ fontFamily: "Jost, sans-serif" }}
                />
              </div>
            </div>

            {/* Row 3: Message */}
            <div>
              <label 
                className="block text-xs uppercase tracking-wider text-neutral-700 mb-2"
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                {t('contact.page.form.message')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-neutral-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 resize-none"
                style={{ fontFamily: "Jost, sans-serif" }}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-neutral-900 text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                {t('contact.page.form.sendButton')}
              </button>
            </div>
          </form>
        </div>
      </section>

 
    </div>
  );
};

export default ContactPageSection;
