import { fn } from '@storybook/test'
import { Categories, CategorySection } from '@/app/ui'
import { colors } from '@/app/styles'
import { Category } from '@/app/types'
import type { Meta, StoryObj } from '@storybook/react'

const mockCategories: Category[] = [
  {
    id: '1',
    title: 'Test Title',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    title: 'Something new category',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    title: 'Is there a job what I can?',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

const categories = {
  title: 'Example/Category/Categories',
  component: Categories,
  parameters: {
    layout: 'center',
    docs: {
      description: {
        component: '...'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    categories: mockCategories,
    openDeleteModal: fn(),
    openTargetModal: fn()
  },
  decorators: (Story) => (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.cloudBlue_200
      }}
    >
      <CategorySection>
        <Story />
      </CategorySection>
    </div>
  )
} satisfies Meta<typeof Categories>

export default categories
type Story = StoryObj<typeof categories>

export const StylesCategories: Story = {
  args: {}
}

StylesCategories.parameters = {
  viewport: {
    defaultViewport: 'tablet'
  }
}
