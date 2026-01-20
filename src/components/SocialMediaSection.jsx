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
        </div>

      </div>
    </section>
  );
};

export default SocialMediaSection;
