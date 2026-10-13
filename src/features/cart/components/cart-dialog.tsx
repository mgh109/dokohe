'use client';
import { useEffect, useRef, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
export function CartDialog({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  useEffect(() => {
    const dialog = ref.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
      dialog.focus();
    }
    return () => dialog?.close();
  }, []);
  return (
    <dialog
      ref={ref}
      tabIndex={-1}
      className="cart-dialog"
      aria-labelledby="cart-title"
      onCancel={(event) => {
        event.preventDefault();
        router.push('/courses');
      }}
    >
      {children}
    </dialog>
  );
}
