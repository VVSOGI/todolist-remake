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

/** Todolist **/

export type todolistHeights = 'HEADER' | 'CREATE_INPUT'

/** Category **/

export type categoryComponents = 'title' | 'time'

/** Button **/

export interface buttonStyleProps {
  stylestheme: buttonsTheme
  size: buttonSize
}

export enum buttonsTheme {
  BRIGHT = 'BRIGHT',
  DARK = 'DARK'
}

export enum buttonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}
