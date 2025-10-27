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

export const AnimatedCards = ({ card, delay }: AnimatedCardProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="rounded-lg shadow-lg max-w-[500px] mx-auto w-full overflow-hidden"
    >
      {/* Slika */}
      <img
        src={card.image}
        alt={card.title || "Bubble House"}
        className="w-full h-auto object-cover"
      />

      {/* Tekst ispod slike */}
      <div className="p-4 flex flex-col text-quinary! justify-center items-center text-center">
        {card.title && (
          <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
        )}
        <p className="text-sm! whitespace-pre-line">{card.description}</p>
      </div>
    </motion.div>
  );
};
