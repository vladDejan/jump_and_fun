// src/data/packages.ts
import Package1 from "../images/paketi/paket1.webp";
import Package2 from "../images/paketi/paket2.webp";
import Package3 from "../images/paketi/paket3.webp";
import Package4 from "../images/paketi/paket4.webp";

export interface Package {
  id: number;
  image: string;
  title: string;
  description1: string;
  description2: string;
  description3: string;
}

export const packages: Package[] = [
    {
    id: 1,
    image: Package1,
    title: "🎉 Paket 1 – Veliki + Mali Dvorac na naduvavanje",
    description1: `Savršen izbor za one koji žele kompletnu zabavu za decu na jednom mestu! Paket 1 uključuje Veliki Beli Dvorac i Mali Beli Dvorac sa bazenom sa lopticama – idealna kombinacija za različite uzraste i vrste igre. Veliki dvorac pruža dovoljno prostora za veću decu, dok mali dvorac sa lopticama nudi mirniju, ali jednako zanimljivu zabavu za mlađu decu. Zahvaljujući kombinaciji ova dva modela, deca različitog uzrasta mogu da se igraju istovremeno – bez gužve, bez čekanja i sa više osmeha!`,
    description2: `U paketu dobijate:
🎠 Veliki Beli Dvorac (uzrast 2–10 godina)
🍼 Mali Beli Dvorac sa bazenom sa lopticama (uzrast 1–6 godina)
👤 Uključeno u cenu: Montaža i demontaža, osoba za nadzor i bezbedno korišćenje
⏳ Trajanje najma: 4 sata
💶 Cena paketa: 240€`,
    description3: `✨ Ovaj paket je posebno popularan za rođendane, krštenja, porodične proslave i događaje u zatvorenom i na otvorenom prostoru. Uz dvorce na naduvavanje iz ovog paketa, stvarate ambijent koji će deca pamtiti, a roditelji ceniti zbog sigurnosti i praktičnosti.

📞 Kontaktirajte nas i rezervišite svoj termin na vreme – broj dostupnih paketa je ograničen!`,
  },
    {
    id: 2,
    image: Package2,
    title: "🎊 Paket 2 – Veliki Beli Dvorac + Bubble House",
    description1: `Dva različita tipa zabave u jednom paketu – za razigranu i veselu proslavu bez zastoja! Veliki Beli Dvorac nudi više prostora za skakanje i aktivnu igru, dok je Bubble House savršen za decu koja vole skakanje dok je oko njih more balona. Zajedno, ova dva dvorca pokrivaju različite uzraste i interesovanja dece, pa je proslava dinamična, organizovana i bez gužve.`,
    description2: `U paketu dobijate:
👑 Elegantni Beli Dvorac – uzrast: 2–10 godina
🎈 Bubble House sa gratis balonima unutar kupole – uzrast: 2–6 godina
⏳ Trajanje najma: Dvorac – 4h, Bubble House – 3h
👤 Uključeno u cenu: Montaža i demontaža dvorca i bubble house, osoba zadužena za pravilno i bezbedno korišćenje
📍 Dostupno u: Novom Sadu i širom Srbije
💶 Cena paketa: 280€`,
    description3: `🎯 Paket 2 je idealan za veće proslave, kada ima više dece različitog uzrasta. Omogućava paralelnu igru, više prostora i sigurnu organizaciju bez stajanja i čekanja.

📞 Rezervacije su otvorene – obezbedi svoj termin na vreme!`,
  },
    {
    id: 3,
    image: Package3,
    title: "🎉 Paket 3 – Bubble House + Mali Beli Dvorac sa bazenom",
    description1: `Savršen paket za mlađu decu i manje proslave, koji kombinuje dve elegantne i zabavne opcije: Bubble House, ispunjen balonima, i Mali beli dvorac na naduvavanje sa bazenom sa lopticama. Zahvaljujući manjoj dimenziji i zatvorenijoj formi, oba dvorca su idealna za proslave u dvorištima, salama i zatvorenim prostorima, kao i za situacije kada je ograničen prostor. Bubble House donosi veselu atmosferu uz gratis balone, dok mali dvorac nudi bezbednu i mirnu igru za najmlađe.`,
    description2: `U paketu dobijate:
🎈 Bubble House sa gratis balonima – uzrast: 2–6 godina
🍼 Mali Beli Dvorac sa bazenom sa lopticama
⏳ Trajanje najma: Mali dvorac – 4 sata, Bubble House – 3h
👤 Uključeno u cenu: Montaža i demontaža dvorca i bubble house i osoba zadužena za bezbedno i pravilno korišćenje
📍 Dostupno u: Novom Sadu i širom Srbije
💶 Cena paketa: 210€`,
    description3: `✨ Paket 3 je idealan za manje dečije rođendane, krštenja, kao i proslave sa više manjih gostiju. Nudi kombinaciju mirne igre i balonske zabave, a sve u kompaktnom formatu – bez gužve i prevelikog zauzimanja prostora.

📞 Kontaktiraj nas za rezervaciju i obezbedi najbolju zabavu za tvoju proslavu!`,
  },
  {
    id: 4,
    image: Package4,
    title: "🌟 Paket 4 – Kompletan paket (Elegantni Beli Dvorac + Mali Beli Dvorac + Bubble House)",
    description1: `Paket 4 je najkompletnije rešenje za dečije proslave, savršen za veće rođendane, krštenja i porodične događaje sa mnogo dece. Kombinuje tri različita dvorca na naduvavanje, koji zajedno pokrivaju sve uzraste i različite tipove igre – od skakanja i trčanja do igre sa lopticama i balonima. Ovaj paket omogućava paralelnu zabavu za decu različitog uzrasta, bez gužve i čekanja, uz luksuzan i vizuelno usklađen izgled.`,
    description2: `U paketu dobijate:
    👑 Veliki Beli Dvorac – uzrast: 2–10 godina
    🍼 Mali Beli Dvorac sa bazenom sa lopticama
    🎈 Bubble House sa gratis balonima – uzrast: 2–6 godina
    ⏳ Trajanje najma: Dvorci – 4 sata, Bubble House – 3h
    👤 Uključeno u cenu: Montaža i osoba za bezbedno korišćenje
    📍 Dostupno za iznajmljivanje u: Novom Sadu i širom Srbije
    💶 Cena paketa: 360€`,
    description3: `✨ Paket 4 je idealan za one koji žele celokupan doživljaj – više prostora za igru, više sadržaja za decu i elegantnu atmosferu za goste. Uz dvorce na naduvavanje, balone i bazen sa lopticama, deca će uživati u raznovrsnoj i sigurnoj igri tokom cele proslave.

📞 Kontaktirajte nas i obezbedite svoj termin na vreme – kompletan paket se brzo rezerviše!`,
  },
];
