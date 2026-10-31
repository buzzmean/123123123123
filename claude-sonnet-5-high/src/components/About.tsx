import { Gauge, Sofa, Users, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const POINTS = [
  {
    icon: Gauge,
    title: "Современное оборудование",
    text: "Мощные игровые конфигурации и профессиональная периферия Logitech и Red Square во всех зонах клуба.",
  },
  {
    icon: Users,
    title: "Один или компанией",
    text: "Одиночные места, командные зоны BOOTCAMP и приватные DUO-боксы для игры вдвоём.",
  },
  {
    icon: Sofa,
    title: "Комфортная атмосфера",
    text: "Продуманный интерьер, эргономичные кресла и спокойное пространство без суеты интернет-кафе.",
  },
  {
    icon: Sparkles,
    title: "Пять категорий мест",
    text: "STANDARD, ARENA, BOOTCAMP, DUO 27' и DUO 24' — у каждого формата своя задача и характер.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-[#171513] py-24 sm:py-32">
      <div className="container-pad grid gap-16 lg:grid-cols-12 lg:items-start">
        <Reveal className="lg:col-span-5">
          <span className="text-xs uppercase tracking-[0.25em] text-gold">О клубе</span>
          <h2 className="mt-5 font-display text-balance text-3xl leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
            Клуб, в котором всё — ради игры и комфорта
          </h2>
          <p className="mt-6 max-w-md text-balance leading-relaxed text-sand">
            VIONIX расположен в Ставрополе и объединяет 36 игровых компьютеров и отдельную зону
            PlayStation 5. Мы убрали всё лишнее: только технологичная атмосфера, качественное
            железо и пространство, спроектированное для долгой комфортной игры.
          </p>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:col-span-7">
          {POINTS.map((point, i) => (
            <Reveal
              key={point.title}
              delay={((i % 2) + 1) as 1 | 2}
              className="group bg-[#1c1916] p-8 transition-colors duration-500 hover:bg-[#211e1a] sm:p-10"
            >
              <point.icon size={26} className="text-gold" strokeWidth={1.4} />
              <h3 className="mt-5 font-display text-lg text-cream">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sand">{point.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
