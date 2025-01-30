import React from "react";
import { COMMON_MEDIA_QUERY_STYLES } from "../../styles";

interface Props {
  children: React.ReactNode;
}

export function CategorySection({ children }: Props) {
  return <section className={`${COMMON_MEDIA_QUERY_STYLES.section} p-xl`}>{children}</section>;
}
