import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { CreateCategory } from '@/app/ui'
import { colors } from '@/app/styles'
import { MediaQueryStandard } from '@/app/types'

const usecaseCatagoryButton = {
  title: 'Example/Components/Button/UseCases',
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
          maxWidth: MediaQueryStandard.TABLET,
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

export default usecaseCatagoryButton
type Story = StoryObj<typeof usecaseCatagoryButton>

export const UsecaseCatagoryButton: Story = {
  args: {}
}
