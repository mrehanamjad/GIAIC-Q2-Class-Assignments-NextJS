'use client'
import Image from 'next/image'
import React from 'react'

function WeatherCard({imgSrc,bgColor='bg-white',textColor=''}:{imgSrc: string;bgColor?:string;textColor?:string;}) {
  return (
    <div className={`text-center h-96  shadow-xl py-8 gap-8 w-96  flex flex-col justify-center items-center ${bgColor} ${textColor}`}>
            <Image src={imgSrc} alt='image' height={60} width={60} />
            <div className='text-center space-y-2 p-4'>
                <h1 className='text-3xl font-bold '>
                   Card Title
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed corporis magni voluptatum vel voluptate expedita quaerat ab eius.
                </p>
            </div>
          </div>
  )
}

export default WeatherCard