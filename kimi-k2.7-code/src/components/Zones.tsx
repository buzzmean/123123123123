import { useReducedMotion, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { ZONES, type ZoneId } from "@/data";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

interface ZonesProps {
  onSelectZone: (zone: ZoneId) => void;
}

export function Zones({ onSelectZone }: ZonesProps) {
  const reduce = useReducedMotion();

  return (
    <section id="zones" className="relative bg-vionix-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-vionix-accent">
            Игровые зоны
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-vionix-text sm:text-5xl">
            Выберите формат игры
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-vionix-muted">
            Пять категорий мест — от сбалансированных станций до приватных DUO-кабин. Каждая зона
            сохраняет единое премиальное качество, но предлагает свой уровень пространства и
            периферии.
          </p>
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.12}>
          {ZONES.map((zone, index) => (
            <StaggerItem
              key={zone.id}
              className={index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <motion.article
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-vionix-muted/10 bg-vionix-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={zone.image}
                    alt={`Зона ${zone.name}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vionix-card via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-vionix-bg/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-vionix-text backdrop-blur-sm">
                    {zone.name}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-base leading-relaxed text-vionix-muted">
                    {zone.shortDescription}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {zone.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-vionix-text">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-vionix-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-vionix-muted/10">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-vionix-muted">от</span>
                      <span className="ml-2 text-2xl font-semibold text-vionix-text">
                        {zone.prices["1"]} ₽
                      </span>
                      <span className="ml-1 text-sm text-vionix-muted">/ час</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onSelectZone(zone.id)}
                      className="inline-flex items-center gap-2 rounded-full bg-vionix-surface px-4 py-2 text-sm font-medium text-vionix-text transition-colors hover:bg-vionix-accent hover:text-vionix-bg"
                      aria-label={`Выбрать зону ${zone.name}`}
                    >
                      Выбрать
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
