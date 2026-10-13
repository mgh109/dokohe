import 'server-only';
import type { ZodType } from 'zod';
export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message = 'دریافت اطلاعات با خطا مواجه شد.',
  ) {
    super(message);
    this.name = 'ApiError';
  }
}
/** Server-only transport. No credentials or backend secrets enter the client bundle. */
export async function apiGet<T>(path: string, schema: ZodType<T>): Promise<T> {
  const configured = process.env.API_BASE_URL;
  if (!configured) throw new ApiError(503, 'آدرس API تنظیم نشده است.');
  if (!path.startsWith('/') || path.startsWith('//') || path.includes('..')) {
    throw new ApiError(400, 'مسیر API نامعتبر است.');
  }
  const base = new URL(configured);
  if (!['https:', 'http:'].includes(base.protocol))
    throw new ApiError(500, 'پروتکل API نامعتبر است.');
  const url = `${base.href.replace(/\/$/, '')}${path}`;
  const response = await fetch(url, {
    cache: 'no-store',
    signal: AbortSignal.timeout(10000),
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) throw new ApiError(response.status);
  const parsed = schema.safeParse(await response.json());
  if (!parsed.success) throw new ApiError(502, 'ساختار پاسخ API معتبر نیست.');
  return parsed.data;
}
