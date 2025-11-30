import { Helmet } from "react-helmet-async";
import { Home } from "./Home";
import { ServicesPage } from "./Service";
import { FooterPage } from "../components/Footer";
import { AddHomeSection } from "@/components/AddHomeSection";
import { AddHomeSection1 } from "@/components/AddHomeSection1";

export const HomePage = () => {
  return (
    <>
    <Helmet>
        <title>Jump and Fun - Iznajmljivanje Dvoraca za Dečije Rođendane | Novi Sad</title>
        <meta 
          name="description" 
          content="Iznajmite Bubble House i dvorce na naduvavanje za dečije rođendane u Novom Sadu. Montaža, osoblje i baloni uključeni. Rezervišite već danas za nezaboravnu proslavu!" 
        />
        <link rel="canonical" href="https://www.jumpandfun.rs/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Jump and Fun - Iznajmljivanje Dvoraca za Dečije Rođendane" />
        <meta property="og:description" content="Bubble House i dvorci na naduvavanje za nezaboravne dečije proslave u Novom Sadu. Montaža i osoblje uključeno." />
        <meta property="og:url" content="https://www.jumpandfun.rs/" />
        <meta property="og:image" content="https://www.jumpandfun.rs/og-home.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="sr_RS" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jump and Fun - Dečiji Rođendani" />
        <meta name="twitter:description" content="Iznajmite Bubble House i dvorce na naduvavanje za dečije rođendane u Novom Sadu." />
        <meta name="twitter:image" content="https://www.jumpandfun.rs/og-home.jpg" />
        
        {/* Additional SEO */}
        <meta name="keywords" content="dečiji rođendani, dvorac na naduvavanje, bubble house, iznajmljivanje, Novi Sad, proslave, krštenja" />
        <meta name="author" content="Jump and Fun" />
      </Helmet>
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
