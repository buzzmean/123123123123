export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  image: string;
  zones: string[];
}

export const equipment: EquipmentItem[] = [
  {
    id: "keyboard-rapid",
    name: "Logitech PRO X2 RAPID",
    category: "Клавиатура",
    image: "https://images.pexels.com/photos/8219211/pexels-photo-8219211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    zones: ["STANDARD", "ARENA", "DUO 24'"],
  },
  {
    id: "mouse-superstrike",
    name: "Logitech PRO X2 SUPERSTRIKE",
    category: "Мышь",
    image: "https://images.pexels.com/photos/9058886/pexels-photo-9058886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    zones: ["STANDARD", "ARENA", "DUO 27'", "DUO 24'"],
  },
  {
    id: "headset-lightspeed",
    name: "Logitech PRO X3 LIGHTSPEED",
    category: "Наушники",
    image: "https://images.pexels.com/photos/15840650/pexels-photo-15840650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    zones: ["STANDARD", "ARENA", "DUO 24'"],
  },
  {
    id: "keyboard-alumix",
    name: "Red Square ALUMIX",
    category: "Клавиатура",
    image: "https://images.pexels.com/photos/18311171/pexels-photo-18311171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    zones: ["BOOTCAMP"],
  },
];
