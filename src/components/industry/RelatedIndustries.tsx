import Link from "next/link";
import { industriesBySlug } from "@/content/industries";
import SectionHeader from "../SectionHeader";
import * as Icons from "lucide-react";

export default function RelatedIndustries({ slugs }: { slugs: string[] }) {
  const related = slugs.map(slug => industriesBySlug[slug]).filter(Boolean);

  if (related.length === 0) return null;

  return (
    <section className="py-24 md:py-36 bg-[#FAF8F4]">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader title="Други браншове" subtitle="Разгледайте още примерни визии за различни типове бизнес." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((item) => {
            const Icon = (Icons as any)[item.icon] || Icons.Check;
            return (
              <Link key={item.slug} href={item.href} className="group bg-white p-8 rounded-[2rem] border border-border/40 hover:border-primary/40 transition-all hover:shadow-xl">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-secondary/60 text-sm font-medium line-clamp-2">{item.shortDescription}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}