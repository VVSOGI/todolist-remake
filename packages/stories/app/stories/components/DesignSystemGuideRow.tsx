import React from "react";
import { DesignSystemDisplay } from "@/app/stories/components";
import { DesignSystemComponent } from "@/app/types";

interface Props<T extends string> {
  list: DesignSystemComponent<T>[];
}

export function DesignSystemGuideRow<T extends string>({ list }: Props<T>) {
  return (
    <div className="w-full flex flex-col justify-between gap-[2.5rem]">
      {list.map((item) => (
        <div key={item.name} className="flex">
          <div className="text-xs flex-[0_0_30%]">
            <div className="font-[700]">{item.name.toUpperCase()}</div>
            <div className="text-gray-500">{item.description}</div>
          </div>
          <DesignSystemDisplay classNames={item.classNames}>{item.value}</DesignSystemDisplay>
        </div>
      ))}
    </div>
  );
}
