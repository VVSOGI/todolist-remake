import { fn } from '@storybook/test'
import { CategorySection } from '@/app/ui'
import { colors } from '@/app/styles'
import type { Meta, StoryObj } from '@storybook/react'
import { CategoryItem } from '@/app/ui/category/CategoryItem'

const categoryItem = {
  title: 'Example/Category/CategoryItem',
  component: CategoryItem,
  parameters: {
    layout: 'center'
  },
  tags: ['!autodocs'],
  argTypes: {},
  args: {
    category: {
      id: '1',
      title: 'Test Title',
      createdAt: new Date(),
      updatedAt: new Date()
    },
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
        <Story handleCreateTodo={() => {}} />
      </CategorySection>
    </div>
  )
} satisfies Meta<typeof CategoryItem>

export default categoryItem
type Story = StoryObj<typeof categoryItem>

export const StylesCategoryItem: Story = {
  args: {}
}

StylesCategoryItem.parameters = {
  viewport: {
    defaultViewport: 'tablet'
  }
}
