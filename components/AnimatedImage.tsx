"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function AnimatedImage({ src, alt, className }: AnimatedImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={imageRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      } ${className || ""}`}
    >
      <Image
        src={src}
        alt={alt}
        width={400}
        height={300}
        className="rounded-lg object-cover w-full h-full"
      />
    </div>
  );
}
