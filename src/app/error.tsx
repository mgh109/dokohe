'use client';
import { Button } from '@/components/ui/button';
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="container page-content empty-state" role="alert">
      <h1>دریافت اطلاعات انجام نشد</h1>
      <p>لطفاً دوباره تلاش کنید.</p>
      <Button onClick={reset}>تلاش دوباره</Button>
    </section>
  );
}
