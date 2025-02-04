import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { CreateTodolist } from "@vvsogi/ui-components/app";

const usecaseTodolistButton = {
  title: "Example/Common/UseCases",
  component: CreateTodolist,
  parameters: {
    layout: "left",
  },
  tags: ["!autodocs"],
  argTypes: {},
  decorators: (Story) => (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="relative max-w-section-tablet w-full h-[80vh] border border-gray-200 rounded-medium">
        <Story handleCreateTodo={() => {}} />
      </div>
    </div>
  ),
  args: {
    create: fn(),
  },
} satisfies Meta<typeof CreateTodolist>;

export default usecaseTodolistButton;
type Story = StoryObj<typeof usecaseTodolistButton>;

export const UsecaseTodolistButton: Story = {
  args: {},
};
