import { castleService } from "../assets/services/castle";
import { bubbleService } from "../assets/services/bubble";
import CastleIcon from "../assets/images/castleLink.svg?react";
import BubbleIcon from "../assets/images/bubbleLink.svg?react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import {
  Cake,
  Church,
  Gem,
  LucideSiren,
  MousePointerClick,
  PartyPopper,
  VenusAndMars,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Packages } from "../components/Packages";

// Definišemo interfejs koji opisuje strukturu jednog objekta
interface ServiceItem {
  id: number; //jedinstveni identifikator
  image: string;
  title: string;
  description: string;
}

const packageData = [
  {
    title: "Paket 1",
    description: "Veliki dvorac\n+\nMali dvorac",
    price: "240€",
  },
  {
    title: "Paket 2",
    description: "Bubble House\n+\nVeliki dvorac",
    price: "280€",
  },
  {
    title: "Paket 3",
    description: "Bubble House\n+\nMali dvorac",
    price: "210€",
  },
  {
    title: "Paket 4",
    description: "Bubble House\n+\nVeliki i Mali dvorac",
    price: "360€",
  },
];

export const ServicesPage: React.FC = () => {
  //Trenutno izabrana kategorija ("bubble" ili "castle").
  const [category, setCategory] = useState<"bubble" | "castle">("bubble");
  //Niz objekata koji se prikazuju (zavisi od kategorije).
  const [items, setItems] = useState<ServiceItem[]>(bubbleService);
  //Trenutno izabrana kartica za uvecani prikaz.
  const [selectedItem, setSelectedItem] = useState<ServiceItem | null>(null);

  const [showStickyNav, setShowStickyNav] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  //Menjanje kategorije i postavljanje odgovarajućeg niza servisa.
  const changeCategory = (newCategory: "bubble" | "castle") => {
    setCategory(newCategory);
    setItems(newCategory === "bubble" ? bubbleService : castleService);
  };

  useEffect(() => {
    if (!triggerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isMobile = window.innerWidth < 768;
        if (!isMobile) {
          setShowStickyNav(false);
          return;
        }

        const [entry] = entries;

        setShowStickyNav(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(triggerRef.current);

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div ref={triggerRef} className="h-1" />
      <div
        ref={servicesRef}
        className="h-screen justify-between xs:justify-around flex flex-col items-center"
      >
        {/*********************************************************************************************/}
        {/* Kada je veci ekran nema sticky navigaciju */}
        {!showStickyNav && (
          <div className="hidden md:flex md:flex-row md:justify-center md:items-center md:w-full">
            <header className="flex gap-10 bg-white rounded-full justify-center p-4 w-1/4">
              <div className="flex flex-col ">
                <button
                  className={`cursor-pointer ${
                    category === "bubble" ? "text-primary" : ""
                  }`}
                  onClick={() => changeCategory("bubble")}
                >
                  <BubbleIcon
                    className={`svg-active ${
                      category === "bubble" ? "svgActive" : ""
                    }`}
                  />
                  Bubble
                </button>
              </div>
              <div className="flex flex-col">
                <button
                  className={`cursor-pointer ${
                    category === "castle" ? "text-primary" : ""
                  }`}
                  onClick={() => changeCategory("castle")}
                >
                  <CastleIcon
                    className={`svg-active ${
                      category === "castle" ? "svgActive" : ""
                    }`}
                  />
                  Castle
                </button>
              </div>
            </header>
          </div>
        )}
        {/*********************************************************************************************/}

        {/*********************************************************************************************/}
        {/* Sticky navigacija na mobilnim ekranima */}
        {showStickyNav && (
          <AnimatePresence>
            <motion.div
              className="fixed bottom-0 w-full z-[999] flex justify-center md:hidden"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <header className="flex gap-10 w-full bg-quaternary rounded-t-2xl justify-center py-4">
                <div className="flex flex-col">
                  <button
                    className={`cursor-pointer flex flex-col justify-center items-center ${
                      category === "bubble" ? "text-primary" : ""
                    }`}
                    onClick={() => changeCategory("bubble")}
                  >
                    <BubbleIcon
                      className={`svg-active w-8 h-8 ${
                        category === "bubble" ? "svgActive" : ""
                      }`}
                    />
                    Bubble
                  </button>
                </div>
                <div className="flex flex-col">
                  <button
                    className={`cursor-pointer flex flex-col justify-center items-center ${
                      category === "castle" ? "text-primary" : ""
                    }`}
                    onClick={() => changeCategory("castle")}
                  >
                    <CastleIcon
                      className={`svg-active w-8 h-8 ${
                        category === "castle" ? "svgActive" : ""
                      }`}
                    />
                    Castle
                  </button>
                </div>
              </header>
            </motion.div>
          </AnimatePresence>
        )}
        {/*********************************************************************************************/}

        <div className="flex flex-col justify-around md:pt-3 mb-5">
          <span className="xs:flex xs:flex-col xs:items-center xs:justify-center text-md">
            Klikni na svaku sliku za detaljnije objašnjenje
            <MousePointerClick className=" text-secondary" />
          </span>
          {category === "castle" && (
            <span className="flex flex-row items-center justify-center mt-4">
              <LucideSiren className="mr-2 text-secondary" /> Novo u ponudi -
              Mali Dvorac <LucideSiren className="ml-2 text-secondary" />
            </span>
          )}
        </div>

        {/* Responsive prikaz slika */}
        <div className="w-full max-w-screen-xl mx-auto">
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-6 px-6">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layoutId={item.id.toString()}
                className="cursor-pointer rounded-xl overflow-hidden shadow-md"
                onClick={(e) => {
                  setSelectedItem(item);
                  e.stopPropagation();
                }}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-70"
                />
              </motion.div>
            ))}
          </div>

          {/* Mobilni Swiper */}
          <div className="md:hidden block px-2">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {items.map((item) => (
                <SwiperSlide key={item.id}>
                  <motion.div
                    className="cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-60 rounded-xl shadow-md"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Jedinstveni modal za oba prikaza */}
        <AnimatePresence>
          {selectedItem && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                onClick={() => setSelectedItem(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <motion.div
                layoutId={selectedItem.id.toString()}
                className="fixed z-50 top-1/2 left-1/2 w-[90vw] max-w-xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <motion.img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h2
                  className="md:text-2xl! xs:text-xl! text-quinary! font-semibold mb-2"
                  dangerouslySetInnerHTML={{ __html: selectedItem.title }}
                />
                <p
                  className="text-quinary! md:text-lg! xs:text-base!"
                  dangerouslySetInnerHTML={{ __html: selectedItem.description }}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
        {/*********************************************************************************************/}
        <div className="flex flex-col justify-center items-center h-full w-full mt-5">
          <h3 className="md:text-2xl/2 xs:text-lg/2 inline-block md:mb-10 xs:mb-5 bg-primary pt-2 pr-2 pb-0 pl-2 ">
            Savršeni trenuci za najlepše proslave
          </h3>
          <div className="flex md:w-full xs:flex-col md:flex-row justify-evenly items-center">
            <div className="flex xs:mb-22 md:mb-0 mt-0 flex-col justify-center items-center text-center w-fit">
              <span className="md:text-xl xs:text-lg mb-1 text-quinary flex">
                Dečiji rođendani <Cake className="text-secondary ml-5" />
              </span>
              <span className="md:text-xl xs:text-lg mb-1 text-quinary flex">
                Krštenja <Church className="text-secondary ml-5" />
              </span>
              <span className="md:text-xl xs:text-lg mb-1 text-quinary flex">
                Devojačke večeri <PartyPopper className="text-secondary ml-5" />
              </span>
              <span className="md:text-xl xs:text-lg mb-1 text-quinary flex">
                Gender reveal <VenusAndMars className="text-secondary ml-5" />
              </span>
              <span className="md:text-xl xs:text-lg text-quinary flex">
                Svadbe <Gem className="text-secondary ml-5" />
              </span>
            </div>
            <div className="xs:w-full md:w-fit md:flex md:justify-between md:items-center md:flex-col">
              <Carousel
                opts={{
                  align: "start",
                }}
                orientation="vertical"
                className="w-full max-w-xs h-full"
              >
                <CarouselContent className="-mt-1 h-[200px] w-full">
                  {packageData.map((item, index) => (
                    <CarouselItem key={index} className="pt-1 xs:basis-1/2">
                      <Packages
                        title={item.title}
                        description={item.description}
                        price={item.price}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious
                  size="lg"
                  variant="destructive"
                  className="text-secondary"
                />
                <CarouselNext
                  size="sm"
                  variant="destructive"
                  className="text-secondary"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
