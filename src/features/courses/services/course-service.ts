import 'server-only';
import { cache } from 'react';
import { z } from 'zod';
import { apiGet } from '@/lib/api/client';
import { courseSchema } from '../types';
import { mockCourses } from '../data/mock-courses';
export const getCourses = cache(async () => {
  if (process.env.DATA_SOURCE === 'api')
    return apiGet('/courses', z.object({ data: z.array(courseSchema) })).then(
      (result) => result.data,
    );
  if (process.env.DATA_SOURCE && process.env.DATA_SOURCE !== 'mock')
    throw new Error('DATA_SOURCE must be mock or api');
  return [...mockCourses];
});
export const getCourse = cache(async (slug: string) =>
  (await getCourses()).find((course) => course.slug === slug),
);
