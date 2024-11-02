'use client';
import Button from '@/components/Button';
import Input from '@/components/Input';
import React, { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
    const router = useRouter();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        router.push('/thank-you');
    };

    return (
        <div className='bg-blue-100 text-gray-800 text-center h-full min-h-screen space-y-28 py-8'>
            <h1 className='text-4xl font-extrabold text-black'>Enter Your Details</h1>
            <form onSubmit={handleSubmit} className='max-w-3xl mx-auto space-y-4'>
                <Input placeholder='Enter Your Name' required />
                <Input placeholder='Enter Your Email' required />
                <Input placeholder='Card Number' required />
                <Input placeholder='Address' required />
                <Button type='submit' variant='darkBlue'>Place Your Order</Button>
            </form>
        </div>
    );
}

export default Page;
