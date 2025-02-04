import { fn } from "@storybook/test";
import type { StoryObj } from "@storybook/react";
import {
  Container,
  CreateTodolist,
  DraggableTodolist,
  TodolistHeader,
  TodolistSection,
} from "@vvsogi/ui-components/app";
import { mockCategories, mockTodoItems } from "@/app/stories/mock";

const todolistPage = {
  title: "Example/Todolist/1. Pages",
  parameters: {
    layout: "fullscreen",
    tags: ["!autodocs"],
  },
  argTypes: {},
  decorators: () => (
    <Container>
      <TodolistSection>
        <TodolistHeader category={mockCategories[0]} />
        <div
          className="custom-scrollbar"
          style={{
            height: `calc(100% - (4.21875rem + 2.5rem))`,
          }}
        >
          <DraggableTodolist
            list={mockTodoItems}
            setList={fn()}
            handleCompleteTodo={fn()}
            handleEditModalOpen={fn()}
            saveTodolistOrder={fn()}
          />
          <CreateTodolist create={fn()} />
        </div>
      </TodolistSection>
    </Container>
  ),
};

export default todolistPage;
type Story = StoryObj<typeof todolistPage>;

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
