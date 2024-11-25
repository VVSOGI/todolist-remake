import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ButtonSize, ButtonsTheme } from '@/app/styles/button'
import { Button } from '..'

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    viewport: {
      defaultViewport: 'tablet'
    }
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      description: 'Choose your theme',
      options: [ButtonsTheme.BRIGHT, ButtonsTheme.DARK]
    },
    size: {
      control: 'select',
      description: 'Choose your size',
      options: [ButtonSize.SMALL, ButtonSize.MEDIUM, ButtonSize.LARGE]
    },
    onClick: {
      description: 'Event occur when clicked'
    },
    children: {
      control: 'text',
      description: 'Button text'
    }
  },
  args: {
    onClick: fn(),
    theme: ButtonsTheme.BRIGHT,
    children: '버튼'
  }
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

/**
 *
 * The most basic form of the button shape.
 *
 * When used, it resizes to fit the shape of the parent component that wraps around the button.
 *
 */
export const Small: Story = {
  args: {
    size: ButtonSize.SMALL
  }
}

export const Medium: Story = {
  args: {
    size: ButtonSize.MEDIUM
  }
}

export const Large: Story = {
  args: {
    size: ButtonSize.LARGE
  }
}

export default meta
