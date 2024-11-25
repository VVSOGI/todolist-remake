import { colors } from './colors'

export enum MediaQueryStandard {
  MOBILE = '37.5rem',
  TABLET = '45rem',
  DESKTOP = '90rem'
}

export const styles = {
  mainColor: {
    primary: colors.red_500,
    secondary: colors.red_300
  },

  backgroundColor: {
    primary: colors.cloudBlue_200,
    default: colors.white
  },

  boxShadow: {
    primary: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.2)'
  },

  borderRadius: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '0.75rem'
  },

  todolist: {
    header: {
      height: '4.21875rem'
    },

    createInput: {
      height: '2.5rem'
    }
  },

  yScrollDefaultSetting: `
  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.125rem;
    background: #ccc;
  }`
}
