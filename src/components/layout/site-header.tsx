import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { HeaderControls } from './header-controls';
const links = [
  ['/courses', 'دوره‌ها'],
  ['/#roadmap', 'نقشه راه'],
  ['/articles', 'مقالات'],
  ['/about', 'درباره ما'],
  ['/contact', 'تماس با ما'],
] as const;
export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" aria-label="صفحه اصلی به رسم دوکوهه">
          <Image src="/assets/logo.png" width={84} height={64} alt="به رسم دوکوهه" preload />
        </Link>
        <nav className="desktop-nav" aria-label="ناوبری اصلی">
          {links.map(([href, title]) => (
            <Link key={href} href={href}>
              {title}
              <Icon name="chevron" />
            </Link>
          ))}
        </nav>
        <form action="/courses" className="header-search">
          <label className="sr-only" htmlFor="header-search">
            جستجوی دوره
          </label>
          <input id="header-search" name="q" placeholder="دنبال چه دوره‌ای هستی؟" maxLength={100} />
          <button aria-label="جستجو" type="submit">
            <Icon name="search" />
          </button>
        </form>
        <HeaderControls />
        <details className="mobile-menu">
          <summary>منو</summary>
          <nav aria-label="ناوبری موبایل">
            {links.map(([href, title]) => (
              <Link key={href} href={href}>
                {title}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
