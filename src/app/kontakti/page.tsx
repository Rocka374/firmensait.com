import SectionHeader from "@/components/SectionHeader";
import { siteConfig } from "@/content/site";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Button from "@/components/Button";
import EmailLink from "@/components/EmailLink";

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20 md:pt-48 md:pb-40 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader 
          eyebrow="Контакти"
          title="Свържете се с нас за вашия проект"
          subtitle="Готови сме да обсъдим структурата и дизайна на вашия нов многостраничен фирмен сайт."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="bg-[#FAF8F4] p-10 rounded-[2.5rem] border border-border/40 space-y-8">
               <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-secondary/40 mb-1">Имейл</span>
                    <div className="text-xl font-bold">
                      <EmailLink email={siteConfig.links.email} />
                    </div>
                  </div>
               </div>

               <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-secondary/40 mb-1">Телефон</span>
                    <a href={`tel:${siteConfig.links.phone}`} className="text-xl font-bold hover:text-primary transition-colors">
                      {siteConfig.links.phone}
                    </a>
                  </div>
               </div>

               <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-widest text-secondary/40 mb-1">Локация</span>
                    <span className="text-xl font-bold">България, Онлайн обслужване</span>
                  </div>
               </div>
            </div>

            <div className="bg-primary p-10 rounded-[2.5rem] text-white overflow-hidden relative">
               <div className="absolute top-[-20%] right-[-10%] w-[200px] h-[200px] bg-white/10 rounded-full blur-[50px]" />
               <h3 className="text-2xl font-bold mb-4 relative z-10">Искате оферта?</h3>
               <p className="opacity-80 text-lg leading-relaxed relative z-10">
                 Опишете накратко вашия бизнес и услуги, и ние ще ви върнем предложение за структура на страниците.
               </p>
            </div>
          </div>

          {/* Form Placeholder */}
          <div className="lg:col-span-7 bg-white border border-border/40 rounded-[2.5rem] p-10 md:p-16 shadow-[0_30px_70px_rgba(0,0,0,0.03)]">
             <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-secondary/50 px-2">Вашето име</label>
                      <div className="h-14 bg-secondary-light/30 border border-border/40 rounded-2xl" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-secondary/50 px-2">Имейл</label>
                      <div className="h-14 bg-secondary-light/30 border border-border/40 rounded-2xl" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-black uppercase tracking-widest text-secondary/50 px-2">Бранш / Тип бизнес</label>
                   <div className="h-14 bg-secondary-light/30 border border-border/40 rounded-2xl" />
                </div>
                <div className="space-y-2">
                   <label className="text-xs font-black uppercase tracking-widest text-secondary/50 px-2">Съобщение</label>
                   <div className="h-40 bg-secondary-light/30 border border-border/40 rounded-2xl" />
                </div>
                
                <Button variant="primary" size="lg" className="w-full py-5 text-xl font-black">
                   Изпрати съобщение
                   <Send className="ml-3 w-5 h-5" />
                </Button>
                
                <p className="text-center text-[10px] font-bold text-secondary/40 uppercase tracking-widest">
                   Ще се свържем с вас до 24 часа
                </p>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}