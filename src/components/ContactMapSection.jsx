import { useTranslation } from "react-i18next";
import { MapPin, Phone, Send } from "lucide-react";

const ContactMapSection = () => {
  const { t } = useTranslation();

  // Google Maps embed URL for Riad Alassala Fes
  // Coordinates: 34.0596204, -4.9781406
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.5!2d-4.9781406!3d34.0596204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9ff4a9bae5a97d%3A0x79ad14c9dc151882!2sRiad%20Alassala%20Fes!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus`;

  return (
    <section id="contact" className="bg-[#f1eeea] py-24">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT: Contact Information */}
          <div className="flex flex-col justify-center">
            {/* Hotel Name */}
            <h2
              className="text-[40px] font-serif text-[#1a1a1a] mb-8"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t("contact.hotelName")}
            </h2>

            {/* Address */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-6 h-6 rounded-full border border-[#1a1a1a] flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin size={14} className="text-[#1a1a1a]" />
              </div>
              <p
                className="text-base text-[#1a1a1a]"
                style={{ fontFamily: "Jost, sans-serif" }}
              >
                {t("contact.address")}
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-6 h-6 rounded-full border border-[#1a1a1a] flex items-center justify-center flex-shrink-0 mt-1">
                <Phone size={14} className="text-[#1a1a1a]" />
              </div>
              <div>
                <p
                  className="text-base text-[#1a1a1a] mb-1"
                  style={{ fontFamily: "Jost, sans-serif" }}
                >
                  {t("contact.reservations")}:
                </p>
                <p
                  className="text-base text-[#1a1a1a]"
                  style={{ fontFamily: "Jost, sans-serif" }}
                >
                  {t("contact.phone")}
                </p>
              </div>
            </div>

            {/* Itinerary Button */}
            <a
              href={t("contact.mapLink")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#1a1a1a] rounded px-4 py-2 hover:bg-[#e8e4de] transition w-fit"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              <Send size={16} className="text-[#1a1a1a]" />
              <span className="text-sm text-[#1a1a1a]">{t("contact.itinerary")}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={t("contact.whatsappLink")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#1a1a1a] hover:bg-[#25D366] hover:border-[#25D366] transition mt-4"
              aria-label={t("contact.whatsappLabel")}
              title={t("contact.whatsappLabel")}
            >
              <svg
                className="w-5 h-5 text-[#1a1a1a] group-hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>

          {/* RIGHT: Map */}
          <div className="w-full h-[500px] rounded-lg overflow-hidden">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("contact.mapTitle")}
            ></iframe>
          </div>

        </div>
      </div>
    </section>

  );
  
};

export default ContactMapSection;
