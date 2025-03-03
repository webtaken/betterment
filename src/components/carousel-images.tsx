"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "./ui/aspect-ratio";

interface CarouselImage {
  source: string;
  alt: string;
  object: string;
}
const images: CarouselImage[] = [
  {
    source: "/man_gorrito.png",
    alt: "Man with gorrito betterment",
    object: "object-[25%_25%]",
  },
  {
    source: "/girl_gorrito_special_2.png",
    alt: "Girl with gorrito betterment",
    object: "object-[25%_25%]",
  },
  {
    source: "/girl_gorrito2.png",
    alt: "Girl with gorrito betterment 2",
    object: "object-[0%_25%]",
  },
  {
    source: "/girl_gorrito.png",
    alt: "Girl with gorrito betterment 3",
    object: "object-[25%_50%]",
  },
];

export function CarouselImages() {
  return (
    <Carousel className="w-full px-0 relative">
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={img.source + index}>
            <AspectRatio ratio={4 / 3}>
              <Image
                src={img.source}
                alt={img.alt}
                fill
                className={`${img.object} object-cover w-full h-full rounded-xl`}
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute md:size-10 left-1 top-1/2 transform -translate-y-1/2 z-10" />
      <CarouselNext className="absolute md:size-10 right-1 top-1/2 transform -translate-y-1/2 z-10" />
    </Carousel>
  );
}
