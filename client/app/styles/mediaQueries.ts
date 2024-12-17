import { RuleSet, css } from 'styled-components'
import { categoryComponents, commonComponents, mediaQueryStandard, sectionWidth, todolistComponents } from '@/app/types'
import { FONT_SIZES } from '@/app/styles'

export const COMMON_MEDIA_QUERY: Record<commonComponents, RuleSet> = {
  section: css`
    width: ${sectionWidth.TABLET};

    @media only screen and (max-width: ${mediaQueryStandard.MOBILE}) {
      width: 100%;
      height: 100%;
      border-radius: 0rem;
      min-width: ${sectionWidth.MOBILE};
    }

    @media only screen and (min-width: ${mediaQueryStandard.DESKTOP}) {
      width: ${sectionWidth.DESKTOP};
    }
  `,

  title: css`
    font-size: ${FONT_SIZES.md};

    @media only screen and (max-width: ${mediaQueryStandard.MOBILE}) {
      font-size: ${FONT_SIZES.sm};
    }

    @media only screen and (min-width: ${mediaQueryStandard.DESKTOP}) {
      font-size: ${FONT_SIZES.lg};
    }
  `
}

export const CATEGORY_MEDIA_QUERY: Record<categoryComponents, RuleSet> = {
  title: css`
    @media only screen and (max-width: ${mediaQueryStandard.MOBILE}) {
      font-size: ${FONT_SIZES.xs};
    }

    @media only screen and (min-width: ${mediaQueryStandard.DESKTOP}) {
      font-size: ${FONT_SIZES.md};
    }
  `,

  time: css`
    @media only screen and (max-width: ${mediaQueryStandard.MOBILE}) {
      font-size: ${FONT_SIZES.xs};
      p {
        display: none;
      }
    }

    @media only screen and (min-width: ${mediaQueryStandard.DESKTOP}) {
      font-size: ${FONT_SIZES.sm};
    }
  `
}

export const TODOLIST_MEDIA_QUERY: Record<todolistComponents, RuleSet> = {
  createButtonWrapper: css`
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;

    @media only screen and (max-width: ${mediaQueryStandard.MOBILE}) {
      border-radius: 0rem;
    }
  `
}
