import { describe, expect, it } from 'vitest';
import { filterCourses } from './filter-courses';
import { mockCourses } from '../data/mock-courses';
describe('course discovery', () => {
  it('normalizes Persian and Arabic characters when searching', () => {
    expect(filterCourses(mockCourses, { query: 'مهارت‌هاي ارتباطي' }).length).toBeGreaterThan(0);
  });
  it('combines category and free-only filters', () => {
    const result = filterCourses(mockCourses, { category: 'skills', freeOnly: true });
    expect(result).toHaveLength(1);
    expect(result[0]?.price).toBe(0);
  });
  it('sorts by price without mutating source data', () => {
    const original = mockCourses.map((course) => course.id);
    expect(filterCourses(mockCourses, { sort: 'price' })[0]?.price).toBe(0);
    expect(mockCourses.map((course) => course.id)).toEqual(original);
  });
  it('returns an empty state for an unknown query', () => {
    expect(filterCourses(mockCourses, { query: 'دوره ناموجود' })).toEqual([]);
  });
});
