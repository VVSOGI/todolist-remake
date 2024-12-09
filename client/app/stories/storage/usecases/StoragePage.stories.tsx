import { Container, StorageHeader, StorageListDisplay, StorageSection } from '@/app/ui'
import { mockCategories, mockStorageTodoLists } from '@/app/stories/mock'
import type { Meta, StoryObj } from '@storybook/react'

const StoragePage = {
  title: 'Example/Storage/UseCase/Page',
  component: StorageListDisplay,
  parameters: {
    layout: 'fullscreen',
    tags: ['!autodocs']
  },
  argTypes: {},
  args: {
    list: mockStorageTodoLists
  },
  decorators: (Story) => (
    <Container>
      <StorageSection>
        <StorageHeader category={mockCategories[0]} />
        <Story />
      </StorageSection>
    </Container>
  )
} satisfies Meta<typeof StorageListDisplay>

export default StoragePage
type Story = StoryObj<typeof StoragePage>

export const Styles1Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
}

export const Styles2Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}

export const Styles3Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone14'
    }
  }
}
