// import Link from 'next/link';
'use client'
import { FaBarsStaggered } from "react-icons/fa6";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { DialogClose } from '@radix-ui/react-dialog';
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="bg-zinc-800 text-white h-24 w-full flex items-center px-6">
        <div className="flex-grow">
          <Link href="/">
            <span className="text-2xl font-bold">Logo</span>
          </Link>
        </div>
        <div className="hidden sm:flex space-x-4
        
        ">
          <Link href="/contact" className='text-white hover:text-zinc-300'>
            Contact
          </Link>
          <Link href="/rss" className='text-white hover:text-zinc-300'>
            Rss
          </Link>
          <Link href="/posts" className='text-white hover:text-zinc-300'>
            Posts
          </Link>
          <Link href="/mysql-crud" className='text-white hover:text-zinc-300'>
            MySQL CRUD
          </Link>
          <Link href="/session" className='text-white hover:text-zinc-300'>
            Session
          </Link>
          <Link href="/sign-in" className='text-white hover:text-zinc-300'>
            Sign In
          </Link>
        </div>

        <div className="flex text-2xl text-white sm:hidden">
          <Sheet>
            <SheetTrigger> <FaBarsStaggered /> </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className='w-full text-left'>Navigation Title/Logo</SheetTitle>
                <SheetDescription className='
                flex flex-col justify-start items-start
                mx-auto w-full pt-6 text-xl font-extralight
                '>
                  <DialogClose asChild>
                    <Link href="/contact" className='pl-5 py-1
                    border-l-2 border-zinc-200 hover:border-zinc-600
                    text-zinc-600 hover:text-zinc-900
                    ease-in duration-75 transition-colors
                    '>
                      Contact
                    </Link>
                  </DialogClose>
                  <DialogClose asChild>
                    <Link href="/rss" className='pl-5 py-1
                    border-l-2 border-zinc-200 hover:border-zinc-600
                    text-zinc-600 hover:text-zinc-900
                    ease-in duration-75 transition-colors
                    '>
                      Rss
                    </Link>
                  </DialogClose>
                  <DialogClose asChild>
                    <Link href="/posts" className='pl-5 py-1
                    border-l-2 border-zinc-200 hover:border-zinc-600
                    text-zinc-600 hover:text-zinc-900
                    ease-in duration-75 transition-colors
                    '>
                      Posts
                    </Link>
                  </DialogClose>
                  <DialogClose asChild>
                    <Link href="/mysql-crud" className='pl-5 py-1
                    border-l-2 border-zinc-200 hover:border-zinc-600
                    text-zinc-600 hover:text-zinc-900
                    ease-in duration-75 transition-colors
                    '>
                      MySQL CRUD
                    </Link>
                  </DialogClose>
                  <DialogClose asChild>
                    <Link href="/sign-in" className='pl-5 py-1
                    border-l-2 border-zinc-200 hover:border-zinc-600
                    text-zinc-600 hover:text-zinc-900
                    ease-in duration-75 transition-colors
                    '>
                      Sign In
                    </Link>
                  </DialogClose>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );

}
