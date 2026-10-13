'use client';
import { DesignIcon } from '@/components/ui/design-icon';
import { useState } from 'react';
export function CopyLink() {
  const [message, setMessage] = useState('');
  return (
    <div>
      <button
        className="copy-link"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(window.location.href);
            setMessage('لینک کپی شد.');
          } catch {
            setMessage('امکان کپی خودکار نیست؛ آدرس را از مرورگر کپی کنید.');
          }
        }}
      >
        لینک کوتاه این آموزش <DesignIcon name="copy" />
      </button>
      {message ? <small role="status">{message}</small> : null}
    </div>
  );
}
