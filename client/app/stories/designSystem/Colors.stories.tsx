import styled from 'styled-components'
import type { Meta, StoryObj } from '@storybook/react'
import { getColorsByGroup } from '@/app/utils'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
`

function RedColors() {
  const colors = Object.entries(getColorsByGroup('RED'))
  return <Container></Container>
}

function GrayColors() {
  const colors = Object.entries(getColorsByGroup('GRAY'))
  return <Container></Container>
}

function CloudBlues() {
  const colors = Object.entries(getColorsByGroup('CLOUD_BLUE'))
  return <Container></Container>
}

const meta = {
  title: 'Example/DesignSystem/Colors',
  parameters: {
    viewport: {}
  },
  tags: ['!autodocs'],
  args: {}
} satisfies Meta

type Story = StoryObj<typeof meta>

export const RED: Story = {
  decorators: () => (
    <div>
      <RedColors />
      RED
    </div>
  )
}

export const GRAY: Story = {
  decorators: () => (
    <div>
      <GrayColors />
      GRAY
    </div>
  )
}

export const CLOUD_BLUE: Story = {
  decorators: () => (
    <div>
      <CloudBlues />
      GRAY
    </div>
  )
}

export default meta
