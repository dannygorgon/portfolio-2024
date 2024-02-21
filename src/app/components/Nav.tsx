import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-8">
      <Link href="/" className="text-2xl font-bold text-gray-800">
        Logo
      </Link>
      <div>
        <Link href="/about" className="text-gray-600 hover:text-gray-800 mx-2">
          About
        </Link>
        <Link href="/projects" className="text-gray-600 hover:text-gray-800 mx-2">
          Projects
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-gray-800 mx-2">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;