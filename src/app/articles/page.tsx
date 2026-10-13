import { articles } from '@/features/articles/data/articles';
import { ArticleCard } from '@/features/articles/components/article-card';
import { CatalogSidebar } from '@/features/catalog/components/catalog-sidebar';
import { SortBar } from '@/features/catalog/components/sort-bar';
import { Icon } from '@/components/ui/icon';
import { formatNumber } from '@/lib/format';
export const metadata = { title: 'مقالات آموزشی' };
export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const scalar = (key: string) => (typeof params[key] === 'string' ? params[key] : '');
  const q = scalar('q').slice(0, 100),
    category = scalar('category'),
    sort = scalar('sort');
  const filtered = articles.filter(
    (article) =>
      (!q || `${article.title} ${article.author}`.includes(q)) &&
      (!category || article.category === category),
  );
  if (sort === 'title') filtered.sort((a, b) => a.title.localeCompare(b.title, 'fa'));
  return (
    <section className="container interior-page catalog-page">
      <div className="catalog-heading catalog-heading--articles">
        <h1>
          <Icon name="blog" />
          وبلاگ آموزشی و مقالات
        </h1>
        <span>{formatNumber(filtered.length)} مقاله آموزشی</span>
      </div>
      <div className="catalog-layout catalog-layout--figma">
        <CatalogSidebar path="/articles" query={q} category={category} sort={sort} articles />
        <div className="catalog-results">
          <SortBar path="/articles" sort={sort} params={{ q, category }} articles />
          {filtered.length ? (
            <div className="course-grid">
              {filtered.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="empty-state panel">
              <h2>مقاله‌ای پیدا نشد</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
