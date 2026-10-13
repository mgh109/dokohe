import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { formatNumber, formatPrice } from '@/lib/format';
import { categories, type Course } from '../types';
export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card">
      <Link
        href={`/courses/${course.slug}`}
        className="course-card__cover"
        aria-label={`مشاهده دوره ${course.title}`}
      >
        <Image
          src={course.image}
          alt={course.title}
          width={285}
          height={180}
          sizes="(max-width:640px) 90vw, (max-width:1024px) 45vw, 285px"
        />
        {course.originalPrice ? (
          <span className="discount-badge">
            {formatNumber(Math.round((1 - course.price / course.originalPrice) * 100))}٪
          </span>
        ) : null}
      </Link>
      <div className="course-card__body">
        <h3>
          <Link href={`/courses/${course.slug}`}>{course.title}</Link>
        </h3>
        <p className="course-card__description">{course.description}</p>
        <p className="meta category">
          <Icon name="book" />
          مهارتی / {categories[course.category]}
        </p>
        <div className="card-row">
          <span className="meta teacher">
            <Icon name="teacher" />
            استاد {course.teacher}
          </span>
          <span className="meta rating">
            <Icon name="star" />
            {formatNumber(course.rating)}
          </span>
        </div>
        <div className="card-row course-card__footer">
          <span className="meta muted">
            <Icon name="users" />
            {formatNumber(course.students)} عضو
          </span>
          <div className="price">
            {course.originalPrice ? <del>{formatPrice(course.originalPrice)}</del> : null}
            <strong>{formatPrice(course.price)}</strong>
          </div>
        </div>
      </div>
    </article>
  );
}
