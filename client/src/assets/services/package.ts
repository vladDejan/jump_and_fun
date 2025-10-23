// src/data/packages.ts
import Package1 from "../images/paketi/paket1.webp";
import Package2 from "../images/paketi/paket2.webp";
import Package3 from "../images/paketi/paket3.webp";
import Package4 from "../images/paketi/paket4.webp";
import { VariantType } from "./variantType";

export interface Package {
  id: number;
  variant: VariantType;
  image: string;
  title: string;
  description1: string;
  description2: string;
  price?: string;
  age1: string;
  age2?: string;
  age3?: string;
  time1?: string;
  time2?: string;
}

export const packages: Package[] = [
  {
    id: 1,
    variant: "paket1",
    image: Package1,
    title: `🎉 Paket 1
     Veliki & Mali Dvorac`,
    description1: `Kompletna zabava za decu svih uzrasta! 
    ✨ Idealno za rođendane, krštenja i porodične proslave, u zatvorenom i na otvorenom.`,
    description2: `
👤 Montaža i demontaža, osoba za nadzor i bezbedno korišćenje

`,
    price: `💶 240€`,
    age1: `Veliki Dvorac 2–10 god.`,
    age2: `Mali Dvorac 1–6 god.`,
    time1: `Trajanje 4h`,
  },
  {
    id: 2,
    variant: "paket2",
    image: Package2,
    title: `🎊 Paket 2
    Veliki Dvorac & Bubble House`,
    description1: `Zabava za decu različitog uzrasta – više prostora, više smeha!`,
    description2: `
👤 Montaža i demontaža dvorca i bubble house, osoba zadužena za pravilno i bezbedno korišćenje

📍 Dostupno u: Novom Sadu i širom Srbije

`,
    price: `💶 280€`,
    age1: `Veliki Dvorac 2–10 god.`,
    age2: `BubbleHouse 2–6 god.`,
    time1: `Veliki Dvorac 4h`,
    time2: `BubbleHouse 3h`,
  },
  {
    id: 3,
    variant: "paket3",
    image: Package3,
    title: `🎉 Paket 3
    Bubble House & Mali Dvorac`,
    description1: `Savršeno za mlađu decu i manje proslave`,
    description2: `
👤 Montaža i demontaža dvorca i bubble house i osoba zadužena za bezbedno i pravilno korišćenje

📍 Dostupno u: Novom Sadu i širom Srbije

`,
    price: `💶 210€`,
    age1: `BubbleHouse 2–6 god.`,
    age2: `Mali Dvorac 1–6 god.`,
    time1: `Mali Dvorac 4h`,
    time2: `BubbleHouse 3h`,
  },
  {
    id: 4,
    variant: "paket4",
    image: Package4,
    title: `🌟 Paket 4
    Kompletan paket`,
    description1: `Najkompletnije rešenje za veće proslave – tri dvorca za decu svih uzrasta! 
    ✨ Idealno za rođendane, krštenja i porodične proslave – više zabave, više prostora i sigurna igra.`,
    description2: `
    👤 Montaža i osoba za bezbedno korišćenje

    📍 Dostupno za iznajmljivanje u: Novom Sadu i širom Srbije

    `,
    price: `💶 360€`,
    age1: `BubbleHouse 2-6 god.`,
    age2: `Mali Dvorac 1–6 god.`,
    age3: `Veliki Dvorac 2-10 god`,
    time1: `BubbleHouse 3h`,
    time2: `Dvorci 4h`,
  },
];
