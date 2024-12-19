'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';
import Form from './form';

function Navbar() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleForm = () => setIsFormVisible((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <div className="fixed top-0 left-0 w-full flex justify-between items-center h-[69px] px-4 md:px-8 bg-black z-50 shadow-md">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Logo movies app"
            width={164}
            height={42}
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex gap-8 ml-8">
          <Link
            href="/popular"
            className="text-[#F6F6F6] text-sm hover:text-[#FFD700] transition-colors"
          >
            Popular
          </Link>
          <Link
            href="/favorites"
            className="text-[#F6F6F6] text-sm hover:text-[#FFD700] transition-colors"
          >
            Favorites
          </Link>
        </div>

        <div className="flex items-center space-x-5 ml-auto">
          <button onClick={toggleForm} className="text-[#F6F6F6]">
            <UserCircleIcon className="w-6 h-6 hover:text-[#FFD700] transition-colors" />
          </button>
          <button onClick={toggleMenu} className="md:hidden text-[#F6F6F6]">
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-[69px] left-0 w-full bg-black p-4 flex flex-col space-y-4 md:hidden z-40 transition-transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Link
          href="/popular"
          className="text-[#F6F6F6] text-sm hover:text-[#FFD700] transition-colors"
          onClick={toggleMenu}
        >
          Popular
        </Link>
        <Link
          href="/favorites"
          className="text-[#F6F6F6] text-sm hover:text-[#FFD700] transition-colors"
          onClick={toggleMenu}
        >
          Favorites
        </Link>
      </div>

      {isFormVisible && <Form onClose={toggleForm} />}
    </>
  );
}

export default Navbar;
