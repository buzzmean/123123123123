import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { CONTACTS } from "@/data";
import { AnimatedSection } from "./AnimatedSection";

export function Contacts() {
  return (
    <section id="contacts" className="relative bg-vionix-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-vionix-accent">
            Контакты
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-vionix-text sm:text-5xl">
            Свяжитесь с нами
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-vionix-muted">
            Контактные данные будут заполнены перед публикацией. Сейчас вы видите редактируемые
            заглушки.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <div className="grid gap-5 sm:grid-cols-2">
              <ContactCard
                icon={<MapPin className="h-6 w-6" />}
                title="Адрес"
                value={CONTACTS.address}
              />
              <ContactCard
                icon={<Phone className="h-6 w-6" />}
                title="Телефон"
                value={CONTACTS.phone}
              />
              <ContactCard
                icon={<Mail className="h-6 w-6" />}
                title="Email"
                value={CONTACTS.email}
              />
              <ContactCard
                icon={<Clock className="h-6 w-6" />}
                title="Режим работы"
                value={CONTACTS.hours}
              />
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-vionix-muted">
                Мы в социальных сетях
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {CONTACTS.social.map((network) => (
                  <a
                    key={network.name}
                    href={network.href}
                    className="rounded-full border border-vionix-muted/20 px-5 py-2 text-sm font-medium text-vionix-muted transition-colors hover:border-vionix-accent hover:text-vionix-text"
                  >
                    {network.name}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative h-80 overflow-hidden rounded-2xl border border-vionix-muted/10 bg-vionix-card sm:h-96 lg:h-full">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <MapPin className="h-10 w-10 text-vionix-accent" />
                <div>
                  <p className="text-lg font-medium text-vionix-text">Место для карты</p>
                  <p className="mt-2 text-sm text-vionix-muted">
                    После уточнения адреса здесь будет встроена интерактивная карта с расположением
                    клуба VIONIX в Ставрополе.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-vionix-muted/10 bg-vionix-card p-6 transition-colors hover:border-vionix-muted/20">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-vionix-accent/10 text-vionix-accent">
        {icon}
      </div>
      <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-vionix-muted">
        {title}
      </h3>
      <p className="mt-2 text-base text-vionix-text">{value}</p>
    </div>
  );
}
