import type { StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import styled from "styled-components";
import { Container, Title } from "@/app/stories/components";
import { Categories, CategorySection, CreateCategory } from "@/app/stories/components/category";
import { mockCategories } from "@/app/stories/mock";

const CategoryDisplayContainer = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.125rem;
    background: #ccc;
  }
`;

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
        <CreateCategory />
        <CategoryDisplayContainer>
          <Categories categories={mockCategories} openTargetModal={fn()} openDeleteModal={fn()} />
        </CategoryDisplayContainer>
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
