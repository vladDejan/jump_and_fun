import { Card, CardContent } from "../components/ui/card";
import Bubblehouse from "../assets/images/singbubble.webp";
import Castle from "../assets/images/singcastle.webp";
import Minicastle from "../assets/images/singminicastle.webp";
import BgImg from "../assets/images/bg_package1.webp";
import {
  Cake,
  Church,
  Gem,
  LucidePackageOpen,
  LucideSearchCheck,
  PartyPopper,
  VenusAndMars,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FooterPage } from "./Footer";
import { packages } from "../assets/services/package";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    id: 1,
    title: "🎈 Bubble House",
    image: Bubblehouse,
    description:
      "Bubble House na naduvavanje za nezaboravne dečije proslave. Bubble House je pravi hit na rođendanima...",
    details: `• Preporučeni uzrast: 2–6 godina
• Kapacitet: Do 5 dece istovremeno
• Dimenzije: 3 m × 4.5 m × 2.5 m
• Dodaci: Gratis baloni unutar bubble house
• Uključeno u cenu: Montaža i osoblje
• Trajanje najma: 3 sata
• Cena: 150€`,
  },
  {
    id: 2,
    title: "🤍 Elegantni beli dvorac",
    image: Castle,
    description:
      "Elegantni Beli Dvorac savršen je izbor za venčanja, krštenja, rođendane i druge svečanosti...",
    details: `• Kapacitet: Do 10 dece
• Uzrast: 2–10 godina
• Dimenzije: 4 m × 4 m × 3.3 m
• Uključeno u cenu: Montaža i osoblje
• Trajanje najma: 4h
• Cena: 180€`,
  },
  {
    id: 3,
    title: "🤍 Mali Beli Dvorac",
    image: Minicastle,
    description:
      "Mali beli dvorac je odličan za rođendane, krštenja i manje proslave sa bazenom sa lopticama...",
    details: `• Uzrast: 1–6 godina
• Kapacitet: Do 5 dece
• Dimenzije: 3 m × 3 m × 2.5 m
• Dodaci: Bazen sa lopticama
• Uključeno: Montaža i osoblje
• Trajanje najma: 4 sata
• Cena: 99€`,
  },
];

const paketAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export const Packages = () => {
  const [activePackageId, setActivePackageId] = useState<number | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
 const getCleanTitle = (title: string): string => {
  const match = title.match(/Paket \d+/);
  return match ? match[0] : title;
};
  const navigate = useNavigate();
  const ref = useRef(null);
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start start", "end start"], // kad je element na vrhu i kad izađe
});

const y = useTransform(scrollYProgress, [0, 1], [0, -100]); // pomeraj sliku na scroll

  const togglePackage = (id: number) => {
    setActivePackageId(activePackageId === id ? null : id);
  };

  const toggleCard = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="flex flex-col w-full h-full md:mt-15 xs:mt-10">
      {/* PAKETI */}
      <div className="flex flex-col md:p-6 xs:p-2">
        <h2 className="md:!text-4xl xs:!text-2xl flex flex-row items-center justify-center gap-3 !text-quinary !font-medium text-center">
          Program paketa{" "}
          <LucidePackageOpen className="text-primary !text-3xl text-center" />
        </h2>

        {/****** DESKTOP ******/}
        <div className="md:h-screen relative hidden md:flex items-center justify-center md:flex-row xs:flex-col gap-4 max-w-screen-md mx-auto">
          {packages.map((pkg, i) => (
            <div key={pkg.id} className="flex flex-col relative">
              <div className="flex flex-row items-center justify-center">
              <h2 key={pkg.id} className="md:!text-2xl/2 xs:text-lg/2 !font-semibold w-fit inline-block mb-10 bg-primary pt-2 pr-2 pb-0 pl-2 text-center !text-quinary">{getCleanTitle(pkg.title)}</h2>
            </div>
            <Card
              key={pkg.id}
              className="border-primary group p-1 w-[300px] h-[600px] overflow-hidden border-0 drop-shadow-sm drop-shadow-primary/90"
            >
              <img
                className="absolute inset-0 object-fill w-full h-full"
                src={pkg.image}
                alt={`Package ${pkg.id}`}
              />
              <CardContent style={{ maxHeight: "100%", overflowY: "auto" }} className="absolute inset-0 z-10 bg-white/70 backdrop-blur-md flex flex-col items-center justify-start p-2 space-y-1 text-center text-quinary pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="text-base! font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {pkg.title}
                </h3>
                <span className="text-sm leading-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-200">
                  {pkg.description1}
                </span>
                <span className="mt-2 text-sm! font-semibold whitespace-pre-line opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-300">
                  {pkg.description2}
                </span>
                <span className="mt-2 text-sm leading-4 whitespace-pre-line opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-400">
                  {pkg.description3}
                </span>
              </CardContent>
            </Card>
            </div>
          ))}
        </div>
        {/********************************************************************/}

        {/****** MOBILNI ******/}
        <div className="md:hidden relative w-full px-4 py-6">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.2}
            onSlideChange={() => setActivePackageId(null)} // sklanja overlay kad skroluješ
          >
            {packages.map((pkg) => (
              <SwiperSlide key={pkg.id}>
                <div className="flex flex-col relative">
              <div className="flex flex-row items-center justify-center">
              <h2 key={pkg.id} className="md:!text-2xl/2 xs:!text-xl/2 xs:!font-medium w-fit inline-block mb-10 bg-primary pt-2 pr-2 pb-0 pl-2 text-center !text-quinary">{getCleanTitle(pkg.title)}</h2>
            </div>
            </div>
                <Card
                  className="border-primary relative w-full h-[400px] cursor-pointer overflow-hidden"
                  onClick={() => togglePackage(pkg.id)}
                >
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay sa tekstom, kao hover na desktop */}
                  <div
                    className={`absolute inset-0 z-10 bg-white/70 backdrop-blur-md flex flex-col items-center justify-start p-2 space-y-2 text-center text-quinary transition-opacity duration-300 ${
                      activePackageId === pkg.id
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
                    style={{ maxHeight: "100%", overflowY: "auto" }}
                  >
                    <h3 className="!font-semibold !text-base">{pkg.title}</h3>
                    <p className="!text-sm !font-medium">{pkg.description1}</p>
                    <p className="!text-sm !font-medium whitespace-pre-line">
                      {pkg.description2}
                    </p>
                    <p className="!text-sm whitespace-pre-line">
                      {pkg.description3}
                    </p>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/********************************************************************/}
      </div>
      
      {/* POJEDINACNO */}
      <div className="flex flex-col w-full h-screen md:p-6 xs:p-2 xs:mb-10 items-center justify-center">
        <h2 className="md:!text-4xl xs:!text-2xl flex flex-row items-center justify-center gap-3 !text-quinary !font-medium text-center mb-5">
          Pojedinačni program{" "}
          <LucideSearchCheck className="text-primary !text-3xl text-center" />
        </h2>
        {/****** DESKTOP ******/}
        <div className="flex-row relative hidden md:flex gap-10 px-8 w-full h-screen items-center justify-center">
          <Card className="border-primary group p-1 w-3/4 h-3/4 relative overflow-hidden border-0 drop-shadow-sm drop-shadow-primary/90">
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src={Bubblehouse}
              alt="Bubble house"
            />
            <CardContent className="absolute inset-0 z-10 bg-white/70 backdrop-blur-md flex flex-col items-center justify-center p-2 space-y-1 text-center text-quinary pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 opacity-0 group-hover:opacity-80">
              <h3 className="text-lg font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                🎈 Bubble House
              </h3>
              <span className="mt-2 text-base text-center font-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-200">
                Bubble House na naduvavanje za nezaboravne dečije proslave.
                Bubble House na naduvavanje je pravi hit na dečijim rođendanima
                i proslavama širom Srbije. Savršena za roditelje koji žele
                moderan, vizuelno upečatljiv ambijent uz more balona i sigurnu
                zabavu za najmlađe. Za razliku od klasičnih dvoraca, Bubble
                House pruža drugačiji vizuelni doživljaj – bela kupola sa
                velikim otvorenim ulazom i more balona unutar kupole, spremna za
                dekoraciju po želji.
              </span>
              <span className="mt-2 text-base text-center font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-300">
                • Preporučeni uzrast: 2–6 godina
                <br />• Kapacitet: Do 5 dece istovremeno
                <br />• Dimenzije: 3 m (širina) × 4.5 m (dužina) × 2,5 m
                (visina)
                <br />• Dodaci: Gratis baloni unutar bubble house
                <br />• Uključeno u cenu: Montaža i jedna osoba zadužena za
                bezbedno i pravilno korišćenje
                <br />• Trajanje najma: 3 sata
                <br />• Cena: 150€
              </span>
            </CardContent>
          </Card>
          <Card className="border-primary group p-1 w-3/4 h-3/4 relative overflow-hidden border-0 drop-shadow-sm drop-shadow-primary/90">
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src={Castle}
              alt="Dvorac"
            />
            <CardContent className="absolute inset-0 z-10 bg-white/70 backdrop-blur-md flex flex-col items-center justify-center p-2 space-y-1 text-center text-quinary pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 opacity-0 group-hover:opacity-80">
              <h3 className="!text-lg !font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                🤍 Elegantni beli dvorac
              </h3>
              <span className="mt-2 text-base text-center font-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-200">
                Elegantni Beli Dvorac – Dvorac na naduvavanje za svečane
                proslave. Naš elegantni beli dvorac na naduvavanje savršen je
                izbor za venčanja, krštenja, luksuzne rođendane i druge svečane
                događaje. Kombinuje prefinjen izgled sa sigurnom i zabavnom
                igrom za decu, čineći ga idealnim za sve koji žele da svoju
                dečiju proslavu ili porodični događaj podignu na viši nivo.
              </span>
              <span className="mt-2 text-base text-center font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-300">
                • Kapacitet: Do 10 dece istovremeno
                <br />• Preporučeni uzrast: 2–10 godina
                <br />• Dimenzije: 4 m (širina) x 4 m (dužina) x 3,3 m (visina)
                <br />• Uključeno u cenu: Montaža dvorca i jedna osoba zadužena
                za bezbedno i pravilno korišćenje
                <br />• Trajanje najma: 4h
                <br />• Cena: 180€
              </span>
            </CardContent>
          </Card>
          <Card className="border-primary group p-1 w-3/4 h-3/4 relative overflow-hidden border-0 drop-shadow-sm drop-shadow-primary/90">
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src={Minicastle}
              alt="Mini dvorac"
            />
            <CardContent className="absolute inset-0 z-10 bg-white/70 backdrop-blur-md flex flex-col items-center justify-center p-2 space-y-1 text-center text-quinary pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 opacity-0 group-hover:opacity-80">
              <h3 className="text-lg font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                🤍 Mali Beli Dvorac
              </h3>
              <span className="mt-2 text-base text-center font-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-200">
                Mali beli dvorac je savršen izbor za krštenja, rođendane i manje
                svečane proslave. U njegovom sastavu nalazi se i bazen sa
                lopticama, koji pruža dodatnu zabavu i sigurno će okupirati
                mališane tokom celog događaja. Zahvaljujući kompaktnoj veličini,
                dvorac je pogodan za proslave u zatvorenom prostoru, salama ili
                manjim dvorištima.
              </span>
              <span className="mt-2 text-base text-center font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-300">
                • Preporučeni uzrast: 1–6 godina
                <br />• Kapacitet: Do 5 dece istovremeno
                <br />• Dimenzije: 3 m (širina) × 3 m (dužina) × 2,5 m (visina)
                <br />• Dodaci: Ugrađeni bazen sa lopticama
                <br />• Uključeno u cenu: Montaža dvorca i jedna osoba zadužena
                za bezbedno i pravilno korišćenje
                <br />• Trajanje najma: 4 sata
                <br />• Cena: 99€
              </span>
            </CardContent>
          </Card>
        </div>
        {/****** MOBILNI ******/}
        <div className="flex md:hidden gap-4 px-4 w-full overflow-x-auto snap-x">
          {cards.map((card, i) => {
            const isActive = activeId === card.id;

            return (
              <div
                key={card.id}
                onClick={() => toggleCard(card.id)}
                className="group relative min-w-[90%] sm:w-3/4 h-[80vh] rounded-xl overflow-hidden border-primary drop-shadow-md snap-center"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />

                <motion.div
                  initial="hidden"
                  animate={isActive ? "visible" : "hidden"}
                  variants={paketAnim}
                  custom={i}
                  className={`absolute inset-0 z-10 bg-white/60 backdrop-blur-md p-4 text-quinary flex flex-col justify-start items-center space-y-2 overflow-y-auto transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <motion.h3
                    variants={paketAnim}
                    custom={i + 0.1}
                    className="!text-lg !font-bold text-center"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    variants={paketAnim}
                    custom={i + 0.2}
                    className="!text-sm text-center leading-5"
                  >
                    {card.description}
                  </motion.p>
                  <motion.pre
                    variants={paketAnim}
                    custom={i + 0.3}
                    className="whitespace-pre-wrap !text-sm !font-medium text-left overflow-auto"
                  >
                    {card.details}
                  </motion.pre>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/***** PLUS *****/}
      <div ref={ref} className="relative w-full min-h-[200vh]">
        {/* Pozadinska slika sa zatamnjenjem */}
        <div className="sticky flex items-center justify-center top-0 h-screen overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute insent-0 z-0 h-full flex justify-center items-center"
        >
          <img
            src={BgImg}
            alt="Background"
            className="flex h-full object-contain -left-[50%] transform scale-125"
          />
        </motion.div>

        {/* Sadržaj preko pozadine */}
        <div className="relative z-20 h-full w-full overflow-y-auto py-20 px-4 flex flex-col items-center">
          <div className="flex flex-col justify-center items-center text-center backdrop-blur-xs bg-tertiary/10 rounded-xl p-2">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:text-3xl/2 xs:text-lg/2 inline-block mb-10 bg-primary pt-2 pr-2 pb-0 pl-2 text-white"
          >
            Savršeni trenuci za najlepše proslave
          </motion.h3>

          <div className="flex md:w-full xs:flex-col md:flex-row justify-evenly items-center">
            <motion.div
              className="flex xs:mb-22 md:mb-0 mt-0 flex-col justify-center items-center text-center w-fit"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {[
                {
                  text: "Dečiji rođendani",
                  icon: <Cake className="text-secondary ml-5" />,
                },
                {
                  text: "Krštenja",
                  icon: <Church className="text-secondary ml-5" />,
                },
                {
                  text: "Devojačke večeri",
                  icon: <PartyPopper className="text-secondary ml-5" />,
                },
                {
                  text: "Gender reveal",
                  icon: <VenusAndMars className="text-secondary ml-5" />,
                },
                {
                  text: "Svadbe",
                  icon: <Gem className="text-secondary ml-5" />,
                },
              ].map((item, index) => (
                <motion.span
                  key={index}
                  className="md:text-2xl xs:text-lg mb-1 text-white flex"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {item.text} {item.icon}
                </motion.span>
              ))}
            </motion.div>
          </div>
          </div>

          {/* Dugme ispod */}
          <div className="md:w-1/3 md:mt-22 backdrop-blur-xs bg-tertiary/10 rounded-xl p-2 xs:mt-10 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="md:w-full xs:w-full flex flex-col justify-center items-center"
            >
              <h2 className="!text-white xs:!text-xl font-medium text-center">
                Rezervišite već sada Vaš omiljeni paket i obradujte sebe i svoje
                najdraže.
              </h2>
              <button
                onClick={() => navigate("/reservation")}
                className="w-1/2 mt-10 py-2 px-5 rounded-lg text-white bg-primary hover:bg-secondary transition-all delay-75 cursor-pointer"
              >
                Rezerviši
              </button>
            </motion.div>
          </div>
        </div>
        </div>
      </div>

      <FooterPage className="mt-22" />
    </div>
  );
};
