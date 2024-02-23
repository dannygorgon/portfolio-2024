import Image from "next/image";


const Hero = () => {
  return (
    <section>
    <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-center">Hello, I&apos;m <span className="text-blue-500">Daniel</span></h1>
    <Image src="/me.png" alt="Hero" width={170} height={177} className="m-3 mx-auto" />    <p className="text-3xl font-bold text-center">I&apos;m a <span className="text-blue-500">full-stack developer</span></p>
    </section>
  );
};

export default Hero;