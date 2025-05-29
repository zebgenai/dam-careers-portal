
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-in';
  delay?: number;
  duration?: number;
}

const AnimatedSection = ({ 
  children, 
  className, 
  animation = 'fade-in',
  delay = 0,
  duration = 0.6
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0 translate-y-8';
    
    switch (animation) {
      case 'slide-up':
        return 'opacity-100 translate-y-0';
      case 'slide-left':
        return 'opacity-100 translate-x-0';
      case 'slide-right':
        return 'opacity-100 translate-x-0';
      case 'scale-in':
        return 'opacity-100 scale-100';
      default:
        return 'opacity-100 translate-y-0';
    }
  };

  const getInitialClass = () => {
    switch (animation) {
      case 'slide-left':
        return 'translate-x-8';
      case 'slide-right':
        return '-translate-x-8';
      case 'scale-in':
        return 'scale-95';
      default:
        return 'translate-y-8';
    }
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        'transition-all ease-out',
        !isVisible ? `opacity-0 ${getInitialClass()}` : getAnimationClass(),
        className
      )}
      style={{ transitionDuration: `${duration}s` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
