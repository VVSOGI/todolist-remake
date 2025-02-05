import React from "react";
import { DesignSystemComponent, borderRadius } from "@/app/types";
import { DesignSystemGuideRow } from "@/app/stories/components";

export function BorderRadiuses() {
  const sizes: DesignSystemComponent<borderRadius>[] = [
    {
      name: "small",
      value: "0.25rem",
      description: "Small size border radius",
      classNames: "rounded-small",
    },
    {
      name: "medium",
      value: "0.5rem",
      description: "Medium size border radius",
      classNames: "rounded-medium",
    },
    {
      name: "large",
      value: "0.75rem",
      description: "Large size border radius",
      classNames: "rounded-large",
    },
  ];

  return <DesignSystemGuideRow list={sizes} />;
}
