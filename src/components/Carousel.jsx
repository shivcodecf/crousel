import React, { useState, useEffect } from "react";

const images = [
  {
    url: "https://picsum.photos/id/1011/800/400",
    caption: "Beautiful Mountain",
  },
  {
    url: "https://picsum.photos/id/1012/800/400",
    caption: "Peaceful Lake",
  },
  {
    url: "https://picsum.photos/id/1015/800/400",
    caption: "Sunny Beach",
  },
  {
    url: "https://s1.it.atcdn.net/wp-content/uploads/2025/05/Mount-Everest-seen-from-Tibet.jpg",
    caption: "Mount Everest",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(true);
    }, 300);
  };

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-10 overflow-hidden rounded-lg shadow-lg">
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].caption}
        className={`w-full h-114 object-cover duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full hover:bg-opacity-80"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full hover:bg-opacity-80"
      >
        ❯
      </button>

      <div className="absolute bottom-4 ml-[320px] transform -translate-x-1/2 flex gap-2 ">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full mr-[10px] ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
