export enum ButtonsTheme {
  BRIGHT = "bright",
  DARK = "dark",
}

export type ButtonSize = "small" | "medium" | "large";

export const BUTTON_DEFAULT_STYLES: Record<ButtonsTheme, string> = {
  bright: `
    flex justify-center items-center bg-red-600 select-none cursor-pointer text-white
    hover:bg-red-500
    active:bg-red-600
  `,

  dark: `
    flex justify-center items-center bg-gray-500 select-none cursor-pointer text-white
    hover:bg-gray-400
    active:bg-gray-500
  `,
};

export const BUTTON_SIZES_STYLES: Record<ButtonSize, string> = {
  small: "w-fit min-w-[3rem] h-full min-h-[2rem] py-sm px-xs text-sm font-[600]",
  medium: "w-fit min-w-[5rem] h-full min-h-[2.5rem] py-md px-sm text-[1rem] font-[700]",
  large: "w-fit min-w-[8rem] h-full min-h-[4rem] py-lg px-md text-lg font-[700]",
};

export const SECTION_LINK_STYLES = `
  w-[2.5rem] h-[2.5rem] flex justify-center items-center gap-sm rounded-full cursor-pointer
  hover:bg-gray-100
  active:bg-white
  first:hover:text-red-600
  first:active:text-red-500
`;
