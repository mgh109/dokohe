'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@/components/ui/icon';
export function HeaderControls() {
  const [dark, setDark] = useState(false);
  return (
    <div className="header-controls">
      <button
        aria-label="تغییر پوسته"
        aria-pressed={dark}
        onClick={() => {
          const next = !dark;
          setDark(next);
          document.documentElement.dataset.theme = next ? 'dark' : 'light';
        }}
      >
        <Icon name="theme" />
      </button>
      <Link href="/cart" aria-label="سبد خرید">
        <Icon name="cart" />
      </Link>
      <Link className="button button--primary login-link" href="/login">
        <Icon name="login" />
        ورود / ثبت نام
      </Link>
    </div>
  );
}
