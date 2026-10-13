import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCourse } from '@/features/courses/services/course-service';
import { formatNumber, formatPrice } from '@/lib/format';
import { AddToCart } from '@/features/cart/components/add-to-cart';
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const course = await getCourse((await params).slug);
  return { title: course?.title ?? 'دوره پیدا نشد' };
}
export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const course = await getCourse((await params).slug);
  if (!course) notFound();
  return (
    <section className="container page-content">
      <div className="breadcrumb">
        <Link href="/courses">دوره‌ها</Link> / {course.title}
      </div>
      <div className="detail-hero">
        <div>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <p>مدرس: استاد {course.teacher}</p>
          <AddToCart course={course} />
        </div>
        <Image
          className="detail-cover"
          src={course.image}
          alt={course.title}
          width={625}
          height={349}
          preload
        />
      </div>
      <div className="detail-layout">
        <div className="panel prose">
          <h2>درباره دوره</h2>
          <p>{course.description}</p>
          <h2>سرفصل‌ها</h2>
          {Array.from({ length: course.lessons }, (_, i) => (
            <details className="lesson-row" key={i}>
              <summary>
                <span>
                  {formatNumber(i + 1)}. {i === 0 ? 'معرفی دوره' : 'آموزش مهارت‌های ارتباطی'}
                </span>
                <span>۱۸:۲۵</span>
              </summary>
              <p>
                مشاهده محتوای کامل این جلسه پس از ثبت‌نام و اتصال بخش آموزش به بک‌اند فعال می‌شود.
              </p>
            </details>
          ))}
        </div>
        <aside className="panel">
          <h2>اطلاعات دوره</h2>
          <p>تعداد جلسات: {formatNumber(course.lessons)}</p>
          <p>مدت آموزش: {course.duration}</p>
          <p>شرکت‌کنندگان: {formatNumber(course.students)}</p>
          <p>امتیاز: {formatNumber(course.rating)} از ۵</p>
          <strong className="price">{formatPrice(course.price)}</strong>
          <p className="form-note">اطلاعات فعلی نمونه است.</p>
        </aside>
      </div>
    </section>
  );
}
