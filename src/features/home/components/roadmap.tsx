import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/section-heading';
export function Roadmap() {
  return (
    <section className="container home-section" id="roadmap">
      <SectionHeading
        icon="roadmap"
        title="نقشه راه"
        subtitle="این مسیر رو طی کنی زودتر به مقصد می‌رسی"
      />
      <div className="roadmap-grid">
        {[1, 2, 3, 4].map((step) => (
          <Link key={step} href="/courses" className="roadmap-step">
            <Image
              src={`/assets/step-${step}.svg`}
              width={step === 1 || step === 4 ? 249 : 258}
              height={240}
              alt=""
              unoptimized
            />
            <h3>یادگیری مهارت</h3>
            <p>می‌تونی برای شروع تمرین کنی و مهارت عمومی رو خوب یاد بگیری</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
