export type HexColor = `#${string}`

export type ColorGroup = 'RED' | 'GRAY' | 'CLOUD_BLUE'
export type ColorShade = '100' | '200' | '300' | '400' | '500' | '600'
export type BasicColor = 'WHITE' | 'BLACK'

export type Colors = {
  [K in `${ColorGroup}_${ColorShade}`]: HexColor
} & {
  [K in BasicColor]: HexColor
}

type ColorsByGroup<T extends ColorGroup> = {
  [K in `${T}_${ColorShade}`]: HexColor
}

type BasicColors = {
  [K in BasicColor]: HexColor
}

export const COLORS: Colors = {
  RED_100: '#fcc7c5',
  RED_200: '#e89b99',
  RED_300: '#e67775',
  RED_400: '#e85856',
  RED_500: '#ec4442',
  RED_600: '#e82f2c',

  GRAY_100: '#f7f7f7',
  GRAY_200: '#f2f2f2',
  GRAY_300: '#e6e6e6',
  GRAY_400: '#969696',
  GRAY_500: '#5c5c5c',
  GRAY_600: '#363636',

  CLOUD_BLUE_100: '#d7dce6',
  CLOUD_BLUE_200: '#c3cee3',
  CLOUD_BLUE_300: '#a3bae3',
  CLOUD_BLUE_400: '#86a8e3',
  CLOUD_BLUE_500: '#608fe0',
  CLOUD_BLUE_600: '#427adb',

  WHITE: '#ffffff',
  BLACK: '#0d0d0d'
}

export const getColorsByGroup = {
  getReds: (): ColorsByGroup<'RED'> => {
    return Object.entries(COLORS)
      .filter(([key]) => key.startsWith('RED_'))
      .reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value
        }),
        {} as ColorsByGroup<'RED'>
      )
  },

  getGrays: (): ColorsByGroup<'GRAY'> => {
    return Object.entries(COLORS)
      .filter(([key]) => key.startsWith('GRAY_'))
      .reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value
        }),
        {} as ColorsByGroup<'GRAY'>
      )
  },

  getCloudBlues: (): ColorsByGroup<'CLOUD_BLUE'> => {
    return Object.entries(COLORS)
      .filter(([key]) => key.startsWith('CLOUD_BLUE_'))
      .reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value
        }),
        {} as ColorsByGroup<'CLOUD_BLUE'>
      )
  },

  getBasicColors: (): BasicColors => {
    return Object.entries(COLORS)
      .filter(([key]) => !key.includes('_'))
      .reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value
        }),
        {} as BasicColors
      )
  }
}
