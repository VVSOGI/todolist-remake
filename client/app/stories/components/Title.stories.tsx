import React from 'react'
import styled from 'styled-components'
import type { Meta, StoryObj } from '@storybook/react'
import { colors } from '@/app/styles'

const Styled = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  color: ${colors.red_600};
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
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Enter the text that will go into the Title and pass it to the component.'
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
