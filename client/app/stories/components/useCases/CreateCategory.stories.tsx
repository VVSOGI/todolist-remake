import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { CreateCategory } from '@/app/ui'
import { COLORS } from '@/app/styles'
import { mediaQueryStandard } from '@/app/types'

const usecaseCatagoryButton = {
  title: 'Example/Components/UseCases',
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
          maxWidth: mediaQueryStandard.TABLET,
          width: '100%',
          height: '80vh'
        }}
      >
        <Story />
        <div
          style={{
            height: '50%',
            border: `1px solid ${COLORS.GRAY_200}`,
            borderRadius: '0.25rem'
          }}
        />
      </div>
    </div>
  )
} satisfies Meta<typeof CreateCategory>

export default usecaseCatagoryButton
type Story = StoryObj<typeof usecaseCatagoryButton>

export const UsecaseCatagoryButton: Story = {
  args: {}
}
