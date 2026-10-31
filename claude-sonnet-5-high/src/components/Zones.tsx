import { ArrowUpRight, Check } from "lucide-react";
import { zones } from "@/data/zones";
import Reveal from "./Reveal";

interface ZonesProps {
  onSelectZone: (zoneId: string) => void;
}

export default function Zones({ onSelectZone }: ZonesProps) {
  return (
    <section id="zones" className="relative bg-[#171513] py-24 sm:py-32">
      <div className="container-pad mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-gold">Игровые зоны</span>
          <h2 className="mt-5 max-w-2xl font-display text-balance text-3xl leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
            Пять форматов — для каждого сценария игры
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="max-w-md text-balance leading-relaxed text-sand">
            От одиночного места для вечерней партии до командного бокса для полноценных сборов —
            выберите формат под свою задачу.
          </p>
        </Reveal>
      </div>

      <div className="container-pad flex flex-col gap-10">
        {zones.map((zone, index) => (
          <Reveal key={zone.id} delay={1}>
            <article
              className={`group grid gap-0 overflow-hidden rounded-[28px] border border-line bg-[#1c1916] transition-all duration-500 hover:border-gold/40 lg:grid-cols-12 ${
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative h-64 overflow-hidden lg:col-span-5 lg:h-auto">
                <img
                  src={zone.image}
                  alt={`Зона ${zone.name} в компьютерном клубе VIONIX`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                {zone.featured && (
                  <span className="absolute left-5 top-5 rounded-full bg-gold px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#171513]">
                    Популярный выбор
                  </span>
                )}
              </div>

              <div className="flex flex-col justify-between gap-8 p-8 sm:p-10 lg:col-span-7 lg:p-12">
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl tracking-wide text-cream sm:text-3xl">
                      {zone.name}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.15em] text-gold">{zone.tagline}</span>
                  </div>
                  <p className="mt-4 max-w-xl leading-relaxed text-sand">{zone.description}</p>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {zone.specs.map((spec) => (
                      <li key={spec.label} className="flex items-start gap-2.5 text-sm text-sand">
                        <Check size={15} className="mt-0.5 shrink-0 text-gold" />
                        <span>
                          <span className="text-cream/90">{spec.label}:</span> {spec.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-end justify-between gap-6 border-t border-line pt-6">
                  <div>
                    <div className="text-xs uppercase tracking-[0.1em] text-sand">от</div>
                    <div className="font-display text-3xl text-cream">
                      {zone.price1h} ₽<span className="ml-1 text-sm font-sans text-sand">/ час</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectZone(zone.name)}
                    className="group/btn inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-3 text-sm uppercase tracking-[0.1em] text-cream transition-all duration-300 hover:border-gold hover:bg-gold hover:text-[#171513]"
                  >
                    Выбрать место
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
