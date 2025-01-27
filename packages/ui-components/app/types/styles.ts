/** Colors */

export type HexColor = `#${string}`;
export type ColorGroup = "RED" | "GRAY" | "CLOUD_BLUE";
export type ColorShade = "100" | "200" | "300" | "400" | "500" | "600";
export type BasicColor = "WHITE" | "BLACK";

export type ColorsByGroup<T extends ColorGroup> = {
  [K in `${T}_${ColorShade}`]: HexColor;
};

export type BasicColors = {
  [K in BasicColor]: HexColor;
};
