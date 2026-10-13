'use client';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
export function SiteFrame({
  children,
  header,
  footer,
  banner,
}: {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
  banner: ReactNode;
}) {
  const path = usePathname();
  if (path === '/login') return <main id="main-content">{children}</main>;
  return (
    <div className={path === '/' ? 'site-frame' : 'site-frame site-frame--interior'}>
      {path === '/' ? banner : null}
      {header}
      <main id="main-content">{children}</main>
      {footer}
    </div>
  );
}
