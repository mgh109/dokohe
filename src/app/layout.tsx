import { SiteFrame } from '@/components/layout/site-frame';
import { EventBanner } from '@/components/layout/event-banner';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@fontsource/vazirmatn/arabic-400.css';
import '@fontsource/vazirmatn/arabic-700.css';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import './globals.css';
import '@/styles/interior.css';
export const metadata: Metadata = {
  title: { default: 'به رسم دوکوهه | آکادمی آموزش', template: '%s | به رسم دوکوهه' },
  description: 'آموزش مهارت‌های فرهنگی و ارتباطی در آکادمی به رسم دوکوهه',
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          رفتن به محتوای اصلی
        </a>
        <SiteFrame header={<SiteHeader />} footer={<SiteFooter />} banner={<EventBanner />}>
          {children}
        </SiteFrame>
      </body>
    </html>
  );
}
