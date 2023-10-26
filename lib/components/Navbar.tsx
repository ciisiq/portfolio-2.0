'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="flex-1 bg-amber-500">
      <h1 className="bg-stone-400">CiiS</h1>

      <nav className="flex-none bg-slate-400">
        <ul className="">
          <li className="">
            <Link href="/" onClick={() => setNavbar(!navbar)}>
              Home
            </Link>
          </li>
          <li className="">
            {' '}
            <Link href="/about" onClick={() => setNavbar(!navbar)}>
              About
            </Link>
          </li>
          <li className="">
            {' '}
            <Link href="/skills" onClick={() => setNavbar(!navbar)}>
              Skills
            </Link>
          </li>
          <li className="">
            {' '}
            <Link href="/projects" onClick={() => setNavbar(!navbar)}>
              Projects
            </Link>
          </li>
          <li className="">
            {' '}
            <Link href="/contact" onClick={() => setNavbar(!navbar)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
