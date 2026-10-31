import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, MapPin, Monitor, Gamepad2 } from "lucide-react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Главный экран"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Интерьер премиального компьютерного клуба VIONIX"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-vionix-bg via-vionix-bg/80 to-vionix-bg/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-vionix-bg via-transparent to-vionix-bg/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-vionix-muted/30 bg-vionix-card/60 px-4 py-1.5 backdrop-blur-sm"
          >
            <MapPin className="h-4 w-4 text-vionix-accent" />
            <span className="text-sm font-medium text-vionix-muted">Ставрополь, Россия</span>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 32 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl font-semibold leading-[1.1] tracking-tight text-vionix-text sm:text-6xl lg:text-7xl"
          >
            Премиальный
            <br />
            <span className="text-vionix-accent">компьютерный клуб</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 32 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-vionix-muted sm:text-xl"
          >
            VIONIX — пространство, где технологии встречаются с комфортом. 36 игровых ПК, отдельная
            PlayStation 5-зона и пять категорий мест для любого формата игры.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 32 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#zones"
              className="inline-flex items-center justify-center rounded-full bg-vionix-accent px-8 py-4 text-base font-semibold text-vionix-bg transition-all hover:bg-vionix-accent-light hover:shadow-lg hover:shadow-vionix-accent/20"
            >
              Выбрать зону
            </a>
            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-full border border-vionix-muted/40 px-8 py-4 text-base font-medium text-vionix-text transition-all hover:border-vionix-accent hover:text-vionix-accent"
            >
              Забронировать место
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center gap-6 text-sm text-vionix-muted"
          >
            <div className="flex items-center gap-2">
              <Monitor className="h-5 w-5 text-vionix-accent" />
              <span>36 игровых ПК</span>
            </div>
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5 text-vionix-accent" />
              <span>PlayStation 5-зона</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-vionix-accent" />
              <span>г. Ставрополь</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#zones"
        initial={reduce ? false : { opacity: 0, y: -8 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, repeat: reduce ? 0 : Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-vionix-muted hover:text-vionix-text transition-colors"
        aria-label="Прокрутить вниз"
      >
        <ChevronDown className="h-7 w-7" />
      </motion.a>
    </section>
  );
}
