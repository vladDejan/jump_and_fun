import gal4 from "./../assets/images/Gallery/gallery4.webp";
import gal5 from "./../assets/images/Gallery/gallery5.webp";
import gal6 from "./../assets/images/Gallery/gallery6.webp";
import gal8 from "./../assets/images/Gallery/gallery8.webp";
import gal9 from "./../assets/images/Gallery/gallery9.webp";
import gal10 from "./../assets/images/Gallery/gallery10.webp";
import gal11 from "./../assets/images/Gallery/gallery11.webp";
import gal12 from "./../assets/images/Gallery/gallery12.webp";
import gal13 from "./../assets/images/Gallery/gallery13.webp";
import gal14 from "./../assets/images/Gallery/gallery14.webp";
import gal15 from "./../assets/images/Gallery/gallery15.webp";
import gal16 from "./../assets/images/Gallery/gallery16.webp";
import galVideo from "./../assets/images/Gallery/video0.mp4";
import "../index.css";
import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { FooterPage } from "@/components/Footer";

//Definicija tipa za jedan el. u Gridu:
type GridItem = {
  src: string;
  col: number;
  row: number;
  colStart: number;
  rowStart: number;
};

// Helper funkcija koja kreira statičke Tailwind klase:
const getGridClass = ({ col, row, colStart, rowStart }: GridItem) => {
  const cls = [];

  if (col >= 1 && col <= 5) cls.push(`col-span-${col}`);
  if (row >= 1 && row <= 12) cls.push(`row-span-${row}`);
  if (colStart >= 1 && colStart <= 5) cls.push(`col-start-${colStart}`);
  if (rowStart >= 1 && rowStart <= 36) cls.push(`row-start-${rowStart}`);

  return cls.join(" ");
};

//Grupe slika:
const firstGroup = [
  { src: gal4, col: 3, row: 3, colStart: 1, rowStart: 1 },
  { src: gal5, col: 3, row: 3, colStart: 1, rowStart: 4 },
  { src: gal6, col: 2, row: 6, colStart: 4, rowStart: 1 },
  { src: gal8, col: 2, row: 6, colStart: 1, rowStart: 7 },
  { src: gal9, col: 3, row: 3, colStart: 3, rowStart: 7 },
  { src: gal10, col: 3, row: 3, colStart: 3, rowStart: 10 },
];

const secondGroupRaw = [
  { src: gal11, col: 3, row: 3, colStart: 1, rowStart: 1 },
  { src: gal12, col: 3, row: 3, colStart: 1, rowStart: 4 },
  { src: gal13, col: 2, row: 6, colStart: 4, rowStart: 1 },
  { src: gal14, col: 2, row: 6, colStart: 1, rowStart: 7 },
  { src: gal15, col: 3, row: 3, colStart: 3, rowStart: 7 },
  { src: gal16, col: 3, row: 3, colStart: 3, rowStart: 10 },
];

// Drugoj grupi slika pomeramo rowStart vrednosti kako bi se renderovale
// ispod prve grupe (da ne preklapaju).
const secondGroup: GridItem[] = secondGroupRaw.map((item) => ({
  ...item,
  rowStart: item.rowStart + 12,
}));

//Kombinacija obe grupe za render:
const allImages = [...firstGroup, ...secondGroup];

export const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false); //Otvaranje modala
  //Index trenutne slike
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

 /*  //Funkcije za otvaranje/zatvaranje modala:
  const openModal = (index: number) => {
    if (window.innerWidth >= 1120) return;
  setCurrentIndex(index);
  setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setCurrentIndex(null);
  };

  //Navigacija izmedju slika kada je modal otvoren:
  const nextImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % allImages.length);
  };
  const prevImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex - 1 + allImages.length) % allImages.length);
  };

  //Zatvara modal samo ako se klikne na tamnu pozadinu, a ne na samu sliku:
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "modal-overlay") {
      closeModal();
    }
  };

  // Registruje swipe gestove za navigaciju među slikama u modalu:
  const swipeHandlers = useSwipeable({
  onSwipedLeft: nextImage,
  onSwipedRight: prevImage,
  touchEventOptions: { passive: false },
  trackTouch: true,
}); */


// Detektuje kada video uđe/izađe iz vidljivog dela ekrana (viewporta),
//  i pušta/pauzira ga automatski:
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="p-4 space-y-2 mt-15 text-center">
      <h2 className="md:!text-2xl/2 xs:text-lg/2 !font-medium w-fit inline-block mb-10 bg-primary pt-2 pr-2 pb-0 pl-2 text-center !text-quinary">
        Galerija
      </h2>
      {/* Dummy div sa svim klasama koje su potrebne Tailwindu */}
      <div
        className="hidden
        col-span-1 col-span-2 col-span-3 col-span-4 col-span-5
        row-span-1 row-span-2 row-span-3 row-span-4 row-span-5 row-span-6 row-span-12
        col-start-1 col-start-2 col-start-3 col-start-4 col-start-5
        row-start-1 row-start-2 row-start-3 row-start-4 row-start-5 row-start-6
        row-start-7 row-start-8 row-start-9 row-start-10 row-start-11 row-start-12
        row-start-13 row-start-14 row-start-15 row-start-16 row-start-17 row-start-18
        row-start-19 row-start-20 row-start-21 row-start-22 row-start-23 row-start-24
      "
      />

      <div className="grid grid-cols-5 grid-rows-[repeat(24, minmax(0,1fr))] gap-2">
        {allImages.map((item, index) => (
          <div key={index} className={getGridClass(item)}>
            <img
              src={item.src}
              alt={`gallery-${index}`}
              className="w-full h-full object-cover rounded"
            />
          </div>
        ))}
      </div>

      {/* Video sekcija */}
      <div>
        <video
          ref={videoRef}
          src={galVideo}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          controls
          poster="/fallback.jpg"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    {/*   {isOpen && currentIndex !== null && (
  <div
    id="modal-overlay"
    onClick={handleOverlayClick}
    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
  >
    <div
      {...swipeHandlers}
      className="max-w-full max-h-full"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={allImages[currentIndex].src}
        className="max-w-full max-h-full object-contain"
        alt="fullscreen"
      />
    </div>
  </div>
)} */}
<FooterPage />
    </div>
  );
};
