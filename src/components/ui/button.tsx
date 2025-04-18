// src/components/ui/button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

export const Button = ({ variant = 'default', className, ...props }: ButtonProps) => {
  const baseClasses = "px-6 py-3 rounded-xl transition-transform hover:scale-105 font-semibold";

  const variants = {
    default: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg",
    outline: "border border-white text-white hover:bg-white hover:text-gray-900",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className || ''}`}
      {...props}
    />
  );
};
