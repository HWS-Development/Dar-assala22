import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#f1eeea] border-t border-[#e0dcd6]">
      {/* Upper Section */}
      <div className="max-w-[1300px] mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left: Copyright */}
          <p
            className="text-sm text-[#666]"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {t("footer.copyright")}
          </p>

          {/* Center: Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/riadalassala/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a1a1a] hover:text-[#4d4d4d] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://web.facebook.com/RiadAlassala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a1a1a] hover:text-[#4d4d4d] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a1a1a] hover:text-[#4d4d4d] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Right: Links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-[#666] hover:text-[#1a1a1a] transition-colors"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              {t("footer.privacy")}
            </a>
            <a
              href="#"
              className="text-sm text-[#666] hover:text-[#1a1a1a] transition-colors"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              {t("footer.terms")}
            </a>
            <a
              href="#"
              className="text-sm text-[#666] hover:text-[#1a1a1a] transition-colors"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              {t("footer.contact")}
            </a>
          </div>

        </div>
      </div>

      {/* Dividing Line */}
      <div className="border-t border-[#e0dcd6]"></div>

      {/* Lower Section: Developer Credit */}
      <div className="max-w-[1300px] mx-auto px-6 py-6">
        <p
          className="text-center text-sm text-[#666]"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          {t("footer.developer")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
