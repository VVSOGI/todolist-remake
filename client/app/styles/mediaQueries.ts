import { RuleSet, css } from 'styled-components'
import { mediaQueryStandard, sectionWidth } from '../types'

export const SECTION_MEDIA_QUERY: RuleSet = css`
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
`

export const CATEGORY_MEDIA_QUERY = {}
