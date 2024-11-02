import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'blue' | 'red' | 'darkBlue'|'white';
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
        <button type={type} className={`px-4 py-2 rounded  ${className} ${variant == 'blue' && 'bg-[#518ecb] text-white'} ${variant == 'darkBlue' && 'bg-[#1e40af] text-white'} ${variant == 'red' && 'bg-[#b73439] text-white'} ${variant == 'white' && 'bg-white '} `} {...props}>
            {children}
        </button>
    );
}

export default Button;