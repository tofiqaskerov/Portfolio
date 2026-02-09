import { useState, useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { socialLinks } from "@/data/portfolio";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const iconMap: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

// Form Validation Schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [focused, setFocused] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const watchAllFields = watch();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // EmailJS Configuration
    const SERVICE_ID = "service_0e2sdap";
    const TEMPLATE_ID = "template_hehac3t";
    const PUBLIC_KEY = "hedThoqNbZ49ApeGZ";

    try {
      // Sending all necessary parameters for the template
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.name,      // For template body
          from_email: data.email,    // For template body
          message: data.message,     // For template body
          name: data.name,           // For 'From Name' field
          email: data.email,         // For 'Reply To' field
          title: "Portfolio Contact" // For Subject
        },
        PUBLIC_KEY
      );

      setSubmitted(true);
      reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Email error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-primary neon-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Let's build something amazing together
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.2}>
            <GlassCard className="p-8 neon-glow">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <CheckCircle className="text-primary w-16 h-16 mb-4" />
                    <h3 className="text-xl font-semibold text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground text-sm mt-2">I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form" 
                    ref={form}
                    onSubmit={handleSubmit(onSubmit)} 
                    className="space-y-6"
                  >
                    <div className="relative">
                      <label
                        className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                          focused === "name" || watchAllFields.name
                            ? "-top-2 text-xs text-primary bg-card px-1"
                            : "top-2.5 text-sm text-muted-foreground"
                        }`}
                      >
                        Name
                      </label>
                      <Input
                        {...register("name")}
                        onFocus={() => setFocused("name")}
                        onBlur={(e) => {
                          setFocused(null);
                          register("name").onBlur(e);
                        }}
                        className={`bg-muted/30 border-border/50 focus:border-primary ${errors.name ? "border-red-500" : ""}`}
                      />
                      {errors.name && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name.message}</span>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <label
                        className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                          focused === "email" || watchAllFields.email
                            ? "-top-2 text-xs text-primary bg-card px-1"
                            : "top-2.5 text-sm text-muted-foreground"
                        }`}
                      >
                        Email
                      </label>
                      <Input
                        type="email"
                        {...register("email")}
                        onFocus={() => setFocused("email")}
                        onBlur={(e) => {
                          setFocused(null);
                          register("email").onBlur(e);
                        }}
                        className={`bg-muted/30 border-border/50 focus:border-primary ${errors.email ? "border-red-500" : ""}`}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email.message}</span>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <label
                        className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                          focused === "message" || watchAllFields.message
                            ? "-top-2 text-xs text-primary bg-card px-1"
                            : "top-2.5 text-sm text-muted-foreground"
                        }`}
                      >
                        Message
                      </label>
                      <Textarea
                        {...register("message")}
                        onFocus={() => setFocused("message")}
                        onBlur={(e) => {
                          setFocused(null);
                          register("message").onBlur(e);
                        }}
                        className={`bg-muted/30 border-border/50 focus:border-primary min-h-[120px] resize-none ${errors.message ? "border-red-500" : ""}`}
                      />
                      {errors.message && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-xs">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message.message}</span>
                        </div>
                      )}
                    </div>

                    <NeonButton 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </NeonButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Connect with me</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon] || Mail;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                  >
                    <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.name}
                      </h4>
                      <p className="text-sm text-muted-foreground break-all">
                        {link.name === "Email" ? "tofiqaskerov71@gmail.com" : link.url}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
