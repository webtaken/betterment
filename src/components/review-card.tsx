import { Star, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface ReviewCardProps {
  name: string;
  isVerified?: boolean;
  review: string;
  date: string;
  rating: number;
}

export default function ReviewCard({
  name,
  isVerified = false,
  review,
  date,
  rating = 5,
  className,
}: ReviewCardProps & { className?: string }) {
  return (
    <Card className={`w-full shadow-xl border-0 mt-4 ${className}`}>
      <CardContent className="p-2 md:p-4 space-y-1">
        <div className="flex gap-1 justify-center relative -top-6 bg-white rounded-full shadow-md py-1 md:py-2 w-[120px] md:w-[150px] mx-auto">
          {[...Array(rating)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 stroke-yellow-400"
            />
          ))}
        </div>
        <div className="flex items-center gap-1 justify-center text-xs md:text-sm">
          <span className="font-semibold">{name}</span>
          {isVerified && (
            <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 fill-emerald-500 stroke-white" />
          )}
        </div>
        <p className="text-[10px] md:text-xs text-muted-foreground">{review}</p>
        <time className="block text-[10px] md:text-xs text-muted-foreground text-right">
          {date}
        </time>
      </CardContent>
    </Card>
  );
}
