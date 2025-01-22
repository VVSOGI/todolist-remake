import React from "react";

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Container({ children, style }: Props) {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-cloud-blue-200" style={style}>
      {children}
    </div>
  );
}
