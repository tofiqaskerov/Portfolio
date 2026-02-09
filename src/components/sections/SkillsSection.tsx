import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import SkillSphereScene from "@/components/SkillSphereScene";
import { techStack } from "@/data/portfolio";
import { motion } from "framer-motion";

const categoryLabels: Record<string, { label: string; emoji: string; color: string }> = {
  backend: { label: "Backend", emoji: "🔧", color: "text-primary" },
  frontend: { label: "Frontend", emoji: "🎨", color: "text-secondary" },
  database: { label: "Database", emoji: "🗄️", color: "text-neon-cyan" },
  tools: { label: "Tools", emoji: "🛠️", color: "text-neon-pink" },
};

const SkillsSection = () => {
  const categories = ["backend", "frontend", "database", "tools"] as const;

  return (
    <section id="skills" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            My <span className="text-secondary neon-text-purple">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            A constellation of technologies I work with
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <SkillSphereScene />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((cat, catIndex) => {
            const info = categoryLabels[cat];
            const skills = techStack.filter((t) => t.category === cat);
            return (
              <AnimatedSection key={cat} delay={0.1 * catIndex}>
                <GlassCard glow={cat === "backend" ? "blue" : cat === "frontend" ? "purple" : "none"} className="h-full">
                  <h3 className={`text-lg font-semibold mb-4 ${info.color}`}>
                    {info.emoji} {info.label}
                  </h3>
                  <div className="space-y-3">
                    {skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-foreground">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.proficiency}%</span>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className={`h-full rounded-full ${
                              cat === "backend"
                                ? "bg-primary"
                                : cat === "frontend"
                                ? "bg-secondary"
                                : cat === "database"
                                ? "bg-neon-cyan"
                                : "bg-neon-pink"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
