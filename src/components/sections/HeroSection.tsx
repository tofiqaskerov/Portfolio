import HeroScene from "@/components/HeroScene";
import NeonButton from "@/components/NeonButton";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { motion } from "framer-motion";

const HeroSection = () => {
  const typedText = useTypingEffect();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />

      {/* Content overlay */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-primary text-sm mb-4 tracking-widest uppercase"
        >
          {"< Hello World />"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-foreground">I'm Askarov</span>
          <br />
          <span className="text-primary neon-text">Full-Stack Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mb-2"
        >
          Java & Spring Boot Focus
        </motion.p>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="h-8 mb-10 flex items-center justify-center"
        >
          <span className="font-mono text-neon-cyan text-base">
            {typedText}
            <span className="border-r-2 border-primary animate-blink ml-0.5">&nbsp;</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <NeonButton onClick={() => scrollTo("projects")}>
            View Projects
          </NeonButton>
          <NeonButton variant="purple" onClick={() => scrollTo("contact")}>
            Contact Me
          </NeonButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
