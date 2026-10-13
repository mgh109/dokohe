import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/features/articles/data/articles';
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  return (
    <article className="container page-content prose">
      <div className="breadcrumb">
        <Link href="/articles">مقالات</Link> / {article.title}
      </div>
      <h1>{article.title}</h1>
      <p className="muted">
        {article.author} • {article.date}
      </p>
      <Image
        className="detail-cover"
        src={article.image}
        width={900}
        height={500}
        alt={article.title}
      />
      <section className="panel">
        <h2>آشنایی با حلقه‌های میانی</h2>
        <p>{article.summary}</p>
        <p className="form-note">
          محتوای نمونه برای بررسی رابط کاربری؛ متن مقاله از API دریافت خواهد شد.
        </p>
      </section>
    </article>
  );
}
