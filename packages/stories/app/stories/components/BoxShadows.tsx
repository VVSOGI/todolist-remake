import React from "react";
import { DesignSystemComponent, boxShadow } from "@/app/types";
import { DesignSystemGuideRow } from "@/app/stories/components";

export function BoxShadows() {
  const shadows: DesignSystemComponent<boxShadow>[] = [
    {
      name: "primary",
      value: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.2)",
      description: "Primary box shadow",
      classNames: "shadow-primary rounded-small",
    },
    {
      name: "secondary",
      value: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.15)",
      description: "Secondary box shadow",
      classNames: "shadow-secondary rounded-small",
    },
  ];

  return <DesignSystemGuideRow list={shadows} />;
}
