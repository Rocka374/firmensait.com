import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  size?: "md" | "lg" | "xl";
}

export default function Button({ 
  variant = "primary", 
  href, 
  children, 
  className, 
  onClick,
  size = "md" 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-primary/20",
    secondary: "bg-primary-soft text-primary hover:bg-primary/20 shadow-primary-soft/20",
    outline: "border-2 border-primary text-foreground hover:bg-primary-soft shadow-none",
  };

  const sizes = {
    md: "px-6 py-3 text-sm md:text-base",
    lg: "px-10 py-4 text-base md:text-lg",
    xl: "px-12 py-6 text-xl",
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    const isExternal = href.startsWith('mailto:') || href.startsWith('tel:');
    const isAnchor = href.startsWith('#');

    if (isExternal || isAnchor) {
      return (
        <a href={href} className={combinedClasses} onClick={onClick}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}