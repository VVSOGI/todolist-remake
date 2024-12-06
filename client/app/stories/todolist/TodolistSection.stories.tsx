import { Container, TodolistSection } from '@/app/ui'
import type { Meta, StoryObj } from '@storybook/react'

const todolistSection = {
  title: 'Example/Todolist/TodolistSection',
  component: TodolistSection,
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
} satisfies Meta<typeof TodolistSection>

export default todolistSection
type Story = StoryObj<typeof todolistSection>

/**
 * 가장 기본적인 형태의 todolistSection 입니다.
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
