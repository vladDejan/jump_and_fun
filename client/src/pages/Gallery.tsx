import gal4 from "./../assets/images/Gallery/gallery4.jpg";
import gal5 from "./../assets/images/Gallery/gallery5.jpg";
import gal6 from "./../assets/images/Gallery/gallery6.jpg";
import gal8 from "./../assets/images/Gallery/gallery8.jpg";
import gal9 from "./../assets/images/Gallery/gallery9.jpg";
import gal10 from "./../assets/images/Gallery/gallery10.jpg";
import gal11 from "./../assets/images/Gallery/gallery11.jpg";
import gal12 from "./../assets/images/Gallery/gallery12.jpg";
import gal13 from "./../assets/images/Gallery/gallery13.jpg";
import gal14 from "./../assets/images/Gallery/gallery14.jpg";
import gal15 from "./../assets/images/Gallery/gallery15.jpg";
import gal16 from "./../assets/images/Gallery/gallery16.jpg";
import galVideo from "./../assets/images/Gallery/video0.mp4";
import "../index.css";

type GridItem = {
  col: number;
  row: number;
  colStart: number;
  rowStart: number;
};

// Helper funkcija koja kreira statičke Tailwind klase
const getGridClass = ({ col, row, colStart, rowStart }: GridItem) => {
  const cls = [];

  if (col >= 1 && col <= 5) cls.push(`col-span-${col}`);
  if (row >= 1 && row <= 12) cls.push(`row-span-${row}`);
  if (colStart >= 1 && colStart <= 5) cls.push(`col-start-${colStart}`);
  if (rowStart >= 1 && rowStart <= 12) cls.push(`row-start-${rowStart}`);

  return cls.join(" ");
};

const firstGroup = [
  { src: gal4, col: 3, row: 3, colStart: 1, rowStart: 1 },
  { src: gal5, col: 3, row: 3, colStart: 1, rowStart: 4 },
  { src: gal6, col: 2, row: 6, colStart: 4, rowStart: 1 },
  { src: gal8, col: 2, row: 6, colStart: 1, rowStart: 7 },
  { src: gal9, col: 3, row: 3, colStart: 3, rowStart: 7 },
  { src: gal10, col: 3, row: 3, colStart: 3, rowStart: 10 },
];

const secondGroup = [
  { src: gal11, col: 3, row: 3, colStart: 1, rowStart: 1 },
  { src: gal12, col: 3, row: 3, colStart: 1, rowStart: 4 },
  { src: gal13, col: 2, row: 6, colStart: 4, rowStart: 1 },
  { src: gal14, col: 2, row: 6, colStart: 1, rowStart: 7 },
  { src: gal15, col: 3, row: 3, colStart: 3, rowStart: 7 },
  { src: gal16, col: 3, row: 3, colStart: 3, rowStart: 10 },
];

export const Gallery = () => {
  return (
    <div className="p-4 space-y-2">
      {/* Dummy div sa svim klasama koje su potrebne Tailwindu */}
      <div className="hidden
        col-span-1 col-span-2 col-span-3 col-span-4 col-span-5
        row-span-1 row-span-2 row-span-3 row-span-4 row-span-5 row-span-6 row-span-12
        col-start-1 col-start-2 col-start-3 col-start-4 col-start-5
        row-start-1 row-start-2 row-start-3 row-start-4 row-start-5 row-start-6
        row-start-7 row-start-8 row-start-9 row-start-10 row-start-11 row-start-12
      " />

      {/* Prva grupa */}
      <div className="grid grid-cols-5 grid-rows-12 gap-2">
        {firstGroup.map((item, index) => (
          <div key={index} className={getGridClass(item)}>
            <img
              src={item.src}
              alt={`gallery-${index}`}
              className="w-full h-full object-cover rounded"
            />
          </div>
        ))}
      </div>

      {/* Druga grupa */}
      <div className="grid grid-cols-5 grid-rows-12 gap-2">
        {secondGroup.map((item, index) => (
          <div key={index} className={getGridClass(item)}>
            <img
              src={item.src}
              alt={`gallery-${index + firstGroup.length}`}
              className="w-full h-full object-cover rounded"
            />
          </div>
        ))}
      </div>

      {/* Video sekcija */}
      <div>
        <video
          src={galVideo}
          autoPlay
          muted
          loop
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};