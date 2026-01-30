import { useTranslation } from "react-i18next";
import { Facebook, Instagram } from "lucide-react";

const SocialMediaSection = () => {
  const { t } = useTranslation();

  // Instagram feed images - using placeholder images for now
  // These can be replaced with actual Instagram feed images via API
  const instagramImages = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=400&fit=crop",
  ];

  return (
    <section id="social" className="bg-[#f1eeea] py-24">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* Title */}
        <h2
          className="text-center text-[40px] font-serif text-[#1a1a1a] mb-12"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {t("social.title")}
        </h2>

        {/* Instagram Feed Images */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 max-w-5xl mx-auto">
          {instagramImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover"
              />
             
            </div>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://web.facebook.com/RiadAlassala"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#262626] transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={20} className="text-white" />
          </a>
          
          <a
            href="https://www.instagram.com/riadalassala/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#262626] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} className="text-white" />
          </a>

          <a
            href={t("contact.page.info.whatsapp.url")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center hover:bg-[#20BD5A] transition-colors"
            aria-label="WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default SocialMediaSection;
