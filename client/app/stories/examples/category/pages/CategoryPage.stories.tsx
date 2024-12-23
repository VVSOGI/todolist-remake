import type { StoryObj } from '@storybook/react'
import { Container, Title } from '@/app/components'
import { CategoryDisplay, CategorySection, CreateCategory } from '@/app/(main)/category/components'
import { mockCategories } from '@/app/stories/mock'

const categoryPage = {
  title: 'Example/Category/1. Pages/Pages',
  parameters: {
    layout: 'center'
  },
  tags: ['!autodocs'],
  argTypes: {},
  decorators: () => (
    <Container>
      <CategorySection>
        <Title>{String('Make Your Own Business To-Do List').toUpperCase()}</Title>
        <CreateCategory />
        <CategoryDisplay categories={mockCategories} />
      </CategorySection>
    </Container>
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
