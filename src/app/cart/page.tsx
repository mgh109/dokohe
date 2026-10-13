import { Cart } from '@/features/cart/components/cart';
import { getCourses } from '@/features/courses/services/course-service';
export const metadata = { title: 'سبد خرید' };
export default async function CartPage() {
  return (
    <section className="container page-content">
      <h1>سبد خرید</h1>
      <Cart courses={await getCourses()} />
    </section>
  );
}
