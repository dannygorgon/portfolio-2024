import Image from "next/image";


const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center w-full mx-auto max-w-screen-xl space-x-4 sm:space-x-8 lg:space-x-16 xl:space-x-24 2xl:space-x-64">
      <div className="text-left">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-balance">Hello, I&apos;m <span className="text-blue-500">Daniel</span></h1>
        <p className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-balance">I&apos;m a <span className="text-blue-500">full-stack developer</span></p>
        <p className="text-xl xs:text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-balance">Ipsum lorem dolem dolor la bloodclaat raasclaat  <span className="text-blue-500">bumboclaat</span></p>
        <p className="text-xl xs:text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-balance">Ipsum lorem dolem dolor la bloodclaat raasclaat  <span className="text-blue-500">move from round yah</span></p>
      </div>
      <div className="flex items-start">
      <Image 
  src="/me.png" 
  alt="Hero" 
  width={170} 
  height={177} 
  className="transition-all duration-500 ease-in-out transform xl:w-96 2xl:w-128" 
/>      </div>
    </section>
  );
};

export default Hero;