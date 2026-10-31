import { useMemo, useState } from "react";
import { zones, durations } from "@/data/zones";
import Reveal from "./Reveal";

interface PricingProps {
  onSelectZone: (zoneId: string) => void;
}

export default function Pricing({ onSelectZone }: PricingProps) {
  const [activeDuration, setActiveDuration] = useState<(typeof durations)[number]["id"]>("1h");
  const [activeZone, setActiveZone] = useState(zones[0].id);

  const duration = durations.find((d) => d.id === activeDuration)!;
  const zone = useMemo(() => zones.find((z) => z.id === activeZone)!, [activeZone]);
  const price = zone[duration.key];

  return (
    <section id="pricing" className="relative bg-[#1c1916] py-24 sm:py-32">
      <div className="container-pad grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <span className="text-xs uppercase tracking-[0.25em] text-gold">Прайс-лист</span>
          <h2 className="mt-5 font-display text-balance text-3xl leading-tight text-cream sm:text-4xl">
            Прозрачные цены без скрытых условий
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-sand">
            Выберите зону и продолжительность — стоимость обновится автоматически. Чем дольше
            сессия, тем выгоднее цена за час.
          </p>

          <div className="mt-10 rounded-3xl border border-line bg-[#211e1a] p-8">
            <div className="text-xs uppercase tracking-[0.1em] text-sand">{zone.name} · {duration.label}</div>
            <div className="mt-3 font-display text-5xl text-cream">{price} ₽</div>
            <div className="mt-1 text-sm text-sand">
              ≈ {Math.round(price / Number(duration.id.replace("h", "")))} ₽ / час
            </div>
            <button
              type="button"
              onClick={() => onSelectZone(zone.name)}
              className="mt-7 w-full rounded-full bg-gold py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-[#171513] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#dcc598]"
            >
              Забронировать {zone.name}
            </button>
          </div>
        </Reveal>

        <div className="lg:col-span-8">
          <Reveal>
            <div className="flex flex-wrap gap-3">
              {durations.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setActiveDuration(d.id)}
                  className={`rounded-full border px-5 py-2.5 text-sm uppercase tracking-[0.08em] transition-all duration-300 ${
                    activeDuration === d.id
                      ? "border-gold bg-gold text-[#171513]"
                      : "border-line text-sand hover:border-gold/50 hover:text-cream"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={1} className="mt-8 overflow-hidden rounded-3xl border border-line">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#211e1a] text-xs uppercase tracking-[0.1em] text-sand">
                  <th className="px-6 py-4 font-medium">Зона</th>
                  {durations.map((d) => (
                    <th key={d.id} className="px-6 py-4 font-medium">{d.label}</th>
                  ))}
                  <th className="px-6 py-4 font-medium text-right">Действие</th>
                </tr>
              </thead>
              <tbody>
                {zones.map((z) => (
                  <tr
                    key={z.id}
                    onClick={() => setActiveZone(z.id)}
                    className={`cursor-pointer border-t border-line transition-colors duration-300 ${
                      activeZone === z.id ? "bg-[#2b2722]" : "hover:bg-[#211e1a]"
                    }`}
                  >
                    <td className="px-6 py-5">
                      <div className="font-display text-base text-cream">{z.name}</div>
                      <div className="mt-0.5 text-xs text-sand">{z.seats}</div>
                    </td>
                    {durations.map((d) => (
                      <td key={d.id} className="px-6 py-5 text-sand">
                        <span className={d.id === activeDuration && activeZone === z.id ? "text-gold" : ""}>
                          {z[d.key]} ₽
                        </span>
                      </td>
                    ))}
                    <td className="px-6 py-5 text-right">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectZone(z.name);
                        }}
                        className="rounded-full border border-line px-4 py-2 text-xs uppercase tracking-[0.08em] text-cream transition-colors duration-300 hover:border-gold hover:text-gold"
                      >
                        Выбрать
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <p className="mt-4 text-xs text-sand/70">
            Цены указаны за одно место. Для зон DUO стоимость указана за бокс на двоих.
          </p>
        </div>
      </div>
    </section>
  );
}
