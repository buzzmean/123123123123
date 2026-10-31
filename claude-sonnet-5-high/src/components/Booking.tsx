import { useEffect, useRef, useState, type FormEvent } from "react";
import { CalendarCheck2, CheckCircle2, Clock3, Phone, User } from "lucide-react";
import Reveal from "./Reveal";

const ZONES = ["STANDARD", "ARENA", "BOOTCAMP", "DUO 27'", "DUO 24'", "PlayStation 5"];
const DURATIONS = ["1 час", "2 часа", "3 часа", "5 часов", "Весь день"];

interface BookingProps {
  presetZone: string | null;
}

interface FormState {
  name: string;
  phone: string;
  zone: string;
  date: string;
  time: string;
  duration: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  zone: "",
  date: "",
  time: "",
  duration: "",
};

function formatPhone(raw: string) {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("8")) digits = "7" + digits.slice(1);
  if (!digits.startsWith("7")) digits = "7" + digits;
  digits = digits.slice(0, 11);

  const rest = digits.slice(1);
  let out = "+7";
  if (rest.length > 0) out += ` (${rest.slice(0, 3)}`;
  if (rest.length >= 3) out += `) ${rest.slice(3, 6)}`;
  if (rest.length >= 6) out += `-${rest.slice(6, 8)}`;
  if (rest.length >= 8) out += `-${rest.slice(8, 10)}`;
  return out;
}

function todayISO() {
  const d = new Date();
  const offset = d.getTimezoneOffset();
  const local = new Date(d.getTime() - offset * 60000);
  return local.toISOString().slice(0, 10);
}

export default function Booking({ presetZone }: BookingProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (presetZone) {
      setForm((f) => ({ ...f, zone: presetZone }));
      setSubmitted(false);
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [presetZone]);

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (form.name.trim().length < 2) next.name = "Введите ваше имя (минимум 2 символа)";
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length !== 11) next.phone = "Введите корректный номер телефона";
    if (!form.zone) next.zone = "Выберите игровую зону";
    if (!form.date) next.date = "Выберите дату посещения";
    else if (form.date < todayISO()) next.date = "Дата не может быть в прошлом";
    if (!form.time) next.time = "Укажите время";
    if (!form.duration) next.duration = "Выберите продолжительность";
    return next;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setForm(initialState);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="booking" className="relative bg-[#171513] py-24 sm:py-32">
      <div className="container-pad grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <span className="text-xs uppercase tracking-[0.25em] text-gold">Бронирование</span>
          <h2 className="mt-5 font-display text-balance text-3xl leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
            Забронируйте место за минуту
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-sand">
            Заполните форму, и администратор клуба свяжется с вами для подтверждения.
            Это демонстрационная форма — заявка не отправляется автоматически в систему клуба,
            для реального бронирования также доступны телефон и мессенджеры в разделе «Контакты».
          </p>

          <ul className="mt-8 space-y-4 text-sm text-sand">
            <li className="flex items-center gap-3">
              <CalendarCheck2 size={18} className="text-gold" /> Подтверждение в течение 15 минут
            </li>
            <li className="flex items-center gap-3">
              <Clock3 size={18} className="text-gold" /> Бронь удерживается 20 минут
            </li>
          </ul>
        </Reveal>

        <div ref={formRef} className="lg:col-span-7">
          <Reveal className="rounded-[28px] border border-line bg-[#1c1916] p-7 sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 size={48} className="text-gold" strokeWidth={1.3} />
                <h3 className="mt-6 font-display text-2xl text-cream">Заявка оформлена</h3>
                <p className="mt-3 max-w-sm text-sand">
                  {form.name}, мы получили демо-заявку на зону «{form.zone}» —{" "}
                  {form.date} в {form.time}, продолжительность: {form.duration}. В реальной
                  системе клуба с вами свяжутся по номеру {form.phone}.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-8 rounded-full border border-gold/50 px-6 py-3 text-sm uppercase tracking-[0.1em] text-cream transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-[#171513]"
                >
                  Новое бронирование
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-sand">
                    <User size={14} className="text-gold" /> Имя
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setField("name", e.target.value)}
                    placeholder="Как к вам обращаться"
                    className="w-full rounded-xl border border-line bg-[#211e1a] px-4 py-3.5 text-cream outline-none transition-colors duration-300 placeholder:text-sand/50 focus:border-gold"
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-[#d98b7a]">{errors.name}</p>}
                </div>

                <div className="sm:col-span-1">
                  <label className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-sand">
                    <Phone size={14} className="text-gold" /> Телефон
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={(e) => setField("phone", formatPhone(e.target.value))}
                    onFocus={() => !form.phone && setField("phone", "+7")}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full rounded-xl border border-line bg-[#211e1a] px-4 py-3.5 text-cream outline-none transition-colors duration-300 placeholder:text-sand/50 focus:border-gold"
                  />
                  {errors.phone && <p className="mt-1.5 text-xs text-[#d98b7a]">{errors.phone}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-xs uppercase tracking-[0.1em] text-sand">
                    Игровая зона
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {ZONES.map((z) => (
                      <button
                        type="button"
                        key={z}
                        onClick={() => setField("zone", z)}
                        className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                          form.zone === z
                            ? "border-gold bg-gold text-[#171513]"
                            : "border-line text-sand hover:border-gold/50 hover:text-cream"
                        }`}
                      >
                        {z}
                      </button>
                    ))}
                  </div>
                  {errors.zone && <p className="mt-1.5 text-xs text-[#d98b7a]">{errors.zone}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.1em] text-sand">Дата</label>
                  <input
                    type="date"
                    min={todayISO()}
                    value={form.date}
                    onChange={(e) => setField("date", e.target.value)}
                    className="w-full rounded-xl border border-line bg-[#211e1a] px-4 py-3.5 text-cream outline-none transition-colors duration-300 focus:border-gold [color-scheme:dark]"
                  />
                  {errors.date && <p className="mt-1.5 text-xs text-[#d98b7a]">{errors.date}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.1em] text-sand">Время</label>
                  <input
                    type="time"
                    value={form.time}
                    onChange={(e) => setField("time", e.target.value)}
                    className="w-full rounded-xl border border-line bg-[#211e1a] px-4 py-3.5 text-cream outline-none transition-colors duration-300 focus:border-gold [color-scheme:dark]"
                  />
                  {errors.time && <p className="mt-1.5 text-xs text-[#d98b7a]">{errors.time}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-xs uppercase tracking-[0.1em] text-sand">
                    Продолжительность
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {DURATIONS.map((d) => (
                      <button
                        type="button"
                        key={d}
                        onClick={() => setField("duration", d)}
                        className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                          form.duration === d
                            ? "border-gold bg-gold text-[#171513]"
                            : "border-line text-sand hover:border-gold/50 hover:text-cream"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                  {errors.duration && <p className="mt-1.5 text-xs text-[#d98b7a]">{errors.duration}</p>}
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="mt-2 w-full rounded-full bg-gold py-4 text-sm font-medium uppercase tracking-[0.12em] text-[#171513] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#dcc598]"
                  >
                    Отправить заявку
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
