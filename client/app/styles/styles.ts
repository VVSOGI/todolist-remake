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
    primary: '0 4px 8px rgba(0, 0, 0, 0.2)'
  },

  buttons: {
    hover: colors.gray_100,
    active: '#f2f2f2'
  },

  borderColor: {
    primary: colors.gray_200
  },

  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px'
  },

  todolist: {
    header: {
      height: '67.5px'
    },

    createInput: {
      height: '40px'
    }
  },

  yScrollDefaultSetting: `
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }`
}
