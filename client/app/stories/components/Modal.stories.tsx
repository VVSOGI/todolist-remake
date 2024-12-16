import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/react'
import { AgreementModal } from '@/app/components'

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
        iframeHeight: 400
      },
      description: {
        component:
          '해당 앱의 기본적인 형태의 모달입니다. \n\n 모달의 내용에 React Component를 넣어줘서 Style의 변경이 자유롭습니다. \n\n  Yes, No 두 가지 버튼만을 가지고있으며 해당 버튼을 클릭했을 때 발생할 이벤트는 부모 컴포넌트에서 전달받습니다.'
      }
    }
  },
  argTypes: {},
  args: {
    title: 'Example Modal',
    children: <ModalContents />,
    handleAgree: fn(),
    handleRefuse: fn()
  }
} satisfies Meta<typeof AgreementModal>

type Story = StoryObj<typeof meta>

export const Styles1Tablet: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  },
  tags: ['autodocs']
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

export default meta
