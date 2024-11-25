import { RuleSet, css } from 'styled-components'
import { MediaQueryStandard } from '.'

enum SectionWidth {
  TABLET = '45rem',
  MOBILE = '20rem',
  DESKTOP = '75rem'
}

export const SectionMediaQuery: RuleSet = css`
  width: ${SectionWidth.TABLET};

  @media only screen and (max-width: ${MediaQueryStandard.MOBILE}) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    min-width: ${SectionWidth.MOBILE};
  }

  @media only screen and (min-width: ${MediaQueryStandard.DESKTOP}) {
    width: ${SectionWidth.DESKTOP};
  }
`
