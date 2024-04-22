"use client";
import { Button } from '@/components/ui/button'
import React from 'react'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link';

function Header() {
    const {user, isSignedIn} = useUser();
  return (
    <div className='py-4 px-4 flex justify-between items-center border shadow-sm'>
        <div className='text-xl font-bold'>Tax<span className='text-slate-600'> Homie</span></div>
        {
            isSignedIn? <UserButton/> : <Link href='/sign-in'><Button >Get Started</Button></Link>
        }
        
    </div>
  )
}

export default Header