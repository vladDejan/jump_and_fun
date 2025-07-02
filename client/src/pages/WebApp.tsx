import { Home } from "./Home";
import { ServicesPage } from "./Service";
import { ReservationPage } from "../components/Reservation";
import { Gallery } from "./Gallery";
import { FooterPage } from "../components/Footer";

export const WebApp = () => {
  return (
    <div className="overflow-y-auto z-20 relative">
      <section id="home" className="scroll-smooth snap-y snap-mandatory">
        <Home />
      </section>
      <section id="services" className="min-h-screen xs:mt-2 md:-mt-22">
        <ServicesPage />
      </section>
      <section id="reservation" className="snap-start min-h-screen xs:mt-55">
        <ReservationPage />
      </section>
      <section id="gallery" className="scroll-smooth snap-y snap-mandatory">
        <Gallery />
      </section>
      <section id="footer" className="snap-start">
        <FooterPage />
      </section>
    </div>
  );
};
