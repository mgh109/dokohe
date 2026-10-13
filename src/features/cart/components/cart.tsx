'use client';
import { useSyncExternalStore, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/format';
import type { Course } from '@/features/courses/types';
import { readCart, writeCart } from '../lib/cart-storage';
function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('dokohe:cart-change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('dokohe:cart-change', callback);
  };
}
function snapshot() {
  try {
    return localStorage.getItem('dokohe:cart:v1') ?? '[]';
  } catch {
    return '[]';
  }
}
export function Cart({ courses }: { courses: Course[] }) {
  const serialized = useSyncExternalStore(subscribe, snapshot, () => '[]');
  const [error, setError] = useState('');
  let slugs: string[] = [];
  try {
    const parsed: unknown = JSON.parse(serialized);
    if (Array.isArray(parsed))
      slugs = parsed.filter((slug): slug is string => typeof slug === 'string');
  } catch {
    /* Invalid storage is treated as empty. */
  }
  const selected = courses.filter((course) => slugs.includes(course.slug));
  return (
    <div className="panel">
      {selected.length ? (
        <>
          <div>
            {selected.map((course) => (
              <div className="lesson-row card-row" key={course.id}>
                <Link href={`/courses/${course.slug}`}>{course.title}</Link>
                <span>{formatPrice(course.price)}</span>
                <Button
                  variant="outline"
                  onClick={() => {
                    try {
                      writeCart(readCart().filter((slug) => slug !== course.slug));
                    } catch {
                      setError('ذخیره تغییرات سبد خرید ممکن نیست.');
                    }
                  }}
                  aria-label={`حذف ${course.title}`}
                >
                  حذف
                </Button>
              </div>
            ))}
          </div>
          <p>
            مجموع:{' '}
            <strong>{formatPrice(selected.reduce((sum, course) => sum + course.price, 0))}</strong>
          </p>
          <p className="form-note">
            قیمت نهایی و مجوز ثبت‌نام باید توسط بک‌اند تأیید شود. پرداخت هنوز فعال نیست.
          </p>
          <Button disabled>ادامه و پرداخت</Button>
        </>
      ) : (
        <div className="empty-state">
          <h2>سبد خرید شما خالی است</h2>
          <Link className="button button--primary" href="/courses">
            مشاهده دوره‌ها
          </Link>
        </div>
      )}
      {error ? <p role="alert">{error}</p> : null}
    </div>
  );
}
