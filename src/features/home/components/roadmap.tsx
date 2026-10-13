import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/section-heading';
const steps = [
  { icon: 'path', color: 'coral', width: 132, height: 132 },
  { icon: 'message', color: 'green', width: 115, height: 105 },
  { icon: 'chart', color: 'purple', width: 95, height: 95 },
  { icon: 'award', color: 'gold', width: 100, height: 100 },
] as const;
export function Roadmap() {
  return (
    <section className="container home-section" id="roadmap">
      <SectionHeading
        icon="roadmap"
        title="نقشه راه"
        subtitle="این مسیر رو طی کنی زودتر به مقصد می‌رسی"
      />
      <div className="roadmap-grid">
        {steps.map((step) => (
          <Link
            key={step.icon}
            href="/courses"
            className={`roadmap-step roadmap-step--${step.color}`}
          >
            <div className="roadmap-step__visual">
              <div className="roadmap-step__border">
                <Image
                  src={`/assets/roadmap-${step.icon}.svg`}
                  width={step.width}
                  height={step.height}
                  alt=""
                  unoptimized
                />
              </div>
            </div>
            <h3>یادگیری مهارت</h3>
            <p>می‌تونی برای شروع تمرین کنی و مهارت عمومی رو خوب یاد بگیری</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
