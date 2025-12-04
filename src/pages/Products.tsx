import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import productWindow from "@/assets/product-window.jpg";
import productDoor from "@/assets/product-door.jpg";
import productSlidingWindow from "@/assets/product-sliding-window.jpg";
import productSlidingDoor from "@/assets/product-sliding-door.jpg";

const products = [
  {
    id: "upvc-windows",
    title: "UPVC Windows",
    description: "Our premium UPVC windows are designed to provide exceptional durability, energy efficiency, and aesthetic appeal. Made from high-quality profiles, these windows offer superior insulation against heat, cold, and noise, making your home more comfortable year-round.",
    image: productWindow,
    advantages: [
      "Energy efficient with excellent thermal insulation",
      "Low maintenance - no painting or polishing required",
      "Superior sound insulation for peaceful interiors",
      "Weather resistant and UV stabilized",
      "Multi-point locking system for enhanced security",
      "Available in various designs and colors",
    ],
  },
  {
    id: "upvc-doors",
    title: "UPVC Doors",
    description: "Enhance the security and elegance of your property with our premium UPVC doors. Engineered for durability and designed for aesthetics, our doors provide excellent protection while adding a modern touch to your home or office entrance.",
    image: productDoor,
    advantages: [
      "High security with multi-point locking mechanism",
      "Weather resistant - no warping or rotting",
      "Excellent thermal and acoustic insulation",
      "Customizable designs to match your décor",
      "Fire retardant materials for added safety",
      "Long-lasting finish that doesn't fade",
    ],
  },
  {
    id: "sliding-windows",
    title: "Sliding Windows",
    description: "Our sliding windows are perfect for spaces where traditional windows aren't practical. With smooth gliding operation and space-saving design, they provide excellent ventilation while maximizing your view and natural light intake.",
    image: productSlidingWindow,
    advantages: [
      "Space-saving horizontal sliding operation",
      "Smooth and effortless gliding mechanism",
      "Maximum ventilation and natural light",
      "Modern and sleek appearance",
      "Easy to clean and maintain",
      "Child-safe locking options available",
    ],
  },
  {
    id: "sliding-doors",
    title: "Sliding Doors",
    description: "Create seamless transitions between indoor and outdoor spaces with our elegant sliding doors. Perfect for balconies, patios, and large openings, they offer panoramic views while ensuring security and energy efficiency.",
    image: productSlidingDoor,
    advantages: [
      "Panoramic views with large glass panels",
      "Effortless operation with smooth rollers",
      "Excellent weather sealing properties",
      "Secure multi-point locking system",
      "Energy efficient double glazing options",
      "Available in various configurations",
    ],
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Premium UPVC Solutions
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-in-up animation-delay-200">
              Discover our range of high-quality UPVC windows and doors designed for modern homes and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Products List */}
      <section className="section-padding">
        <div className="container-custom space-y-24">
          {products.map((product, index) => (
            <div
              key={product.id}
              id={product.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""} animate-fade-in-up`}>
                <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </div>
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""} animate-fade-in-up animation-delay-200`}>
                <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {product.advantages.map((advantage) => (
                    <li key={advantage} className="flex items-start">
                      <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{advantage}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">
                    Request Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <SectionHeading
            badge="Custom Solutions"
            title="Need Something Specific?"
            subtitle="We offer custom fabrication services to meet your unique requirements. Get in touch with our team to discuss your project."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:6303246350">Call: 6303246350</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
