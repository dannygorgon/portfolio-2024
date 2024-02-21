import Image from "next/image";


const Hero = () => {
  return (
    <section>
    <h1 className="text-6xl font-bold">Hello, I&apos;m <span className="text-blue-500">Daniel</span></h1>
      <Image src="/boy.png" alt="Hero" width={300} height={300} className="m-3 mx-auto" />
      <p className="text-2xl text-center">I'm a full-stack developer</p>
    </section>
  );
};

export default Hero;