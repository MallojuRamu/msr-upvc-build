import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Factory",
    details: ["Gurramguda, Gurram Guda", "Hyderabad, Telangana 500112"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["6303246350"],
    link: "tel:6303246350",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["sharathcherry9154@gmail.com"],
    link: "mailto:sharathcherry9154@gmail.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon–Sat: 9:00 AM – 7:00 PM", "Sunday: Closed"],
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-in-up animation-delay-200">
              Have questions or ready to start your project? We're here to help. 
              Get in touch with our team for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Get In Touch</h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of these channels or fill out the form.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="flex items-start space-x-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      info.link ? (
                        <a
                          key={i}
                          href={info.link}
                          className="block text-muted-foreground hover:text-accent transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        <p key={i} className="text-muted-foreground">{detail}</p>
                      )
                    ))}
                  </div>
                </div>
              ))}

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-card mt-8 animate-fade-in-up animation-delay-400">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.8433680714584!2d78.5!3d17.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE4JzAwLjAiTiA3OMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MSR UPVC Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in-up animation-delay-200">
              <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50">
                <SectionHeading
                  badge="Free Quote"
                  title="Request a Quote"
                  subtitle="Fill out the form below and we'll get back to you within 24 hours with a customized quote."
                  center={false}
                />
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
