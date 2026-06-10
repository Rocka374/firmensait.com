import { homeContent } from "@/content/home";
import Button from "./Button";

export default function CTASection() {
  const { cta } = homeContent;
  return (
    <section id="kontakti" className="py-32 bg-primary text-white text-center relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">{cta.title}</h2>
        <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">{cta.description}</p>
        <Button variant="secondary" size="xl" href="#kontakti" className="bg-white hover:bg-white/90">
          {cta.button}
        </Button>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
         <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      </div>
    </section>
  );
}