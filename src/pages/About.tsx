import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award, CheckCircle, Ruler, Factory, Wrench, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const timelineSteps = [
  {
    icon: Ruler,
    title: "Design",
    description: "We work with you to understand your requirements and create custom designs that fit your space perfectly.",
  },
  {
    icon: Ruler,
    title: "Measurement",
    description: "Our experts visit your site for precise measurements to ensure accurate fabrication.",
  },
  {
    icon: Factory,
    title: "Production",
    description: "State-of-the-art manufacturing using premium UPVC profiles and quality components.",
  },
  {
    icon: Wrench,
    title: "Installation",
    description: "Professional installation by trained technicians ensuring perfect fit and finish.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description: "Ongoing support and maintenance to keep your windows and doors in perfect condition.",
  },
];

const qualityPoints = [
  "ISO-certified manufacturing processes",
  "Premium grade UPVC profiles",
  "Multi-point locking systems",
  "UV-stabilized materials",
  "Rigorous quality testing",
  "10-year product warranty",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Crafting Excellence in Every Frame
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-in-up animation-delay-200">
              MSR UPVC Windows and Doors is a leading manufacturer of premium UPVC solutions in Hyderabad, 
              committed to delivering quality, durability, and elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <span className="text-accent font-semibold">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                A Legacy of Quality & Trust
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to revolutionize the window and door industry in Telangana, 
                  MSR UPVC Windows and Doors has grown to become one of the most trusted names in 
                  premium UPVC manufacturing.
                </p>
                <p>
                  Our state-of-the-art manufacturing facility in Gurramguda, Hyderabad, is equipped 
                  with the latest technology and operated by skilled craftsmen who take pride in 
                  delivering excellence in every product.
                </p>
                <p>
                  Over the years, we have successfully completed hundreds of residential and 
                  commercial projects, earning the trust of homeowners, architects, and builders 
                  across the region.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-fade-in-up animation-delay-200">
              <div className="bg-secondary rounded-2xl p-8 text-center">
                <span className="text-4xl font-bold text-accent">10+</span>
                <p className="text-muted-foreground mt-2">Years Experience</p>
              </div>
              <div className="bg-secondary rounded-2xl p-8 text-center">
                <span className="text-4xl font-bold text-accent">500+</span>
                <p className="text-muted-foreground mt-2">Projects Completed</p>
              </div>
              <div className="bg-secondary rounded-2xl p-8 text-center">
                <span className="text-4xl font-bold text-accent">100%</span>
                <p className="text-muted-foreground mt-2">Client Satisfaction</p>
              </div>
              <div className="bg-secondary rounded-2xl p-8 text-center">
                <span className="text-4xl font-bold text-accent">50+</span>
                <p className="text-muted-foreground mt-2">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-10 shadow-card animate-fade-in-up">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide superior quality UPVC windows and doors that enhance the comfort, 
                security, and aesthetic appeal of every space. We strive to exceed customer 
                expectations through innovation, craftsmanship, and exceptional service.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-10 shadow-card animate-fade-in-up animation-delay-100">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and preferred UPVC window and door manufacturer in India, 
                known for our commitment to quality, innovation, and customer satisfaction. 
                We aim to set industry standards in excellence and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Our Process"
            title="From Design to Delivery"
            subtitle="Our streamlined manufacturing process ensures quality at every step."
          />
          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-border" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {timelineSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative z-10 w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <step.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                badge="Quality Assurance"
                title="Committed to Excellence"
                subtitle="Every product that leaves our facility meets the highest standards of quality and durability."
                center={false}
                light
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {qualityPoints.map((point, index) => (
                  <div
                    key={point}
                    className="flex items-center text-primary-foreground animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <Button variant="accent" size="lg" className="mt-8" asChild>
                <Link to="/contact">
                  Get Quality Products
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center animate-scale-in">
              <div className="w-64 h-64 bg-accent/20 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-accent/30 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center">
                    <Award className="w-16 h-16 text-accent-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
