'use client'

import { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between pt-8 pb-8">
      <Link href="/"><span className="mx-2"></span></Link>
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} sm:flex`}>
        <Link href="/about"><span className="mx-2 hover:text-blue-500 text-xl" >About</span></Link>
        <Link href="/projects"><span className="mx-2 hover:text-blue-500  text-xl">Projects</span></Link>
        <Link href="/contact"><span className="mx-2 hover:text-blue-500 text-xl">Contact</span></Link>
      </div>
    </nav>
  );
};

export default Nav;