import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CreateCategory } from "@vvsogi/ui-components/app";

const usecaseCatagoryButton = {
  title: "Example/Common/UseCases",
  component: CreateCategory,
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "tablet",
    },
  },
  tags: ["!autodocs"],
  argTypes: {},
  args: {
    createCategory: fn(),
  },
  decorators: (Story) => (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="absolute max-w-section-tablet w-full h-[80vh]">
        <Story />
        <div className="h-[50%] border border-gray-200 rounded-small" />
      </div>
    </div>
  ),
} satisfies Meta<typeof CreateCategory>;

export default usecaseCatagoryButton;
type Story = StoryObj<typeof usecaseCatagoryButton>;

export const UsecaseCatagoryButton: Story = {
  args: {},
};
