import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";
import CastleIcon from "../assets/images/castleLink.svg?react";
import BubbleIcon from "../assets/images/bubbleLink.svg?react";
import MiniCastleIcon from "../assets/images/miniCastleLink.svg?react";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-quinary transition ease transform duration-300`;

   // prati scroll smer
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // skrolujem NA GORE → prikazi navbar
        setShowNavbar(true);
      } else {
        // skrolujem NA DOLE → sakrij navbar
        setShowNavbar(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mapa navigacionih stavki
  const navItems = [
    { label: "O nama", to: "/" },
    { label: "Paketi", to: "/paketi" },
    { label: "Galerija", to: "/gallery" },
    { label: "Rezervacije", to: "/rezervacije" },
  ];

  // Proverava da li je link aktivan
  const isActive = (to: string) => {
    const [path, hash] = to.split("#");
    return (
      location.pathname === path && (!hash || location.hash === `#${hash}`)
    );
  };

  return (
    <div className={`md:fixed xs:absolute top-0 left-0 xs:top-0 xs:bg-white/0 md:bg-white/70 w-full md:flex md:flex-col md:items-center md:justify-center md:shadow-md md:z-50 md:transition-transform md:duration-500 ${showNavbar ? "md:translate-y-0" : "md:-translate-y-full"}`}>
      {/* Marquee oglas */}
      <div className="overflow-hidden whitespace-nowrap xs:w-3/4 xs:pt-2 md:pt-0 md:w-1/3 md:flex">
        <div className="inline-block animate-marquee">
          📢 Novo u ponudi! <span className="text-secondary">🌼Paket 1:</span>{" "}
          Veliki dvorac + Mali beli dvorac{" "}
          <span className="text-secondary">🌼Paket 2:</span> Bubble House +
          Veliki dvorac <span className="text-secondary">🌼Paket 3:</span>{" "}
          Bubble House + Mali beli dvorac{" "}
          <span className="text-secondary">🌼Paket 4:</span> Veliki dvorac +
          Mali beli dvorac + Bubble House{" "}
          <span className="text-secondary ml-2">+ Dodaci:</span>{" "}
          <span className="ml-2">🏹🎯 Luk i strela 500rsd</span>{" "}
          <span className="ml-2">⭕🏀 Koš sa loptom 500rsd</span>{" "}
          <span className="ml-2">🥅⚽ Golovi i lopta 500rsd</span> 📢
        </div>
      </div>

      {/* Hamburger meni dugme */}
      <div className="xs:flex xs:fixed xs:top-2 xs:right-6 md:hidden xs:z-100 lg:hidden">
        <button
          className="flex flex-col h-12 w-12 rounded justify-center items-center group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isMenuOpen
                ? "rotate-45 translate-y-3 group-hover:bg-quinary"
                : "group-hover:bg-quinary"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isMenuOpen ? "opacity-0" : "group-hover:bg-quinary"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isMenuOpen
                ? "-rotate-45 -translate-y-3 group-hover:bg-quinary"
                : "group-hover:bg-quinary"
            }`}
          />
        </button>
      </div>

      {/* Navigacija za veće ekrane */}
      <nav className="xs:hidden md:flex w-[70%] justify-center gap-6 mt-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`text-quinary relative after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100`}
              >
                <span className="nav-text capitalize relative inline-block w-full">
                  Program
                </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-quaternary border-none">
                <ul className="grid gap-3 p-4 w-48">
                  <li>
                    <NavigationMenuLink className="flex flex-row" asChild>
                      <Link
                        to="/programs/bubble-house"
                        className="text-sm hover:text-secondary transition-colors"
                      >
                        <BubbleIcon className="" />
                        Bubble House
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink className="flex flex-row" asChild>
                      <Link
                        to="/programs/veliki-dvorac"
                        className="text-sm hover:text-secondary transition-colors"
                      >
                        <CastleIcon className="" />
                        Veliki Dvorac
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink className="flex flex-row" asChild>
                      <Link
                        to="/programs/mali-dvorac"
                        className="text-sm hover:text-secondary transition-colors"
                      >
                        <MiniCastleIcon className="" />
                        Mali Dvorac
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {navItems.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            className={`flex cursor-pointer items-center relative after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 ${
              isActive(to) ? "text-primary font-semibold" : "text-quinary"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="nav-text capitalize relative inline-block w-full">
              {label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Mobilni dropdown meni */}
      <div
        className={`xs:fixed top-0 right-0 bg-white shadow-md rounded-md p-4 z-50 flex flex-col justify-center items-center gap-4 md:hidden w-full transition-all duration-500 ease-in-out
        ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full">
          <button
            className="w-full text-center text-base text-quinary hover:text-primary flex justify-center items-center"
            onClick={() => setIsProgramOpen(!isProgramOpen)}
          >
            Program
            <span
              className={`transition-transform ${
                isProgramOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <ChevronDown className="w-4 h-4" />
            </span>
          </button>

          {isProgramOpen && (
            <div className="mt-2 ml-0 flex flex-col gap-2">
              <div className="flex flex-row justify-center items-center">
                <Link
                  to="/programs/bubble-house"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm flex text-quinary justify-center items-center hover:text-primary"
                >
                  <BubbleIcon className="flex w-6 h-6 mr-1" />
                  Bubble House
                </Link>
              </div>
              <div className="flex flex-row justify-center items-center">
                <Link
                  to="/programs/veliki-dvorac"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm flex text-quinary justify-center items-center hover:text-primary"
                >
                  <CastleIcon className="flex w-6 h-6 mr-1" />
                  Veliki dvorac
                </Link>
              </div>
              <div className="flex flex-row justify-center items-center">
                <Link
                  to="/programs/mali-dvorac"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm flex text-quinary justify-center items-center hover:text-primary"
                >
                  <MiniCastleIcon className="flex w-6 h-6 mr-1" />
                  Mali dvorac
                </Link>
              </div>
            </div>
          )}
        </div>
        {navItems.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            onClick={() => setIsMenuOpen(false)}
            className={`text-left text-base hover:text-primary transition-colors ${
              isActive(to) ? "text-primary font-semibold" : "text-quinary"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};
