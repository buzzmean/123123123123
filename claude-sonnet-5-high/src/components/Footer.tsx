const NAV_LINKS = [
  { href: "#zones", label: "Зоны" },
  { href: "#pricing", label: "Цены" },
  { href: "#equipment", label: "Оборудование" },
  { href: "#gallery", label: "Галерея" },
  { href: "#ps5", label: "PlayStation 5" },
  { href: "#booking", label: "Бронирование" },
  { href: "#contacts", label: "Контакты" },
];

export default function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative bg-[#171513] pb-10 pt-16">
      <div className="container-pad">
        <div className="hairline mb-12" />
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <a
              href="#top"
              onClick={(e) => scrollTo(e, "#top")}
              className="font-display text-2xl tracking-[0.18em] text-cream"
            >
              VIONIX
            </a>
            <p className="mt-4 text-sm leading-relaxed text-sand">
              Премиальный компьютерный клуб в Ставрополе. 36 игровых ПК и отдельная зона
              PlayStation 5.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-sm text-sand transition-colors duration-300 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 text-xs text-sand/70 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} VIONIX. Все права защищены.</span>
          <span>vionixclub.ru · Ставрополь</span>
        </div>
      </div>
    </footer>
  );
}
