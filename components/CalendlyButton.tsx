import React from 'react';
import { Button } from './Button';
import { Calendar } from 'lucide-react';

declare global {
  interface Window {
    Calendly: any;
  }
}

interface CalendlyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const CalendlyButton: React.FC<CalendlyButtonProps> = ({ 
  text,
  className,
  variant = 'primary',
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
        onClick(e);
    }
    
    e.preventDefault();
    
    // Redirect all booking attempts through the Chatbot flow
    if ((window as any).openDiagnosticChatbot) {
        (window as any).openDiagnosticChatbot();
    } else {
        // Fallback if chatbot not available
        if (window.Calendly) {
            window.Calendly.initPopupWidget({
                url: 'https://calendly.com/drabeleza-pt/30min'
            });
        }
    }
  };

  return (
    <Button 
      onClick={handleClick}
      variant={variant}
      className={className}
      {...props}
    >
      <Calendar size={text ? 18 : 22} />
      {text && <span>{text}</span>}
    </Button>
  );
};
