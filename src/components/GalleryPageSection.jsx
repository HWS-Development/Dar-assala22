import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight, Play } from "lucide-react";

const GalleryPageSection = () => {
  const { t } = useTranslation();

  // Photos - 6 images
  const photos = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
  ];

  // Video placeholders
  const videos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
      videoUrl: "#", // Replace with actual video URL
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200",
      videoUrl: "#", // Replace with actual video URL
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-[#666]" style={{ fontFamily: "Jost, sans-serif" }}>
            <Link to="/" className="hover:text-[#1a1a1a] transition-colors">
              {t("gallery.breadcrumbs.home")}
            </Link>
            <ChevronRight size={14} className="text-[#999]" />
            <span className="text-[#1a1a1a]">{t("gallery.breadcrumbs.gallery")}</span>
          </nav>
        </div>

        {/* PHOTOS Section */}
        <div className="mb-20">
          <h2
            className="text-center text-sm uppercase tracking-wider text-[#1a1a1a] mb-12"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {t("gallery.photos.eyebrow")}
          </h2>

          {/* Photos Grid - 2 rows, 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg border border-[#e0dcd6]"
              >
                <img
                  src={photo}
                  alt={`Gallery photo ${index + 1}`}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* VIDEOS Section */}
        <div className="mb-20">
          <h2
            className="text-center text-sm uppercase tracking-wider text-[#1a1a1a] mb-12"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {t("gallery.videos.eyebrow")}
          </h2>

          {/* Videos Grid - 2 videos side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>

        {/* DAY & NIGHT AMBIANCES Section */}
        <div className="mb-16">
          <h2
            className="text-center text-sm uppercase tracking-wider text-[#1a1a1a] mb-12"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            {t("gallery.ambiance.eyebrow")}
          </h2>

          {/* Ambiances Grid - 2 blocks side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Day Ambiance */}
            <AmbianceCard
              title={t("gallery.ambiance.day.title")}
              description={t("gallery.ambiance.day.description")}
            />

            {/* Night Ambiance */}
            <AmbianceCard
              title={t("gallery.ambiance.night.title")}
              description={t("gallery.ambiance.night.description")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Video Card Component
const VideoCard = ({ video }) => {
  return (
    <div className="relative overflow-hidden rounded-lg border border-[#e0dcd6] bg-[#f5f5f5]">
      {/* Video Thumbnail */}
      <div className="relative h-[400px] w-full">
        <img
          src={video.thumbnail}
          alt="Video thumbnail"
          className="w-full h-full object-cover"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <button
            onClick={() => {
              // Handle video play - replace with actual video player logic
              window.open(video.videoUrl, '_blank');
            }}
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
            aria-label="Play video"
          >
            <Play size={24} className="text-[#1a1a1a] ml-1" fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Ambiance Card Component
const AmbianceCard = ({ title, description }) => {
  return (
    <div className="border border-[#e0dcd6] rounded-lg p-8 bg-white">
      <h3
        className="text-2xl font-serif text-[#1a1a1a] mb-4"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {title}
      </h3>
      <p
        className="text-base text-[#555] leading-relaxed"
        style={{ fontFamily: "Jost, sans-serif" }}
      >
        {description}
      </p>
    </div>
  );
};

export default GalleryPageSection;
