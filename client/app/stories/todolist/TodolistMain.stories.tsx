import type { Meta, StoryObj } from '@storybook/react'
import { Container, TodolistMain } from '@/app/ui'

const todolistMain = {
  title: 'Example/Todolist/TodolistMain',
  component: TodolistMain,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '투두리스트의 섹션 입니다. \n\n 해당 섹션에는 TodolistHeader, TodolistSection을 배치합니다.'
      }
    }
  },
  argTypes: {},
  args: {
    children: ''
  },
  decorators: (Story) => (
    <Container>
      <Story />
    </Container>
  )
} satisfies Meta<typeof TodolistMain>

export default todolistMain
type Story = StoryObj<typeof todolistMain>

/**
 * 가장 기본적인 형태의 todolistMain 입니다.
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
