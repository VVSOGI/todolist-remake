import { buttonSize, buttonsTheme } from "@/app/types";
import { COLORS } from "@/app/styles";

export const BUTTON_DEFAULT_STYLES: Record<buttonsTheme, string> = {
  bright: `
    flex justify-center items-center bg-[${COLORS.RED_600}] select-none cursor-pointer text-[${COLORS.WHITE}]
    hover:bg-[${COLORS.RED_500}]
    active:bg-[${COLORS.RED_600}]
  `,

  dark: `
    flex justify-center items-center bg-[${COLORS.GRAY_500}] select-none cursor-pointer text-[${COLORS.WHITE}]
    hover:bg-[${COLORS.GRAY_400}]
    active:bg-[${COLORS.GRAY_500}]
  `,
};

export const BUTTON_SIZES_STYLES: Record<buttonSize, string> = {
  small: "w-fit min-w-[3rem] h-full min-h-[2rem] py-[0.8rem] px-[0.4rem] text-[0.8rem] font-[600]",
  medium: "w-fit min-w-[5rem] h-full min-h-[2.5rem] py-[1em] px-[0.6rem] text-[1rem] font-[700]",
  large: "w-fit min-w-[8rem] h-full min-h-[4rem] py-[1.2rem] px-[0.8rem] text-[1.2rem] font-[700]",
};
