import { Card, CardContent } from "../components/ui/card";
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
import { singles } from "../assets/services/single";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { Badge } from "./ui/badge";
import { VariantType } from "@/assets/services/variantType";
import { AnimatedCardMobile } from "./AnimatedCardMobile";

export const Packages = () => {
  const [activePackageId, setActivePackageId] = useState<number | null>(null);

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

  const handleReserve = (variant: VariantType) => {
    navigate("/rezervacije", { state: { selectedVariant: variant } });
  };

  return (
    <div className="flex flex-col w-full h-full md:mt-15 xs:mt-15">
      {/* PAKETI */}
      <div className="flex flex-col relative md:p-6 xs:p-2">
        <h2 className="md:!text-4xl xs:!text-2xl flex flex-row xs:mb-5 items-center justify-center gap-3 !text-quinary !font-medium text-center">
          Program paketa{" "}
          <LucidePackageOpen className="text-primary !text-3xl text-center" />
        </h2>

        {/****** DESKTOP ******/}
        <div className="hidden md:flex flex-col items-center gap-6 mx-auto w-full mt-10">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className="border-primary group relative mb-6 w-full h-auto max-w-4xl flex flex-col border-0 drop-shadow-sm drop-shadow-primary/90 transition-all duration-300"
            >
              <button
                onClick={() => handleReserve(pkg.variant)}
                className="absolute z-100 -top-4 -right-4 flex items-center cursor-pointer justify-center w-24 h-24 bg-primary hover:bg-secondary text-white text-xs font-semibold rounded-full opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-lg"
              >
                Rezerviši
              </button>

              <div className="flex flex-row">
                <div className="flex-[0.4] h-[270px] flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    src={pkg.image}
                    alt={`Package ${pkg.id}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Sadrzaj paketa */}
                <CardContent className="z-10 flex-[0.6] flex flex-col items-start text-left ml-5 justify-start p-2 space-y-2 text-quinary">
                  <div className="text-left">
                    <h2 className="md:!text-xl xs:text-lg !font-medium w-fit mb-6 text-center !text-quinary">
                      {pkg.title}
                    </h2>
                  </div>

                  <div className="flex-1 text-left">
                    <span className="text-sm font-medium">
                      {pkg.description1}
                    </span>
                    <br />
                    <span className="mt-2 text-sm font-medium whitespace-pre-line">
                      {pkg.description2}
                    </span>
                    <br />
                    <span className="mt-2 text-sm leading-4 font-semibold">
                      {pkg.price}
                    </span>
                  </div>
                </CardContent>
              </div>

              <div className="flex flex-row gap-4 items-center justify-center mt-4">
                {pkg.age1 && <Badge className="text-white">{pkg.age1}</Badge>}
                {pkg.age2 && <Badge className="text-white">{pkg.age2}</Badge>}
                {pkg.age3 && <Badge className="text-white">{pkg.age3}</Badge>}
                {pkg.time1 && <Badge className="text-white">{pkg.time1}</Badge>}
                {pkg.time2 && <Badge className="text-white">{pkg.time2}</Badge>}
              </div>
            </Card>
          ))}
        </div>

        {/********************************************************************/}

        {/****** MOBILNI ******/}
        <div className="md:hidden relative w-full px-1 py-0">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.2}
            onSlideChange={() => setActivePackageId(null)} // sklanja overlay kad skroluješ
          >
            {packages.map((pkg) => (
              <SwiperSlide key={pkg.id}>
                <Card
                  className="border-quaternary bg-quaternary flex justify-center items-center p-0! w-full h-auto gap-0! overflow-hidden"
                  onClick={() => togglePackage(pkg.id)}
                >
                  <h3 className="!font-semibold !text-lg mt-2 whitespace-pre-line text-center">{pkg.title}</h3>
                  <div className="w-full h-[290px] flex justify-center flex-shrink-0 rounded-md">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full object-contain scale-70"
                    />
                  </div>
                  {/* Sadrzaj paketa */}
                  <div
                    className={`z-10 flex flex-col px-2 items-center justify-start text-center text-quinary`}
                  >
                    
                    <p className="!text-sm !font-medium">{pkg.description1}</p>
                    <p className="!text-sm !font-medium whitespace-pre-line">
                      {pkg.description2}
                    </p>
                    <p className="!text-sm whitespace-pre-line">{pkg.price}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 justify-items-center mb-4 px-4! justify-center mt-4">
                    {pkg.age1 && (
                      <Badge className="text-white flex">{pkg.age1}</Badge>
                    )}
                    {pkg.age2 && (
                      <Badge className="text-white flex">{pkg.age2}</Badge>
                    )}
                    {pkg.age3 && (
                      <Badge className="text-white flex">{pkg.age3}</Badge>
                    )}
                    {pkg.time1 && (
                      <Badge className="text-white flex">{pkg.time1}</Badge>
                    )}
                    {pkg.time2 && (
                      <Badge className="text-white flex">{pkg.time2}</Badge>
                    )}
                  </div>
                  <button
                onClick={() => handleReserve(pkg.variant)}
                className=" z-100 flex items-center cursor-pointer justify-center py-3 w-full bg-secondary text-white text-xs font-semibold rounded-b-xl rounded-t-none  shadow-lg"
              >
                Rezerviši
              </button>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/********************************************************************/}
      </div>

      {/* POJEDINACNO */}
      <div className="flex flex-col w-full h-screen md:p-6 xs:p-2 xs:mb-10 items-center justify-center">
        <h2 className="md:!text-4xl xs:!text-2xl flex flex-row items-center xs:mt-10 mb-5 justify-center gap-3 !text-quinary !font-medium text-center">
          Pojedinačni program{" "}
          <LucideSearchCheck className="text-primary !text-3xl text-center" />
        </h2>
        {/****** DESKTOP ******/}
        <div className="flex-row relative hidden md:flex px-8 w-full gap-4 items-center justify-center">
  {singles.map((pkg) => (
    <Card
      key={pkg.id}
      className="group relative py-0! w-3/4 h-full overflow-hidden border-0 shadow-lg rounded-xl"
    >
      {/* SLIKA */}
      <img
        src={pkg.image}
        alt={pkg.title}
        className="w-full h-full object-fill transition-all duration-500 group-hover:brightness-50 brightness-75"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 transition-all duration-500">
        {/* NASLOV – vidi se uvek */}
        <h3 className="text-2xl font-bold drop-shadow-md transition-all duration-500 group-hover:mb-2">
          {pkg.title}
        </h3>

        {/* DETALJI – prikazuju se samo na hover */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="mt-2 text-base text-white!">{pkg.description1}</p>
          <p className="mt-1 text-sm font-semibold text-white!">{pkg.dimension}</p>
          <p className="mt-1 text-sm font-semibold text-white!">{pkg.time}</p>
          <p className="mt-1 text-sm font-semibold text-white!">{pkg.capacity}</p>
          <p className="mt-1 text-sm font-semibold text-white!">{pkg.age}</p>
          <p className="mt-2 text-lg font-bold text-white!">{pkg.price}</p>
        </div>
      </div>

      {/* REZERVIŠI dugme */}
      <button
        onClick={() => handleReserve(pkg.variant)}
        className="absolute bottom-0 left-0 w-full py-3 cursor-pointer bg-primary hover:bg-secondary text-white text-sm font-semibold rounded-b-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
      >
        Rezerviši
      </button>
    </Card>
  ))}
</div>

        {/****** MOBILNI POJEDINACNO ******/}
        <div className="flex md:hidden gap-4 px-4 w-full overflow-x-auto justify-center snap-x">
          <div className="p-6 xs:p-2 flex flex-col items-center text-center mt-5 md:hidden">
                  <div className="grid grid-cols-1 gap-6">
                    {singles.map((pkg, index) => (
                      <AnimatedCardMobile key={pkg.id} card={pkg} delay={index * 0.2} />
                    ))}
                  </div>
                </div>
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
                  Rezervišite već sada Vaš omiljeni paket i obradujte sebe i
                  svoje najdraže.
                </h2>
                <button
                  onClick={() => navigate("/rezervacije")}
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
