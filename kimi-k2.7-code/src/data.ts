export const ZONES = [
  {
    id: "standard",
    name: "STANDARD",
    shortDescription: "Сбалансированное игровое место для комфортной повседневной игры.",
    description:
      "Идеальный выбор для тех, кто ценит стабильность и комфорт. STANDARD предлагает современную конфигурацию для большинства популярных игр, удобное кресло и продуманное рабочее пространство.",
    image: "/images/zone-standard.jpg",
    features: ["Современная игровая станция", "Эргономичное кресло", "Сбалансированная периферия"],
    prices: { "1": 180, "3": 430, "5": 680 },
  },
  {
    id: "arena",
    name: "ARENA",
    shortDescription: "Продвинутое место с усиленной периферией и динамичной атмосферой.",
    description:
      "ARENA создана для игроков, которым важна скорость и точность. Усиленная периферия, оптимизированное пространство и выверенная эргономика помогают держать концентрацию на максимуме.",
    image: "/images/zone-arena.jpg",
    features: ["Продвинутое игровое железо", "Профессиональная периферия", "Увеличенное игровое пространство"],
    prices: { "1": 230, "3": 550, "5": 850 },
  },
  {
    id: "bootcamp",
    name: "BOOTCAMP",
    shortDescription: "Командная зона для тренировок, кастомных матчей и совместной игры.",
    description:
      "BOOTCAMP — это полноценное командное пространство. Рядом расположенные станции, стабильное соединение и продуманная акустика делают зону идеальной для тренировок и дружеских кастомок.",
    image: "/images/zone-bootcamp.jpg",
    features: ["5 игровых станций в ряд", "Командная рассадка", "Стабильное сетевое соединение"],
    prices: { "1": 270, "3": 650, "5": 1050 },
  },
  {
    id: "duo27",
    name: "DUO 27'",
    shortDescription: "Приватное пространство для двоих с мониторами 27 дюймов.",
    description:
      "DUO 27' — отдельная кабина для совместной игры вдвоём. Большие 27-дюймовые мониторы, уютная атмосфера и приватность делают эту зону отличным выбором для пар и друзей.",
    image: "/images/zone-duo27.jpg",
    features: ["2 места в приватной кабине", "Мониторы 27 дюймов", "Идеально для пар и друзей"],
    prices: { "1": 350, "3": 900, "5": 1350 },
  },
  {
    id: "duo24",
    name: "DUO 24'",
    shortDescription: "Компактное приватное пространство для двоих с мониторами 24 дюйма.",
    description:
      "DUO 24' предлагает уютное приватное пространство для двух игроков. Компактные мониторы, удобная рассадка и доступная цена делают зону хорошим вариантом для неспешных игровых сессий.",
    image: "/images/zone-duo24.jpg",
    features: ["2 места в приватной кабине", "Мониторы 24 дюйма", "Комфортная атмосфера"],
    prices: { "1": 350, "3": 900, "5": 1350 },
  },
] as const;

export type ZoneId = (typeof ZONES)[number]["id"];
export type DurationKey = "1" | "3" | "5";

export const DURATION_LABELS: Record<DurationKey, string> = {
  "1": "1 час",
  "3": "3 часа",
  "5": "5 часов",
};

export const EQUIPMENT = [
  {
    id: "standard-arena",
    title: "STANDARD / ARENA",
    image: "/images/equipment.jpg",
    items: [
      "Клавиатура Logitech PRO X2 RAPID",
      "Мышь Logitech PRO X2 SUPERSTRIKE",
      "Наушники Logitech PRO X3 LIGHTSPEED",
    ],
  },
  {
    id: "bootcamp",
    title: "BOOTCAMP",
    image: "/images/zone-bootcamp.jpg",
    items: [
      "Клавиатура Red Square ALUMIX",
      "Полная конфигурация периферии уточняется",
    ],
  },
  {
    id: "duo27",
    title: "DUO 27'",
    image: "/images/zone-duo27.jpg",
    items: [
      "Мышь Logitech PRO X2 SUPERSTRIKE",
      "Полная конфигурация периферии уточняется",
    ],
  },
  {
    id: "duo24",
    title: "DUO 24'",
    image: "/images/zone-duo24.jpg",
    items: [
      "Клавиатура Logitech PRO X2 RAPID",
      "Мышь Logitech PRO X2 SUPERSTRIKE",
      "Наушники Logitech PRO X3 LIGHTSPEED",
    ],
  },
];

export const GALLERY_IMAGES = [
  { src: "/images/hero.jpg", alt: "Общий вид интерьера VIONIX" },
  { src: "/images/gallery-1.jpg", alt: "Просторный зал клуба" },
  { src: "/images/zone-arena.jpg", alt: "Игровая зона ARENA" },
  { src: "/images/gallery-2.jpg", alt: "Деталь игрового места" },
  { src: "/images/zone-bootcamp.jpg", alt: "Командная зона BOOTCAMP" },
  { src: "/images/ps5.jpg", alt: "PlayStation 5-зона" },
];

export const CONTACTS = {
  city: "Ставрополь, Россия",
  address: "Адрес: уточняется перед публикацией",
  phone: "Телефон: уточняется перед публикацией",
  email: "Email: уточняется перед публикацией",
  hours: "Режим работы: уточняется перед публикацией",
  social: [
    { name: "Telegram", href: "#" },
    { name: "VKontakte", href: "#" },
    { name: "Instagram", href: "#" },
  ],
};
