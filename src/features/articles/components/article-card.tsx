import Image from 'next/image';
import Link from 'next/link';
import type { articles } from '../data/articles';
export function ArticleCard({ article }: { article: (typeof articles)[number] }) {
  return (
    <article className="article-card">
      <Link href={`/articles/${article.slug}`}>
        <Image
          src={article.image}
          width={285}
          height={180}
          alt={article.title}
          sizes="(max-width:640px) 90vw, (max-width:1024px) 45vw, 285px"
        />
      </Link>
      <div className="article-card__body">
        <h3>
          <Link href={`/articles/${article.slug}`}>{article.title}</Link>
        </h3>
        <p>{article.summary}</p>
        <div className="card-row muted">
          <span>{article.author}</span>
          <time>{article.date}</time>
        </div>
        <Link className="article-card__read" href={`/articles/${article.slug}`}>
          مطالعه مقاله ←
        </Link>
      </div>
    </article>
  );
}
