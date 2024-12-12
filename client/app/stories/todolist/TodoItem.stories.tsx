import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/react'
import { Container, TodoItem, TodolistSection } from '@/app/ui'
import { mockTodoItems } from '@/app/stories/mock'

const todoItem = {
  title: 'Example/Todolist/TodoItem',
  component: TodoItem,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '투두리스트에 들어가는 1 개의 TodoItem입니다. \n\n 해당 아이템은 Hover 이벤트와 Checked 클릭 이벤트를 사용할 수 있습니다.'
      }
    }
  },
  argTypes: {},
  args: {
    todo: mockTodoItems[0],
    handleCompleteTodo: fn(),
    handleEditModalOpen: fn()
  },
  decorators: (Story) => (
    <Container>
      <TodolistSection>
        <Story />
      </TodolistSection>
    </Container>
  )
} satisfies Meta<typeof TodoItem>

export default todoItem
type Story = StoryObj<typeof todoItem>

/**
 * 가장 기본적인 형태의 TodoItem 입니다.
 */
export const Styles1Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  },
  tags: ['autodocs'],
  args: {}
}

export const Styles2Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  },
  tags: ['!autodocs'],
  args: {}
}

export const Styles3Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone14'
    }
  },
  tags: ['!autodocs'],
  args: {}
}
