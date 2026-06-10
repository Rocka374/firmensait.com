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
      "mb-12 md:mb-16",
      align === 'center' ? "text-center mx-auto max-w-3xl" : "text-left",
      className
    )}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-secondary leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}