'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-8 py-4 border-b border-gray-800">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="Dollarbaz Logo" className="w-8 h-8" />
        <h1 className="text-xl font-bold text-gray-100">DOLLARBAZ</h1>
      </div>
      <nav className="flex items-center gap-6 text-sm text-gray-300">
        <Link href="#">Contact Us</Link>
        <Link href="#">Support</Link>
        <Link href="#">Sign In / Sign Up</Link>
      </nav>
    </header>
  );
}
