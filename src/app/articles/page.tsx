import { articles } from '@/features/articles/data/articles';
import { ArticleCard } from '@/features/articles/components/article-card';
export const metadata = { title: 'مقالات آموزشی' };
export default function ArticlesPage() {
  return (
    <section className="container page-content">
      <h1>وبلاگ آموزشی و مقالات</h1>
      <div className="course-grid">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
