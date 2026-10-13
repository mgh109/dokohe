import { Cart } from '@/features/cart/components/cart';
import { CartDialog } from '@/features/cart/components/cart-dialog';
import { getCourses } from '@/features/courses/services/course-service';
import { Hero } from '@/features/home/components/hero';
import { Campaign } from '@/features/home/components/campaign';
export const metadata = { title: 'سبد خرید' };
export default async function CartPage() {
  return (
    <>
      <div className="cart-preview-background" aria-hidden="true" inert>
        <Hero />
        <Campaign />
      </div>
      <CartDialog>
        <Cart courses={await getCourses()} />
      </CartDialog>
    </>
  );
}
