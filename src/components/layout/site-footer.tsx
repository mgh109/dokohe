import { SocialIcons } from '@/components/ui/social-icons';
import Image from 'next/image';
import Link from 'next/link';
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h2>درباره ما</h2>
          <p>
            به رسم دوکوهه یک آکادمی آموزش در حوزه عفاف و حجاب است که با هدف حفظ ارزش‌های دینی و ملی
            فعالیت می‌کند.
          </p>
        </section>
        <section>
          <h2>دسترسی سریع</h2>
          <Link href="/courses">همه دوره‌ها</Link>
          <Link href="/articles">مقالات آموزشی</Link>
          <Link href="/contact">تماس با ما</Link>
          <Link href="/about">درباره ما</Link>
        </section>
        <section>
          <h2>راهنمای خرید</h2>
          <Link href="/courses">انتخاب دوره</Link>
          <Link href="/cart">سبد خرید</Link>
          <Link href="/login">پیگیری سفارش</Link>
        </section>
        <section>
          <h2>نماد الکترونیکی</h2>
          <Image
            src="/assets/trust.png"
            width={109}
            height={109}
            alt="نماد نمایش داده‌شده در طرح؛ وضعیت اعتبار برای انتشار باید تأیید شود"
          />
        </section>
      </div>
      <div className="footer-social">
        <SocialIcons />
      </div>
      <p className="footer-copy">کلیه حقوق مادی و معنوی سایت برای به رسم دوکوهه محفوظ است.</p>
    </footer>
  );
}
