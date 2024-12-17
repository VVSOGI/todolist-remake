/** Todolist **/

export type todolistHeights = 'header' | 'createInput'

export type todolistComponents = 'createButtonWrapper'

/** Category **/

export type categoryComponents = 'title' | 'time'

/** Common **/

export type borderRadius = 'small' | 'medium' | 'large'

export type boxShadow = 'primary'

export type commonComponents = 'section' | 'title'

export enum mediaQueryStandard {
  TABLET = '45rem',
  MOBILE = '37.5rem',
  DESKTOP = '90.125rem'
}

export enum sectionWidth {
  TABLET = '45rem',
  MOBILE = '20rem',
  DESKTOP = '75rem'
}

export interface ButtonStyleProps {
  stylestheme: buttonsTheme
  size: buttonSize
}

export enum buttonsTheme {
  BRIGHT = 'bright',
  DARK = 'dark'
}

export type buttonSize = 'small' | 'medium' | 'large'

export type fontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
