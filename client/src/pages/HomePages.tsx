import { Home } from "./Home";
import { ServicesPage } from "./Service";
import { FooterPage } from "../components/Footer";
import { AddHomeSection } from "@/components/AddHomeSection";
import { AddHomeSection1 } from "@/components/AddHomeSection1";

export const HomePage = () => {
  return (
    <>
      <section id="home" className="scroll-smooth snap-y snap-mandatory">
        <Home />
      </section>
      <section id="home" className="h-full">
        <ServicesPage />
      </section>
      <section id="home" className="h-full">
        <AddHomeSection1 />
      </section>
      <section id="home" className="h-full">
        <AddHomeSection />
      </section>
      <section id="footer" className="snap-start">
        <FooterPage />
      </section>
    </>
  );
};
