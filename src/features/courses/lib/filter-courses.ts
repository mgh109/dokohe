import type { Course } from '../types';
export type CourseFilters = {
  query?: string;
  category?: string;
  freeOnly?: boolean;
  sort?: string;
};
function normalize(text: string) {
  return text
    .replaceAll('ي', 'ی')
    .replaceAll('ك', 'ک')
    .replaceAll('‌', ' ')
    .trim()
    .toLocaleLowerCase('fa-IR');
}
export function filterCourses(courses: readonly Course[], filters: CourseFilters): Course[] {
  const query = normalize(filters.query ?? '');
  const result = courses.filter(
    (course) =>
      (!query ||
        normalize(`${course.title} ${course.teacher} ${course.description}`).includes(query)) &&
      (!filters.category || course.category === filters.category) &&
      (!filters.freeOnly || course.price === 0),
  );
  if (filters.sort === 'price') result.sort((a, b) => a.price - b.price);
  if (filters.sort === 'expensive') result.sort((a, b) => b.price - a.price);
  if (filters.sort === 'popular')
    result.sort((a, b) => b.students - a.students || b.rating - a.rating);
  return result;
}
