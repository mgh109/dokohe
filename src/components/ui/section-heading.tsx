import Link from 'next/link';
import { Icon, type IconName } from './icon';
export function SectionHeading({
  title,
  subtitle,
  icon,
  href,
}: {
  title: string;
  subtitle?: string;
  icon: IconName;
  href?: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-heading__title">
        <Icon name={icon} />
        <div>
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
      </div>
      {href ? (
        <Link className="text-link" href={href}>
          مشاهده همه ←
        </Link>
      ) : null}
    </div>
  );
}
