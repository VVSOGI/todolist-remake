import type { Meta, StoryObj } from '@storybook/react'
import { Container, TodolistHeader, TodolistSection } from '@/app/ui'
import { mockCategories } from '@/app/stories/mock'

const todolistHeader = {
  title: 'Example/Todolist/TodolistHeader',
  component: TodolistHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `투두리스트에 들어가는 TodolistHeader 입니다. 
        \n\n 해당 투두리스트의 카테고리 제목을 상단에서 보여줍니다.
        \n\n 우측 상단 상자 버튼을 누르면 Storage page로 이동합니다.
        \n\n 우측 상단 X 버튼을 누르면 Category page로 이동합니다.`
      }
    }
  },
  argTypes: {},
  args: {
    category: mockCategories[0]
  },
  decorators: (Story) => (
    <Container>
      <TodolistSection>
        <Story />
      </TodolistSection>
    </Container>
  )
} satisfies Meta<typeof TodolistHeader>

export default todolistHeader
type Story = StoryObj<typeof todolistHeader>

/**
 * 가장 기본적인 형태의 TodolistHeader 입니다.
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
