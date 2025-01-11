import ReviewCard from "./review-card";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { VideoReviews } from "./video-reviews";
import { reviews } from "@/data/reviews";

export async function Testimonials() {
  return (
    <div className="bg-low-primary relative -top-16 pb-10">
      <p className="text-center text-white text-2xl pt-10 font-bold">
        Más de 25 000 opiniones positivas
      </p>
      <ScrollArea className="w-[95%] mx-auto bg-white rounded-2xl">
        <div className="flex items-start gap-4 overflow-x-auto px-4 py-3 snap-x snap-mandatory">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <p className="text-center italic text-white text-3xl font-bold mt-4">
        Clientes felices y libres de migraña
      </p>
      <VideoReviews />
    </div>
  );
}
