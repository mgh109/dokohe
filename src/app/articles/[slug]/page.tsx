import Image from 'next/image';
import { notFound } from 'next/navigation';
import { articles } from '@/features/articles/data/articles';
import { getCourses } from '@/features/courses/services/course-service';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { RelatedCourses } from '@/features/courses/components/related-courses';
import { Syllabus } from '@/features/courses/components/syllabus';
import { CommentSection } from '@/features/comments/components/comment-section';
import { CopyLink } from '@/components/ui/copy-link';
import { SocialIcons } from '@/components/ui/social-icons';
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: articles.find((article) => article.slug === slug)?.title ?? 'مقاله پیدا نشد' };
}
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const courses = await getCourses();
  return (
    <article className="container interior-page article-detail">
      <Breadcrumb section="وبلاگ آموزشی و مقالات" href="/articles" title={article.title} />
      <div className="detail-columns">
        <div className="detail-main">
          <section className="detail-panel article-reading">
            <h1>{article.title}</h1>
            <div className="article-reading__meta">
              <span>{article.author}</span>
              <time>{article.date}</time>
              <span>مقاله آموزشی</span>
            </div>
            <Image
              src="/assets/article-feature.png"
              width={757}
              height={364}
              alt="قلم، کتاب و عینک؛ تصویر مقاله"
              preload
            />
            <Syllabus count={8} article />
            <div className="detail-copy">
              <h2 id="article-introduction">معرفی مقاله</h2>
              <p>{article.summary}</p>
              <p>
                حلقه‌های میانی می‌توانند میان نیازهای جامعه و ظرفیت فعالیت‌های فرهنگی ارتباط ایجاد
                کنند. شناخت موضوع و توجه به تجربه مخاطب، زمینه گفت‌وگویی روشن‌تر و مؤثرتر را فراهم
                می‌کند.
              </p>
              <p>
                در آموزش مهارت‌های ارتباطی، شنیدن و پرسیدن به اندازه انتقال پیام اهمیت دارند. تمرین
                این مهارت‌ها به ما کمک می‌کند موقعیت را بهتر بشناسیم و از قضاوت‌های عجولانه فاصله
                بگیریم.
              </p>
              <details>
                <summary>مشاهده بیشتر</summary>
                <p>
                  پیشنهاد می‌شود پیش از هر گفت‌وگو، هدف و مخاطب خود را مشخص کنید. سپس با پرسش‌های
                  روشن و توجه به پاسخ‌ها، فرصت مشارکت و یادگیری متقابل را ایجاد کنید.
                </p>
              </details>
            </div>
          </section>
          <CommentSection />
        </div>
        <aside className="detail-sidebar">
          <RelatedCourses courses={courses} title="دوره‌های مرتبط با این مقاله" />
          <section className="detail-panel share-panel">
            <h2>اشتراک‌گذاری مطلب</h2>
            <CopyLink />
            <SocialIcons />
          </section>
        </aside>
      </div>
    </article>
  );
}
