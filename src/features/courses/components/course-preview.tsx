'use client';
import Image from 'next/image';
import { useState } from 'react';
export function CoursePreview() {
  const [message, setMessage] = useState('');
  return (
    <div className="course-preview">
      <Image src="/assets/course-poster.png" width={625} height={349} alt="معرفی دوره" preload />
      <button
        className="course-preview__play"
        aria-label="پخش معرفی دوره"
        onClick={() => setMessage('ویدیوی معرفی این دوره هنوز در دسترس نیست.')}
      >
        <Image src="/assets/play.svg" width={80} height={80} alt="" unoptimized />
      </button>
      {message ? (
        <p className="preview-message" role="status">
          {message}
        </p>
      ) : null}
    </div>
  );
}
