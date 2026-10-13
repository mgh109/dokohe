import Image from 'next/image';
import Link from 'next/link';
export function Campaign() {
  return (
    <section className="campaign">
      <div className="container campaign__inner">
        <Image
          className="campaign__instructor"
          src="/assets/instructor.png"
          width={235}
          height={249}
          alt="مدرس دوره آنلاین"
        />
        <div className="campaign__copy">
          <span className="campaign__badge">دوره آنلاین و ویژه</span>
          <h2>مهارت‌های ارتباطی کنشگران حجاب و عفاف</h2>
          <p>آموزش مهارت‌های ارتباطی و تقویت شیوه گفت‌وگو برای کنشگران فرهنگی</p>
        </div>
        <Link className="button button--outline" href="/courses/course-2">
          مشاهده دوره
        </Link>
      </div>
    </section>
  );
}
