export const articles = Array.from({ length: 6 }, (_, index) => ({
  id: String(index + 1),
  slug: `article-${index + 1}`,
  title: 'نقش و جایگاه حلقه‌های میانی در گسترش حجاب و عفاف',
  category: index % 3 === 0 ? 'communication' : index % 3 === 1 ? 'culture' : 'skills',
  summary:
    'آشنایی با شیوه عملکرد حلقه‌های میانی در گام دوم انقلاب و نقش آموزش در تقویت ارتباط مؤثر.',
  author: 'محمدعلی جعفری',
  date: '۱۴۰۳/۰۳/۱۱',
  image: '/assets/article-cover.png',
}));
