import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import '../app/globals.css'

import type { Preview } from '@storybook/react'

const customViewports = {
  desktop: {
    name: 'Desktop',
    styles: {
      width: '90.0625rem',
      height: '100%',
      overflow: 'hidden'
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
