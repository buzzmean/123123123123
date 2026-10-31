import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { ZONES, DURATION_LABELS, type ZoneId, type DurationKey } from "@/data";
import { AnimatedSection } from "./AnimatedSection";
import { cn } from "@/utils/cn";

interface PricingProps {
  onSelectZone: (zone: ZoneId) => void;
}

export function Pricing({ onSelectZone }: PricingProps) {
  const [duration, setDuration] = useState<DurationKey>("1");
  const reduce = useReducedMotion();

  return (
    <section id="pricing" className="relative bg-vionix-card py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-vionix-accent">
              Прайс-лист
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-vionix-text sm:text-5xl">
              Прозрачные цены
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-vionix-muted">
              Выберите подходящую продолжительность и зону. Чем дольше сессия, тем выгоднее стоимость
              часа.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Выбор продолжительности">
            {(["1", "3", "5"] as DurationKey[]).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={duration === key}
                onClick={() => setDuration(key)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                  duration === key
                    ? "bg-vionix-accent text-vionix-bg"
                    : "border border-vionix-muted/20 text-vionix-muted hover:border-vionix-accent hover:text-vionix-text"
                )}
              >
                <Clock className="h-4 w-4" />
                {DURATION_LABELS[key]}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <motion.div
          key={duration}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-14 overflow-hidden rounded-2xl border border-vionix-muted/10 bg-vionix-bg"
        >
          <div className="divide-y divide-vionix-muted/10">
            {ZONES.map((zone, index) => (
              <div
                key={zone.id}
                className={cn(
                  "group flex flex-col gap-6 p-6 transition-colors sm:flex-row sm:items-center sm:justify-between lg:p-8",
                  index % 2 === 1 && "bg-vionix-surface/30"
                )}
              >
                <div className="flex items-center gap-5">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-20">
                    <img
                      src={zone.image}
                      alt={zone.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-vionix-text">{zone.name}</h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-vionix-muted">
                      {zone.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-6 sm:justify-end">
                  <div className="text-right">
                    <div className="text-3xl font-semibold text-vionix-text">
                      {zone.prices[duration]} ₽
                    </div>
                    <div className="text-sm text-vionix-muted">{DURATION_LABELS[duration]}</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectZone(zone.id)}
                    className="inline-flex items-center gap-2 rounded-full bg-vionix-surface px-5 py-2.5 text-sm font-medium text-vionix-text transition-colors hover:bg-vionix-accent hover:text-vionix-bg"
                  >
                    <span className="hidden sm:inline">Забронировать</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <AnimatedSection delay={0.2} className="mt-8 text-center text-sm text-vionix-muted">
          Все цены указаны за одно рабочее место. Для зон DUO цена указана за кабину.
        </AnimatedSection>
      </div>
    </section>
  );
}
