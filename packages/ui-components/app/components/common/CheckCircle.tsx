"use client";

import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";

interface Props {
  onAnimationEnd: () => void;
}

export function CheckCircle({ onAnimationEnd }: Props) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimate = () => {
    setIsAnimating(true);
  };

  const handleAnimateStop = () => {
    setIsAnimating(false);
  };

  return (
    <div
      className={`
        w-[1.125rem] h-[1.125rem] flex justify-center items-center bg-white border border-gray-300 cursor-pointer rounded-full 
        ${isAnimating ? "animate" : "animate-stop"}
        first:hover:text-red-400 first:text-white
      `}
      onClick={() => {
        handleAnimate();
      }}
      onAnimationEnd={() => {
        handleAnimateStop();
        onAnimationEnd();
      }}
    >
      <GiCheckMark className="text-[0.625rem] transition-[0.2s]" />
    </div>
  );
}
