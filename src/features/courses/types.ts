import { z } from 'zod';
export const courseSchema = z.object({
  id: z.string(),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string(),
  description: z.string(),
  category: z.enum(['communication', 'culture', 'skills']),
  teacher: z.string(),
  price: z.number().nonnegative(),
  originalPrice: z.number().nonnegative().optional(),
  rating: z.number().min(0).max(5),
  students: z.number().int().nonnegative(),
  image: z.string().startsWith('/assets/'),
  lessons: z.number().int().positive(),
  duration: z.string(),
});
export type Course = z.infer<typeof courseSchema>;
export type CourseCategory = Course['category'];
export const categories: Record<CourseCategory, string> = {
  communication: 'مهارت‌های ارتباطی',
  culture: 'حجاب و عفاف',
  skills: 'مهارت‌های عمومی',
};
