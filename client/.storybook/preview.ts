import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { mediaQueryStandard } from '../app/types'
import '../app/globals.css'

import type { Preview } from '@storybook/react'

const customViewports = {
  desktop: {
    name: 'Desktop',
    styles: {
      width: mediaQueryStandard.DESKTOP,
      height: '100%'
    }
  },

  tablet: {
    name: 'Tablet',
    styles: {
      width: '100%',
      height: '35rem'
    }
  }
}

const preview: Preview = {
  parameters: {
    options: {
      storySort: (a, b) => {
        return a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true })
      }
    },
    nextjs: {
      appDirectory: true
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    viewport: {
      viewports: { ...INITIAL_VIEWPORTS, ...customViewports }
    }
  }
}

export default preview
