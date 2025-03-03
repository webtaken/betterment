import ReviewCard from "./review-card";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { VideoReviews } from "./video-reviews";
import { reviews } from "@/data/reviews";

export async function Testimonials() {
  return (
    <div className="bg-low-white">
      <div className="bg-low-primary pb-10">
        <p className="text-center text-white text-xl md:text-3xl pt-8 mb-8 font-bold px-4">
          Más de 25 000 opiniones positivas
        </p>
        <div className="hidden sm:block w-[95%] sm:w-[80%] md:w-[80%] mx-auto">
          <ScrollArea className="w-full bg-white rounded-2xl">
            <div className="flex items-start py-3 px-4">
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="flex-none w-[160px] md:w-[200px] px-2 first:pl-0 last:pr-0"
                >
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <div className="sm:hidden w-[85%] md:w-[90%] mx-auto">
          <ScrollArea className="w-full bg-white rounded-2xl h-[200px]">
            <div className="grid grid-cols-1 justify-items-center min-[420px]:grid-cols-2 gap-4 items-start py-3 px-4">
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="flex-none w-[160px] md:w-[200px] px-2 first:pl-0 last:pr-0"
                >
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
            <ScrollBar />
          </ScrollArea>
        </div>
        <p className="text-center italic text-white text-2xl md:text-3xl font-bold my-8 px-4">
          Clientes felices y libres de migraña
        </p>
        <VideoReviews />
      </div>
    </div>
  );
}
