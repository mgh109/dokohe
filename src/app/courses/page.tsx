import type { Metadata } from 'next';
import { getCourses } from '@/features/courses/services/course-service';
import { filterCourses } from '@/features/courses/lib/filter-courses';
import { CourseGrid } from '@/features/courses/components/course-grid';
import { CatalogSidebar } from '@/features/catalog/components/catalog-sidebar';
import { SortBar } from '@/features/catalog/components/sort-bar';
import { Icon } from '@/components/ui/icon';
import { formatNumber } from '@/lib/format';
export const metadata: Metadata = { title: 'دوره‌های آموزشی' };
export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const scalar = (key: string) => (typeof params[key] === 'string' ? params[key] : '');
  const query = scalar('q').slice(0, 100),
    category = scalar('category'),
    sort = scalar('sort'),
    free = scalar('free') === 'true';
  const courses = filterCourses(await getCourses(), { query, category, sort, freeOnly: free });
  return (
    <section className="container interior-page catalog-page">
      <div className="catalog-heading">
        <h1>
          <Icon name="latest" />
          دوره‌های آموزشی
        </h1>
        <span>{formatNumber(courses.length)} دوره آموزشی</span>
      </div>
      <div className="catalog-layout catalog-layout--figma">
        <CatalogSidebar
          path="/courses"
          query={query}
          category={category}
          freeOnly={free}
          sort={sort}
        />
        <div className="catalog-results">
          <SortBar
            path="/courses"
            sort={sort}
            params={{ q: query, category, free: String(free) }}
          />
          {courses.length ? (
            <CourseGrid courses={courses} />
          ) : (
            <div className="panel empty-state">
              <h2>دوره‌ای پیدا نشد</h2>
              <p>عبارت جستجو یا فیلترها را تغییر دهید.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
