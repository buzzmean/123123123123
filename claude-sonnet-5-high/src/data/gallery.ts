export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  size?: "tall" | "wide" | "normal";
}

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "/images/hero.jpg", alt: "Игровой зал VIONIX с рядами ПК", size: "wide" },
  { id: "g2", src: "/images/gallery-1.jpg", alt: "Зона отдыха и ресепшн VIONIX", size: "tall" },
  { id: "g3", src: "/images/zone-arena.jpg", alt: "Зона ARENA с изогнутыми мониторами", size: "normal" },
  { id: "g4", src: "/images/gallery-2.jpg", alt: "Крупный план игрового рабочего места", size: "normal" },
  { id: "g5", src: "/images/zone-bootcamp.jpg", alt: "Тренировочная зона BOOTCAMP", size: "wide" },
  { id: "g6", src: "/images/zone-duo27.jpg", alt: "Приватный бокс DUO 27 дюймов", size: "tall" },
  { id: "g7", src: "/images/gallery-3.jpg", alt: "Лаунж-зона с баром VIONIX", size: "normal" },
  { id: "g8", src: "/images/zone-duo24.jpg", alt: "Приватный бокс DUO 24 дюйма", size: "normal" },
  { id: "g9", src: "/images/zone-ps5.jpg", alt: "Зона PlayStation 5", size: "wide" },
];
