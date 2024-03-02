import Nav from "../components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    
    <body>
      
      <header className="w-full mx-auto max-w-screen-xl px-8 sm:px-16">
        <Nav /> 
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between px-8">
        {children}
      </main>
  
    </body>
  );
}