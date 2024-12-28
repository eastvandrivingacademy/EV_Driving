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
      onClick={() => (window.location.href = "tel:+1234567890")}
    >
      {children}
    </Button>
  );
}
