import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({ title, subtitle, align = 'center', className }: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-16 md:mb-20",
      align === 'center' ? "text-center mx-auto max-w-3xl" : "text-left",
      className
    )}>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-secondary/80 leading-relaxed font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}