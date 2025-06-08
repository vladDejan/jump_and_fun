import { NavBar } from "@/components/NavBar";
import "../index.css";
import NavLogo from "../assets/images/logo.svg";

export const Home = () => {
  return (
    <div className="md:homebg mobHomebg flex flex-col">
        
        <NavBar />
      <div className="flex-1 flex justify-center items-center mb-16">
        <div className="xs:w-full xs:p-2 md:w-1/2">
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
              Deca mogu uživati u elegantnom igralištu koje je pažljivo
              dizajnirano kako bi im pružilo bezbednu zabavu. Roditelji se mogu
              opustiti znajući da je prostor pažljivo osmišljen s njihovom
              bezbednošću u vidu.
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
