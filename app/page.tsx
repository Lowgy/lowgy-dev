import Image from 'next/image';
import Typer from './components/typer';

export default function Home() {
  return (
    // <div className="flex md:flex-row flex-col justify-center pt-24 pb-8 pl-8">
    //   <div className="flex flex-col justify-center">
    //     <h1 className="text-3xl">
    //       Hi There! <span className="wave">👋</span>
    //     </h1>
    //     <h1 className="text-2xl">I&apos;m Logan Olson</h1>
    //   </div>
    //   <div className="flex flex-col justify-center">
    //     <Image
    //       src="/home-image.svg"
    //       width={450}
    //       height={450}
    //       alt="Home image"
    //     />
    //   </div>
    // </div>
    <section>
      <div className="container flex flex-col justify-center md:p-48 p-6 mx-auto sm:py-12 lg:py-36 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Hi there! <span className="wave">👋</span>
          </h1>
          <h1 className="mt-6 mb-8 text-4xl sm:mb-12">I&apos;m Logan Olson</h1>
          <Typer />
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            src="/home-image.svg"
            width={500}
            height={500}
            alt="Home image"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center py-48">
        <div className="flex flex-col">
          <h1 className="text-4xl leading-none">LET ME INTRODUCE MYSELF</h1>
          <p></p>
        </div>
        <div className="flex flex-col">
          <Image
            src="/avatar.png"
            width={250}
            height={250}
            alt="Avatar image"
          />
        </div>
      </div>
    </section>
  );
}
