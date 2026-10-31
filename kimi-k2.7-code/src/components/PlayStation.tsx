import { useReducedMotion, motion } from "framer-motion";
import { Gamepad2, Sofa, Tv } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function PlayStation() {
  const reduce = useReducedMotion();

  return (
    <section id="playstation" className="relative bg-vionix-bg py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img
                whileHover={reduce ? undefined : { scale: 1.03 }}
                transition={{ duration: 0.7 }}
                src="/images/ps5.jpg"
                alt="PlayStation 5-зона VIONIX"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vionix-bg/60 via-transparent to-transparent" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-vionix-accent">
              PlayStation 5
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-vionix-text sm:text-5xl">
              Отдельная консольная зона
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-vionix-muted">
              Для любителей консольного гейминга в VIONIX предусмотрено отдельное пространство с
              PlayStation 5. Удобный лаунж, большой экран и атмосфера, в которой хочется остаться
              надолго.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="flex items-start gap-4 rounded-xl border border-vionix-muted/10 bg-vionix-card p-5">
                <Gamepad2 className="h-6 w-6 text-vionix-accent" />
                <div>
                  <h3 className="font-medium text-vionix-text">PlayStation 5</h3>
                  <p className="mt-1 text-sm text-vionix-muted">Современная консоль и контроллеры</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-vionix-muted/10 bg-vionix-card p-5">
                <Tv className="h-6 w-6 text-vionix-accent" />
                <div>
                  <h3 className="font-medium text-vionix-text">Большой экран</h3>
                  <p className="mt-1 text-sm text-vionix-muted">Погружение в игру на всю стену</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-vionix-muted/10 bg-vionix-card p-5">
                <Sofa className="h-6 w-6 text-vionix-accent" />
                <div>
                  <h3 className="font-medium text-vionix-text">Лаунж-зона</h3>
                  <p className="mt-1 text-sm text-vionix-muted">Комфортный отдых для компании</p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm text-vionix-muted">
              Стоимость и точная комплектация консольной зоны будут добавлены после запуска клуба.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
