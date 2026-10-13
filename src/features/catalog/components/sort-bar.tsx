import Link from 'next/link';
import { DesignIcon } from '@/components/ui/design-icon';
export function SortBar({
  path,
  params,
  sort,
  articles = false,
}: {
  path: string;
  params: Record<string, string>;
  sort: string;
  articles?: boolean;
}) {
  const options = articles
    ? [
        ['', 'جدیدترین'],
        ['title', 'عنوان مقاله'],
      ]
    : [
        ['', 'جدیدترین'],
        ['price', 'ارزان‌ترین'],
        ['expensive', 'گران‌ترین'],
        ['popular', 'پرمخاطب‌ترین'],
      ];
  return (
    <nav className="catalog-sort" aria-label="مرتب‌سازی">
      <span>
        <DesignIcon name="sort" />
        مرتب‌سازی بر اساس
      </span>
      {options.map(([value, label]) => {
        const search = new URLSearchParams({ ...params, sort: value ?? '' });
        return (
          <Link
            href={`${path}?${search}`}
            aria-current={sort === value ? 'true' : undefined}
            key={value}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
