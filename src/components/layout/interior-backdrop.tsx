import Image from 'next/image';
export function InteriorBackdrop() {
  return (
    <div className="interior-lights" aria-hidden="true">
      <Image
        src="/assets/background-1.svg"
        width={698}
        height={903}
        alt=""
        unoptimized
        loading="eager"
      />
      <Image
        src="/assets/background-4.svg"
        width={552}
        height={1430}
        alt=""
        unoptimized
        loading="eager"
      />
    </div>
  );
}
