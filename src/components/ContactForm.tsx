import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    projectLocation: "",
    quantity: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database
      const { error } = await supabase.from("contact_submissions").insert({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service_type: formData.serviceType,
        location: formData.projectLocation,
        quantity: formData.quantity || null,
      });

      if (error) throw error;

      // Send email notifications (don't block on this)
      supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service_type: formData.serviceType,
          location: formData.projectLocation,
          quantity: formData.quantity || null,
        },
      }).catch((emailError) => {
        console.error("Email notification failed:", emailError);
      });

      toast({
        title: "Quote Request Submitted!",
        description: "We'll get back to you within 24 hours. A confirmation email has been sent.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceType: "",
        projectLocation: "",
        quantity: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Full Name *</label>
          <Input
            required
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="h-12"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Phone Number *</label>
          <Input
            required
            type="tel"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="h-12"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Email Address *</label>
          <Input
            required
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="h-12"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Service Type *</label>
          <Select
            required
            value={formData.serviceType}
            onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
          >
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="windows">UPVC Windows</SelectItem>
              <SelectItem value="doors">UPVC Doors</SelectItem>
              <SelectItem value="sliding-windows">Sliding Windows</SelectItem>
              <SelectItem value="sliding-doors">Sliding Doors</SelectItem>
              <SelectItem value="both">Both Windows & Doors</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Project Location (City) *</label>
        <Input
          required
          placeholder="Enter city name"
          value={formData.projectLocation}
          onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
          className="h-12"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Approximate Quantity & Requirements</label>
        <Textarea
          placeholder="E.g., 5 windows (4ft x 3ft), 2 doors (7ft x 3ft), any special requirements..."
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          className="min-h-[120px] resize-none"
        />
      </div>

      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </span>
        ) : (
          <span className="flex items-center">
            <Send className="w-5 h-5 mr-2" />
            Submit Quote Request
          </span>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
