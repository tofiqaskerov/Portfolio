import { useScrollProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const { progress, activeSection } = useScrollProgress();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px]">
        <div
          className="h-full bg-gradient-to-r from-primary via-neon-cyan to-secondary transition-all duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Navigation bar */}
      <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-40 glass-card px-2 py-2 flex gap-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-all duration-300",
              activeSection === item.id
                ? "bg-primary/20 text-primary neon-text"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
