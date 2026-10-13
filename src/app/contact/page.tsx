import Image from 'next/image';
import { InteriorBackdrop } from '@/components/layout/interior-backdrop';
import { SocialIcons } from '@/components/ui/social-icons';
import { ContactForm } from '@/features/contact/components/contact-form';
export const metadata = { title: 'تماس با ما' };
export default function ContactPage() {
  return (
    <section className="illustrated-page illustrated-page--contact">
      <InteriorBackdrop />
      <div className="illustrated-shell">
        <Image
          className="illustrated-art illustrated-art--contact"
          src="/assets/contact-art.svg"
          width={831}
          height={599}
          alt="ارتباط با مجموعه؛ پیام و تماس"
          unoptimized
          preload
        />
        <div className="illustrated-panel illustrated-panel--contact">
          <h1>تماس با ما</h1>
          <p className="contact-intro">
            اگر دوست داری با ما در ارتباط باشی می‌تونی
            <br />
            برامون پیام ارسال کنی
          </p>
          <div className="contact-columns">
            <ContactForm />
            <aside className="contact-social">
              <p>از طریق شبکه‌های اجتماعی باهامون در ارتباط باش</p>
              <SocialIcons large />
              <hr />
              <p>شماره تماس مجموعه اگر لازمت شد</p>
              <span dir="ltr">۰۲۱–۲۳۸۷۶۵۹</span>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
