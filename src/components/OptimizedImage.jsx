import { useState, useEffect } from 'react';

export default function OptimizedImage({ src, alt, className = '', style = {} }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { rootMargin: '50px' }
    );

    const element = document.getElementById(`img-${src}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [src]);

  return (
    <div
      id={`img-${src}`}
      className={className}
      style={{
        ...style,
        backgroundImage: isInView ? `url(${src})` : 'none',
        transition: 'opacity 0.3s ease-in-out',
        opacity: isLoaded ? 1 : 0.5,
      }}
      onLoad={() => setIsLoaded(true)}
    />
  );
}
