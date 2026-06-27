"use client";
import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  style?: React.CSSProperties;
  onComplete?: () => void;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'top 80%',
  scrollEnd = 'top 20%',
  stagger = 0.03,
  style,
  onComplete
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span className="sf-char" style={{ display: 'inline-block' }} key={index}>
        {char === ' ' ? ' ' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const timer = setTimeout(() => {
      const charElements = el.querySelectorAll('.sf-char');
      if (!charElements.length) return;

      const scrollerOpt: Record<string, any> = {};
      if (scrollContainerRef?.current) {
        scrollerOpt.scroller = scrollContainerRef.current;
      }

      const tween = gsap.fromTo(
        charElements,
        {
          willChange: 'opacity, transform',
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: '50% 0%'
        },
        {
          duration: animationDuration,
          ease,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger,
          scrollTrigger: {
            trigger: el,
            start: scrollStart,
            end: scrollEnd,
            scrub: true,
            once: true,
            onLeave: () => onComplete?.(),
            ...scrollerOpt
          }
        }
      );

      ScrollTrigger.refresh();
    }, 600);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2 ref={containerRef} className={`my-5 overflow-hidden ${containerClassName}`} style={style}>
      <span className={textClassName} style={{ display: 'inline-block' }}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;
