import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { VariantType } from "@/assets/services/variantType";
import { useNavigate } from "react-router-dom";

interface Card {
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

type AnimatedCardProps = {
  card: Card;
  delay: number;
};

export const AnimatedCardMobile = ({ card, delay }: AnimatedCardProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const navigate = useNavigate();

  const handleReserve = (variant: VariantType) => {
      navigate("/rezervacije", { state: { selectedVariant: variant } });
    };

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

        <div className="p-4 xs:flex flex-col">
          {card.title && (
            <h3 className="!text-lg !font-semibold mb-2">{card.title}</h3>
          )}
          <p className="!text-sm whitespace-pre-line mb-2">{card.description1}</p>
          <span className="!text-sm whitespace-pre-line">{card.dimension}</span>
          <span className="!text-sm whitespace-pre-line">{card.time}</span>
          <span className="!text-sm whitespace-pre-line">{card.capacity}</span>
          <span className="!text-sm whitespace-pre-line">{card.age}</span>
          <span className="!text-sm whitespace-pre-line">{card.price}</span>
        </div>
        <button
                onClick={() => handleReserve(card.variant)}
                className=" z-100 flex items-center cursor-pointer justify-center py-3 w-full bg-secondary text-white text-xs font-semibold rounded-b-xl rounded-t-none  shadow-lg"
              >
                Rezerviši
              </button>
      </motion.div>
    </div>
  );
};
