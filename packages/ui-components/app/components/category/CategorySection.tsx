import React from "react";
import { COMMON_MEDIA_QUERY_STYLES } from "../../styles";

interface Props {
  children: React.ReactNode;
}

export function CategorySection({ children }: Props) {
  return (
    <section
      className={`
        h-[30rem] flex flex-col p-[1.5rem] bg-white shadow-primary rounded-medium
        ${COMMON_MEDIA_QUERY_STYLES.section}
      `}
    >
      {children}
    </section>
  );
}
