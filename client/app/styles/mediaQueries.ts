import { RuleSet, css } from 'styled-components'
import { categoryComponents, mediaQueryStandard, sectionWidth } from '@/app/types'

export const CATEGORY_MEDIA_QUERY: Record<categoryComponents, RuleSet> = {
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
    @media only screen and (max-width: ${mediaQueryStandard.MOBILE}) {
      font-size: 0.875rem;
    }

    @media only screen and (min-width: ${mediaQueryStandard.DESKTOP}) {
      font-size: 1.125rem;
    }
  `,

  time: css`
    @media only screen and (max-width: ${mediaQueryStandard.MOBILE}) {
      font-size: 0.875rem;
      p {
        display: none;
      }
    }

    @media only screen and (min-width: ${mediaQueryStandard.DESKTOP}) {
      font-size: 1rem;
    }
  `
}
