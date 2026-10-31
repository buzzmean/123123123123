export interface ZoneSpec {
  label: string;
  value: string;
}

export interface Zone {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  specs: ZoneSpec[];
  price1h: number;
  price3h: number;
  price5h: number;
  seats: string;
  featured?: boolean;
}

export const zones: Zone[] = [
  {
    id: "standard",
    name: "STANDARD",
    tagline: "Базовый комфорт",
    description:
      "Отличный выбор для тех, кто хочет провести время за требовательными играми без лишних трат. Мощная конфигурация, качественная периферия и удобное рабочее место.",
    image: "/images/zone-standard.jpg",
    specs: [
      { label: "Монитор", value: "27\", 165 Гц" },
      { label: "Кресло", value: "Игровое, эргономичное" },
      { label: "Формат", value: "Одиночное место" },
    ],
    price1h: 180,
    price3h: 430,
    price5h: 680,
    seats: "Одиночные места",
  },
  {
    id: "arena",
    name: "ARENA",
    tagline: "Для соревновательной игры",
    description:
      "Места повышенного уровня для тех, кто ценит скорость отклика и точность. Усиленная конфигурация и расширенное пространство вокруг рабочего места.",
    image: "/images/zone-arena.jpg",
    specs: [
      { label: "Монитор", value: "27\", 165+ Гц" },
      { label: "Кресло", value: "Премиум, с увеличенной поддержкой" },
      { label: "Формат", value: "Одиночное место" },
    ],
    price1h: 230,
    price3h: 550,
    price5h: 850,
    seats: "Одиночные места",
    featured: true,
  },
  {
    id: "bootcamp",
    name: "BOOTCAMP",
    tagline: "Профессиональная подготовка",
    description:
      "Зона для серьёзной тренировки и командных сборов. Профессиональная периферия, тишина и концентрация — всё, что нужно для системного роста в игре.",
    image: "/images/zone-bootcamp.jpg",
    specs: [
      { label: "Монитор", value: "27\", высокая частота" },
      { label: "Клавиатура", value: "Red Square ALUMIX" },
      { label: "Формат", value: "Одиночное / командное" },
    ],
    price1h: 270,
    price3h: 650,
    price5h: 1050,
    seats: "Одиночные и командные места",
  },
  {
    id: "duo27",
    name: "DUO 27'",
    tagline: "Игра вдвоём, большой экран",
    description:
      "Отдельное пространство на двоих с мониторами 27 дюймов. Подходит для игры с другом или партнёром без лишних глаз вокруг.",
    image: "/images/zone-duo27.jpg",
    specs: [
      { label: "Монитор", value: "27\"" },
      { label: "Формат", value: "Приватный бокс на 2 места" },
      { label: "Мышь", value: "Logitech PRO X2 SUPERSTRIKE" },
    ],
    price1h: 350,
    price3h: 900,
    price5h: 1350,
    seats: "Приватный бокс на двоих",
  },
  {
    id: "duo24",
    name: "DUO 24'",
    tagline: "Компактный приватный формат",
    description:
      "Более компактная версия DUO-пространства с мониторами 24 дюйма. Та же приватность и комфорт игры вдвоём в более камерном формате.",
    image: "/images/zone-duo24.jpg",
    specs: [
      { label: "Монитор", value: "24\"" },
      { label: "Формат", value: "Приватный бокс на 2 места" },
      { label: "Комплект", value: "Клавиатура, мышь, наушники Logitech" },
    ],
    price1h: 350,
    price3h: 900,
    price5h: 1350,
    seats: "Приватный бокс на двоих",
  },
];

export const durations = [
  { id: "1h", label: "1 час", key: "price1h" as const },
  { id: "3h", label: "3 часа", key: "price3h" as const },
  { id: "5h", label: "5 часов", key: "price5h" as const },
];
