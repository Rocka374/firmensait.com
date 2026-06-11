import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/site";
import Button from "./Button";

export default function CTASection() {
  const { cta } = homeContent;
  return (
    <section id="kontakti" className="py-32 md:py-48 bg-primary text-white text-center relative overflow-hidden">
      {/* Decorative CSS-only Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
         <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-white/5 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-black/10 rounded-full blur-[100px]" />
         <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_0%,_transparent_70%)]" />
         
         {/* Top fade transition from white section */}
         <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/50 to-transparent z-10 opacity-10" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">{cta.title}</h2>
        <p className="text-lg md:text-2xl opacity-80 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">{cta.description}</p>
        
        <div className="flex flex-col items-center gap-6">
          <div className="relative inline-block group">
            {/* Enhanced Button Glow Effect */}
            <div className="absolute inset-0 bg-white/40 blur-3xl rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Button 
              variant="secondary" 
              size="xl" 
              href={`mailto:${siteConfig.links.email}`} 
              className="bg-white text-primary hover:bg-white shadow-[0_20px_50px_rgba(255,255,255,0.2)] py-8 px-16 text-xl font-black relative z-10"
            >
              {cta.button}
            </Button>
          </div>
          <span className="text-sm font-bold text-white/50 uppercase tracking-widest">
            Запитването не ви обвързва
          </span>
        </div>
      </div>
    </section>
  );
}