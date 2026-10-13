'use client';
import { useSyncExternalStore, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DesignIcon } from '@/components/ui/design-icon';
import { formatNumber, formatPrice } from '@/lib/format';
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
  const total = selected.reduce((sum, course) => sum + course.price, 0),
    original = selected.reduce((sum, course) => sum + (course.originalPrice ?? course.price), 0);
  return (
    <div className="cart-sheet">
      <div className="cart-sheet__heading">
        <h1 id="cart-title">سبد خرید</h1>
        <span>{formatNumber(selected.length)} مورد</span>
      </div>
      {selected.length ? (
        <>
          <div className="cart-sheet__items">
            {selected.map((course) => (
              <div className="cart-item" key={course.id}>
                <button
                  className="cart-delete"
                  onClick={() => {
                    try {
                      writeCart(readCart().filter((slug) => slug !== course.slug));
                    } catch {
                      setError('ذخیره تغییرات سبد خرید ممکن نیست.');
                    }
                  }}
                  aria-label={`حذف ${course.title}`}
                >
                  <DesignIcon name="delete" />
                </button>
                <Image src={course.image} width={100} height={75} alt="" />
                <Link href={`/courses/${course.slug}`}>{course.title}</Link>
                <div className="price">
                  {course.originalPrice ? <del>{formatPrice(course.originalPrice)}</del> : null}
                  <strong>{formatPrice(course.price)}</strong>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-sheet__summary">
            <div className="coupon-field">
              <label htmlFor="coupon">کد تخفیف</label>
              <input id="coupon" maxLength={50} disabled aria-describedby="checkout-notice" />
            </div>
            <dl>
              <div>
                <dt>قیمت اصلی</dt>
                <dd>{formatPrice(original)}</dd>
              </div>
              <div className="cart-discount">
                <dt>تخفیف</dt>
                <dd>{formatPrice(original - total)}</dd>
              </div>
              <div className="cart-total">
                <dt>قیمت نهایی</dt>
                <dd>{formatPrice(total)}</dd>
              </div>
            </dl>
            <p id="checkout-notice">پرداخت و اعمال کد تخفیف فعلاً فعال نیست.</p>
          </div>
          <div className="cart-sheet__footer">
            <Link href="/courses">انصراف از خرید و بازگشت ‹</Link>
            <Button disabled>ادامه و پرداخت</Button>
          </div>
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
