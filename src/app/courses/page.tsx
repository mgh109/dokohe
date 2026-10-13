import type { Metadata } from 'next';
import Link from 'next/link';
import { getCourses } from '@/features/courses/services/course-service';
import { filterCourses } from '@/features/courses/lib/filter-courses';
import { categories } from '@/features/courses/types';
import { CourseGrid } from '@/features/courses/components/course-grid';
import { formatNumber } from '@/lib/format';
export const metadata: Metadata = { title: 'دوره‌های آموزشی' };
export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const scalar = (key: string) => (typeof params[key] === 'string' ? params[key] : '');
  const query = scalar('q').slice(0, 100);
  const category = scalar('category');
  const free = scalar('free') === 'true';
  const sort = scalar('sort');
  const courses = filterCourses(await getCourses(), { query, category, freeOnly: free, sort });
  return (
    <section className="container page-content">
      <div className="breadcrumb">
        <Link href="/">خانه</Link> / دوره‌ها
      </div>
      <h1>دوره‌های آموزشی</h1>
      <div className="catalog-layout">
        <aside className="panel filter-panel">
          <h2>فیلتر دوره‌ها</h2>
          <form action="/courses">
            <label htmlFor="course-query">جستجو</label>
            <input
              id="course-query"
              name="q"
              defaultValue={query}
              placeholder="عنوان دوره یا نام استاد"
              maxLength={100}
            />
            <label htmlFor="category">دسته‌بندی</label>
            <select id="category" name="category" defaultValue={category}>
              <option value="">همه دسته‌ها</option>
              {Object.entries(categories).map(([key, label]) => (
                <option value={key} key={key}>
                  {label}
                </option>
              ))}
            </select>
            <label htmlFor="sort">مرتب‌سازی</label>
            <select id="sort" name="sort" defaultValue={sort}>
              <option value="">جدیدترین</option>
              <option value="popular">محبوب‌ترین</option>
              <option value="price">کمترین قیمت</option>
            </select>
            <label className="checkbox-label">
              <input type="checkbox" name="free" value="true" defaultChecked={free} />
              فقط دوره‌های رایگان
            </label>
            <button className="button button--primary" type="submit">
              اعمال فیلتر
            </button>
            <Link className="text-link" href="/courses">
              پاک کردن فیلترها
            </Link>
          </form>
        </aside>
        <div>
          <p className="catalog-count">{formatNumber(courses.length)} دوره یافت شد</p>
          {courses.length ? (
            <CourseGrid courses={courses} />
          ) : (
            <div className="panel empty-state">
              <h2>دوره‌ای پیدا نشد</h2>
              <p>عبارت جستجو یا فیلترها را تغییر دهید.</p>
              <Link href="/courses">نمایش همه دوره‌ها</Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
