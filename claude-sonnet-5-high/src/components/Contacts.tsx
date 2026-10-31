import { Clock3, Globe2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Reveal from "./Reveal";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Адрес",
    value: "г. Ставрополь, [укажите точный адрес клуба]",
    note: "Заполните перед публикацией",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "[укажите номер телефона клуба]",
    note: "Заполните перед публикацией",
  },
  {
    icon: Clock3,
    label: "Режим работы",
    value: "[укажите режим работы клуба]",
    note: "Например: круглосуточно или по часам",
  },
  {
    icon: Mail,
    label: "Почта",
    value: "[укажите контактный email]",
    note: "Заполните перед публикацией",
  },
  {
    icon: Globe2,
    label: "Сайт",
    value: "vionixclub.ru",
  },
  {
    icon: MessageCircle,
    label: "Социальные сети",
    value: "[ссылки на Telegram / VK / Instagram]",
    note: "Заполните перед публикацией",
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="relative bg-[#1c1916] py-24 sm:py-32">
      <div className="container-pad grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <span className="text-xs uppercase tracking-[0.25em] text-gold">Контакты</span>
          <h2 className="mt-5 font-display text-balance text-3xl leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
            Будем рады видеть вас в VIONIX
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-sand">
            Свяжитесь с нами удобным способом или приезжайте в клуб — администратор поможет
            выбрать подходящее место.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {CONTACT_ITEMS.map((item) => (
              <div key={item.label} className="rounded-2xl border border-line bg-[#211e1a] p-5">
                <item.icon size={20} className="text-gold" strokeWidth={1.5} />
                <div className="mt-3 text-xs uppercase tracking-[0.1em] text-sand">{item.label}</div>
                <div className="mt-1.5 text-sm leading-snug text-cream">{item.value}</div>
                {item.note && <div className="mt-1 text-[11px] text-gold/70">{item.note}</div>}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={1} className="lg:col-span-7">
          <div className="relative flex h-full min-h-[380px] flex-col items-center justify-center overflow-hidden rounded-[28px] border border-line bg-[#211e1a] p-10 text-center">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />
            <MapPin size={34} className="relative z-10 text-gold" strokeWidth={1.3} />
            <h3 className="relative z-10 mt-5 font-display text-xl text-cream">Карта проезда</h3>
            <p className="relative z-10 mt-3 max-w-sm text-sm leading-relaxed text-sand">
              Здесь будет размещена интерактивная карта (Яндекс.Карты или Google Maps) с точным
              расположением клуба VIONIX в Ставрополе — после подключения адреса и API-ключа карт.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
