import React from "react";
interface ComponentStyleProps {
  classNames: string;
}

interface Props extends ComponentStyleProps {
  children: React.ReactNode;
}

export function DesignSystemDisplay({ children, classNames }: Props) {
  return (
    <div
      className={`
        w-full h-[3rem] flex justify-center items-center bg-white border border-gray-300 text-[14px] text-gray-500 
        ${classNames}
      `}
    >
      {children}
    </div>
  );
}
