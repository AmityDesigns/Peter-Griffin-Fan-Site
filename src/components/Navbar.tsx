'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl font-family-guy text-blue-400">Peter Griffin</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="#quotes" className="text-gray-300 hover:text-blue-400 transition-colors">
            Quotes
          </Link>
          <Link href="#gallery" className="text-gray-300 hover:text-blue-400 transition-colors">
            Gallery
          </Link>
          <Link href="#family" className="text-gray-300 hover:text-blue-400 transition-colors">
            Family
          </Link>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900 border-gray-800 text-white">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#about" className="text-lg font-medium py-2 hover:text-blue-400 transition-colors">
                  About
                </Link>
                <Link href="#quotes" className="text-lg font-medium py-2 hover:text-blue-400 transition-colors">
                  Quotes
                </Link>
                <Link href="#gallery" className="text-lg font-medium py-2 hover:text-blue-400 transition-colors">
                  Gallery
                </Link>
                <Link href="#family" className="text-lg font-medium py-2 hover:text-blue-400 transition-colors">
                  Family
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
