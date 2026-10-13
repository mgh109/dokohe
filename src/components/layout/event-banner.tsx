import Link from 'next/link';
export function EventBanner() {
  return (
    <aside className="event-banner container" aria-label="رویدادهای آموزشی">
      <div>
        <strong>رویدادها و پویش‌های دوکوهه</strong>
        <p>فرصتی برای یادگیری و همراهی</p>
      </div>
      <Link href="/courses">مشاهده دوره‌ها ←</Link>
    </aside>
  );
}
