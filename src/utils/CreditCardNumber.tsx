export function formatCreditCard(value: string): string {
  const numbers = value.replace(/\D/g, "");
  const limit = numbers.slice(0, 16);
  const formatted = limit.replace(/(\d{4})/g, "$1 ").trim();

  return formatted;
}
