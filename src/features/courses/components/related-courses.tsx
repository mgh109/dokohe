import Image from 'next/image';
import Link from 'next/link';
import type { Course } from '../types';
import { Icon } from '@/components/ui/icon';
import { formatNumber } from '@/lib/format';
export function RelatedCourses({
  courses,
  title = 'دوره‌های مرتبط',
}: {
  courses: readonly Course[];
  title?: string;
}) {
  return (
    <section className="detail-panel related-courses">
      <h2>
        <Icon name="book" />
        {title}
      </h2>
      {courses.slice(0, 4).map((course) => (
        <Link className="related-course" href={`/courses/${course.slug}`} key={course.id}>
          <Image src={course.image} width={100} height={80} alt="" />
          <div>
            <h3>{course.title}</h3>
            <span className="card-row muted">
              <span>{formatNumber(course.students)} عضو</span>
              <span className="rating">★ {formatNumber(course.rating)}</span>
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}
