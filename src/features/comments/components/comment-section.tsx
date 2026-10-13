'use client';
import Image from 'next/image';
import { useState } from 'react';
import { DesignIcon } from '@/components/ui/design-icon';
const comments = [
  {
    id: 1,
    name: 'Mohammad',
    role: 'کاربر',
    body: 'آموزش ارتباط مؤثر زمانی کاربردی می‌شود که بتوانیم شناخت مخاطب و تمرین گفت‌وگو را در کنار هم قرار دهیم. این موضوع در فعالیت‌های فرهنگی اهمیت زیادی دارد.',
    reply:
      'ممنون از همراهی شما. تمرین‌های هر جلسه کمک می‌کنند این مهارت‌ها را در موقعیت‌های مختلف تجربه کنید.',
  },
  {
    id: 2,
    name: 'Mohammad',
    role: 'کاربر',
    body: 'برای یادگیری بهتر، نکات هر جلسه را یادداشت می‌کنم و بعد دوباره به سرفصل مربوط برمی‌گردم.',
  },
];
export function CommentSection() {
  const [showForm, setShowForm] = useState(false);
  return (
    <section className="detail-panel comment-section">
      <div className="detail-panel__heading">
        <h2>
          <DesignIcon name="comments" />
          نظرات
        </h2>
        <button
          className="comment-action"
          aria-expanded={showForm}
          onClick={() => setShowForm((v) => !v)}
        >
          ثبت نظر جدید
        </button>
      </div>
      {showForm ? (
        <div className="comment-compose">
          <label htmlFor="comment-text">نظر شما</label>
          <textarea id="comment-text" maxLength={2000} />
          <p>ثبت نظر در نسخه فعلی در دسترس نیست.</p>
          <button className="button button--primary" disabled>
            ثبت نظر
          </button>
        </div>
      ) : null}
      <p className="demo-label">نمایش نمونه نظرات</p>
      {comments.map((comment) => (
        <article className="comment-thread" key={comment.id}>
          <div className="comment-bubble">
            <div className="comment-author">
              <Image src="/assets/comment-avatar.png" width={62} height={62} alt="" />
              <div>
                <strong>{comment.name}</strong>
                <small>{comment.role}</small>
              </div>
              <time>۱۴۰۳/۰۳/۱۱</time>
            </div>
            <p>{comment.body}</p>
          </div>
          {comment.reply ? (
            <div className="comment-bubble comment-bubble--reply">
              <div className="comment-author">
                <span className="comment-avatar">ا</span>
                <div>
                  <strong>alireza</strong>
                  <small>مدرس</small>
                </div>
                <time>۱۴۰۳/۰۳/۱۱</time>
              </div>
              <p>{comment.reply}</p>
            </div>
          ) : null}
        </article>
      ))}
    </section>
  );
}
