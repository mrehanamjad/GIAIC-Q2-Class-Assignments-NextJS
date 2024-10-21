"use client"; // Marks the component as client-side
import React from 'react';

function Page({ params }: { params: { name: string } }) {
  const { name } = params; 

  const getCurrentUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href; 
    }
    return ""; 
  };

  const currentUrl = getCurrentUrl(); 

  return (
    <div className="w-full min-h-[35rem] p-20 pt-28 text-white/95 flex justify-center items-center flex-col gap-4">
      <h1 className="text-4xl flex flex-wrap items-center justify-center gap-4 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        As-salamu alaykum, <code className='p-2 bg-gray-600 rounded-lg text-white'>{name}</code>
      </h1>
      <p className='text-lg'>You are at dynamic route:</p>
      <p className='text-lg p-2 px-4 bg-slate-900 rounded'>{currentUrl}</p> 
    </div>
  );
}

export default Page;

