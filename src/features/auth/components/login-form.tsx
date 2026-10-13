'use client';
import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
export function LoginForm() {
  const [message, setMessage] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = String(new FormData(event.currentTarget).get('mobile') ?? '')
      .replace(/[۰-۹]/g, (char) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(char)))
      .replace(/[٠-٩]/g, (char) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(char)));
    setMessage(
      /^09\d{9}$/.test(value)
        ? 'شماره معتبر است؛ ارسال کد ورود پس از اتصال سرویس احراز هویت فعال می‌شود.'
        : 'شماره موبایل ۱۱ رقمی با ۰۹ وارد کنید.',
    );
  }
  return (
    <form className="form" onSubmit={submit}>
      <label htmlFor="mobile">شماره موبایل</label>
      <input
        id="mobile"
        name="mobile"
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
        maxLength={11}
        required
        dir="ltr"
      />
      <p className="form-note">ورود و ارسال پیامک هنوز به بک‌اند متصل نیست.</p>
      <Button type="submit">بررسی شماره موبایل</Button>
      {message ? <p role="status">{message}</p> : null}
    </form>
  );
}
