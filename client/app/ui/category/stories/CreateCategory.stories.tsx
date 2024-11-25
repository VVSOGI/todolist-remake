import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { CreateCategory } from '@/app/ui'
import { colors } from '@/app/styles'

const createCategory = {
  title: 'Example/Button/UseCase',
  component: CreateCategory,
  parameters: {
    layout: 'centered',
    viewport: {
      defaultViewport: 'tablet'
    }
  },
  tags: ['!autodocs'],
  argTypes: {},
  args: {
    categoryTitle: '',
    changeValue: fn(),
    handleSubmit: fn()
  },
  decorators: (Story) => (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          position: 'absolute',
          maxWidth: '720px',
          width: '100%',
          height: '80vh'
        }}
      >
        <Story />
        <div
          style={{
            height: '50%',
            border: `1px solid ${colors.gray_200}`,
            borderRadius: '0.25rem'
          }}
        />
      </div>
    </div>
  )
} satisfies Meta<typeof CreateCategory>

export default createCategory
type Story = StoryObj<typeof createCategory>

export const StylesCreateCategory: Story = {
  args: {}
}
