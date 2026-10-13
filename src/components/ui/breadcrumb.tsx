import Link from 'next/link';
export function Breadcrumb({
  section,
  href,
  title,
}: {
  section: string;
  href: string;
  title: string;
}) {
  return (
    <nav className="detail-breadcrumb" aria-label="مسیر صفحه">
      <Link href="/" aria-label="خانه">
        ⌂
      </Link>
      <span aria-hidden="true">‹</span>
      <Link href={href}>{section}</Link>
      <span aria-hidden="true">‹</span>
      <span aria-current="page">{title}</span>
    </nav>
  );
}
