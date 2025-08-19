import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

export const AddHomeSection = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className="w-full md:mt-22 backdrop-blur-xs rounded-xl p-2 xs:mt-10 flex justify-center items-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="md:w-1/3 xs:w-full flex flex-col justify-center items-center"
                    >
                      <h2 className="!text-quinary xs:!text-xl font-medium xs:!font-normal text-center">
                        Nudimo posebnu ponudu paketa po sniženim cenama, uz detaljan opis dobićete sve potrebne informacije.
                      </h2>
                      <button
                        onClick={() => navigate("/paketi")}
                        className="w-1/2 mt-10 py-2 px-5 rounded-lg text-white bg-primary hover:bg-secondary transition-all delay-75 cursor-pointer"
                      >
                        Pogledaj
                      </button>
                    </motion.div>
                  </div>
      </div>
  )
}
