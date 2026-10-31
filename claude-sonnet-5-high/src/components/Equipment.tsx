import { equipment } from "@/data/equipment";
import Reveal from "./Reveal";

export default function Equipment() {
  return (
    <section id="equipment" className="relative bg-[#171513] py-24 sm:py-32">
      <div className="container-pad mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-gold">Оборудование</span>
          <h2 className="mt-5 max-w-xl font-display text-balance text-3xl leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
            Периферия, которой доверяют профессионалы
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="max-w-md text-balance leading-relaxed text-sand">
            На местах STANDARD, ARENA и DUO 24' установлен полный комплект Logitech PRO X —
            клавиатура, мышь и наушники. В BOOTCAMP используется клавиатура Red Square ALUMIX.
            На DUO 27' установлена мышь Logitech PRO X2 SUPERSTRIKE.
          </p>
        </Reveal>
      </div>

      <div className="container-pad grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {equipment.map((item, i) => (
          <Reveal
            key={item.id}
            delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
            className="group overflow-hidden rounded-3xl border border-line bg-[#1c1916] transition-all duration-500 hover:border-gold/40"
          >
            <div className="relative aspect-square overflow-hidden bg-[#0f0d0c]">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/70 via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="text-xs uppercase tracking-[0.12em] text-gold">{item.category}</div>
              <h3 className="mt-2 font-display text-lg leading-snug text-cream">{item.name}</h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.zones.map((z) => (
                  <span
                    key={z}
                    className="rounded-full border border-line px-2.5 py-1 text-[11px] uppercase tracking-[0.06em] text-sand"
                  >
                    {z}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
