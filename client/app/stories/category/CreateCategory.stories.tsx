import { fn } from '@storybook/test'
import { CategorySection, CreateCategory } from '@/app/ui'
import { colors } from '@/app/styles'
import type { Meta, StoryObj } from '@storybook/react'

const createCategory = {
  title: 'Example/Category/CreateCategory',
  component: CreateCategory,
  parameters: {
    layout: 'center'
  },
  tags: ['!autodocs'],
  argTypes: {},
  args: {
    handleCreateTodo: fn()
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
} satisfies Meta<typeof CreateCategory>

export default createCategory
type Story = StoryObj<typeof createCategory>

export const StylesCreateCategory: Story = {
  args: {}
}

StylesCreateCategory.parameters = {
  viewport: {
    defaultViewport: 'tablet'
  }
}
