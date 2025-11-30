import "../index.css";
import NavLogo from "../assets/images/logo.svg";
import { Instagram, Mail, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
  const floatVariant = {
    animate1: {
      y: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
    animate2: {
      y: [0, 5, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
    animate3: {
      y: [0, -3, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };
  return (
    <div className="md:homebg relative px-2 mobHomebg justify-center flex flex-col">
      <motion.div className="xs:grid md:flex md:flex-col md:justify-baseline md:absolute md:left-1 md:mt-0 xs:mt-10 xs:grid-cols-3 xs:grid-rows-1 xs:gap-0 md:gap-8 mb-2 xs:self-center xs:w-full md:w-fit">
        <motion.div className="z-50" variants={floatVariant} animate="animate1">
          <Link
            className="flex xs:justify-end md:justify-start cursor-pointer"
            to="https://www.instagram.com/jump_and_fun_serbia/"
            target="_blank"
          >
            <span className="flex text-xs text-quinary items-center">
              <Instagram className="w-12 text-primary hover:text-secondary" />
            </span>
          </Link>
        </motion.div>

        <motion.div className="z-50" variants={floatVariant} animate="animate2">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jumpandfunserbia@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex xs:justify-center md:justify-start cursor-pointer"
          >
            <span className="flex text-xs text-quinary items-center">
              <Mail className="w-12 text-primary hover:text-secondary" />
            </span>
          </a>
        </motion.div>

        <motion.div className="group z-50" variants={floatVariant} animate="animate3">
          <a
            className="flex xs:justify-start md:justify-start cursor-pointer"
            href="tel:+381628476247"
          >
            <span className="flex flex-col text-xs font-medium text-quinary items-center">
              <PhoneCall className="w-12 mr-1 flex text-primary group-hover:text-secondary" />
              <span className="xs:hidden md:hidden group-hover:flex bg-secondary text-white">
              +381628476247
            </span>
            </span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="flex-1 flex relative justify-center flex-col items-center mb-16"
      >
        <div className="flex flex-col xs:w-full xs:p-2 md:w-1/2">
          <div className="md:flex xs:flex xs:items-center xs:justify-center xs:mb-6">
            <img className="w-34" src={NavLogo} alt="logo_img" />
          </div>
          <div>
            <h1 className="xs:text-5xl! uppercase text-center mb-6">
              Jump<span className="text-secondary">&</span>Fun
            </h1>
          </div>
          <div>
            <p className="text-center md:!text-xl xs:!text-lg xs:!font-medium text-quinary!">
              Iznajmljivanje belih, tematskih dvoraca i Bubble House za proslave u Novom Sadu i Srbiji.
            </p>
          </div>
          <div className="flex justify-center mt-6 ">
            <button
              onClick={() =>
                document
                  .getElementById("gallery")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="py-2 px-8 rounded-lg text-white bg-primary hover:bg-secondary transition-all delay-75 cursor-pointer"
            >
              Pogledaj Galeriju
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
