import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/site";
import Button from "./Button";

export default function CTASection() {
  const { cta } = homeContent;
  return (
    <section id="kontakti" className="py-36 md:py-56 bg-primary text-white text-center relative overflow-hidden">
      {/* Decorative CSS-only Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
         <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-white/5 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-black/10 rounded-full blur-[100px]" />
         <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
         
         {/* Top fade transition from white section */}
         <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/50 to-transparent z-10 opacity-20" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <h2 className="text-4xl md:text-7xl font-bold mb-10 leading-[1.1] tracking-tight">{cta.title}</h2>
        <p className="text-xl md:text-3xl opacity-80 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">{cta.description}</p>
        <Button 
          variant="secondary" 
          size="xl" 
          href={`mailto:${siteConfig.links.email}`} 
          className="bg-white text-primary hover:bg-white/90 shadow-2xl py-8 px-16 text-2xl font-black"
        >
          {cta.button}
        </Button>
      </div>
    </section>
  );
}