import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl">Hi There! 👋</h1>
        <h1 className="text-2xl">I&apos;m Logan Olson</h1>
      </div>
      <div className="flex flex-col justify-center">
        <Image
          src="/home-image.svg"
          width={450}
          height={450}
          alt="Home image"
        />
      </div>
    </div>
  );
}
