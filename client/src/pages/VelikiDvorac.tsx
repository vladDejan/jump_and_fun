import { useNavigate } from "react-router-dom";
import BigCastle0 from "../assets/images/castle/bigcastle0.webp";
import BigCastle1 from "../assets/images/castle/bigcastle1.webp";
import BigCastle2 from "../assets/images/castle/bigcastle2.webp";
import BigCastle3 from "../assets/images/castle/bigcastle3.webp";
import "../index.css";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";
import { FooterPage } from "@/components/Footer";
import { motion } from "framer-motion";
import { AnimatedCards } from "../components/AnimatedCard";
import { AnimatedCardMobile } from "@/components/AnimatedCardMobil";

type Card = {
  id: number;
  title: string;
  image: string;
  description: string;
};

const cards: Card[] = [
  {
    id: 1,
    title: "🤍 Elegantni Beli Dvorac",
    image: BigCastle0,
    description:
      "Dvorac na naduvavanje za svečane proslave. Naš elegantni beli dvorac na naduvavanje savršen je izbor za venčanja, krštenja, luksuzne rođendane i druge svečane događaje. Beli dizajn omogućava lako uklapanje u dekoraciju balonima i savršen je za fotografisanje i video snimke sa događaja.",
  },
  {
    id: 2,
    title: "Karakteristike",
    image: BigCastle1,
    description: `• Kapacitet: Do 10 dece istovremeno
• Preporučeni uzrast: 2–10 godina
• Dimenzije: 4 m (širina) x 4 m (dužina) x 3,3 m (visina)
• Uključeno u cenu: Montaža dvorca i jedna osoba zadužena za bezbedno i pravilno korišćenje
• Trajanje najma: 4h
• Cena: 180€`,
  },
  {
    id: 3,
    title: "",
    image: BigCastle2,
    description:
      "Ovaj model je najtraženiji u ponudi za iznajmljivanje dvoraca na naduvavanje u Novom Sadu i širom Srbije. 📞 Rezervišite elegantni beli dvorac za vaše svečane događaje, poput venčanja, porodičnih proslava i dečijih rođendana, i obezbedite deci sigurno i elegantno mesto za igru.",
  },
  {
    id: 4,
    title: "",
    image: BigCastle3,
    description: `📍 Dostupan za iznajmljivanje u Novom Sadu i dostavu širom Srbije. 📞 Kontaktirajte nas i obezbedite svoj termin – baloni i osmesi su zagarantovani!`,
  },
];

export const VelikiDvorac = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/******* DESKTOP *******/}
      <div className="p-6 mt-15 justify-center items-center flex-col hidden md:flex">
        <h2 className="md:!text-2xl/2 xs:text-lg/2 !font-medium w-fit inline-block mb-10 bg-primary pt-2 pr-2 pb-0 pl-2 text-center !text-quinary">
           Elegantni Beli Dvorac
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-28">
          {cards.map((card, index) => (
            <AnimatedCards key={card.id} card={card} delay={index * 0.2} />
          ))}
        </div>
      </div>

      {/******* MOBILE *******/}
      <div className="p-6 xs:p-2 flex flex-col items-center mt-10 md:hidden">
        <h2 className="md:!text-4xl/2 xs:!text-2xl/2 w-fit inline-block mb-10 bg-primary pt-2 pr-2 pb-0 pl-2 text-center !text-quinary !font-medium">
           Elegantni Beli Dvorac
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {cards.map((card, index) => (
            <AnimatedCardMobile key={card.id} card={card} delay={index * 0.2} />
          ))}
        </div>
      </div>

      {/******* Faq *******/}
      <div className="p-6 xs:p-4">
        <div className="mt-10 flex flex-col items-center max-w-2xl mx-auto">
          <h2 className="md:!text-2xl/2 xs:text-lg/2 w-fit inline-block mb-10 bg-primary pt-2 pr-2 pb-0 pl-2 text-center !text-quinary !font-medium">
            ❓ Najčešća pitanja
          </h2>
          <Accordion
            type="single"
            defaultValue="item-1"
            collapsible
            className="w-full space-y-2"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Da li je moguće produžiti najam Velikog Belog Dvorca?
              </AccordionTrigger>
              <AccordionContent className="text-primary accordion-content data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up flex flex-col gap-4 text-balance accordion-content data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                Da. Najam po standardnoj ceni traje 4 sata i uključuje montažu,
                demontažu i prisustvo osoblja.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Gde je moguće iznajmiti Veliki Beli Dvorac?
              </AccordionTrigger>
              <AccordionContent className="text-primary accordion-content data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up flex flex-col gap-4 text-balance">
                Dostupan je u Novom Sadu i dostavljamo širom Srbije.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Da li je bezbedno za decu?</AccordionTrigger>
              <AccordionContent className="text-primary accordion-content data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up flex flex-col gap-4 text-balance">
                Apsolutno! Preporučeni uzrast je 2–6 godina, uz prisustvo
                osoblja i mekanu strukturu.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Da li se može koristiti napolju?
              </AccordionTrigger>
              <AccordionContent className="text-primary accordion-content data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up flex flex-col gap-4 text-balance">
                Da! Veliki Beli Dvorac je idealan za dvorišta, parkove i druge ravne
                površine.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Loše ili hladno vreme?</AccordionTrigger>
              <AccordionContent className="text-primary accordion-content data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up flex flex-col gap-4 text-balance">
                Nema problema! Veliki Beli Dvorac je jednako kompaktan uz unutrašnje
                dekoracije i proslave.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Može li se koristiti i za odrasle?
              </AccordionTrigger>
              <AccordionContent className="text-primary accordion-content data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up flex flex-col gap-4 text-balance">
                Veliki Beli Dvorac je prvenstveno za decu, ali se često koristi i za
                tematske žurke. Ako imate ideju – podelite je s nama!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/******* Button *******/}
      <div>
        <div className="w-full md:mt-22 backdrop-blur-xs rounded-xl p-6 xs:p-4 xs:mt-10 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:w-1/3 xs:w-full flex flex-col justify-center items-center"
          >
            <h2 className="!text-quinary xs:!text-xl font-medium text-center">
              Rezervišite već sada Vaš omiljeni paket i obradujte sebe i svoje
              nadraže.
            </h2>
            <div className="flex flex-row gap-4 w-full">
              <button
                onClick={() => navigate("/paketi")}
                className="w-1/2 mt-10 py-2 px-5 rounded-lg text-white bg-primary hover:bg-secondary transition-all delay-75 cursor-pointer"
              >
                Pogledaj pakete
              </button>
              <button
                onClick={() => navigate("/rezervacije")}
                className="w-1/2 mt-10 py-2 px-5 rounded-lg text-white bg-primary hover:bg-secondary transition-all delay-75 cursor-pointer"
              >
                Rezerviši
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-22">
        <FooterPage />
      </div>
    </div>
  );
};
