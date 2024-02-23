import Nav from "../components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="w-full mx-auto max-w-screen-xl px-8 sm:px-16 lg:px-32">
        <Nav /> 
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-8">
        {children}
      </main>
    </>
  );
}