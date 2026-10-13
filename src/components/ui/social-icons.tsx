import Image from 'next/image';
export function SocialIcons({ large = false }: { large?: boolean }) {
  return (
    <div className="social-icons">
      <Image
        src={large ? '/assets/contact-social-row.svg' : '/assets/social-row.svg'}
        width={large ? 315 : 240}
        height={large ? 59 : 45}
        alt="نماد شبکه‌های اجتماعی مجموعه"
        unoptimized
      />
    </div>
  );
}
