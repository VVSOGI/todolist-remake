import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { CreateTodolist } from '@/app/ui'
import { colors } from '@/app/styles'

const createTodolist = {
  title: 'Example/Button/UseCase',
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
          maxWidth: '720px',
          width: '100%',
          height: '80vh',
          border: `1px solid ${colors.gray_200}`,
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

export default createTodolist
type Story = StoryObj<typeof createTodolist>

export const StylesCreateTodolist: Story = {
  args: {}
}
