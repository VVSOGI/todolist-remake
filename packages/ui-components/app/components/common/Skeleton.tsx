import React from "react";

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export function Skeleton({ className = "", width = "100%", height = "3.5rem" }: SkeletonProps) {
  return (
    <div
      className={`
        skeleton rounded-medium
        ${className}
      `}
      style={{
        width,
        height,
      }}
    />
  );
}
