import Image from "next/image";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <header >
        <Nav />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-12">
        <section>
          <h1 className="text-6xl font-bold">Hello, I'm <span className="text-blue-500">Daniel</span></h1>
          <Image src="/boy.png" alt="Hero" width={300} height={300} className="m-3 mx-auto" />
          <p className="text-2xl text-center">I'm a full-stack developer</p>
        </section>
      </main>
    </>
  );
}