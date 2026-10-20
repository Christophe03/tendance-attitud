import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'gold',
  size = 'md',
  asLink = false,
  href,
  target,
  rel,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 cursor-pointer text-center';
  const variants = {
    gold: 'bg-[#4D3F08] hover:bg-[#604E0A] text-[#FFE88B] shadow-sm active:scale-95 border border-[#CCB765] rounded-lg',
    dark: 'bg-[#242B17] hover:bg-[#343D21] text-white active:scale-95 border border-[#343D21] rounded-full',
    outline: 'border border-[#FFE88B] text-[#FFE88B] hover:bg-[#FFE88B]/10 active:scale-95 rounded-lg',
  };
  const sizes = {
    sm: 'text-xs px-4 py-1.5',
    md: 'text-sm px-6 py-2.5',
    lg: 'text-base px-8 py-3.5',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (asLink && href) {
    const computedRel = rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined);
    return (
      <a href={href} target={target} rel={computedRel} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
