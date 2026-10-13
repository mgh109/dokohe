'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Course } from '@/features/courses/types';
import { readCart, writeCart } from '../lib/cart-storage';
export function AddToCart({ course }: { course: Course }) {
  const [status, setStatus] = useState<'idle' | 'added' | 'error'>('idle');
  return (
    <div>
      <Button
        onClick={() => {
          try {
            writeCart([...readCart(), course.slug]);
            setStatus('added');
          } catch {
            setStatus('error');
          }
        }}
      >
        ثبت‌نام در دوره
      </Button>
      {status === 'added' ? (
        <p role="status">
          به سبد خرید اضافه شد.{' '}
          <Link className="text-link" href="/cart">
            مشاهده سبد خرید
          </Link>
        </p>
      ) : null}
      {status === 'error' ? <p role="alert">مرورگر اجازه ذخیره سبد خرید را نمی‌دهد.</p> : null}
    </div>
  );
}
