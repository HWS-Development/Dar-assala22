import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Linkedin, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { label: t("navbar.accommodation"), path: "/accommodation" },
    { label: t("navbar.dining"), path: "/dining" },
    { label: t("navbar.experiences"), path: "/experiences" },
    { label: t("navbar.meetingsEvents"), path: "/meetings-events" },
    { label: t("navbar.gallery"), path: "/gallery" },
    { label: t("navbar.contact"), path: "/contact" },
  ];

  return (
    <footer className="bg-[#F2F2F2] border-t border-[#e0dcd6]">

      {/* ================= TOP ================= */}
      <div className="max-w-[1300px] mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* ===== BOOKING ===== */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-[#1a1a1a] uppercase tracking-wide">
            {t("navbar.reserver")}
          </h3>

          <a
            href="https://riad-alassala-fes.hotelrunner.com/bv3/search"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center
              border border-black
              bg-black text-white
              px-5 py-3
              text-sm
              transition-all duration-300

              hover:bg-white hover:text-black
            "
          >
            {t("navbar.reserver")}
          </a>
        </div>

        {/* ===== QUICK LINKS ===== */}
        <div>
          <h3 className="text-sm font-semibold text-[#1a1a1a] mb-4 uppercase tracking-wide">
            {t("footer.quickLinks")}
          </h3>

          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="
                    text-sm text-[#666]
                    hover:text-[#1a1a1a]
                    transition
                  "
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== CONTACT ===== */}
        <div className="flex flex-col gap-4">

          <h3 className="text-sm font-semibold text-[#1a1a1a] uppercase tracking-wide">
            {t("footer.contact")}
          </h3>

          {/* Address */}
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full border border-[#1a1a1a] flex items-center justify-center flex-shrink-0">
              <MapPin size={14} />
            </div>

            <p className="text-sm text-[#666] leading-relaxed">
              {t("contact.address")}
            </p>
          </div>

          {/* Phone / WhatsApp */}
          <a
            href={t("contact.whatsappLink")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
           
            <svg
              className="w-6 h-6 text-[#1a1a1a] group-hover:text-green-600 transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
  
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>

            <span className="text-sm text-[#666]">
              {t("contact.phone")}
            </span>
          </a>
        </div>

        {/* ===== SOCIAL ===== */}
        <div className="flex flex-col gap-4">

          <h3 className="text-sm font-semibold text-[#1a1a1a] uppercase tracking-wide">
            {t("footer.follow")}
          </h3>

          <div className="flex gap-4">
            <a href="https://www.instagram.com/riadalassala/" target="_blank">
              <Instagram className="w-5 h-5 text-[#1a1a1a] hover:scale-110 transition" />
            </a>
            <a href="https://web.facebook.com/RiadAlassala" target="_blank">
              <Facebook className="w-5 h-5 text-[#1a1a1a] hover:scale-110 transition" />
            </a>
          </div>

        </div>

      </div>

      {/* ================= DIVIDER ================= */}
      <div className="border-t border-[#e0dcd6]" />

      {/* ================= BOTTOM ================= */}
      <div className="max-w-[1300px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-sm text-[#666] text-center md:text-left">
          {t("footer.copyright")}
        </p>

        <p className="text-sm text-[#666] text-center md:text-right">
          {t("footer.developer")}
        </p>

      </div>

    </footer>
  );
};

export default Footer;