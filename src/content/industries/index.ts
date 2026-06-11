import { saitZaPsiholog } from "./sait-za-psiholog";
import { saitZaVeterinarnaKlinika } from "./sait-za-veterinarna-klinika";
import { saitZaSvatbenaAgencia } from "./sait-za-svatbena-agencia";
import { saitZaRestorant } from "./sait-za-restorant";
import { saitZaAdvokat } from "./sait-za-advokat";
import { saitZaNedvizhimiImoti } from "./sait-za-nedvizhimi-imoti";
import { saitZaHotel } from "./sait-za-hotel";
import { saitZaKafetaria } from "./sait-za-kafetaria";
import { saitZaSchetovodnaKashta } from "./sait-za-schetovodna-kashta";
import { saitZaKashtaZaGosti } from "./sait-za-kashta-za-gosti";
import { saitZaSalonZaKrasota } from "./sait-za-salon-za-krasota";
import { saitZaFrizyorskiSalon } from "./sait-za-frizyorski-salon";
import { saitZaTransportnaFirma } from "./sait-za-transportna-firma";
import { saitZaZabolekar } from "./sait-za-zabolekar";
import { saitZaLekar } from "./sait-za-lekar";
import { saitZaFitnesTrenyor } from "./sait-za-fitnes-trenyor";
import { saitZaRemontniDeynosti } from "./sait-za-remontni-deynosti";
import { saitZaAvtoserviz } from "./sait-za-avtoserviz";
import { saitZaPochistvashtaFirma } from "./sait-za-pochistvashta-firma";
import { saitZaStroitelnaFirma } from "./sait-za-stroitelna-firma";
import { IndustryPageContent } from "./types";

export const industries: IndustryPageContent[] = [
  saitZaVeterinarnaKlinika,
  saitZaSvatbenaAgencia,
  saitZaRestorant,
  saitZaAdvokat,
  saitZaNedvizhimiImoti,
  saitZaHotel,
  saitZaKafetaria,
  saitZaSchetovodnaKashta,
  saitZaKashtaZaGosti,
  saitZaSalonZaKrasota,
  saitZaFrizyorskiSalon,
  saitZaTransportnaFirma,
  saitZaZabolekar,
  saitZaLekar,
  saitZaFitnesTrenyor,
  saitZaRemontniDeynosti,
  saitZaAvtoserviz,
  saitZaPochistvashtaFirma,
  saitZaStroitelnaFirma,
  saitZaPsiholog,
];

export const industriesBySlug = Object.fromEntries(
  industries.map((industry) => [industry.slug, industry])
);