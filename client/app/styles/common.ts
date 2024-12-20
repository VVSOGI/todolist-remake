import { RuleSet, css } from 'styled-components'
import { borderRadius, boxShadow, fontSize, todolistHeights } from '@/app/types'

export const BORDER_RADIUS_SIZES: Record<borderRadius, RuleSet> = {
  small: css`
    border-radius: 0.25rem;
  `,

  medium: css`
    border-radius: 0.5rem;
  `,

  large: css`
    border-radius: 0.75rem;
  `
}

export const BOX_SHADOWS: Record<boxShadow, RuleSet> = {
  primary: css`
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  `,

  secondary: css`
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
  `
}

export const TODOLIST_HEIGHTS: Record<todolistHeights, string> = {
  header: '4.21875rem',
  createInput: '2.5rem'
}

export const SCROLL_BAR_SETTINGS = css`
  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.125rem;
    background: #ccc;
  }
`

export const FONT_SIZES: Record<fontSize, string> = {
  xs: '0.875rem',
  sm: '1rem',
  md: '1.125rem',
  lg: '1.25rem',
  xl: '1.5rem'
}
