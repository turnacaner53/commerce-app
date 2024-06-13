'use client';

import { login, logout } from '@/actions';
import ThemeModeToggle from '@/components/ThemeModeToggle';
import { LogIn, User2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '../ui/button';

export default function Header({ getSession }) {
  const currentPath = usePathname();

  async function handleSignIn() {
    await login();
  }

  async function handleSingOut() {
    await logout();
  }

  return (
    <header className='relative z-50 flex min-h-[70px] items-center bg-primary/20 px-4 py-4 tracking-wide shadow-md dark:bg-primary/50'>
      <div className='flex w-full flex-wrap items-center justify-between gap-5'>
        <Link href='/'>
          <h2 className='text-2xl font-bold'>Shopping Cart</h2>
        </Link>
      </div>
      <div className='mr-4'>
        <ul className='mr-10 flex items-center justify-center gap-6'>
          <li className='text-xl font-semibold'>
            <Link
              className={`${currentPath === '/' && 'bg-blue-600/50'} rounded-md p-2`}
              href={'/'}
            >
              Products
            </Link>
          </li>
          <li className='text-xl font-semibold'>
            <Link
              className={`${currentPath === '/cart' && 'bg-blue-600/50'} rounded-md p-2`}
              href={'/cart'}
            >
              Cart
            </Link>
          </li>
        </ul>
      </div>
      <div className='flex space-x-4'>
        <ThemeModeToggle />
        <form action={getSession?.user ? handleSingOut : handleSignIn}>
          <Button className='rounded-full bg-primary/50' size='icon'>
            {getSession?.user ? <User2 width={20} /> : <LogIn width={20} />}
          </Button>
        </form>
      </div>
    </header>
  );
}
