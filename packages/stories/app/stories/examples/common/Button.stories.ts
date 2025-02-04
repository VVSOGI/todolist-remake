import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "@vvsogi/ui-components/app";
import { ButtonsTheme } from "@vvsogi/ui-components/app/styles";

const meta = {
  title: "Example/Common/Button",
  component: Button,
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "tablet",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: "select",
      description: "Choose your theme",
      options: [ButtonsTheme.BRIGHT, ButtonsTheme.DARK],
    },
    size: {
      control: "select",
      description: "Choose your size",
      options: ["small", "medium", "large"],
    },
    onClick: {
      description: "Event occur when clicked",
    },
    children: {
      control: "text",
      description: "Button text",
    },
  },
  args: {
    size: "medium",
    onClick: fn(),
    theme: ButtonsTheme.BRIGHT,
    children: "버튼",
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

/**
 *
 * The most basic form of the button shape.
 *
 * When used, it resizes to fit the shape of the parent component that wraps around the button.
 *
 */
export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export default meta;
