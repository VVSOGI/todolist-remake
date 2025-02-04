import type { StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Container, Title, Categories, CategorySection, CreateCategory } from "@vvsogi/ui-components/app";
import { mockCategories } from "@/app/stories/mock";

const categoryPage = {
  title: "Example/Category/1. Pages",
  parameters: {
    layout: "center",
  },
  tags: ["!autodocs"],
  argTypes: {},
  decorators: () => (
    <Container>
      <CategorySection>
        <Title>{String("Make Your Own Business To-Do List").toUpperCase()}</Title>
        <CreateCategory createCategory={fn()} />
        <div className="overflow-y-hidden custom-scrollbar">
          <Categories
            categories={mockCategories}
            openTargetModal={fn()}
            openDeleteModal={fn()}
            onClickCategory={fn()}
          />
        </div>
      </CategorySection>
    </Container>
  ),
};

export default categoryPage;
type Story = StoryObj<typeof categoryPage>;

export const Styles1Tablet: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const Styles2Desktop: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export const Styles3Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "iphone14",
    },
  },
};
