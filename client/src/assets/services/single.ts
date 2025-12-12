// src/data/packages.ts
import SingBubble from "../images/singbubble.webp";
import SingCastle from "../images/singcastle.webp";
import SingMiniCastle from "../images/singminicastle.webp";
import SingOctopus from "../images/singOctopus.webp";
import { VariantType } from "./variantType";

export interface Package {
  id: number;
  variant: VariantType;
  image: string;
  title: string;
  description1: string;
  price?: string;
  age: string;
  dimension?: string;
  time?: string;
  capacity?: string;
}

export const singles: Package[] = [
  {
    id: 1,
    variant: "bubblehouse",
    image: SingBubble,
    title: `🎈 Bubble House`,
    description1: `Hit na dečijim proslavama – bela kupola puna balona, idealna za rođendane i posebne događaje.`,
    price: `💶 150€`,
    age: `2–6 godina`,
    dimension: `Dimenzije(D×Š×V): 3 × 4.5 × 2.5 m`,
    capacity: `Kapacitet: do 5 dece`,
    time: `Trajanje: 3h`,
  },
  {
    id: 2,
    variant: "bouncecastle",
    image: SingCastle,
    title: `🤍 Elegantni beli dvorac`,
    description1: `Nezaobilazan deo svake proslave – idealan za venčanja, krštenja i dečije proslave.`,
    price: `💶 170€`,
    age: `2–10 godina`,
    dimension: `Dimenzije(D×Š×V): 4 × 4 × 3.55m
                           4 × 4 × 3.3m
                           4 × 4 × 3m`,
    capacity: `Kapacitet: do 10 dece`,
    time: `Trajanje: 4h`,
  },
  {
    id: 3,
    variant: "minibouncecastle",
    image: SingMiniCastle,
    title: `🤍 Mali beli dvorac`,
    description1: `Kompaktan dvorac sa bazenom loptica – idealan za rođendane, krštenja i manje proslave.`,
    price: `💶 99€`,
    age: `1–4 godina`,
    dimension: `Dimenzije(D×Š×V): 3 × 3 × 2.5 m`,
    capacity: `Kapacitet: do 5 dece`,
    time: `Trajanje: 4h`,
  },
  {
    id: 4,
    variant: "hobotnica",
    image: SingOctopus,
    title: `🐙 Hobotnica Tematski Dvorac`,
    description1: `Hobotnica Tematski Dvorac je pravi hit na svakoj proslavi! Veselih boja i atraktivnog dizajna, privlači pažnju dece svih uzrasta i garantuje sate bezbrižne zabave.`,
    price: `💶 250€`,
    age: `1–10 godina`,
    dimension: `Dimenzije(D×Š×V): 5 × 5 × 3.55 m`,
    capacity: `Kapacitet: do 12 dece`,
    time: `Trajanje: 4h`,
  },
];
