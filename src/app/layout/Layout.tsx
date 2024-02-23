import Nav from "../components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Nav /> 
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-12">
        {children}
      </main>
    </>
  );
}