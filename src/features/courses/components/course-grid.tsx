import type { Course } from '../types';
import { CourseCard } from './course-card';
export function CourseGrid({ courses }: { courses: readonly Course[] }) {
  return (
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
