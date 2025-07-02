import { NavBar } from "@/components/NavBar";
import "../index.css";
import NavLogo from "../assets/images/logo.svg";
import { Instagram, Mail, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="md:homebg mobHomebg justify-center flex flex-col">
      <NavBar />
      <div className="grid mt-10 grid-cols-3 grid-rows-1 xs:gap-0 md:gap-2 mb-2 self-center md:w-1/3 xs:w-full">
            <Link
              className="flex justify-end"
              to={"https://www.instagram.com/jump_and_fun_serbia/"}
              target="_blank"
            >
              <span className="flex text-xs text-quinary items-center">
                <Instagram className="w-10 text-primary" />
              </span>
            </Link>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jumpandfunserbia@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center"
            >
              <span className="flex text-xs text-quinary items-center">
                <Mail className="w-10 text-primary" />
              </span>
            </a>
            <a className="flex justify-start" href="tel:+381641234567">
              <span className="flex text-xs font-medium text-quinary items-center">
                <PhoneCall className="w-10 mr-1 text-primary" />+381 69 2353249
              </span>
            </a>
          </div>
      <div className="flex-1 flex justify-center flex-col items-center mb-16">
        
        <div className="flex flex-col xs:w-full xs:p-2 md:w-1/2">
          <div className="md:hidden xs:flex xs:items-center xs:justify-center xs:mb-6">
            <img className="w-24" src={NavLogo} alt="logo_img" />
          </div>
          <div>
            <h1 className="xs:text-5xl! uppercase text-center mb-6">
              Jump<span className="text-secondary">&</span>Fun
            </h1>
          </div>
          <div>
            <p className="text-center text-quinary!">
              Proslavite nezaboravne trenutke uz bele dvorce i Bubble House!
              Elegantna dekoracija, beskrajna zabava, savršeno za svaki poseban
              dan.
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
      </div>
    </div>
  );
};
