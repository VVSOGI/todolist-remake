"use client";

import React from "react";
import { DragOverlay, defaultDropAnimationSideEffects } from "@dnd-kit/core";
import type { PropsWithChildren } from "react";
import type { DropAnimation } from "@dnd-kit/core";

const dropAnimationConfig: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0.1",
      },
    },
  }),
};

export function SortableOverlay({ children }: PropsWithChildren) {
  return (
    <DragOverlay className="h-fit overflow-hidden shadow-primary rounded-small" dropAnimation={dropAnimationConfig}>
      {children}
    </DragOverlay>
  );
}
