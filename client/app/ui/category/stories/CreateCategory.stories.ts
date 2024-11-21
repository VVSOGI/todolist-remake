import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { CreateCategory } from '../CreateCategory'

const createCategory = {
  title: 'Example/Button/UseCase',
  component: CreateCategory,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    categoryTitle: '',
    changeValue: fn(),
    handleSubmit: fn()
  }
} satisfies Meta<typeof CreateCategory>

export default createCategory
type Story = StoryObj<typeof createCategory>

export const create: Story = {
  args: {}
}
