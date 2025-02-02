import React from 'react'
import Image from 'next/image'
import { DockDemo } from './Dock'
import { signOutUser } from '@/lib/actions/user.actions';
import { Button } from './ui/button';
import Link from 'next/link';

const Header = ({ userId, accountId }:{ userId: string; accountId: string; }) => {
  return (
    <header className=' hidden items-center justify-between px-7 sm:flex '>
      <Link href="/" className='flex justify-center'>
        <Image src="/assets/icons/Vault-removebg.png" alt='logo' width={160} height={50} className='hidden h-auto max-h-[130px] lg:block'/>
        <Image src="/assets/icons/logo-brand.svg" alt='logo' width={52} height={52} className='lg:hidden' />
      </Link>
      <DockDemo userId={userId} accountId={accountId}  />
      <div className="header-wrapper">
        <form action={async () => {
          'use server';
          await signOutUser();
        }}> 
          <Button type='submit' className='sign-out-button '>
            <Image src='/assets/icons/log-out-svgrepo.svg' alt='logo' height={24} width={24} className='w-6' />
          </Button>
        </form>
      </div>
    </header>
  )
}

export default Header