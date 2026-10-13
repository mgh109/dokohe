import Image from 'next/image';
const sizes = {
  book: [20, 20],
  teacher: [22, 20],
  star: [15, 15],
  users: [20, 20],
  login: [24, 24],
  cart: [22, 25],
  theme: [22, 22],
  search: [24, 24],
  chevron: [11, 6],
  latest: [43, 43],
  popular: [44, 43],
  roadmap: [43, 43],
  benefits: [44, 43],
  blog: [44, 43],
  chat: [130, 130],
} as const;
export type IconName = keyof typeof sizes;
export function Icon({ name }: { name: IconName }) {
  const [width, height] = sizes[name];
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
