import React from "react";
import { D2CodingBold } from "../../../public/fonts";
import { COMMON_MEDIA_QUERY_STYLES } from "../../styles";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Title({ children, style }: Props) {
  return (
    <div
      className={`w-full mb-[1.5rem] text-red-600 ${COMMON_MEDIA_QUERY_STYLES.title} ${D2CodingBold.className}`}
      style={style}
    >
      {children}
    </div>
  );
}
