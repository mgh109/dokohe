import { z } from 'zod';
const key = 'dokohe:cart:v1';
const schema = z.array(z.string().regex(/^[a-z0-9-]+$/)).max(50);
export function readCart(): string[] {
  try {
    const result = schema.safeParse(JSON.parse(localStorage.getItem(key) ?? '[]'));
    return result.success ? [...new Set(result.data)] : [];
  } catch {
    return [];
  }
}
export function writeCart(slugs: string[]): void {
  localStorage.setItem(key, JSON.stringify(schema.parse([...new Set(slugs)])));
  window.dispatchEvent(new Event('dokohe:cart-change'));
}
