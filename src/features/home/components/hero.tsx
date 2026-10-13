import Image from 'next/image';
import Link from 'next/link';
export function Hero() {
  return (
    <section className="container hero">
      <div className="hero__copy">
        <h1>
          آکادمی آموزش
          <br />
          به رسم دوکوهه
        </h1>
        <p>
          مسیر یادگیری و رشد مهارت‌های فرهنگی و ارتباطی را با آموزش‌های کاربردی و همراهی استادان
          دنبال کنید.
        </p>
        <div className="hero__actions">
          <Link className="button button--primary" href="#roadmap">
            مسیرت رو می‌تونی ببینی
          </Link>
          <Link className="button button--gold" href="/courses?free=true">
            دوره‌های رایگان
          </Link>
        </div>
      </div>
      <div className="hero__art">
        <Image
          src="/assets/hero.svg"
          alt="کتاب‌ها، نردبان و چراغ ایده؛ مسیر یادگیری"
          width={601}
          height={482}
          preload
          unoptimized
        />
      </div>
    </section>
  );
}
