import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";

const NAV_LINKS = [
  { href: "#zones", label: "Зоны" },
  { href: "#pricing", label: "Цены" },
  { href: "#equipment", label: "Оборудование" },
  { href: "#gallery", label: "Галерея" },
  { href: "#ps5", label: "PlayStation 5" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-[#171513]/90 backdrop-blur-md shadow-[0_8px_30px_-15px_rgba(0,0,0,0.6)]" : "bg-transparent"
      )}
    >
      <div className="container-pad flex h-20 items-center justify-between">
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="font-display text-2xl tracking-[0.18em] text-cream"
        >
          VIONIX
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group relative text-sm uppercase tracking-[0.12em] text-sand transition-colors duration-300 hover:text-cream"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#booking"
          onClick={(e) => handleNavClick(e, "#booking")}
          className="hidden rounded-full border border-gold/60 px-6 py-2.5 text-sm uppercase tracking-[0.12em] text-cream transition-all duration-300 hover:border-gold hover:bg-gold hover:text-[#171513] lg:inline-block"
        >
          Забронировать
        </a>

        <button
          type="button"
          aria-label="Открыть меню"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-cream lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden bg-[#171513] transition-[max-height,opacity] duration-500 ease-out lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-5 pb-6 pt-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="border-b border-line/60 py-3.5 text-base uppercase tracking-[0.1em] text-sand transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={(e) => handleNavClick(e, "#booking")}
            className="mt-4 rounded-full border border-gold/60 py-3 text-center text-sm uppercase tracking-[0.12em] text-cream transition-colors hover:bg-gold hover:text-[#171513]"
          >
            Забронировать место
          </a>
        </nav>
      </div>
    </header>
  );
}
