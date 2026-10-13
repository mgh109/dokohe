import { LoginForm } from '@/features/auth/components/login-form';
export const metadata = { title: 'ورود و ثبت‌نام' };
export default function LoginPage() {
  return (
    <section className="container page-content">
      <div className="panel auth-panel">
        <h1>ورود / ثبت‌نام</h1>
        <p>برای ادامه، شماره موبایل خود را وارد کنید.</p>
        <LoginForm />
      </div>
    </section>
  );
}
