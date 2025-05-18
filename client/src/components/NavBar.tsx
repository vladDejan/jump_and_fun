import { useEffect, useRef, useState } from "react";
import NavLogo from "../assets/images/logo.svg";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //Prati koja je sekcija trenutno "aktivna" (vidljiva u viewportu).
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-quinary transition ease transform duration-300`;

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // zatvaramo meni
    }
  };

  useEffect(() => {
    //Selektuje sve <section> elemente u DOM-u
    const sections = document.querySelectorAll("section");
    //Kreira observer koji "gleda" da li je 60% (threshold: 0.6) sekcije vidljivo.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          //Ako jeste, postavlja njen id kao activeSection
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Podesi kad da se aktivira (60% vidljiv)
    );
    //Aktivira observer za sve sekcije.
    sections.forEach((section) => observer.observe(section));
    //Gasi observer kada komponenta nestane.
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="md:flex md:flex-row md:items-center md:justify-between">
      <div className="md:flex xs:hidden items-center ml-12 mr-12">
        <img className="w-24" src={NavLogo} alt="logo_img" />
      </div>
      <div className="relative overflow-hidden whitespace-nowrap xs:w-3/4 xs:pt-2 md:pt-0 md:w-fit">
        <div className="inline-block animate-marquee">
          📢 Novi događaji ovog vikenda!{" "}
          <span className="text-secondary">Novo Naselje Fest</span>, dođite da
          se družimo! 📢
        </div>
      </div>
      {/* HAMBURGER MENU */}
      <div className="xs:flex xs:fixed xs:top-2 xs:right-6 md:hidden z-100 lg:hidden">
        <button
          className="flex flex-col h-12 w-12 rounded justify-center items-center group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isMenuOpen
                ? "rotate-45 translate-y-3 group-hover:bg-quinary"
                : " group-hover:bg-quinary"
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
                : " group-hover:bg-quinary"
            }`}
          />
        </button>
      </div>

      {/* Navigacija za veće ekrane */}
      <nav className="xs:hidden md:flex w-[50%] justify-end gap-6 mr-10">
        {["home", "services", "gallery", "reservation"].map((section) => (
          <button
            key={section}
            onClick={() => handleScroll(section)}
            role="link"
            className="flex cursor-pointer items-center relative after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
          >
            <span className="nav-text capitalize relative inline-block w-full">
              {section === "home"
                ? "O nama"
                : section === "services"
                ? "O programu"
                : section === "gallery"
                ? "Galerija"
                : "Rezervacije"}
            </span>
          </button>
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
        {["home", "services", "gallery", "reservation"].map((section) => (
          <button
            key={section}
            onClick={() => handleScroll(section)}
            role="link"
            className={`text-left text-base hover:text-primary transition-colors ${
              activeSection === section
                ? "text-primary font-semibold"
                : "text-quinary"
            }`}
          >
            {section === "home"
              ? "O nama"
              : section === "services"
              ? "O programu"
              : section === "gallery"
              ? "Galerija"
              : "Rezervacije"}
          </button>
        ))}
      </div>
    </div>
  );
};
