import type { Meta, StoryObj } from '@storybook/react'
import { CategorySection } from '@/app/ui'
import { colors } from '@/app/styles'

const categorySection = {
  title: 'Example/Category/Section',
  component: CategorySection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '카테고리의 섹션 입니다. \n\n 해당 섹션에는 Title, CreateCategory, CategoryList를 배치합니다.'
      }
    }
  },
  argTypes: {},
  args: {
    children: ''
  },
  decorators: (Story) => (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.cloudBlue_200
      }}
    >
      <Story />
    </div>
  )
} satisfies Meta<typeof CategorySection>

export default categorySection
type Story = StoryObj<typeof categorySection>

/**
 * 가장 기본적인 형태의 CategorySection 입니다.
 */
export const StylesTablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  },
  tags: ['autodocs'],
  args: {}
}

export const StylesDesktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  },
  tags: ['!autodocs'],
  args: {}
}

export const StylesMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone14'
    }
  },
  tags: ['!autodocs'],
  args: {}
}
