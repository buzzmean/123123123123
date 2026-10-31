import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";

const NAV_LINKS = [
  { label: "Зоны", href: "#zones" },
  { label: "Цены", href: "#pricing" },
  { label: "Оборудование", href: "#equipment" },
  { label: "Галерея", href: "#gallery" },
  { label: "PlayStation 5", href: "#playstation" },
  { label: "Бронирование", href: "#booking" },
  { label: "Контакты", href: "#contacts" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-vionix-bg/85 backdrop-blur-md border-b border-vionix-muted/10"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#" className="group flex items-center gap-3" aria-label="VIONIX — на главную">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-vionix-text text-vionix-bg font-bold text-lg">
            V
          </span>
          <span className="text-xl font-semibold tracking-[0.12em] text-vionix-text">VIONIX</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-vionix-muted hover:text-vionix-text transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-vionix-accent after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#booking"
          className="hidden lg:inline-flex items-center justify-center rounded-full border border-vionix-accent/40 bg-vionix-accent/10 px-6 py-2.5 text-sm font-medium text-vionix-text hover:bg-vionix-accent hover:text-vionix-bg transition-all"
        >
          Забронировать
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center p-2 text-vionix-text"
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 border-b border-vionix-muted/10 bg-vionix-bg/95 backdrop-blur-md px-6 py-6">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-medium text-vionix-muted hover:text-vionix-text transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={handleLinkClick}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-vionix-accent px-6 py-3 text-sm font-semibold text-vionix-bg transition-colors"
            >
              Забронировать
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
