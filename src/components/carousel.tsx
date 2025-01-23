"use client";

import Image from "next/image";
import { useState } from "react";

interface CarouselImage {
  source: string;
  alt: string;
}
const images: CarouselImage[] = [
  {
    source: "/girl_gorrito_special.png",
    alt: "Girl with gorrito betterment",
  },
  {
    source: "/girl_gorrito2.png",
    alt: "Girl with gorrito betterment 2",
  },
  {
    source: "/girl_gorrito.png",
    alt: "Girl with gorrito betterment 3",
  },
  {
    source: "/man_gorrito.png",
    alt: "Man with gorrito betterment",
  },
];

export function Carousel() {
  const [mainImage, setMainImage] = useState(images[images.length - 1]);
  return (
    <div className="flex gap-4 h-[500px]">
      <div className="flex flex-col gap-4 w-24">
        {images
          .filter((image) => image.source !== mainImage.source)
          .map((image) => (
            <div
              key={image.source}
              className="h-[32%] relative rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:cursor-pointer shadow-2xl"
            >
              <Image
                src={image.source}
                alt={image.alt}
                className="object-cover"
                fill
                sizes="(max-width: 96px) 100vw, 96px"
                onClick={() => {
                  setMainImage(image);
                }}
              />
            </div>
          ))}
      </div>

      <div className="flex-1 h-full relative rounded-2xl overflow-hidden transform transition-transform duration-500 hover:shadow-lg hover:shadow-gray-600">
        <Image
          src={mainImage.source}
          alt={mainImage.alt}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  );
}
