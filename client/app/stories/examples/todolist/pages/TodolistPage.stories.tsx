import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/react'
import { Container } from '@/app/components'
import { TodolistDisplay, TodolistHeader, TodolistSection } from '@/app/(main)/todolist/components'
import { mockCategories, mockTodoItems } from '@/app/stories/mock'

const TodolistPage = {
  title: 'Example/Todolist/1. Pages/Pages',
  component: TodolistDisplay,
  parameters: {
    layout: 'fullscreen',
    tags: ['!autodocs']
  },
  argTypes: {},
  args: {
    categoryId: mockCategories[0].id,
    todolist: mockTodoItems,
    getTodolist: fn()
  },
  decorators: (Story) => (
    <Container>
      <TodolistSection>
        <TodolistHeader category={mockCategories[0]} />
        <Story />
      </TodolistSection>
    </Container>
  )
} satisfies Meta<typeof TodolistDisplay>

export default TodolistPage
type Story = StoryObj<typeof TodolistPage>

export const Styles1Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
}

export const Styles2Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}

export const Styles3Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone14'
    }
  }
}
