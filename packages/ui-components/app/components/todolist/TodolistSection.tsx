import React from "react";
import { COMMON_MEDIA_QUERY_STYLES } from "@/app/styles";

interface Props {
  children: React.ReactNode;
}

export function TodolistSection({ children }: Props) {
  return (
    <section
      className={`
        relative h-[30rem] flex flex-col bg-white overflow-y-hidden rounded-medium shadow-primary
        ${COMMON_MEDIA_QUERY_STYLES.section}
      `}
    >
      {children}
    </section>
  );
}
