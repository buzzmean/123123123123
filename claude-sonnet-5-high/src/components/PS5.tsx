import { Gamepad2, Users2 } from "lucide-react";
import Reveal from "./Reveal";

export default function PS5() {
  const scrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="ps5" className="relative overflow-hidden bg-[#171513] py-24 sm:py-32">
      <div className="container-pad grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="order-2 lg:order-1 lg:col-span-6">
          <span className="text-xs uppercase tracking-[0.25em] text-gold">Консольная зона</span>
          <h2 className="mt-5 font-display text-balance text-3xl leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
            Отдельная зона PlayStation 5
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-sand">
            Помимо 36 игровых компьютеров, в VIONIX есть отдельное пространство с консолями
            PlayStation 5 — для тех, кто предпочитает консольный гейминг или хочет провести время
            компанией на одном экране.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-[#1c1916] p-6">
              <Gamepad2 size={24} className="text-gold" strokeWidth={1.4} />
              <h3 className="mt-4 font-display text-base text-cream">Консольный гейминг</h3>
              <p className="mt-2 text-sm leading-relaxed text-sand">
                Выделенное пространство под PlayStation 5 в общей атмосфере клуба.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-[#1c1916] p-6">
              <Users2 size={24} className="text-gold" strokeWidth={1.4} />
              <h3 className="mt-4 font-display text-base text-cream">Игра компанией</h3>
              <p className="mt-2 text-sm leading-relaxed text-sand">
                Формат подходит, чтобы собраться с друзьями у одного экрана.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-gold/25 bg-gold/5 p-6 text-sm leading-relaxed text-sand">
            Точную стоимость и доступность зоны PlayStation 5 уточняйте у администратора клуба —
            актуальные слоты и тарифы могут отличаться в зависимости от времени посещения.
          </div>

          <a
            href="#booking"
            onClick={scrollToBooking}
            className="mt-8 inline-flex items-center justify-center rounded-full border border-gold/60 px-7 py-3.5 text-sm uppercase tracking-[0.1em] text-cream transition-all duration-300 hover:border-gold hover:bg-gold hover:text-[#171513]"
          >
            Узнать о зоне PS5
          </a>
        </Reveal>

        <Reveal delay={1} className="order-1 lg:order-2 lg:col-span-6">
          <div className="relative overflow-hidden rounded-[28px] border border-line">
            <img
              src="/images/zone-ps5.jpg"
              alt="Зона PlayStation 5 в клубе VIONIX"
              loading="lazy"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[480px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/60 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
