"use client";

import { ListBlobResultBlob } from "@vercel/blob";
// import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function VideoReviews({ videos }: { videos: ListBlobResultBlob[] }) {
  return (
    <div className="flex gap-x-4 justify-center my-4">
      {videos.map((video) => (
        <video
          key={video.url}
          controls
          playsInline
          className="w-full max-w-xs aspect-video"
        >
          <source src={video.url} type="video/mp4" />
          Not supported video
        </video>
      ))}
    </div>
  );
}
