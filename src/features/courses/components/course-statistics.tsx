import type { Course } from '../types';
import { categories } from '../types';
import { formatNumber } from '@/lib/format';
import { DesignIcon, type DesignIconName } from '@/components/ui/design-icon';
import { CopyLink } from '@/components/ui/copy-link';
export function CourseStatistics({ course }: { course: Course }) {
  const stats: { icon: DesignIconName; label: string; value: string }[] = [
    { icon: 'info-book', label: 'موضوع دوره', value: categories[course.category] },
    { icon: 'info-timer', label: 'مدت زمان دوره', value: course.duration },
    { icon: 'info-status', label: 'وضعیت دوره', value: 'آموزش ضبط‌شده' },
    { icon: 'info-course', label: 'پیش‌نیاز دوره', value: 'بدون پیش‌نیاز' },
    { icon: 'info-calendar', label: 'تاریخ به‌روزرسانی', value: '۱۴۰۳/۰۲/۱۴' },
    { icon: 'info-video', label: 'تعداد جلسات', value: `${formatNumber(course.lessons)} جلسه` },
  ];
  return (
    <div className="course-statistics">
      <div className="course-statistics__grid">
        {stats.map((stat) => (
          <div className="course-stat" key={stat.icon}>
            <DesignIcon name={stat.icon} />
            <div>
              <h3>{stat.label}</h3>
              <p>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="course-statistics__summary detail-panel">
        <div className="rating-summary">
          <div>
            <DesignIcon name="info-teacher" />
            <strong>{formatNumber(course.students)}</strong>
            <small>دانشجو</small>
          </div>
          <div>
            <DesignIcon name="info-star" />
            <strong>{formatNumber(course.rating)}</strong>
            <small>رضایت</small>
          </div>
        </div>
        <CopyLink />
      </div>
    </div>
  );
}
