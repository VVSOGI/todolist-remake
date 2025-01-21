import { borderRadius, boxShadow, fontSize, todolistHeights } from "@/app/types";

export const BORDER_RADIUS_STYLES: Record<borderRadius, string> = {
  small: "border-[0.25rem]",
  medium: "border-[0.5rem]",
  large: "border-[0.75rem]",
};

export const BOX_SHADOWS_STYLES: Record<boxShadow, string> = {
  primary: "shadow-primary",
  secondary: "shadow-secondary",
};

export const TODOLIST_HEIGHTS_STYLES: Record<todolistHeights, string> = {
  header: "h-todolist-headers",
  createInput: "h-todolist-create",
};

export const FONT_SIZES: Record<fontSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
};
