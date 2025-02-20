"use client";

import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const videos = [
  {
    url: "https://www.youtube.com/embed/FiTqrbqN0mQ",
    thumbnail: "/r0_thumbnail.jpg",
  },
  {
    url: "https://www.youtube.com/embed/_5UeWb-_XeU",
    thumbnail: "/r1_thumbnail.jpg",
  },
  {
    url: "https://www.youtube.com/embed/6_8_ErT1i-Q",
    thumbnail: "/r2_thumbnail.jpg",
  },
  {
    url: "https://www.youtube.com/embed/pTDTm9b4BQg",
    thumbnail: "/r3_thumbnail.jpg",
  },
  {
    url: "https://www.youtube.com/embed/sxJHpfW1rEc",
    thumbnail: "/r4_thumbnail.jpg",
  },
];

export function VideoReviews() {
  return (
    <>
      <div className="hidden sm:block">
        <div className="flex w-[80%] items-center justify-center gap-4 my-4 mx-auto">
          {videos.map((video) => (
            <HeroVideoDialog
              key={video.url}
              videoSrc={video.url}
              thumbnailSrc={video.thumbnail}
              className="w-[calc(100%+2rem)] h-[calc(100%+2rem)]"
            />
          ))}
        </div>
      </div>

      <ScrollArea className="sm:hidden w-[85%] whitespace-nowrap rounded-md mx-auto">
        <div className="flex items-center justify-center gap-4 my-4">
          {videos.map((video) => (
            <HeroVideoDialog
              key={video.url}
              videoSrc={video.url}
              thumbnailSrc={video.thumbnail}
              className="w-[180px] h-[260px]"
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
}
