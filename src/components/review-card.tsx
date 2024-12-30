import { Star, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ReviewCardProps {
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
}: ReviewCardProps) {
  return (
    <Card className="w-full max-w-xs shadow-sm">
      <CardContent className="p-4 space-y-2">
        <div className="flex gap-1 justify-center relative -top-8 bg-white rounded-full">
          {[...Array(rating)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-yellow-400 stroke-yellow-400"
            />
          ))}
        </div>

        <div className="flex items-center gap-1">
          <span className="font-medium">{name}</span>
          {isVerified && <Check className="w-4 h-4 text-emerald-500" />}
        </div>

        <p className="text-sm text-muted-foreground">{review}</p>

        <time className="block text-sm text-muted-foreground">{date}</time>
      </CardContent>
    </Card>
  );
}
