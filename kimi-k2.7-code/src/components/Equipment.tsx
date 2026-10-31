import { useReducedMotion, motion } from "framer-motion";
import { Mouse, Headphones, Keyboard } from "lucide-react";
import { EQUIPMENT } from "@/data";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const iconMap: Record<string, React.ReactNode> = {
  "Клавиатура": <Keyboard className="h-5 w-5" />,
  "Мышь": <Mouse className="h-5 w-5" />,
  "Наушники": <Headphones className="h-5 w-5" />,
};

function getIconForItem(item: string) {
  const key = Object.keys(iconMap).find((k) => item.toLowerCase().includes(k.toLowerCase()));
  return key ? iconMap[key] : <Keyboard className="h-5 w-5" />;
}

export function Equipment() {
  const reduce = useReducedMotion();

  return (
    <section id="equipment" className="relative bg-vionix-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-vionix-accent">
            Оборудование
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-vionix-text sm:text-5xl">
            Техника, на которую можно положиться
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-vionix-muted">
            Мы используем проверенную периферию от ведущих производителей. Указаны только
            достоверные комплектации.
          </p>
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {EQUIPMENT.map((item) => (
            <StaggerItem key={item.id}>
              <motion.div
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ duration: 0.3 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-vionix-muted/10 bg-vionix-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Оборудование ${item.title}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vionix-card via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-vionix-text">{item.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {item.items.map((device) => (
                      <li
                        key={device}
                        className="flex items-start gap-3 text-sm text-vionix-muted"
                      >
                        <span className="mt-0.5 text-vionix-accent">{getIconForItem(device)}</span>
                        <span>{device}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.2} className="mt-12 rounded-2xl border border-vionix-muted/10 bg-vionix-card p-6 text-center text-sm text-vionix-muted sm:p-8">
          Полные конфигурации компьютеров и мониторов для каждой зоны уточняются и будут добавлены
          после финального аудита оборудования клуба.
        </AnimatedSection>
      </div>
    </section>
  );
}
