import Image from "next/image";


const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center w-full mx-auto space-x-8 sm:space-x-16 lg:space-x-32">
      <div className="text-left">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold">Hello, I&apos;m <span className="text-blue-500">Daniel</span></h1>
        
        <p className="text-xl xs:text-2xl font-bold ">I&apos;m a <span className="text-blue-500">full-stack developer</span></p>
        <p className="text-xl xs:text-2xl font-bold ">I&apos;m a <span className="text-blue-500">full-stack developer</span></p>

      </div>
      <div>
        <Image src="/me.png" alt="Hero" width={170} height={177}  />
      </div>
    </section>
  );
};

export default Hero;