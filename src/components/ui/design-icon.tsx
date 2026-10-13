import Image from 'next/image';
const dimensions = {
  'info-teacher': [38, 41],
  'info-star': [40, 40],
  copy: [27, 27],
  description: [35, 39],
  comments: [35, 35],
  lesson: [19, 22],
  category: [24, 24],
  sort: [28, 28],
  'info-timer': [38, 43],
  'info-book': [43, 41],
  'info-status': [40, 40],
  'info-course': [43, 42],
  'info-calendar': [38, 42],
  'info-video': [40, 40],
  delete: [17, 24],
} as const;
export type DesignIconName = keyof typeof dimensions;
export function DesignIcon({ name }: { name: DesignIconName }) {
  const [width, height] = dimensions[name];
  return (
    <Image
      src={`/assets/${name}.svg`}
      width={width}
      height={height}
      alt=""
      aria-hidden="true"
      unoptimized
    />
  );
}
