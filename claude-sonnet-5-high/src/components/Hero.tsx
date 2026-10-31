import { ArrowDown, MapPin } from "lucide-react";

export default function Hero() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#171513]">
      <img
        src="/images/hero.jpg"
        alt="Интерьер премиального компьютерного клуба VIONIX в Ставрополе"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#171513] via-[#171513]/55 to-[#171513]/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#171513]/70 via-transparent to-[#171513]/40" />
      <div className="noise-overlay absolute inset-0" />

      <div className="container-pad relative z-10 flex w-full flex-col gap-10 pb-16 pt-40 md:pb-24">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-sand">
          <MapPin size={14} className="text-gold" />
          <span>Ставрополь · 36 игровых ПК · Зона PlayStation 5</span>
        </div>

        <h1 className="max-w-4xl font-display text-balance text-[2.6rem] leading-[1.05] text-cream sm:text-6xl lg:text-[5.2rem]">
          Премиальный <span className="gold-text">компьютерный клуб</span> нового уровня
        </h1>

        <p className="max-w-xl text-balance text-base leading-relaxed text-sand sm:text-lg">
          VIONIX — пространство для тех, кто ценит технологии и комфорт. Пять категорий игровых
          мест, мощные конфигурации и атмосфера, в которой хочется остаться надолго — в одиночку
          или компанией.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#booking"
            onClick={(e) => scrollTo(e, "#booking")}
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] text-[#171513] shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#dcc598]"
          >
            Выбрать и забронировать
          </a>
          <a
            href="#zones"
            onClick={(e) => scrollTo(e, "#zones")}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-8 py-4 text-sm uppercase tracking-[0.12em] text-cream transition-all duration-300 hover:border-cream/60"
          >
            Игровые зоны
          </a>
        </div>

        <div className="mt-6 grid max-w-2xl grid-cols-3 gap-6 border-t border-cream/10 pt-6">
          <div>
            <div className="font-display text-2xl text-cream sm:text-3xl">36</div>
            <div className="mt-1 text-xs uppercase tracking-[0.1em] text-sand">игровых ПК</div>
          </div>
          <div>
            <div className="font-display text-2xl text-cream sm:text-3xl">5</div>
            <div className="mt-1 text-xs uppercase tracking-[0.1em] text-sand">категорий мест</div>
          </div>
          <div>
            <div className="font-display text-2xl text-cream sm:text-3xl">PS5</div>
            <div className="mt-1 text-xs uppercase tracking-[0.1em] text-sand">консольная зона</div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => scrollTo(e, "#about")}
        aria-label="Прокрутить вниз"
        className="absolute bottom-7 right-7 z-10 hidden h-12 w-12 animate-bounce items-center justify-center rounded-full border border-cream/20 text-cream md:flex"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
