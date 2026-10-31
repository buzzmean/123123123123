import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { galleryImages } from "@/data/gallery";
import Reveal from "./Reveal";
import { cn } from "@/utils/cn";

const SIZE_CLASSES: Record<string, string> = {
  wide: "sm:col-span-2 aspect-[16/10]",
  tall: "sm:row-span-2 aspect-[3/4] sm:aspect-auto sm:h-full",
  normal: "aspect-[4/3]",
};

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  const next = () => setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section id="gallery" className="relative bg-[#1c1916] py-24 sm:py-32">
      <div className="container-pad mb-14">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.25em] text-gold">Галерея</span>
          <h2 className="mt-5 max-w-xl font-display text-balance text-3xl leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
            Атмосфера клуба в деталях
          </h2>
        </Reveal>
      </div>

      <div className="container-pad grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[260px]">
        {galleryImages.map((img, i) => (
          <Reveal
            key={img.id}
            delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
            className={cn("group relative overflow-hidden rounded-2xl", SIZE_CLASSES[img.size ?? "normal"])}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              className="block h-full w-full"
              aria-label={`Открыть фото: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#171513]/0 transition-colors duration-400 group-hover:bg-[#171513]/40">
                <ZoomIn
                  size={26}
                  className="text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f0d0c]/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Закрыть"
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={prev}
            aria-label="Предыдущее фото"
            className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold sm:left-6"
          >
            <ChevronLeft size={20} />
          </button>

          <img
            src={galleryImages[activeIndex].src}
            alt={galleryImages[activeIndex].alt}
            className="max-h-[82vh] max-w-[90vw] rounded-xl object-contain shadow-soft"
          />

          <button
            type="button"
            onClick={next}
            aria-label="Следующее фото"
            className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold sm:right-6"
          >
            <ChevronRight size={20} />
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-sand">
            {galleryImages[activeIndex].alt}
          </p>
        </div>
      )}
    </section>
  );
}
