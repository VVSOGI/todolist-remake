import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { buttonSize, buttonsTheme } from '@/app/types'
import { Button } from '@/app/ui/common'

const meta = {
  title: 'Example/Components/Button',
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
      options: [buttonsTheme.BRIGHT, buttonsTheme.DARK]
    },
    size: {
      control: 'select',
      description: 'Choose your size',
      options: [buttonSize.SMALL, buttonSize.MEDIUM, buttonSize.LARGE]
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
    theme: buttonsTheme.BRIGHT,
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
    size: buttonSize.SMALL
  }
}

export const Medium: Story = {
  args: {
    size: buttonSize.MEDIUM
  }
}

export const Large: Story = {
  args: {
    size: buttonSize.LARGE
  }
}

export default meta
