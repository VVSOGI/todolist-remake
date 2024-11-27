import { RuleSet, css } from 'styled-components'
import { MediaQueryStandard, SectionWidth } from '../types'

export const SECTION_MEDIA_QUERY: RuleSet = css`
  width: ${SectionWidth.TABLET};

  @media only screen and (max-width: ${MediaQueryStandard.MOBILE}) {
    width: 100%;
    height: 100%;
    border-radius: 0rem;
    min-width: ${SectionWidth.MOBILE};
  }

  @media only screen and (min-width: ${MediaQueryStandard.DESKTOP}) {
    width: ${SectionWidth.DESKTOP};
  }
`
