import type { Meta, StoryObj } from '@storybook/react'
import { Container } from '@/app/ui'
import { CategorySection } from '@/app/(main)/category/components'

const categorySection = {
  title: 'Example/Category/CategorySection',
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
    <Container>
      <Story />
    </Container>
  )
} satisfies Meta<typeof CategorySection>

export default categorySection
type Story = StoryObj<typeof categorySection>

/**
 * 가장 기본적인 형태의 CategorySection 입니다.
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
