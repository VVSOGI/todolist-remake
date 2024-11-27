/** Common **/

export enum BorderRadius {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export enum BoxShadow {
  PRIMARY = 'primary'
}

/** Todolist **/

export type TodolistHeights = 'HEADER' | 'CREATE_INPUT'

/** Category **/

export enum MediaQueryStandard {
  MOBILE = '37.5rem',
  TABLET = '45rem',
  DESKTOP = '90.125rem'
}

export enum SectionWidth {
  TABLET = '45rem',
  MOBILE = '20rem',
  DESKTOP = '75rem'
}

/** Button **/

export interface ButtonStyleProps {
  stylestheme: ButtonsTheme
  size: ButtonSize
}

export enum ButtonsTheme {
  BRIGHT = 'BRIGHT',
  DARK = 'DARK'
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}
