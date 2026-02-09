import React from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "blue" | "purple";
  className?: string;
}

const NeonButton = ({ children, variant = "blue", className, ...props }: NeonButtonProps) => {
  const baseStyles =
    "relative px-8 py-3 font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105";
  const variantStyles =
    variant === "blue"
      ? "bg-primary/10 text-primary border border-primary/50 hover:bg-primary/20 hover:shadow-[0_0_20px_hsl(var(--neon-blue)/0.4)]"
      : "bg-secondary/10 text-secondary border border-secondary/50 hover:bg-secondary/20 hover:shadow-[0_0_20px_hsl(var(--neon-purple)/0.4)]";

  return (
    <button className={cn(baseStyles, variantStyles, className)} {...props}>
      {children}
    </button>
  );
};

export default NeonButton;
