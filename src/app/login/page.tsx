import Image from 'next/image';
import Link from 'next/link';
import { LoginForm } from '@/features/auth/components/login-form';
export const metadata = { title: 'ورود و ثبت‌نام' };
export default function LoginPage() {
  return (
    <section className="auth-page">
      <div className="auth-shell">
        <Link href="/" aria-label="بازگشت به صفحه اصلی">
          <Image src="/assets/auth-logo.png" width={304} height={80} alt="به رسم دوکوهه" preload />
        </Link>
        <div className="auth-card">
          <ol className="auth-progress" aria-label="مراحل ورود">
            <li aria-current="step">
              <span>۱</span>شماره موبایل
            </li>
            <li>
              <span>۲</span>کد تأیید
            </li>
            <li>
              <span>۳</span>تأیید اطلاعات
            </li>
          </ol>
          <h1>ورود موبایل</h1>
          <p>
            حساب کاربری ندارید؟ <span>ثبت‌نام کنید</span>
          </p>
          <LoginForm />
          <div className="auth-footer">
            <Link href="/contact">راهنمای ورود</Link>
            <Link href="/about">درباره دوکوهه</Link>
          </div>
        </div>
        <p className="auth-terms">
          با استفاده از سایت، قوانین و شرایط استفاده از خدمات به رسم دوکوهه را می‌پذیرید.
        </p>
      </div>
    </section>
  );
}
