import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'blue' | 'red' ;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
    children,
    type = 'button',
    variant = 'blue',
    className = '',
    ...props
}: ButtonProps) {
    return (
        <button type={type} className={`px-4 py-2 rounded text-white ${className} ${variant == 'blue' ? 'bg-[#518ecb]' : 'bg-[#b73439]'}`} {...props}>
            {children}
        </button>
    );
}

export default Button;