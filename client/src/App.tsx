
import { Home } from "./pages/Home"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ReservationPage } from "./components/Reservation";
import { Gallery } from "./pages/Gallery";
import { HomePage } from "./pages/HomePages";
import { Packages } from "./components/Packages";
import { NavBar } from "./components/NavBar";
import { BubbleHouse } from "./pages/BubbleHouse";
import { VelikiDvorac } from "./pages/VelikiDvorac";
import { MaliDvorac } from "./pages/MaliDvorac";
import { ScrollToTop } from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";





function App() {

  return (
    <div>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/paketi" element={<Packages />} />
          <Route path="/rezervacije" element={<ReservationPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/programs/bubble-house" element={<BubbleHouse />} />
          <Route path="/programs/veliki-dvorac" element={<VelikiDvorac />} />
          <Route path="/programs/mali-dvorac" element={<MaliDvorac />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
