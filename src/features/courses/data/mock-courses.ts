import type { Course } from '../types';
const titles = [
  'نقش و جایگاه حلقه‌های میانی در گسترش حجاب و عفاف',
  'مهارت‌های ارتباطی کنشگران حجاب و عفاف',
  'آشنایی با شیوه عملکرد حلقه‌های میانی',
  'گفت‌وگوی مؤثر و ارتباط سازنده',
  'مبانی فرهنگی حجاب و عفاف',
  'یادگیری مهارت‌های عمومی',
  'کنشگری فرهنگی و کار گروهی',
  'مهارت شنیدن و همدلی',
];
export const mockCourses: readonly Course[] = titles.map((title, index) => ({
  id: String(index + 1),
  slug: `course-${index + 1}`,
  title,
  description:
    'جلسه اول: آشنایی با شیوه عملکرد حلقه‌های میانی در گام دوم انقلاب و تقویت مهارت‌های ارتباطی.',
  category: index % 3 === 0 ? 'communication' : index % 3 === 1 ? 'culture' : 'skills',
  teacher: 'محمدعلی جعفری',
  price: index === 5 ? 0 : 500000,
  originalPrice: index === 1 ? 750000 : undefined,
  rating: 4.6,
  students: 236,
  image: '/assets/course-cover.png',
  lessons: 8,
  duration: '۴ ساعت و ۳۰ دقیقه',
}));
