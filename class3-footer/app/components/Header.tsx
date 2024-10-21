'use client'
import React from 'react'
import Link from 'next/link'
import Logo from './Logo'

function Header() {
  return (
    <header className='w-full fixed top-0 h-20 max-md:py-3 max-md:h-auto px-20 max-md:px-2 bg-slate-900 flex flex-wrap max-md:flex-col max-md:gap-3 justify-between items-center'>
      <Logo />
        <ul className='text-white flex justify-center items-center gap-5 max-md:w-full '>
            <Link href={'/'} className='py-2 px-4 rounded hover:bg-slate-800 max-md:bg-slate-800'>Home</Link>
            <Link href={'/rendering'} className='py-2 px-4 rounded  hover:bg-slate-800 max-md:bg-slate-800'>Rendering</Link>
            <Link href={'/dynamic-routes'} className='py-2 px-4 rounded  hover:bg-slate-800 max-md:bg-slate-800'>Dynamic Routes</Link>
        </ul>
    </header>
  )
}

export default Header
