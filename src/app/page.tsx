import { Decorations } from '@/features/home/components/decorations';
import { Campaign } from '@/features/home/components/campaign';
import { Hero } from '@/features/home/components/hero';
import { Roadmap } from '@/features/home/components/roadmap';
import { Benefits } from '@/features/home/components/benefits';
import { SectionHeading } from '@/components/ui/section-heading';
import { CourseGrid } from '@/features/courses/components/course-grid';
import { getCourses } from '@/features/courses/services/course-service';
import { ArticleCard } from '@/features/articles/components/article-card';
import { articles } from '@/features/articles/data/articles';
export default async function HomePage() {
  const courses = await getCourses();
  return (
    <div className="home-page">
      <Decorations />
      <Hero />
      <Campaign />
      <section className="container home-section">
        <SectionHeading
          icon="latest"
          title="آخرین دوره‌ها"
          subtitle="جدیدترین دوره‌های آموزشی دوکوهه"
          href="/courses"
        />
        <CourseGrid courses={courses} />
      </section>
      <Roadmap />
      <section className="container home-section">
        <SectionHeading
          icon="popular"
          title="محبوب‌ترین دوره‌ها"
          subtitle="محبوب‌ترین دوره‌های دوکوهه از نگاه کاربران"
          href="/courses?sort=popular"
        />
        <CourseGrid courses={courses.slice(0, 4)} />
      </section>
      <Benefits />
      <section className="container home-section">
        <SectionHeading
          icon="blog"
          title="وبلاگ آموزشی و مقالات"
          subtitle="از وبلاگ‌های آموزشی ما دیدن کن"
          href="/articles"
        />
        <div className="course-grid">
          {articles.slice(0, 4).map((article) => (
            <ArticleCard article={article} key={article.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
