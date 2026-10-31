import { CONTACTS } from "@/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-vionix-muted/10 bg-vionix-card py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#" className="flex items-center gap-3" aria-label="VIONIX — на главную">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-vionix-text text-vionix-bg font-bold">
              V
            </span>
            <span className="text-lg font-semibold tracking-[0.12em] text-vionix-text">VIONIX</span>
          </a>

          <p className="text-center text-sm text-vionix-muted">
            {CONTACTS.city} · {CONTACTS.address} · {CONTACTS.phone}
          </p>

          <p className="text-sm text-vionix-muted">
            © {currentYear} VIONIX. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
