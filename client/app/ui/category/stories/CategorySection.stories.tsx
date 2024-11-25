import type { Meta, StoryObj } from '@storybook/react'
import { CategorySection } from '@/app/ui'

const categorySection = {
  title: 'Example/Category',
  component: CategorySection,
  parameters: {
    layout: 'centered'
  },
  tags: ['!autodocs'],
  argTypes: {},
  args: {
    children: ''
  }
} satisfies Meta<typeof CategorySection>

export default categorySection
type Story = StoryObj<typeof categorySection>

export const StylesCategorySection: Story = {
  args: {}
}
