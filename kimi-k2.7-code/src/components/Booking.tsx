import { useEffect, useState } from "react";
import { useReducedMotion, motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { ZONES, DURATION_LABELS, type ZoneId, type DurationKey } from "@/data";
import { formatPhone, isPhoneValid } from "@/utils/phoneMask";
import { AnimatedSection } from "./AnimatedSection";
import { cn } from "@/utils/cn";

interface BookingProps {
  selectedZone: ZoneId | "";
  onZoneChange?: (zone: ZoneId | "") => void;
}

export function Booking({ selectedZone, onZoneChange }: BookingProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    zone: selectedZone || "",
    date: "",
    time: "",
    duration: "3" as DurationKey,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setForm((prev) => ({ ...prev, zone: selectedZone }));
  }, [selectedZone]);

  const today = new Date().toISOString().split("T")[0];

  const validate = () => {
    const nextErrors: Partial<Record<keyof typeof form, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Введите имя";
    if (!isPhoneValid(form.phone)) nextErrors.phone = "Введите корректный номер телефона";
    if (!form.zone) nextErrors.zone = "Выберите зону";
    if (!form.date) nextErrors.date = "Выберите дату";
    if (!form.time) nextErrors.time = "Выберите время";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const reset = () => {
    setForm({ name: "", phone: "", zone: "", date: "", time: "", duration: "3" });
    setErrors({});
    setSubmitted(false);
    onZoneChange?.("");
  };

  return (
    <section id="booking" className="relative bg-vionix-card py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-vionix-accent">
              Бронирование
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-vionix-text sm:text-5xl">
              Забронируйте место
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-vionix-muted">
              Оставьте заявку, и мы свяжемся с вами для подтверждения бронирования. Это
              демонстрационная форма: данные не отправляются в реальную систему до запуска.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-vionix-accent/10 text-vionix-accent">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-vionix-text">Быстрое подтверждение</h3>
                  <p className="text-sm text-vionix-muted">Мы перезвоним вам в течение 15 минут</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-vionix-accent/10 text-vionix-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-vionix-text">Гарантия места</h3>
                  <p className="text-sm text-vionix-muted">Выбранная зона будет закреплена за вами</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl border border-vionix-muted/10 bg-vionix-bg p-6 shadow-xl shadow-black/20 sm:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -12 }}
                    className="flex flex-col items-center py-10 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-vionix-accent/20 text-vionix-accent">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-vionix-text">Заявка принята</h3>
                    <p className="mt-3 max-w-sm text-vionix-muted">
                      Спасибо, {form.name || "гость"}. В демонстрационном режиме бронирование не
                      отправлено в систему клуба, но форма работает корректно.
                    </p>
                    <button
                      type="button"
                      onClick={reset}
                      className="mt-8 rounded-full bg-vionix-accent px-8 py-3 font-medium text-vionix-bg transition-colors hover:bg-vionix-accent-light"
                    >
                      Новая заявка
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reduce ? undefined : { opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Имя" error={errors.name}>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-vionix-muted" />
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Ваше имя"
                            className={inputClass(errors.name)}
                          />
                        </div>
                      </Field>

                      <Field label="Телефон" error={errors.phone}>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-vionix-muted" />
                          <input
                            type="tel"
                            inputMode="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })}
                            placeholder="+7 (___) ___-__-__"
                            className={inputClass(errors.phone)}
                          />
                        </div>
                      </Field>
                    </div>

                    <Field label="Желаемая зона" error={errors.zone}>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-vionix-muted" />
                        <select
                          value={form.zone}
                          onChange={(e) => {
                            const value = e.target.value as ZoneId | "";
                            setForm({ ...form, zone: value });
                            onZoneChange?.(value);
                          }}
                          className={cn(inputClass(errors.zone), "appearance-none")}
                        >
                          <option value="">Выберите зону</option>
                          {ZONES.map((zone) => (
                            <option key={zone.id} value={zone.id}>
                              {zone.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </Field>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Дата" error={errors.date}>
                        <div className="relative">
                          <Calendar className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-vionix-muted" />
                          <input
                            type="date"
                            min={today}
                            value={form.date}
                            onChange={(e) => setForm({ ...form, date: e.target.value })}
                            className={inputClass(errors.date)}
                          />
                        </div>
                      </Field>

                      <Field label="Время" error={errors.time}>
                        <div className="relative">
                          <Clock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-vionix-muted" />
                          <input
                            type="time"
                            value={form.time}
                            onChange={(e) => setForm({ ...form, time: e.target.value })}
                            className={inputClass(errors.time)}
                          />
                        </div>
                      </Field>
                    </div>

                    <Field label="Продолжительность">
                      <div className="grid grid-cols-3 gap-3">
                        {(["1", "3", "5"] as DurationKey[]).map((key) => (
                          <button
                            key={key}
                            type="button"
                            onClick={() => setForm({ ...form, duration: key })}
                            className={cn(
                              "rounded-xl border px-3 py-3 text-sm font-medium transition-all",
                              form.duration === key
                                ? "border-vionix-accent bg-vionix-accent/10 text-vionix-text"
                                : "border-vionix-muted/10 text-vionix-muted hover:border-vionix-accent/40 hover:text-vionix-text"
                            )}
                          >
                            {DURATION_LABELS[key]}
                          </button>
                        ))}
                      </div>
                    </Field>

                    <button
                      type="submit"
                      className="mt-2 w-full rounded-full bg-vionix-accent py-4 text-base font-semibold text-vionix-bg transition-all hover:bg-vionix-accent-light hover:shadow-lg hover:shadow-vionix-accent/20"
                    >
                      Отправить заявку
                    </button>

                    <p className="text-center text-xs text-vionix-muted">
                      Нажимая кнопку, вы соглашаетесь с демонстрационной обработкой данных
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-vionix-text">{label}</label>
      {children}
      {error && (
        <div className="flex items-center gap-1.5 text-xs text-red-400">
          <AlertCircle className="h-3.5 w-3.5" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

function inputClass(error?: string) {
  return cn(
    "w-full rounded-xl border bg-vionix-card px-4 py-3 pl-10 text-vionix-text placeholder:text-vionix-muted/50 outline-none transition-all",
    "focus:border-vionix-accent focus:ring-1 focus:ring-vionix-accent/30",
    error
      ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/30"
      : "border-vionix-muted/10 hover:border-vionix-muted/30"
  );
}
