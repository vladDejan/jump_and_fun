import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "../index.css";

interface Card {
  id: number;
  title: string;
  image: string;
  description: string;
}

type AnimatedCardProps = {
  card: Card;
  delay: number;
};

// ✅ Animirana kartica kao odvojena komponenta
export const AnimatedCards = ({ card, delay }: AnimatedCardProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
     <>
       <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative group overflow-hidden rounded-lg shadow-lg aspect-square max-w-[500px] mx-auto w-full"
    >
      {/* Slika */}
      <img
        src={card.image}
        alt={card.title || "Bubble House"}
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      {/* Hover overlay za veće ekrane */}
      <div className="absolute inset-0 md:flex hidden flex-col justify-center items-center text-center px-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 !text-white">
        {card.title && <h3 className="!text-xl font-semibold mb-2">{card.title}</h3>}
        <p className="!text-base !text-white whitespace-pre-line">{card.description}</p>
      </div>

      
    </motion.div>
    </>
  );
};