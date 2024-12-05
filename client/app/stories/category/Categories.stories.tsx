import { fn } from '@storybook/test'
import { Categories, CategorySection, Container } from '@/app/ui'
import { mockCategories } from '@/app/stories/mock'
import type { Meta, StoryObj } from '@storybook/react'

const categories = {
  title: 'Example/Category/Categories',
  component: Categories,
  parameters: {
    layout: 'center',
    docs: {
      description: {
        component: '카테고리 리스트입니다. \n\n 여러 개의 CategoryItem을 볼 수 있으며 드래그 기능도 유효합니다.'
      }
    }
  },
  argTypes: {},
  args: {
    categories: mockCategories,
    openDeleteModal: fn(),
    openTargetModal: fn()
  },
  decorators: (Story) => (
    <Container>
      <CategorySection>
        <Story />
      </CategorySection>
    </Container>
  )
} satisfies Meta<typeof Categories>

export default categories
type Story = StoryObj<typeof categories>

/**
 * 가장 기본적인 화면의 Categories 입니다.
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
