import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { Container, CategorySection, CreateCategory } from "@vvsogi/ui-components/app";

const createCategory = {
  title: "Example/Category/CreateCategory",
  component: CreateCategory,
  parameters: {
    layout: "center",
    docs: {
      description: {
        component:
          "카테고리 생성 Input입니다. \n\n Input안에 들어갈 문자는 생성하려는 카테고리의 제목이 됩니다. \n\n  버튼 클릭 및 Enter 키 입력이 가능합니다.",
      },
    },
  },
  argTypes: {},
  args: {
    createCategory: fn(),
  },
  decorators: (Story) => (
    <Container>
      <CategorySection>
        <Story handleCreateTodo={() => {}} />
      </CategorySection>
    </Container>
  ),
} satisfies Meta<typeof CreateCategory>;

export default createCategory;
type Story = StoryObj<typeof createCategory>;

/**
 * 가장 기본적인 형태의 CreateCategory입니다.
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
