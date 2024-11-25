import { css } from 'styled-components'
import { RuleSet } from 'styled-components/dist/types'
import { colors } from '@/app/styles'
import { ButtonSize, ButtonStyleProps, ButtonsTheme } from '@/app/types'

export const BUTTON_DEFAULT_STYLE = css<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  cursor: pointer;
  user-select: none;

  background-color: ${(props) => {
    return props.stylestheme === ButtonsTheme.BRIGHT ? colors.red_600 : colors.gray_500
  }};

  &:hover {
    background-color: ${(props) => {
      return props.stylestheme === ButtonsTheme.BRIGHT ? colors.red_500 : colors.gray_400
    }};
  }

  &:active {
    background-color: ${(props) => {
      return props.stylestheme === ButtonsTheme.BRIGHT ? colors.red_600 : colors.gray_500
    }};
  }
`

export const BUTTON_SIZES: Record<ButtonSize, RuleSet> = {
  small: css`
    padding: 0.8rem 0.4rem;
    width: fit-content;
    min-width: 3rem;
    height: 100%;
    min-height: 2rem;
    font-size: 0.8rem;
    font-weight: 600;
  `,
  medium: css`
    padding: 1rem 0.6rem;
    width: fit-content;
    min-width: 5rem;
    height: 100%;
    min-height: 2.5rem;
    font-size: 1rem;
    font-weight: 700;
  `,
  large: css`
    padding: 1.2rem 0.8rem;
    width: fit-content;
    min-width: 8rem;
    height: 100%;
    min-height: 4rem;
    font-size: 1.2rem;
    font-weight: 700;
  `
}
