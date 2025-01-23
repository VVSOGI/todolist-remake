"use client";

import React from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "../../components";
import { buttonsTheme } from "../../types";
import { BORDER_RADIUS_STYLES } from "../../styles";

interface Props {
  title: string;
  children: React.ReactNode;
  handleAgree: () => void;
  handleRefuse: () => void;
}

export function AgreementModal({ title, children, handleAgree, handleRefuse }: Props) {
  return (
    <div
      className={`fixed left-0 top-0 w-full h-screen flex justify-center items-center bg-[#00000050] select-none z-[100000]`}
      onClick={handleRefuse}
    >
      <div
        className={`w-[50rem] min-h-[18.75rem] flex flex-col bg-white shadow-primary ${BORDER_RADIUS_STYLES.medium}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-1 items-center justify-between p-[1.5rem] border-b border-gray-200">
          <span className={`font-[400] text-xl`}>{title}</span>
          <div
            className={`
              w-[1.875rem] h-[1.875rem] flex justify-center items-center text-xl cursor-pointer
              hover:text-gray-400
              active:text-gray-500
            `}
            onClick={handleRefuse}
          >
            <IoMdClose />
          </div>
        </div>
        <div className="flex flex-1 py-0 px-[1.5rem] text-md border-b border-gray-200">{children}</div>
        <div className="flex justify-end flex-1 gap-[0.75rem] p-[1.5rem]">
          <div className={`h-[2.5rem] overflow-hidden ${BORDER_RADIUS_STYLES.small}`}>
            <Button size="medium" theme={buttonsTheme.DARK} onClick={handleRefuse}>
              NO
            </Button>
          </div>
          <div className={`h-[2.5rem] overflow-hidden ${BORDER_RADIUS_STYLES.small}`}>
            <Button size="medium" theme={buttonsTheme.BRIGHT} onClick={handleAgree}>
              YES
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
