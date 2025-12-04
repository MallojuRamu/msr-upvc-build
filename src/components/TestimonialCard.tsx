import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  review: string;
  delay?: number;
}

const TestimonialCard = ({ name, location, rating, review, delay = 0 }: TestimonialCardProps) => {
  return (
    <div
      className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 relative opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-accent fill-accent" : "text-muted"}`}
          />
        ))}
      </div>
      <p className="text-foreground mb-6 leading-relaxed">{review}</p>
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
          <span className="text-accent font-semibold text-lg">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
