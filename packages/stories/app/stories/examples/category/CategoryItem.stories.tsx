import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/react'
import { Container } from '@/app/components'
import { CategoryItem } from '@/app/(main)/category/components/CategoryItem'
import { CategorySection } from '@/app/(main)/category/components'

const categoryItem = {
  title: 'Example/Category/CategoryItem',
  component: CategoryItem,
  parameters: {
    layout: 'center',
    docs: {
      description: {
        component:
          '투두리스트를 가진 카테고리 입니다. \n\n 해당 카테고리를 클릭하면 투두리스트 화면으로 이동합니다. \n\n 해당 카테고리는 드래그를 좌우로 이동하면 특정 기능을 가진 버튼이 나옵니다.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    category: {
      id: '1',
      title: 'Test Title',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    openDeleteModal: fn(),
    openTargetModal: fn()
  },
  decorators: (Story) => (
    <Container>
      <CategorySection>
        <Story handleCreateTodo={() => {}} />
      </CategorySection>
    </Container>
  )
} satisfies Meta<typeof CategoryItem>

export default categoryItem
type Story = StoryObj<typeof categoryItem>

export const StylesCategoryItem: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  },
  args: {}
}
