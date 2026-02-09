import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { techStack } from "@/data/portfolio";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-primary neon-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Passionate about building robust, scalable systems
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.2}>
            <GlassCard className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Backend-Focused Full-Stack Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a middle-level full-stack developer with a strong passion for backend engineering and system design. My primary expertise lies in Java and Spring Boot, where I build scalable microservices and robust RESTful APIs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                While my heart is in the backend, I'm equally comfortable crafting responsive and interactive user interfaces with React and modern CSS frameworks. I believe in clean code, test-driven development, and continuous learning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, I'm exploring distributed systems, reading about software architecture patterns, and contributing to open-source projects.
              </p>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <h3 className="text-lg font-semibold mb-6 text-center text-foreground">Tech Stack</h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {techStack.map((tech, i) => (
                <Tooltip key={tech.name}>
                  <TooltipTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.15 }}
                      className="glass-card p-3 flex flex-col items-center gap-2 cursor-pointer
                        hover:shadow-[0_0_15px_hsl(var(--neon-blue)/0.3)] transition-shadow duration-300"
                    >
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-xs text-muted-foreground text-center">{tech.name}</span>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.name} — {tech.proficiency}% proficiency</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
