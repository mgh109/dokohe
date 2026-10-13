import Image from 'next/image';
const backgrounds = [
  { width: 698, height: 903 },
  { width: 725, height: 1112 },
  { width: 1420, height: 1387 },
  { width: 552, height: 1430 },
  { width: 1390, height: 995 },
];
export function Decorations() {
  return (
    <div className="home-decorations" aria-hidden="true">
      {backgrounds.map((size, index) => (
        <Image
          className={`home-decoration home-decoration--${index + 1}`}
          key={index}
          src={`/assets/background-${index + 1}.svg`}
          width={size.width}
          height={size.height}
          alt=""
          loading="eager"
          unoptimized
        />
      ))}
      <Image
        className="decor-arrow decor-arrow--1"
        src="/assets/arrow-1.svg"
        width={169}
        height={177}
        alt=""
        loading="eager"
        unoptimized
      />
      <Image
        className="decor-arrow decor-arrow--2"
        src="/assets/arrow-2.svg"
        width={277}
        height={280}
        alt=""
        loading="eager"
        unoptimized
      />
      <Image
        className="decor-arrow decor-arrow--3"
        src="/assets/arrow-3.svg"
        width={179}
        height={170}
        alt=""
        loading="eager"
        unoptimized
      />
    </div>
  );
}
