import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

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

export const AnimatedCardMobile = ({ card, delay }: AnimatedCardProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="p-4 backdrop-blur-xs rounded-xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }} className="relative group overflow-hidden rounded-lg shadow-lg max-w-[500px] mx-auto w-full bg-white">
        <img
          src={card.image}
          alt={card.title || "Bubble House"}
          className="w-full object-cover transition-opacity duration-300"
        />

        <div className="p-4 block md:hidden">
          {card.title && (
            <h3 className="!text-lg !font-semibold mb-2">{card.title}</h3>
          )}
          <p className="!text-sm whitespace-pre-line">{card.description}</p>
        </div>
      </motion.div>
    </div>
  );
};
