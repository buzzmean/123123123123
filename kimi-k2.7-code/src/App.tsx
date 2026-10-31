import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Zones } from "@/components/Zones";
import { Pricing } from "@/components/Pricing";
import { Equipment } from "@/components/Equipment";
import { Gallery } from "@/components/Gallery";
import { PlayStation } from "@/components/PlayStation";
import { Booking } from "@/components/Booking";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";
import type { ZoneId } from "@/data";

export default function App() {
  const [selectedZone, setSelectedZone] = useState<ZoneId | "">("");

  useEffect(() => {
    if (selectedZone) {
      const el = document.getElementById("booking");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [selectedZone]);

  const handleSelectZone = (zone: ZoneId) => {
    setSelectedZone(zone);
  };

  const handleZoneChange = (zone: ZoneId | "") => {
    setSelectedZone(zone);
  };

  return (
    <div className="min-h-screen bg-vionix-bg text-vionix-text">
      <Header />
      <main>
        <Hero />
        <Zones onSelectZone={handleSelectZone} />
        <Pricing onSelectZone={handleSelectZone} />
        <Equipment />
        <Gallery />
        <PlayStation />
        <Booking selectedZone={selectedZone} onZoneChange={handleZoneChange} />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
