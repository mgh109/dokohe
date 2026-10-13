'use client';
import { useState, type FormEvent } from 'react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email(),
  message: z.string().trim().min(10).max(3000),
});
export function ContactForm() {
  const [message, setMessage] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const result = schema.safeParse(Object.fromEntries(data));
    setMessage(
      result.success
        ? 'فرم معتبر است؛ ارسال پیام پس از اتصال بک‌اند فعال می‌شود.'
        : 'نام، ایمیل معتبر و پیامی با حداقل ۱۰ کاراکتر وارد کنید.',
    );
  }
  return (
    <form className="form contact-form" onSubmit={submit}>
      <label className="sr-only" htmlFor="contact-name">
        نام و نام خانوادگی
      </label>
      <input
        id="contact-name"
        name="name"
        placeholder="نام و نام خانوادگی"
        required
        minLength={2}
        maxLength={100}
        autoComplete="name"
      />
      <label className="sr-only" htmlFor="contact-mobile">
        شماره موبایل
      </label>
      <input
        id="contact-mobile"
        name="mobile"
        type="tel"
        autoComplete="tel"
        maxLength={11}
        placeholder="شماره موبایل"
      />
      <label className="sr-only" htmlFor="contact-email">
        پست الکترونیکی
      </label>
      <input
        id="contact-email"
        type="email"
        placeholder="پست الکترونیکی"
        name="email"
        required
        autoComplete="email"
        dir="ltr"
      />
      <label className="sr-only" htmlFor="contact-message">
        پیام شما
      </label>
      <textarea
        id="contact-message"
        name="message"
        placeholder="نظراتت رو اینجا بنویس"
        required
        minLength={10}
        maxLength={3000}
      />
      <p className="contact-form__notice">
        ارسال پیام فعلاً فعال نیست؛ می‌توانید فرم را بررسی کنید.
      </p>
      <Button type="submit">بررسی پیام</Button>
      {message ? <p role="status">{message}</p> : null}
    </form>
  );
}
