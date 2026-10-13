import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
const benefits = [
  {
    icon: 'support',
    title: 'همراهی پشتیبانان آموزشی با شما و پیگیری امور آموزشی',
    text: 'در مسیر آموزش تنها نیستید؛ پرسش‌های خود را با پشتیبانان در میان بگذارید.',
    color: 'purple',
    size: 80,
  },
  {
    icon: 'medal',
    title: 'صدور گواهی پایان دوره',
    text: 'پس از تکمیل آموزش و ارزیابی، گواهی پایان دوره دریافت کنید.',
    color: 'gold',
    size: 80,
  },
  {
    icon: 'question',
    title: 'پرسش مستقیم از استاد و فرصت شرکت در کلاس‌های آنلاین',
    text: 'از تجربه استادان استفاده کنید و پرسش‌های خود را مطرح کنید.',
    color: 'green',
    size: 75,
  },
  {
    icon: 'graph',
    title: 'دوره‌های پروژه محور',
    text: 'آموزش را با تمرین‌های کاربردی به مهارت قابل استفاده تبدیل کنید.',
    color: 'pink',
    size: 75,
  },
];
export function Benefits() {
  return (
    <section className="container home-section">
      <SectionHeading
        icon="benefits"
        title="مزیت‌های سایت آموزشی به رسم دوکوهه"
        subtitle="همراه شما در مسیر یادگیری"
      />
      <div className="benefits-grid">
        {benefits.map((item) => (
          <article className="benefit" key={item.icon}>
            <div className={`benefit__icon benefit__icon--${item.color}`}>
              <Image
                src={`/assets/${item.icon}.svg`}
                width={item.size}
                height={item.size}
                alt=""
                unoptimized
              />
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
