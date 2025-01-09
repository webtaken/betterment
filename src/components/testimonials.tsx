import { allVideos } from "@/lib/actions/vercel-blob";
import ReviewCard from "./review-card";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { VideoReviews } from "./video-reviews";

export async function Testimonials() {
  const videos = await allVideos();

  console.log(videos);

  return (
    <div className="bg-low-primary relative -top-16 -z-30 pb-5">
      <p className="text-center text-white text-2xl pt-10 font-bold">
        Más de 25 000 opiniones positivas
      </p>
      <ScrollArea className="w-[95%] mx-auto rounded-2xl">
        <div className="flex bg-white py-10 px-4 m-5 gap-4">
          <ReviewCard
            name="JoTa"
            isVerified={true}
            review="Se la recomiendo a la gente que padece dolores de cabeza. Me alivia mucho cuando lo pongo."
            date={"14/12/2024"}
            rating={5}
          />
          <ReviewCard
            name="JoTa"
            isVerified={true}
            review="Se la recomiendo a la gente que padece dolores de cabeza. Me alivia mucho cuando lo pongo."
            date={"14/12/2024"}
            rating={5}
          />
          <ReviewCard
            name="JoTa"
            isVerified={true}
            review="Se la recomiendo a la gente que padece dolores de cabeza. Me alivia mucho cuando lo pongo."
            date={"14/12/2024"}
            rating={5}
          />
          <ReviewCard
            name="JoTa"
            isVerified={true}
            review="Se la recomiendo a la gente que padece dolores de cabeza. Me alivia mucho cuando lo pongo."
            date={"14/12/2024"}
            rating={5}
          />
          <ReviewCard
            name="JoTa"
            isVerified={true}
            review="Se la recomiendo a la gente que padece dolores de cabeza. Me alivia mucho cuando lo pongo."
            date={"14/12/2024"}
            rating={5}
          />
          <ReviewCard
            name="JoTa"
            isVerified={true}
            review="Se la recomiendo a la gente que padece dolores de cabeza. Me alivia mucho cuando lo pongo."
            date={"14/12/2024"}
            rating={5}
          />
          <ReviewCard
            name="JoTa"
            isVerified={true}
            review="Se la recomiendo a la gente que padece dolores de cabeza. Me alivia mucho cuando lo pongo."
            date={"14/12/2024"}
            rating={5}
          />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <p className="text-center italic text-white text-3xl font-bold">
        Clientes felices y libres de migraña
      </p>
      <VideoReviews videos={videos} />
    </div>
  );
}
