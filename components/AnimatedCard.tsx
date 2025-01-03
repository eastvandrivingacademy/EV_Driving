"use client";

import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";

interface AnimatedCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  className?: string;
}

export function AnimatedCard({
  title,
  description,
  icon,
  className,
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      } ${className || ""}`}
    >
      <Card className="h-full text-textColor1">
        <CardContent className="flex flex-col items-center space-y-4 p-6 ">
          {icon} {/* Directly render the icon */}
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-center text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
