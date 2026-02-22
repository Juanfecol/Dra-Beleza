import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  href?: string;
}

type CombinedProps = ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button: React.FC<CombinedProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  href,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-sm tracking-wide transition-all duration-300 transform disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer overflow-hidden group active:scale-[0.98]";
  
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-[0_10px_20px_-10px_rgba(201,44,76,0.5)] hover:shadow-[0_20px_30px_-10px_rgba(201,44,76,0.6)] hover:-translate-y-1 border border-transparent",
    secondary: "bg-stone-800 text-white hover:bg-stone-700 shadow-lg hover:shadow-xl hover:-translate-y-1 border border-transparent",
    outline: "bg-transparent text-brand-600 border-2 border-brand-600 hover:bg-brand-50 hover:border-brand-700 hover:text-brand-700"
  };

  const finalClassName = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  const Content = () => (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
      )}
    </>
  );

  if (href) {
    const isInternal = href.startsWith('/') || href.startsWith('#');
    
    if (isInternal) {
      return (
        <Link 
          to={href} 
          className={finalClassName}
          {...(props as any)}
        >
          <Content />
        </Link>
      );
    }

    return (
      <a 
        href={href} 
        className={finalClassName}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <Content />
      </a>
    );
  }

  return (
    <button 
      className={finalClassName}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <Content />
    </button>
  );
};