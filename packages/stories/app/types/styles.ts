/** Common **/

export type borderRadius = "small" | "medium" | "large";

export type boxShadow = "primary" | "secondary";

export enum mediaQueryStandard {
  TABLET = "45rem",
  MOBILE = "37.5rem",
  DESKTOP = "90.125rem",
}

export enum buttonsTheme {
  BRIGHT = "bright",
  DARK = "dark",
}

export type fontSize = "xs" | "sm" | "md" | "lg" | "xl";

/** Colors */

export type HexColor = `#${string}`;
export type ColorGroup = "RED" | "GRAY" | "CLOUD_BLUE";
export type ColorShade = "100" | "200" | "300" | "400" | "500" | "600";
export type BasicColor = "WHITE" | "BLACK";

export type Colors = {
  [K in `${ColorGroup}_${ColorShade}`]: HexColor;
} & {
  [K in BasicColor]: HexColor;
};

export type ColorsByGroup<T extends ColorGroup> = {
  [K in `${T}_${ColorShade}`]: HexColor;
};

export type BasicColors = {
  [K in BasicColor]: HexColor;
};

/** Storybook */

export type DesignSystemComponent<T extends string> = {
  name: T;
  value: string;
  description: string;
  classNames: string;
};
