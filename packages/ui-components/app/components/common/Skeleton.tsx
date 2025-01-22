"use client";

import { BORDER_RADIUS_STYLES } from "../../styles";
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
        skeleton 
        ${BORDER_RADIUS_STYLES.medium}
        ${className}
      `}
      style={{
        width,
        height,
      }}
    />
  );
}
