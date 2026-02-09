import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { experiences } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-60 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            My <span className="text-secondary neon-text-purple">Experience</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            The journey so far
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20 md:hidden" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            const typeColor = exp.type === "backend" ? "text-primary" : exp.type === "frontend" ? "text-secondary" : "text-neon-cyan";
            const dotColor = exp.type === "backend" ? "bg-primary" : exp.type === "frontend" ? "bg-secondary" : "bg-neon-cyan";

            return (
              <AnimatedSection key={exp.id} delay={i * 0.15}>
                <div className="relative mb-12 md:mb-16">
                  {/* Timeline dot */}
                  <div className={cn(
                    "absolute w-3 h-3 rounded-full top-8 z-10",
                    dotColor,
                    "left-[13px] md:left-1/2 md:-translate-x-1/2"
                  )} />

                  {/* Content */}
                  <div className={cn(
                    "ml-10 md:ml-0 md:w-[calc(50%-2rem)]",
                    isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
                  )}>
                    <GlassCard glow={exp.type === "backend" ? "blue" : "purple"}>
                      <span className={cn("text-xs font-mono uppercase tracking-wider", typeColor)}>
                        {exp.type} · {exp.period}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground mt-2">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                      <ul className="space-y-1.5">
                        {exp.highlights.map((h, j) => (
                          <li key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className={cn("mt-1 w-1 h-1 rounded-full flex-shrink-0", dotColor)} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
