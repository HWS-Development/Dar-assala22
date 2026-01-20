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
