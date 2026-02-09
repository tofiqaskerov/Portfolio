import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import NeonButton from "@/components/NeonButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { socialLinks } from "@/data/portfolio";

const iconMap: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
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
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                      <label
                        className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                          focused === "name" || formState.name
                            ? "-top-2 text-xs text-primary bg-card px-1"
                            : "top-2.5 text-sm text-muted-foreground"
                        }`}
                      >
                        Name
                      </label>
                      <Input
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        className="bg-muted/30 border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                    <div className="relative">
                      <label
                        className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                          focused === "email" || formState.email
                            ? "-top-2 text-xs text-primary bg-card px-1"
                            : "top-2.5 text-sm text-muted-foreground"
                        }`}
                      >
                        Email
                      </label>
                      <Input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        className="bg-muted/30 border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                    <div className="relative">
                      <label
                        className={`absolute left-3 transition-all duration-300 pointer-events-none z-10 ${
                          focused === "message" || formState.message
                            ? "-top-2 text-xs text-primary bg-card px-1"
                            : "top-2.5 text-sm text-muted-foreground"
                        }`}
                      >
                        Message
                      </label>
                      <Textarea
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        className="bg-muted/30 border-border/50 focus:border-primary min-h-[120px]"
                        required
                      />
                    </div>
                    <NeonButton type="submit" className="w-full">
                      Send Message
                    </NeonButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex flex-col justify-center h-full space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Let's Connect</h3>
                <p className="text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-4 group hover:shadow-[0_0_20px_hsl(var(--neon-blue)/0.3)] transition-all duration-300"
                    >
                      {Icon && <Icon size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
