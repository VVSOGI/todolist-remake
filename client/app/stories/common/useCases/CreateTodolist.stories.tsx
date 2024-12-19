import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/react'
import { CreateTodolist } from '@/app/(main)/todolist/components'
import { mediaQueryStandard } from '@/app/types'
import { COLORS } from '@/app/styles'

const usecaseTodolistButton = {
  title: 'Example/Common/UseCases',
  component: CreateTodolist,
  parameters: {
    layout: 'left'
  },
  tags: ['!autodocs'],
  argTypes: {},
  decorators: (Story) => (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          position: 'relative',
          maxWidth: mediaQueryStandard.TABLET,
          width: '100%',
          height: '80vh',
          border: `1px solid ${COLORS.GRAY_200}`,
          borderRadius: '0.5rem'
        }}
      >
        <Story handleCreateTodo={() => {}} />
      </div>
    </div>
  ),
  args: {
    handleCreateTodo: fn()
  }
} satisfies Meta<typeof CreateTodolist>

export default usecaseTodolistButton
type Story = StoryObj<typeof usecaseTodolistButton>

export const UsecaseTodolistButton: Story = {
  args: {}
}
