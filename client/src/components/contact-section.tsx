import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      setIsSubmitting(true);
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
    onSettled: () => {
      setIsSubmitting(false);
    }
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's discuss your next project. I'm always open to new opportunities and interesting challenges.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-accent mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="bg-primary p-3 rounded-full group-hover:scale-110 transform transition-transform">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <a href="mailto:msnsnavin@gmail.com" className="text-gray-300 hover:text-accent transition-colors">
                      msnsnavin@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="bg-success p-3 rounded-full group-hover:scale-110 transform transition-transform">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <a href="tel:+918344961552" className="text-gray-300 hover:text-accent transition-colors">
                      +91-8344961552
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="bg-accent p-3 rounded-full group-hover:scale-110 transform transition-transform">
                    <i className="fab fa-linkedin text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/navin-kumar-2608/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-accent transition-colors"
                    >
                      linkedin.com/in/navin-kumar-2608/
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="bg-secondary p-3 rounded-full group-hover:scale-110 transform transition-transform">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-300">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Professional Status */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Current Status</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Position</span>
                  <span className="text-white font-medium">Front-end Developer</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Company</span>
                  <span className="text-white font-medium">i-exceed Technology</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Experience</span>
                  <span className="text-white font-medium">4.5+ Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Availability</span>
                  <span className="text-success font-medium">
                    <i className="fas fa-circle text-xs mr-1"></i>
                    Open to opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="block text-sm font-medium text-gray-300 mb-2">First Name</Label>
                  <Input 
                    {...form.register("firstName")}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300" 
                    placeholder="John"
                  />
                  {form.formState.errors.firstName && (
                    <p className="text-danger text-sm mt-1">{form.formState.errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <Label className="block text-sm font-medium text-gray-300 mb-2">Last Name</Label>
                  <Input 
                    {...form.register("lastName")}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300" 
                    placeholder="Doe"
                  />
                  {form.formState.errors.lastName && (
                    <p className="text-danger text-sm mt-1">{form.formState.errors.lastName.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <Label className="block text-sm font-medium text-gray-300 mb-2">Email</Label>
                <Input 
                  type="email"
                  {...form.register("email")}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300" 
                  placeholder="john@example.com"
                />
                {form.formState.errors.email && (
                  <p className="text-danger text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
              
              <div>
                <Label className="block text-sm font-medium text-gray-300 mb-2">Subject</Label>
                <Input 
                  {...form.register("subject")}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300" 
                  placeholder="Project Discussion"
                />
                {form.formState.errors.subject && (
                  <p className="text-danger text-sm mt-1">{form.formState.errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <Label className="block text-sm font-medium text-gray-300 mb-2">Message</Label>
                <Textarea 
                  rows={5}
                  {...form.register("message")}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none" 
                  placeholder="Tell me about your project..."
                />
                {form.formState.errors.message && (
                  <p className="text-danger text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-lg text-white font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                ) : (
                  <i className="fas fa-paper-plane mr-2"></i>
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
