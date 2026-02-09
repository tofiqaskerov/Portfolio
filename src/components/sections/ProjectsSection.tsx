import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import { projects } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";
import NeonButton from "@/components/NeonButton";
import { motion } from "framer-motion";
import type { Project } from "@/data/portfolio";

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x: y, y: x });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <GlassCard
        className="cursor-pointer h-full hover:shadow-[0_0_25px_hsl(var(--neon-blue)/0.3)] transition-shadow duration-300"
        onClick={onClick}
      >
        <div className="mb-3">
          <Badge variant="outline" className="text-primary border-primary/30 text-xs">
            {project.architecture}
          </Badge>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs bg-muted/50">
              {tech}
            </Badge>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-primary neon-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            A showcase of what I've built
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} onClick={() => setSelected(project)} />
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="glass-card border-border/30 max-w-2xl">
          <DialogHeader>
            <div className="mb-2">
              <Badge variant="outline" className="text-primary border-primary/30">
                {selected?.architecture}
              </Badge>
            </div>
            <DialogTitle className="text-2xl text-foreground">{selected?.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground pt-2">
              {selected?.longDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-wrap gap-2 my-4">
            {selected?.techStack.map((tech) => (
              <Badge key={tech} className="bg-primary/10 text-primary border-primary/20">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3">
            <a href={selected?.githubUrl} target="_blank" rel="noopener noreferrer">
              <NeonButton className="flex items-center gap-2 text-sm px-5 py-2">
                <Github size={16} /> GitHub
              </NeonButton>
            </a>
            {selected?.demoUrl && (
              <a href={selected.demoUrl} target="_blank" rel="noopener noreferrer">
                <NeonButton variant="purple" className="flex items-center gap-2 text-sm px-5 py-2">
                  <ExternalLink size={16} /> Live Demo
                </NeonButton>
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
