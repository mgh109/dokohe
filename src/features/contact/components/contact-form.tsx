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
    <form className="form" onSubmit={submit}>
      <label htmlFor="contact-name">نام و نام خانوادگی</label>
      <input
        id="contact-name"
        name="name"
        required
        minLength={2}
        maxLength={100}
        autoComplete="name"
      />
      <label htmlFor="contact-email">پست الکترونیکی</label>
      <input id="contact-email" type="email" name="email" required autoComplete="email" dir="ltr" />
      <label htmlFor="contact-message">پیام شما</label>
      <textarea id="contact-message" name="message" required minLength={10} maxLength={3000} />
      <p className="form-note">در نسخه فعلی اطلاعات این فرم به سرور ارسال نمی‌شود.</p>
      <Button type="submit">بررسی پیام</Button>
      {message ? <p role="status">{message}</p> : null}
    </form>
  );
}
