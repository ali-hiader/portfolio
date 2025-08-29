import React from "react";

interface HighlightTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function HighlightText({
  children,
  className,
}: HighlightTextProps) {
  return (
    <span className="relative inline-block">
      <span className={`relative z-10 ${className}`}>{children}</span>
      <span className="absolute inset-0 top-2 h-3/4 w-full bg-yellow-200/70 -rotate-1 rounded-sm -z-0"></span>
    </span>
  );
}
