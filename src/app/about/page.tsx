import Image from 'next/image';
import { InteriorBackdrop } from '@/components/layout/interior-backdrop';
export const metadata = { title: 'درباره ما' };
export default function AboutPage() {
  return (
    <section className="illustrated-page illustrated-page--about">
      <InteriorBackdrop />
      <div className="illustrated-shell">
        <Image
          className="illustrated-art illustrated-art--about"
          src="/assets/about-art.svg"
          width={721}
          height={632}
          alt="مسیر آموزش، کتاب‌ها و پرچم پیشرفت"
          unoptimized
          preload
        />
        <div className="illustrated-panel illustrated-panel--about">
          <h1>درباره ما</h1>
          <div className="about-copy">
            <p>
              به رسم دوکوهه یک آکادمی آموزش در حوزه عفاف و حجاب است که با هدف حفظ ارزش‌های دینی و
              ملی فعالیت می‌کند. هدف ما فراهم کردن مسیر یادگیری کاربردی و همراهی شما در رشد
              مهارت‌های فرهنگی و ارتباطی است.
            </p>
            <p>
              در دوکوهه، آموزش فرصتی برای رشد و تمرین است. تلاش می‌کنیم با ارائه دوره‌های آموزشی،
              مقاله‌های کاربردی و مسیرهای روشن یادگیری، شما را در شناخت بهتر موضوعات فرهنگی و
              به‌کارگیری آموخته‌ها همراهی کنیم.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
