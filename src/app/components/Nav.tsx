'use client'
// Import necessary dependencies
import React, { useState, useRef, useEffect } from 'react';
import { BentoSidebar } from '@bentoproject/sidebar/react';
import Link from 'next/link';
import '@bentoproject/sidebar/styles.css';

const Nav = () => {
  const sidebarRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the sidebar
  const openSidebar = () => {
    (sidebarRef.current as any)?.open();
  };

  const closeSidebar = () => {
    (sidebarRef.current as any)?.close();
  };

  useEffect(() => {
    closeSidebar();
  }, []);

  return (
    <div>
      <BentoSidebar ref={sidebarRef} style={{ width: 300, height: '100vh' }} className="bg-gray-800 text-white">
        <ul>
          <li><Link href="#home"><span className="menu-item">Home</span></Link></li>
          <li><Link href="#about"><span className="menu-item">About</span></Link></li>
          <li><Link href="#projects"><span className="menu-item">Projects</span></Link></li>
          <li><Link href="#contact"><span className="menu-item">Contact</span></Link></li>
        </ul>
      </BentoSidebar>

      <nav className="flex items-start justify-between pt-8  lg:pt-8 lg:pb-8 xl:pt-8">
        <Link href="/"><span className="mx-2"></span></Link>
        <div className="sm:hidden">
          <button onClick={openSidebar} className="outline-none">
            <svg className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} sm:flex`}>
          <Link href="/about"><span className="mx-2 hover:text-blue-500 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">About</span></Link>
          <Link href="/projects"><span className="mx-2 hover:text-blue-500 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">Projects</span></Link>
          <Link href="/contact"><span className="mx-2 hover:text-blue-500 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">Contact</span></Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
