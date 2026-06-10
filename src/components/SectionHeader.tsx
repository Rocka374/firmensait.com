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
      "mb-16 md:mb-24",
      align === 'center' ? "text-center mx-auto max-w-4xl" : "text-left",
      className
    )}>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-[1.05] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl md:text-2xl text-secondary/70 leading-relaxed font-medium max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}