import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "@/app/stories/components";
import { StorageHeader, StorageListDisplay, StorageSection } from "@/app/stories/components/storage";
import { mockCategories, mockStorageTodoLists } from "@/app/stories/mock";

const StoragePage = {
  title: "Example/Storage/1. Pages",
  component: StorageListDisplay,
  parameters: {
    layout: "fullscreen",
    tags: ["!autodocs"],
  },
  argTypes: {},
  args: {
    list: mockStorageTodoLists,
  },
  decorators: (Story) => (
    <Container>
      <StorageSection>
        <StorageHeader category={mockCategories[0]} />
        <Story />
      </StorageSection>
    </Container>
  ),
} satisfies Meta<typeof StorageListDisplay>;

export default StoragePage;
type Story = StoryObj<typeof StoragePage>;

export const Styles1Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const Styles2Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export const Styles3Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphone14",
    },
  },
};
