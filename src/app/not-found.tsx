import Link from 'next/link';
export default function NotFound() {
  return (
    <section className="container page-content empty-state">
      <h1>صفحه پیدا نشد</h1>
      <p>ممکن است آدرس تغییر کرده باشد.</p>
      <Link className="button button--primary" href="/">
        بازگشت به خانه
      </Link>
    </section>
  );
}
