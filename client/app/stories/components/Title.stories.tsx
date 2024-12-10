import React from 'react'
import styled from 'styled-components'
import type { Meta, StoryObj } from '@storybook/react'
import { COLORS } from '@/app/styles'

const Styled = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  color: ${COLORS.RED_600};
`

interface Props {
  children: React.ReactNode
}

function Title({ children }: Props) {
  return <Styled style={{ fontFamily: 'custom-font' }}>{children}</Styled>
}

const meta = {
  title: 'Example/Components/Title',
  component: Title,
  parameters: {
    viewport: {
      layout: 'centered',
      defaultViewport: 'tablet'
    },
    docs: {
      story: {
        inline: false,
        iframeHeight: 100
      },
      description: {
        component: '기본 타이틀 디자인 입니다. \n\n 글꼴은 Naver D2 입니다.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '제목에 들어갈 텍스트를 입력하고 컴포넌트에 전달합니다.'
    }
  },
  decorators: (Story) => (
    <div>
      <Story />
    </div>
  )
} satisfies Meta<typeof Title>

type Story = StoryObj<typeof meta>

export const CommonTitle: Story = {
  args: {
    children: 'This is test title'
  }
}

CommonTitle.parameters = {
  viewport: {
    defaultViewport: 'tablet'
  }
}

export default meta
