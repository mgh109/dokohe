const numberFormatter = new Intl.NumberFormat('fa-IR');
export function formatNumber(value: number): string {
  return numberFormatter.format(value);
}
export function formatPrice(value: number): string {
  return value === 0 ? 'رایگان' : `${formatNumber(value)} تومان`;
}
