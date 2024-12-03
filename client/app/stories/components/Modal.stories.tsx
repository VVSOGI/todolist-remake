import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { AgreementModal } from '@/app/ui'

const ModalContents = () => {
  return <div style={{ padding: '2rem 0rem' }}>This is example Modal</div>
}

const meta = {
  title: 'Example/Components/Modal',
  component: AgreementModal,
  parameters: {
    viewport: {
      layout: 'centered',
      defaultViewport: 'tablet'
    },
    docs: {
      story: {
        inline: false,
        iframeHeight: 700
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    title: 'Example Modal',
    children: <ModalContents />,
    handleAgree: fn(),
    handleRefuse: fn()
  }
} satisfies Meta<typeof AgreementModal>

type Story = StoryObj<typeof meta>

export const Modal: Story = {
  args: {}
}

Modal.parameters = {
  viewport: {
    defaultViewport: 'tablet'
  }
}

export default meta
