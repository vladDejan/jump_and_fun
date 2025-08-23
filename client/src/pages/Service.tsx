import { castleService } from "../assets/services/castle";
import { bubbleService } from "../assets/services/bubble";
import { miniCastleService } from "../assets/services/miniCastle";
import CastleIcon from "../assets/images/castleLink.svg?react";
import BubbleIcon from "../assets/images/bubbleLink.svg?react";
import MiniCastleIcon from "../assets/images/MiniCastleLink.svg?react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { ChevronLeft, ChevronRight, MousePointerClick } from "lucide-react";

// Definišemo interfejs koji opisuje strukturu jednog objekta
interface ServiceItem {
  id: number; //jedinstveni identifikator
  image: string;
  description: string;
}

export const ServicesPage: React.FC = () => {
  //Trenutno izabrana kategorija ("bubble" ili "castle").
  const [category, setCategory] = useState<"bubble" | "castle" | "miniCastle">(
    "bubble"
  );
  //Niz objekata koji se prikazuju (zavisi od kategorije).
  const [items, setItems] = useState<ServiceItem[]>(bubbleService);
  //Trenutno izabrana kartica za uvecani prikaz.
  const [selectedItem, setSelectedItem] = useState<ServiceItem | null>(null);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  //Menjanje kategorije i postavljanje odgovarajućeg niza servisa.
  const changeCategory = (newCategory: "bubble" | "castle" | "miniCastle") => {
    setCategory(newCategory);
    setItems(newCategory === "bubble"
      ? bubbleService
      : newCategory === "castle"
      ? castleService
      : miniCastleService);
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
    <div className="relative md:-mt-20 xs:mt-0 xs:h-full">
      <div ref={triggerRef} className="h-10" />
      <div
        ref={servicesRef}
        className="h-full justify-between xs:justify-center flex flex-col items-center"
      >
        {/******* STICKY NAV DESKTOP ********/}
        {/* Kada je veci ekran nema sticky navigaciju */}
        {!showStickyNav && (
          <div className="hidden md:flex md:flex-row md:justify-center md:items-center md:w-full">
            <header className="flex gap-10 bg-white rounded-full items-center justify-center p-4 w-1/4">
              <div className="flex flex-col items-center justify-center">
                <button
                  className={`cursor-pointer items-center justify-center flex flex-col leading-6 ${
                    category === "bubble" ? "text-primary" : ""
                  }`}
                  onClick={() => changeCategory("bubble")}
                >
                  <BubbleIcon
                    className={`svg-active ${
                      category === "bubble" ? "svgActive" : ""
                    }`}
                  />
                  Bubble House
                </button>
              </div>
              <div className="flex flex-col">
                <button
                  className={`cursor-pointer items-center justify-center flex flex-col leading-6 ${
                    category === "castle" ? "text-primary" : ""
                  }`}
                  onClick={() => changeCategory("castle")}
                >
                  <CastleIcon
                    className={`svg-active ${
                      category === "castle" ? "svgActive" : ""
                    }`}
                  />
                  Veliki Dvorac
                </button>
              </div>
              <div className="flex flex-col">
                <button
                  className={`cursor-pointer items-center justify-center flex flex-col leading-6 ${
                    category === "miniCastle" ? "text-primary" : ""
                  }`}
                  onClick={() => changeCategory("miniCastle")}
                >
                  <MiniCastleIcon
                    className={`svg-active ${
                      category === "miniCastle" ? "svgActive" : ""
                    }`}
                  />
                  Mali Dvorac
                </button>
              </div>
            </header>
          </div>
        )}
        {/*********************************************************************************************/}

        {/******* STICKY NAV MOBILE ********/}
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
              <header className="flex gap-12 w-full bg-quaternary rounded-t-2xl justify-center py-4">
                <div className="flex flex-col">
                  <button
                    className={`cursor-pointer !text-xs items-center justify-center flex flex-col leading-6 ${
                      category === "bubble" ? "text-primary" : ""
                    }`}
                    onClick={() => changeCategory("bubble")}
                  >
                    <BubbleIcon
                      className={`svg-active w-6 h-6 ${
                        category === "bubble" ? "svgActive" : ""
                      }`}
                    />
                    Bubble House
                  </button>
                </div>
                <div className="flex flex-col">
                  <button
                    className={`cursor-pointer !text-xs items-center justify-center flex flex-col leading-6 ${
                      category === "castle" ? "text-primary" : ""
                    }`}
                    onClick={() => changeCategory("castle")}
                  >
                    <CastleIcon
                      className={`svg-active w-6 h-6 ${
                        category === "castle" ? "svgActive" : ""
                      }`}
                    />
                    Veliki Dvorac
                  </button>
                </div>
                <div className="flex flex-col">
                  <button
                    className={`cursor-pointer !text-xs items-center justify-center flex flex-col leading-6 ${
                      category === "miniCastle" ? "text-primary" : ""
                    }`}
                    onClick={() => changeCategory("miniCastle")}
                  >
                    <MiniCastleIcon
                      className={`svg-active w-6 h-6 ${
                        category === "miniCastle" ? "svgActive" : ""
                      }`}
                    />
                    Mali Dvorac
                  </button>
                </div>
              </header>
            </motion.div>
          </AnimatePresence>
        )}
        {/*********************************************************************************************/}

        {/******* RESPONSIVE PRIKAZ SLIKA ********/}
        <div className="w-full max-w-screen-xl mx-auto mt-6">
          {/* DESKTOP */}
          <div className="hidden md:grid grid-cols-1 gap-6 px-6">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-1/2 flex justify-center">
                  <img
                    src={item.image}
                    alt={item.image}
                    className="w-full h-auto object-cover rounded-xl shadow-md"
                  />
                </div>
                <div className="w-1/2 flex flex-col justify-center">
                  <span
                    className="text-base! text-quinary! opacity-50!"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* MOBILNI SWIPER */}
          <div className="md:hidden block px-2 h-full">
            <div className="flex justify-center items-center mb-8">
              <ChevronLeft className="mr-5" /><span className="text-primary flex items-center text-xs">Skroluj i klikni na sliku za više informacija <MousePointerClick className="text-primary text-sm" /></span><ChevronRight className="ml-5 text-sm" />
            </div>
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
                      alt={item.image}
                      className="object-cover w-full h-60 rounded-xl shadow-md"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
          {/* Modal za mob. tel. */}
        <AnimatePresence>
          {selectedItem && (
            <div className="md:hidden">
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
                  alt={selectedItem.image}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <p
                  className="text-quinary !text-sm"
                  dangerouslySetInnerHTML={{ __html: selectedItem.description }}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
      
    </div>
  );
};
