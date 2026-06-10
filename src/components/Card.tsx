import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div className={cn(
      "bg-white rounded-[2rem] border border-border p-8",
      hover && "hover:shadow-xl hover:border-primary/30 transition-all duration-300",
      className
    )}>
      {children}
    </div>
  );
}