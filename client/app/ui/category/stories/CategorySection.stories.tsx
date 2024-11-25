import type { Meta, StoryObj } from '@storybook/react'
import { CategorySection } from '@/app/ui'

const categorySection = {
  title: 'Example/Category',
  component: CategorySection,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {},
  args: {
    children: ''
  },
  decorators: (Story) => (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Story />
    </div>
  )
} satisfies Meta<typeof CategorySection>

export default categorySection
type Story = StoryObj<typeof categorySection>

export const DesktopSection: Story = {
  args: {}
}

export const TabletSection: Story = {
  args: {}
}

export const MobileSection: Story = {
  args: {}
}

DesktopSection.parameters = {
  viewport: {
    defaultViewport: 'desktop'
  }
}

TabletSection.parameters = {
  viewport: {
    defaultViewport: 'tablet'
  }
}

MobileSection.parameters = {
  viewport: {
    defaultViewport: 'iphone14'
  }
}
