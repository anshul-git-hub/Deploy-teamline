import { useState, useEffect } from "react";

interface GallerySliderProps {
  images: string[];
  interval?: number;
  alt: string;
}

export function GallerySlider({ images, interval = 2000, alt }: GallerySliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  const isVideo = (url: string) => {
    return url.toLowerCase().match(/\.(mp4|mov|webm|ogg)$/) || url.includes("/video/upload/");
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      {images.map((url, idx) => (
        <div
          key={url}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {isVideo(url) ? (
            <video
              src={url}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={url}
              alt={`${alt} - ${idx + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
        </div>
      ))}
      
      {/* Indicator dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-6 bg-gold" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
