import React from "react";

import { FONT_SIZES } from "@/app/styles";

export function FontSizes() {
  const sizes = Object.entries(FONT_SIZES);

  return (
    <div className="flex flex-col gap-[1.5rem]">
      {sizes.map(([key, value]: [key: string, value: string]) => (
        <div className="flex items-center" key={key}>
          <div className="flex-[0_0_30%]">
            <div className="font-[600]">{key.toUpperCase()}</div>
            <div className="text-xs text-gray-500">{value}</div>
          </div>
          <div style={{ fontSize: value }}>HELLO WORLD!</div>
        </div>
      ))}
    </div>
  );
}
