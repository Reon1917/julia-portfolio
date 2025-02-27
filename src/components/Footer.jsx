"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              Julia<span className="text-primary">.</span>
            </Link>
          </div>
          
          <div className="text-center md:text-right text-neutral-400 text-sm">
            <p>&copy; {currentYear} Thet Myat Noe Thwin. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
