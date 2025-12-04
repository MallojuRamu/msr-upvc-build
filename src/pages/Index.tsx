import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Cloud, Truck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-factory.jpg";
import productWindow from "@/assets/product-window.jpg";
import productDoor from "@/assets/product-door.jpg";
import productSlidingWindow from "@/assets/product-sliding-window.jpg";
import productSlidingDoor from "@/assets/product-sliding-door.jpg";

const features = [
  {
    icon: Shield,
    title: "High-Quality UPVC Materials",
    description: "We use only premium-grade UPVC profiles that are UV-stabilized, lead-free, and built to last for decades.",
  },
  {
    icon: Users,
    title: "Skilled Fabrication Team",
    description: "Our expert craftsmen bring years of experience in precision manufacturing and flawless finishes.",
  },
  {
    icon: Cloud,
    title: "Weather & Sound Resistance",
    description: "Superior insulation properties that keep your home comfortable and quiet in any weather condition.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery & Installation",
    description: "We guarantee timely delivery and professional installation by our trained technicians.",
  },
];

const products = [
  {
    title: "UPVC Windows",
    description: "Premium quality UPVC windows designed for durability, energy efficiency, and aesthetics.",
    image: productWindow,
    advantages: ["Energy efficient", "Low maintenance", "Sound insulation"],
  },
  {
    title: "UPVC Doors",
    description: "Secure and elegant UPVC doors that enhance the beauty and safety of your property.",
    image: productDoor,
    advantages: ["High security", "Weather resistant", "Custom designs"],
  },
  {
    title: "Sliding Windows",
    description: "Space-saving sliding windows that offer smooth operation and maximum ventilation.",
    image: productSlidingWindow,
    advantages: ["Space efficient", "Easy operation", "Modern look"],
  },
  {
    title: "Sliding Doors",
    description: "Elegant sliding doors that seamlessly connect indoor and outdoor spaces.",
    image: productSlidingDoor,
    advantages: ["Panoramic views", "Easy access", "Secure locking"],
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Hyderabad",
    rating: 5,
    review: "Excellent quality windows! The team was professional and completed the installation ahead of schedule. Highly recommended for anyone looking for UPVC solutions.",
  },
  {
    name: "Priya Sharma",
    location: "Secunderabad",
    rating: 5,
    review: "We got our entire home fitted with MSR UPVC windows and doors. The noise reduction is remarkable and the quality is outstanding.",
  },
  {
    name: "Mohammed Ali",
    location: "Gachibowli",
    rating: 5,
    review: "Great service and quality products. The sliding doors transformed our living space. Very happy with the overall experience.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="MSR UPVC Factory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
              Premium UPVC Manufacturer in Hyderabad
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up animation-delay-100">
              MSR UPVC Windows and Doors
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
              Precision-crafted UPVC windows & doors for homes and businesses. 
              Quality you can trust, delivered on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/products">View Our Products</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-12 animate-fade-in-up animation-delay-400">
              {["10+ Years Experience", "500+ Projects", "100% Quality"].map((stat) => (
                <div key={stat} className="flex items-center text-primary-foreground/80">
                  <CheckCircle className="w-5 h-5 text-accent mr-2" />
                  <span className="text-sm font-medium">{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading
            badge="Why Choose Us"
            title="Built for Excellence"
            subtitle="We combine quality materials with skilled craftsmanship to deliver windows and doors that exceed expectations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Our Products"
            title="Premium UPVC Solutions"
            subtitle="Explore our range of high-quality UPVC windows and doors designed for modern homes and businesses."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.title}
                title={product.title}
                description={product.description}
                image={product.image}
                advantages={product.advantages}
                delay={index * 100}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <SectionHeading
            badge="Testimonials"
            title="What Our Customers Say"
            subtitle="Don't just take our word for it. Here's what our satisfied customers have to say."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
                review={testimonial.review}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation and quote. 
            Let's bring your vision to life with premium UPVC solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/contact">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="border-accent-foreground/50 text-accent-foreground hover:bg-accent-foreground/10" asChild>
              <a href="tel:6303246350">Call: 6303246350</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
