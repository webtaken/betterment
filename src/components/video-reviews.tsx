"use client";

import {
  // HeroVideoDialog,
  // HeroVideoDialogMobile,
  // CustomHeroVideoDialog,
  CustomHeroVideoDialogMobile,
} from "@/components/ui/hero-video-dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import Image from "next/image";

const videos = [
  {
    url: "https://www.youtube.com/embed/FiTqrbqN0mQ",
    thumbnail: "/renata-vargas.png",
    name: "Renata Vargas",
    instagram: "@revargasss",
  },
  {
    url: "https://www.youtube.com/embed/_5UeWb-_XeU",
    thumbnail: "/angela-kubota.png",
    name: "Angela Kubota",
    instagram: "@angelakubotazb",
  },
  {
    url: "https://www.youtube.com/embed/6_8_ErT1i-Q",
    thumbnail: "/daniela-cadena.png",
    name: "Daniela Cadena",
    instagram: "@daniela.kadena",
  },
  {
    url: "https://www.youtube.com/embed/pTDTm9b4BQg",
    thumbnail: "/ale-tamasi.png",
    name: "Ale Tamasi",
    instagram: "@aletamasi",
  },
  {
    url: "https://www.youtube.com/embed/sxJHpfW1rEc",
    thumbnail: "/ale-gonzales.png",
    name: "Ale Gonzales",
    instagram: "@alegonzales___",
  },
  // {
  //   url: "https://www.youtube.com/embed/FiTqrbqN0mQ",
  //   thumbnail: "/r0_thumbnail.jpg",
  // },
  // {
  //   url: "https://www.youtube.com/embed/_5UeWb-_XeU",
  //   thumbnail: "/r1_thumbnail.jpg",
  // },
  // {
  //   url: "https://www.youtube.com/embed/6_8_ErT1i-Q",
  //   thumbnail: "/r2_thumbnail.jpg",
  // },
  // {
  //   url: "https://www.youtube.com/embed/pTDTm9b4BQg",
  //   thumbnail: "/r3_thumbnail.jpg",
  // },
  // {
  //   url: "https://www.youtube.com/embed/sxJHpfW1rEc",
  //   thumbnail: "/r4_thumbnail.jpg",
  // },
];

export function VideoReviews() {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[80%] mx-auto"
      >
        <CarouselContent>
          {videos.map((video) => (
            <CarouselItem
              key={video.url}
              className="sm:basis-1/2 md:basis-1/3 min-[900px]:basis-1/4 min-[1200px]:basis-1/5"
            >
              <CustomHeroVideoDialogMobile
                key={video.url}
                videoSrc={video.url}
                className="px-2"
              >
                <div className="flex flex-col gap-2">
                  <div className="bg-low-white p-3 sm:p-1.5 rounded-full mx-auto">
                    <Image
                      src={video.thumbnail}
                      className="object-cover mx-auto rounded-full"
                      alt=""
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="text-center text-xs sm:text-sm lg:text-base mx-auto bg-low-white text-primary py-2 rounded-full flex flex-col px-2.5 w-[70%] sm:w-44">
                    <p className="font-bold">{video.name}</p>
                    <p>{video.instagram}</p>
                  </div>
                </div>
              </CustomHeroVideoDialogMobile>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="sm:hidden absolute -left-8 z-10" />
        <div className="hidden sm:block">
          <CarouselPrevious />
        </div>
        <CarouselNext className="sm:hidden absolute -right-8 z-10" />
        <div className="hidden sm:block">
          <CarouselNext />
        </div>
      </Carousel>
      {/* <div className="hidden sm:block">
        <ScrollArea className="w-[80%] whitespace-nowrap rounded-md mx-auto">
          <div className="flex w-[80%] items-center justify-center gap-4 my-4 mx-auto">
            {videos.map((video) => (
              // <HeroVideoDialog
              //   key={video.url}
              //   videoSrc={video.url}
              //   thumbnailSrc={video.thumbnail}
              //   className="w-[calc(100%+2rem)] h-[calc(100%+2rem)]"
              // />
              <CustomHeroVideoDialog
                key={video.url}
                videoSrc={video.url}
                className="w-[calc(100%+2rem)] h-[calc(100%+2rem)]"
              >
                <div className="flex flex-col gap-2">
                  <div className="bg-low-white p-1.5 rounded-full mx-auto">
                    <Image
                      src={video.thumbnail}
                      className="w-[calc(100%+2rem)] h-[calc(100%+2rem)] mx-auto rounded-full"
                      alt=""
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="text-center text-xs sm:text-sm lg:text-base mx-auto bg-low-white text-primary py-2 rounded-full flex flex-col px-2.5 w-44">
                    <p className="font-bold">{video.name}</p>
                    <p>{video.instagram}</p>
                  </div>
                </div>
              </CustomHeroVideoDialog>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div> */}

      {/* <ScrollArea className="sm:hidden w-[85%] whitespace-nowrap rounded-md mx-auto">
        <div className="flex items-center justify-center gap-4 my-4">
          {videos.map((video) => (
            <HeroVideoDialogMobile
              key={video.url}
              videoSrc={video.url}
              thumbnailSrc={video.thumbnail}
              className="w-[130px] h-[230px]"
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea> */}
    </>
  );
}
