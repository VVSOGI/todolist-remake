import React from "react";
import { COMMON_MEDIA_QUERY_STYLES } from "../../styles";

interface Props {
  children: React.ReactNode;
}

export function TodolistSection({ children }: Props) {
  return <section className={COMMON_MEDIA_QUERY_STYLES.section}>{children}</section>;
}
