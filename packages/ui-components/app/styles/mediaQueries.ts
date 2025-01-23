import { categoryComponents, commonComponents, todolistComponents } from "@/app/types";

export const COMMON_MEDIA_QUERY_STYLES: Record<commonComponents, string> = {
  section: `
    mobile:w-full mobile:h-full mobile:min-w-section-mobile mobile:rounded-none
    tablet:w-section-tablet
    desktop:w-section-desktop
  `,

  title: `
    mobile:text-sm
    tablet:text-md
    desktop:text-lg
  `,
};

export const TODOLIST_MEDIA_QUERY_STYLES: Record<todolistComponents, string> = {
  createButtonWrapper: `
    mobile:rounded-none
    tablet:rounded-bl-medium tablet:rounded-br-medium
  `,
};
