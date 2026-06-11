import Button from "../Button";

export default function IndustryFinalCTA() {
  return (
    <section className="py-32 md:py-48 bg-primary text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_0%,_transparent_70%)]" />
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-white/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
          Готови ли сте за вашия нов фирмен сайт?
        </h2>
        <p className="text-lg md:text-2xl opacity-80 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          Изпратете запитване и ще обсъдим структурата, визията и съдържанието според спецификите на вашия бизнес.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <Button 
            variant="secondary" 
            size="xl" 
            href="/kontakti" 
            className="bg-white text-primary hover:bg-white shadow-2xl py-8 px-16 text-xl font-black"
          >
            Искам сайт
          </Button>
          <span className="text-sm font-bold text-white/50 uppercase tracking-widest">
            Запитването не ви обвързва
          </span>
        </div>
      </div>
    </section>
  );
}