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
        const targetElement = document.getElementById("contact"); // Replace with your target section ID
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the target section
        }
      }}
    >
      {children}
    </Button>
  );
}
