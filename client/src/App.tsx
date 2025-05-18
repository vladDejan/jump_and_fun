
import { Home } from "./pages/Home"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ServicesPage } from "./pages/Service";
import { ReservationPage } from "./components/Reservation";
import { WebApp } from "./pages/WebApp";
import { Gallery } from "./pages/Gallery";





function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<WebApp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
