import { CategoryDisplay, CategorySection, CreateCategory, Title } from '@/app/ui'
import { colors } from '@/app/styles'
import { mockCategories } from '@/app/stories/mock'
import type { StoryObj } from '@storybook/react'

const categoryPage = {
  title: 'Example/Category/UseCases/Page',
  parameters: {
    layout: 'center'
  },
  tags: ['!autodocs'],
  argTypes: {},
  decorators: () => (
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
        <Title>{String('Make Your Own Business To-Do List').toUpperCase()}</Title>
        <CreateCategory />
        <CategoryDisplay categories={mockCategories} />
      </CategorySection>
    </div>
  )
}

export default categoryPage
type Story = StoryObj<typeof categoryPage>

export const Styles1Tablet: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
}

export const Styles2Desktop: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}

export const Styles3Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'iphone14'
    }
  }
}
