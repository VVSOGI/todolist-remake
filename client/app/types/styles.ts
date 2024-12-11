/** Common **/

export enum borderRadius {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export enum boxShadow {
  PRIMARY = 'primary'
}

export type commonComponents = 'section' | 'title'

/** Todolist **/

export type todolistHeights = 'HEADER' | 'CREATE_INPUT'

/** Category **/

export enum mediaQueryStandard {
  MOBILE = '37.5rem',
  TABLET = '45rem',
  DESKTOP = '90.125rem'
}

export enum sectionWidth {
  TABLET = '45rem',
  MOBILE = '20rem',
  DESKTOP = '75rem'
}

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
