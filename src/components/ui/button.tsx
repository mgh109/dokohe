import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';
export function Button({
  className,
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' }) {
  return (
    <button type={type} className={clsx('button', `button--${variant}`, className)} {...props} />
  );
}
