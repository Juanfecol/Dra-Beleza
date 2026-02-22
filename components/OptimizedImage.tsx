import React, { useState, useEffect } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  sizes?: string;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  sizes = '100vw',
  priority = false,
  alt,
  className,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  
  const isGoogleDrive = currentSrc && currentSrc.includes('drive.google.com');
  const isUnsplash = currentSrc && currentSrc.includes('images.unsplash.com');

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  const getSrcSet = (url: string) => {
    if (isGoogleDrive) {
      return undefined; 
    }
    
    if (isUnsplash) {
      const widths = [640, 768, 1024, 1280, 1536];
      const baseUrl = url.replace(/[?&]w=\d+/, '');
      const prefix = baseUrl.includes('?') ? '&' : '?';
      return widths
        .map(w => `${baseUrl}${prefix}w=${w}&auto=format&fit=crop&q=80 ${w}w`)
        .join(', ');
    }
    
    return undefined;
  };

  const handleError = () => {
    if (currentSrc !== src) return; 
    console.warn(`Failed to load image: ${src}`);
    setCurrentSrc('https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=800&auto=format&fit=crop');
  };

  return (
    <img
      src={currentSrc}
      srcSet={getSrcSet(currentSrc)}
      sizes={!isGoogleDrive ? sizes : undefined}
      alt={alt || ''}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      onError={handleError}
      referrerPolicy="no-referrer" 
      crossOrigin={isGoogleDrive ? "anonymous" : undefined}
      className={`${className} transition-opacity duration-300`}
      {...props}
    />
  );
};