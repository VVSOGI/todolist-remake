type Components = "section";

export const COMMON_MEDIA_QUERY_STYLES: Record<Components, string> = {
  section: `
    relative w-full h-full bg-white overflow-hidden rounded-medium
    mobile:flex mobile:flex-col mobile:shadow-primary
    tablet:w-section-tablet tablet:h-[30rem]
    desktop:w-section-desktop
  `,
};
