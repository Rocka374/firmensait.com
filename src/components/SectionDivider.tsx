import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  variant?: 'gold' | 'border';
}

export default function SectionDivider({ className, variant = 'border' }: SectionDividerProps) {
  const colors = {
    border: "via-border/30",
    gold: "via-primary/15"
  };

  return (
    <div className={cn("container mx-auto px-4 flex justify-center", className)}>
      <div className={cn(
        "h-px w-full max-w-5xl bg-gradient-to-r from-transparent to-transparent",
        colors[variant]
      )} />
    </div>
  );
}