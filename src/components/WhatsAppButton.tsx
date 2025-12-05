import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "916303246350";
  const message = "Hello! I'm interested in UPVC windows and doors. Can you help me?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl md:h-16 md:w-16"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" fill="white" />
    </a>
  );
};

export default WhatsAppButton;
