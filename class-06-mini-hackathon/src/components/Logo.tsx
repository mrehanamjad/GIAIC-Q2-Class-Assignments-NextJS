import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div className='py-2 '>
        <Image src={'/logo1.svg'} className='h-12 w-36 cursor-pointer' height={`1000`} width={200} alt='logo' />
    </div>
  )
}

export default Logo