import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: "blue" | "purple" | "none";
}

const GlassCard = ({ children, className, glow = "blue", ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6",
        glow === "blue" && "neon-glow",
        glow === "purple" && "neon-glow-purple",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
