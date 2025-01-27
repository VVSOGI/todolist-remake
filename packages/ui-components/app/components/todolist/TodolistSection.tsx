"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
}

export function TodolistSection({ children }: Props) {
  return (
    <section
      className={`
        relative w-full h-full flex flex-col rounded-none shadow-primary bg-white overflow-hidden
        tablet:w-section-tablet tablet:h-[30rem] tablet:rounded-medium
        desktop:w-section-desktop
      `}
    >
      {children}
    </section>
  );
}
