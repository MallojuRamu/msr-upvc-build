import { Link } from "react-router-dom";
import { ArrowRight, Check, X, ThermometerSun, Volume2, Shield, Paintbrush, Leaf, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const benefits = [
  {
    icon: ThermometerSun,
    title: "Superior Thermal Insulation",
    description: "UPVC windows and doors provide excellent thermal insulation, keeping your home cool in summer and warm in winter, reducing energy costs significantly.",
  },
  {
    icon: Volume2,
    title: "Exceptional Sound Insulation",
    description: "Block out unwanted noise from traffic, neighbors, and the environment. UPVC provides up to 40dB noise reduction for a peaceful living environment.",
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Multi-point locking systems and robust UPVC profiles provide superior security against break-ins, keeping your family and belongings safe.",
  },
  {
    icon: Paintbrush,
    title: "Zero Maintenance",
    description: "Unlike wood or aluminum, UPVC doesn't require painting, polishing, or regular maintenance. Just wipe clean occasionally to maintain its look.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Choice",
    description: "UPVC is 100% recyclable and has a lower carbon footprint than aluminum. By improving insulation, it also reduces your home's energy consumption.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "While offering premium quality, UPVC windows and doors are more affordable than wood or aluminum alternatives, with lower lifetime maintenance costs.",
  },
];

const comparison = [
  {
    feature: "Thermal Insulation",
    upvc: true,
    wood: "Moderate",
    aluminum: false,
  },
  {
    feature: "Sound Insulation",
    upvc: true,
    wood: "Moderate",
    aluminum: false,
  },
  {
    feature: "Weather Resistance",
    upvc: true,
    wood: false,
    aluminum: true,
  },
  {
    feature: "Termite Proof",
    upvc: true,
    wood: false,
    aluminum: true,
  },
  {
    feature: "Maintenance Required",
    upvc: "Low",
    wood: "High",
    aluminum: "Medium",
  },
  {
    feature: "Corrosion Resistant",
    upvc: true,
    wood: "N/A",
    aluminum: false,
  },
  {
    feature: "Fire Retardant",
    upvc: true,
    wood: false,
    aluminum: true,
  },
  {
    feature: "Eco-Friendly",
    upvc: true,
    wood: "Moderate",
    aluminum: "Moderate",
  },
  {
    feature: "Lifespan",
    upvc: "25+ years",
    wood: "15-20 years",
    aluminum: "20-25 years",
  },
  {
    feature: "Cost",
    upvc: "$$",
    wood: "$$$",
    aluminum: "$$",
  },
];

const renderCell = (value: boolean | string) => {
  if (value === true) {
    return <Check className="w-5 h-5 text-accent mx-auto" />;
  }
  if (value === false) {
    return <X className="w-5 h-5 text-destructive mx-auto" />;
  }
  return <span className="text-foreground text-sm">{value}</span>;
};

const Benefits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
              Why UPVC?
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Benefits of Choosing UPVC
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-in-up animation-delay-200">
              Discover why UPVC windows and doors are the smart choice for modern homes and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Advantages"
            title="Why Choose UPVC Over Traditional Options?"
            subtitle="UPVC offers numerous advantages that make it the preferred choice for modern construction."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-border/50 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <SectionHeading
            badge="Comparison"
            title="UPVC vs Wood vs Aluminum"
            subtitle="See how UPVC compares to traditional window and door materials."
          />
          <div className="bg-card rounded-2xl shadow-card overflow-hidden animate-fade-in-up">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary">
                    <th className="text-left px-6 py-4 text-primary-foreground font-semibold">Feature</th>
                    <th className="text-center px-6 py-4 text-primary-foreground font-semibold">
                      <span className="inline-block bg-accent px-3 py-1 rounded-full text-accent-foreground text-sm">
                        UPVC
                      </span>
                    </th>
                    <th className="text-center px-6 py-4 text-primary-foreground font-semibold">Wood</th>
                    <th className="text-center px-6 py-4 text-primary-foreground font-semibold">Aluminum</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-border ${index % 2 === 0 ? "bg-card" : "bg-secondary/50"}`}
                    >
                      <td className="px-6 py-4 text-foreground font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center">{renderCell(row.upvc)}</td>
                      <td className="px-6 py-4 text-center">{renderCell(row.wood)}</td>
                      <td className="px-6 py-4 text-center">{renderCell(row.aluminum)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Ready to Upgrade to UPVC?
          </h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Make the smart choice for your home. Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/contact">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="border-accent-foreground/50 text-accent-foreground hover:bg-accent-foreground/10" asChild>
              <Link to="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Benefits;
