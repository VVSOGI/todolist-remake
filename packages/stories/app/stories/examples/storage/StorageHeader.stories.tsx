import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "@/app/stories/components";
import { StorageHeader, StorageSection } from "@/app/stories/components/storage";
import { mockCategories } from "@/app/stories/mock";

const storageHeader = {
  title: "Example/Storage/StorageHeader",
  component: StorageHeader,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "StorageHeader에 해당하는 컴포넌트입니다. \n\n 우측 상단의 X 버튼을 누르면 이전 투두리스트 화면으로 넘어갑니다.",
      },
    },
  },
  argTypes: {},
  args: {
    category: mockCategories[0],
  },
  decorators: (Story) => (
    <Container>
      <StorageSection>
        <Story />
      </StorageSection>
    </Container>
  ),
} satisfies Meta<typeof StorageHeader>;

export default storageHeader;
type Story = StoryObj<typeof storageHeader>;

/**
 * 가장 기본적인 형태의 storageHeader 입니다.
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
