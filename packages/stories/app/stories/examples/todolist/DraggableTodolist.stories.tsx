import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "@/app/stories/components";
import { DraggableTodolist, TodolistSection } from "@/app/stories/components/todolist";
import { mockTodoItems } from "@/app/stories/mock";

const draggableTodolist = {
  title: "Example/Todolist/DraggableTodolist",
  component: DraggableTodolist,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `드래그를 사용하는 컴포넌트 부분인 DraggableTodolist 입니다.
        \n\n 이 스토리 컴포넌트는 실제로 드래그 기능이 동작하지 않습니다. 움직임이나 경험을 미리 체험할 수 있게끔만 작성되었습니다.
        \n\n 현재 Docs에서 드래그 기능을 사용하면 마우스의 위치값과 컴포넌트의 위치가 맞지 않는 상황이 발생합니다.
        \n\n 이는 Docs가 iframe으로 생성되기에 실제 마우스의 위치와 iframe html이 인식하는 마우스의 위치가 다르기에 발생하는 문제로 추측됩니다.
        \n\n 따라서 사용을 해보기 위해서는 좌측 Styles Tablet, Desktop, Moblie에서 사용하시는 것을 권장드립니다.
        `,
      },
    },
  },
  argTypes: {},
  args: {
    list: mockTodoItems,
    setList: fn(),
    handleCompleteTodo: fn(),
    handleEditModalOpen: fn(),
  },
  decorators: (Story) => (
    <Container>
      <TodolistSection>
        <Story />
      </TodolistSection>
    </Container>
  ),
} satisfies Meta<typeof DraggableTodolist>;

export default draggableTodolist;
type Story = StoryObj<typeof draggableTodolist>;

/**
 * 가장 기본적인 형태의 DraggableTodolist 입니다.
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
