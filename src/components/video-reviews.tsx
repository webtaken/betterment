"use client";

import HeroVideoDialog from "@/components/ui/hero-video-dialog";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-8 justify-items-center my-4">
      {videos.map((video) => (
        <HeroVideoDialog
          key={video.url}
          videoSrc={video.url}
          thumbnailSrc={video.thumbnail}
          className="w-[150px] h-[250px]"
        />
      ))}
    </div>
  );
}
