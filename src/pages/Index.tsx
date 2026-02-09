import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import { useMousePosition } from "@/hooks/useMousePosition";

const Index = () => {
  const { position } = useMousePosition();

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Cursor glow effect */}
      <div
        className="pointer-events-none fixed w-[300px] h-[300px] rounded-full z-50 opacity-20 transition-opacity"
        style={{
          background: "radial-gradient(circle, hsl(199 89% 58% / 0.15), transparent 70%)",
          left: position.x - 150,
          top: position.y - 150,
        }}
      />

      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border/30">
        <p className="text-sm text-muted-foreground font-mono">
          © 2024 — Built with React & Three.js
        </p>
      </footer>
    </div>
  );
};

export default Index;
