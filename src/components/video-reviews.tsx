"use client";

export function VideoReviews() {
  return (
    <div className="flex gap-x-4 justify-center my-4">
      <video
        width={320}
        height={240}
        controls
        playsInline
        preload="auto"
        className="w-32 h-60"
      >
        <source src="/R0.mp4" type="video/mp4" />
        Not supported video
      </video>
      <video
        width={320}
        height={240}
        controls
        playsInline
        className="w-32 h-60"
      >
        <source src="/R1.mp4" type="video/mp4" />
      </video>
      <video
        width={320}
        height={240}
        controls
        playsInline
        className="w-32 h-60"
      >
        <source src="/R2.mp4" type="video/mp4" />
      </video>
      <video
        width={320}
        height={240}
        controls
        playsInline
        className="w-32 h-60"
      >
        <source src="/R3.mp4" type="video/mp4" />
      </video>
      <video
        width={320}
        height={240}
        controls
        playsInline
        className="w-32 h-60"
      >
        <source src="/R4.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
