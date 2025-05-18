import image1 from "../images/bubble/bubble0.png"
import image2 from "../images/bubble/bubble1.png"
import image3 from "../images/bubble/bubble2.png"

export const bubbleService = () => [
  {
    id: 1,
    image: image1 as string,
    title: "Zašto BubbleHouse ?",
    description:
      "Svaki detalj, od dekoracija do aktivnosti, pažljivo je biran kako bi se stvorila atmosfera iz bajke.",
  },
  {
    id: 2,
    image: image2 as string,
    title: "Dizajn i Materijal",
    description:
      "Napravljen od visokokvalitetnog PVC materijala, prozirnog kako bi stvorio efekat mehura. Potpuno bezbedan za decu, netoksičan, otporan na ogrebotine sa UV zaštitom ako se koristi na otvorenom. Ima ventilacione otvore koji omogućavaju neprestan protok vazduha sa laganom konstrukcijom sa šavovima pojačanim termičkom obradom.",
  },
  {
    id: 3,
    image: image3 as string,
    title: "Dimenzije i Program",
    description:
      "<p><span class='margin-bottom: 10px'>Dimenzije:</span> 4.5 x 3 x 2.5m</p><p><span>Trajanje:</span>3h</p><p>200€</p>",
  },
];
