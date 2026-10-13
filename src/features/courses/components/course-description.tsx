import Image from 'next/image';
import { DesignIcon } from '@/components/ui/design-icon';
export function CourseDescription({ description }: { description: string }) {
  return (
    <section className="detail-panel course-description">
      <h2>
        <DesignIcon name="description" />
        توضیحات
      </h2>
      <Image
        src="/assets/description-poster.png"
        width={752}
        height={363}
        alt="پوستر معرفی دوره"
        className="course-description__poster"
      />
      <div className="detail-copy">
        <p>{description}</p>
        <p>
          در این دوره، نقش حلقه‌های میانی و شیوه‌های ارتباط مؤثر در فعالیت‌های فرهنگی بررسی می‌شود.
          آموزش‌ها به شما کمک می‌کنند با شناخت مخاطب، گفت‌وگو را روشن‌تر و سازنده‌تر پیش ببرید.
        </p>
        <p>
          سرفصل‌ها شامل آشنایی با موضوع، اصول ارتباط، تمرین شنیدن و بررسی موقعیت‌های کاربردی است.
          می‌توانید موضوع هر جلسه را در بخش سرفصل‌ها ببینید و مسیر یادگیری خود را دنبال کنید.
        </p>
        <details>
          <summary>مشاهده بیشتر</summary>
          <p>
            برای استفاده بهتر از آموزش، پس از هر جلسه نکات اصلی را یادداشت کنید و تمرین پیشنهادی را
            در یک موقعیت واقعی به کار ببرید. دسترسی به محتوای جلسات بر اساس ثبت‌نام در دوره ارائه
            خواهد شد.
          </p>
        </details>
      </div>
    </section>
  );
}
