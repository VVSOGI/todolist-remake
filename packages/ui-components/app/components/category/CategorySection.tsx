import React from "react";
import { COMMON_MEDIA_QUERY_STYLES } from "../../styles";

interface Props {
  children: React.ReactNode;
}

export function CategorySection({ children }: Props) {
  return <section className={`${COMMON_MEDIA_QUERY_STYLES.section} p-[1.5rem]`}>{children}</section>;
}
