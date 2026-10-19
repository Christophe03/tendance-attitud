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
    'inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 rounded-full cursor-pointer text-center';
  const variants = {
    gold: 'bg-[#B3984C] hover:bg-[#C7A24B] text-black shadow-md hover:shadow-lg active:scale-95 border border-[#B3984C]',
    dark: 'bg-[#182315] hover:bg-[#253621] text-white active:scale-95 border border-[#253621]',
    outline: 'border border-[#E5C368] text-[#E5C368] hover:bg-[#E5C368]/10 active:scale-95',
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
