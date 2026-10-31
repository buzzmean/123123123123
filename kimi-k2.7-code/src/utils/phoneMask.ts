export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (!digits) return "";

  const first = digits[0] === "7" || digits[0] === "8" ? digits.slice(1) : digits;
  const limited = first.slice(0, 10);

  let formatted = "+7";
  if (limited.length > 0) {
    formatted += " (" + limited.slice(0, 3);
  }
  if (limited.length >= 3) {
    formatted += ") " + limited.slice(3, 6);
  }
  if (limited.length >= 6) {
    formatted += "-" + limited.slice(6, 8);
  }
  if (limited.length >= 8) {
    formatted += "-" + limited.slice(8, 10);
  }

  return formatted;
}

export function isPhoneValid(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  // Accept either 11 digits starting with 7 or 8, or 10 digits
  return digits.length === 11 || digits.length === 10;
}
