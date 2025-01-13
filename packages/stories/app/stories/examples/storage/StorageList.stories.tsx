import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "@/app/stories/components";
import { StorageListDisplay, StorageSection } from "@/app/stories/components/storage";
import { mockStorageTodoLists } from "@/app/stories/mock";

const storageList = {
  title: "Example/Storage/StorageList",
  component: StorageListDisplay,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "StorageList에 해당하는 컴포넌트입니다. \n\n 완료된 투두리스트들 중 날짜별로 데이터를 구분해서 보여주는 기능입니다.",
      },
    },
  },
  argTypes: {},
  args: {
    list: mockStorageTodoLists,
  },
  decorators: (Story) => (
    <Container>
      <StorageSection>
        <Story />
      </StorageSection>
    </Container>
  ),
} satisfies Meta<typeof StorageListDisplay>;

export default storageList;
type Story = StoryObj<typeof storageList>;

/**
 * 가장 기본적인 형태의 storageList 입니다.
 */
export const Styles1Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
  tags: ["autodocs"],
  args: {},
};

export const Styles2Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
  tags: ["!autodocs"],
  args: {},
};

export const Styles3Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphone14",
    },
  },
  tags: ["!autodocs"],
  args: {},
};
