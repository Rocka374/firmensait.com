import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({ title, subtitle, eyebrow, align = 'center', className }: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-10 md:mb-12",
      align === 'center' ? "text-center mx-auto max-w-4xl" : "text-left",
      className
    )}>
      {eyebrow && (
        <span className="inline-block text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-primary mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-secondary/70 leading-relaxed font-medium max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}