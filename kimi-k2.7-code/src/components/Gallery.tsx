import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/data";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const open = (index: number) => setOpenIndex(index);
  const close = () => setOpenIndex(null);
  const prev = () =>
    setOpenIndex((i) => (i === null ? null : i === 0 ? GALLERY_IMAGES.length - 1 : i - 1));
  const next = () =>
    setOpenIndex((i) => (i === null ? null : i === GALLERY_IMAGES.length - 1 ? 0 : i + 1));

  return (
    <section id="gallery" className="relative bg-vionix-card py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-vionix-accent">
            Галерея
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-vionix-text sm:text-5xl">
            Пространство VIONIX
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-vionix-muted">
            Изображения передают атмосферу клуба. При открытии проекта фотографии реального
            заведения заменят текущие визуализации.
          </p>
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {GALLERY_IMAGES.map((image, index) => (
            <StaggerItem key={image.src} className={index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}>
              <button
                type="button"
                onClick={() => open(index)}
                className="group relative block w-full overflow-hidden rounded-2xl bg-vionix-surface focus:outline-none focus:ring-2 focus:ring-vionix-accent focus:ring-offset-2 focus:ring-offset-vionix-card"
                aria-label={`Открыть изображение ${image.alt}`}
              >
                <div className={cn("relative w-full", index === 0 ? "aspect-[21/9]" : "aspect-[4/3]")}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-vionix-bg/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-vionix-bg/95 backdrop-blur-md p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Просмотр изображения"
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-5 top-5 rounded-full bg-vionix-card p-2 text-vionix-text hover:bg-vionix-surface transition-colors"
              aria-label="Закрыть"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-vionix-card p-3 text-vionix-text hover:bg-vionix-surface transition-colors hidden sm:block"
              aria-label="Предыдущее"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <motion.img
              key={openIndex}
              src={GALLERY_IMAGES[openIndex].src}
              alt={GALLERY_IMAGES[openIndex].alt}
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-vionix-card p-3 text-vionix-text hover:bg-vionix-surface transition-colors hidden sm:block"
              aria-label="Следующее"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-vionix-muted">
              {openIndex + 1} / {GALLERY_IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
