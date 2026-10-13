import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { DesignIcon } from '@/components/ui/design-icon';
import { categories } from '@/features/courses/types';
export function CatalogSidebar({
  path,
  query,
  category,
  freeOnly = false,
  sort,
  articles = false,
}: {
  path: string;
  query: string;
  category: string;
  freeOnly?: boolean;
  sort: string;
  articles?: boolean;
}) {
  return (
    <aside className="catalog-sidebar">
      <form action={path}>
        <div className="catalog-search">
          <label className="sr-only" htmlFor="catalog-search">
            جستجو
          </label>
          <input
            id="catalog-search"
            name="q"
            defaultValue={query}
            maxLength={100}
            placeholder={articles ? 'عنوان مقاله یا نویسنده' : 'عنوان دوره یا نام استاد'}
          />
          <button type="submit" aria-label="جستجو">
            <Icon name="search" />
          </button>
        </div>
        <input type="hidden" name="sort" value={sort} />
        {!articles ? (
          <label className="catalog-toggle">
            <span>فقط دوره‌های رایگان</span>
            <input type="checkbox" name="free" value="true" defaultChecked={freeOnly} />
            <span className="toggle-track" aria-hidden="true" />
          </label>
        ) : null}
        <fieldset className="catalog-categories">
          <legend>
            <DesignIcon name="category" />
            دسته‌بندی {articles ? 'مقالات' : 'دوره‌ها'}
          </legend>
          <label>
            <input type="radio" name="category" value="" defaultChecked={!category} />
            همه دسته‌ها
          </label>
          {Object.entries(categories).map(([key, label]) => (
            <label key={key}>
              <input type="radio" name="category" value={key} defaultChecked={category === key} />
              {label}
            </label>
          ))}
        </fieldset>
        <button type="submit" className="button button--primary">
          اعمال فیلتر
        </button>
        <Link className="text-link" href={path}>
          پاک کردن فیلترها
        </Link>
      </form>
    </aside>
  );
}
