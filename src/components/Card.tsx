import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div className={cn(
      "bg-white rounded-[2.5rem] border border-border/40 p-8 transition-all duration-500",
      hover && "hover:shadow-[0_20px_50px_rgba(184,145,79,0.08)] hover:border-primary/20",
      className
    )}>
      {children}
    </div>
  );
}