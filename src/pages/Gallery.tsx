import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import GalleryModal from "@/components/GalleryModal";
import productWindow from "@/assets/product-window.jpg";
import productDoor from "@/assets/product-door.jpg";
import productSlidingWindow from "@/assets/product-sliding-window.jpg";
import productSlidingDoor from "@/assets/product-sliding-door.jpg";
import heroImage from "@/assets/hero-factory.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const galleryImages = [
  { src: gallery1, title: "Building with UPVC Windows" },
  { src: gallery2, title: "UPVC Sliding Door Installation" },
  { src: gallery3, title: "UPVC Windows & Door Project" },
  { src: productWindow, title: "UPVC Kitchen Window" },
  { src: heroImage, title: "Modern House with UPVC" },
  { src: productSlidingWindow, title: "3-Panel Sliding Window" },
  { src: gallery4, title: "UPVC Balcony Door" },
  { src: productDoor, title: "UPVC Door Design" },
  { src: productSlidingDoor, title: "Large Sliding Door" },
  { src: gallery5, title: "Building Exterior Installation" },
];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
              Project Gallery
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-in-up animation-delay-200">
              Explore our portfolio of completed projects showcasing our craftsmanship and quality.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Portfolio"
            title="Our Completed Projects"
            subtitle="Browse through our gallery to see the quality and variety of our UPVC installations."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
                onClick={() => openModal(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-primary-foreground font-semibold">{image.title}</h3>
                    <p className="text-primary-foreground/80 text-sm">Click to view</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      <GalleryModal
        images={galleryImages.map((img) => img.src)}
        currentIndex={currentImageIndex}
        isOpen={modalOpen}
        onClose={closeModal}
        onPrev={goToPrev}
        onNext={goToNext}
      />

      <Footer />
    </div>
  );
};

export default Gallery;
