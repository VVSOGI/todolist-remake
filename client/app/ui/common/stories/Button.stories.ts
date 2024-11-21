import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button, ButtonsTheme } from '..'

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    stylesTheme: {
      control: 'select',
      description: 'Choose your theme',
      options: [ButtonsTheme.bright, ButtonsTheme.dark]
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
    stylesTheme: ButtonsTheme.bright,
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
export const Default: Story = {
  args: {}
}

export default meta
