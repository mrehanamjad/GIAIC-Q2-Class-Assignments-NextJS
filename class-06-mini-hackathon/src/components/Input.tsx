'use client';
import React, { useId, forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type?: string;
    className?: string;
    placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    { label, type = 'text',placeholder='', className = '', ...props },
    ref
) {
    const inputId = useId();

    return (
        <div className='w-full'>
            {label && (
                <label className='inline-block mb-1 pl-1' htmlFor={inputId}>
                    {label}
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                className={`border-2 border-gray-100 px-4 py-2 w-full max-w-72  rounded ${className}`}
                {...props}
                id={inputId}
                ref={ref}
            />
        </div>
    );
});

export default Input;
