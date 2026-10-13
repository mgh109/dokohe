import { ContactForm } from '@/features/contact/components/contact-form';
export const metadata = { title: 'تماس با ما' };
export default function ContactPage() {
  return (
    <section className="container page-content">
      <h1>تماس با ما</h1>
      <div className="panel">
        <h2>نظراتت رو اینجا بنویس</h2>
        <ContactForm />
      </div>
    </section>
  );
}
