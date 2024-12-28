"use client";

import { Button } from "@/components/ui/button";

interface CallButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg";
}

export function CallButton({ children, className, size }: CallButtonProps) {
  return (
    <Button
      className={className}
      size={size}
      onClick={(e) => {
        e.preventDefault(); // Prevents the default button action
        window.open("tel:+1234567890"); // Open phone dialer without leaving the page
      }}
    >
      {children}
    </Button>
  );
}
