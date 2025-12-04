import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  advantages: string[];
  delay?: number;
}

const ProductCard = ({ title, description, image, advantages, delay = 0 }: ProductCardProps) => {
  return (
    <div
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-border/50 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
        <ul className="space-y-2 mb-6">
          {advantages.map((advantage, index) => (
            <li key={index} className="flex items-center text-sm text-foreground">
              <Check className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
              {advantage}
            </li>
          ))}
        </ul>
        <Button variant="accent-outline" className="w-full group/btn" asChild>
          <Link to="/contact">
            Request Quote
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
