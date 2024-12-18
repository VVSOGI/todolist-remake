import type { Meta, StoryObj } from '@storybook/react'

function RedColors() {
  return <div></div>
}

function GrayColors() {
  return <div></div>
}

function CloudBlues() {
  return <div></div>
}

const meta = {
  title: 'Example/DesignSystem/Colors',
  parameters: {
    layout: 'centered',
    viewport: {}
  },
  tags: ['!autodocs'],
  args: {}
} satisfies Meta

type Story = StoryObj<typeof meta>

export const RED: Story = {
  decorators: () => (
    <div>
      <RedColors />
      RED
    </div>
  )
}

export const GRAY: Story = {
  decorators: () => (
    <div>
      <GrayColors />
      GRAY
    </div>
  )
}

export const CLOUD_BLUE: Story = {
  decorators: () => (
    <div>
      <CloudBlues />
      GRAY
    </div>
  )
}

export default meta
