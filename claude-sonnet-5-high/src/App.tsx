import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Zones from "./components/Zones";
import Pricing from "./components/Pricing";
import Equipment from "./components/Equipment";
import Gallery from "./components/Gallery";
import PS5 from "./components/PS5";
import Booking from "./components/Booking";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default function App() {
  const [bookingZone, setBookingZone] = useState<string | null>(null);
  const [bookingNonce, setBookingNonce] = useState(0);

  const handleSelectZone = (zoneId: string) => {
    setBookingZone(zoneId);
    setBookingNonce((n) => n + 1);
  };

  return (
    <div className="min-h-screen bg-[#171513] text-cream">
      <Header />
      <main>
        <Hero />
        <About />
        <Zones onSelectZone={handleSelectZone} />
        <Pricing onSelectZone={handleSelectZone} />
        <Equipment />
        <Gallery />
        <PS5 />
        <Booking key={bookingNonce} presetZone={bookingZone} />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
