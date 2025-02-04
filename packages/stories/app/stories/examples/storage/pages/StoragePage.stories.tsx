import type { StoryObj } from "@storybook/react";
import { Container, StorageHeader, StorageSection } from "@vvsogi/ui-components/app";
import { mockCategories, mockStorageTodoLists } from "@/app/stories/mock";
import { changeToLocaleTime, changeToTime } from "@/app/utils";
import { D2CodingLight } from "@/public/fonts";

const StoragePage = {
  title: "Example/Storage/1. Pages",
  parameters: {
    layout: "fullscreen",
    tags: ["!autodocs"],
  },
  argTypes: {},
  args: {
    list: mockStorageTodoLists,
  },
  decorators: () => (
    <Container>
      <StorageSection>
        <StorageHeader category={mockCategories[0]} />
        <div className="flex flex-col overflow-y-scroll custom-scrollbar">
          {mockStorageTodoLists.map((item) => (
            <div className="p-[1rem] border-b border-gray-200" key={item.date}>
              <div className={`mb-[1.125rem] text-xl ${D2CodingLight.className}`}>{item.date}</div>
              <ul className="flex flex-col gap-[1.5rem] py-0 px-[1.5rem]">
                {item.todolists.map((todolist) => (
                  <div key={todolist.id}>
                    <div className={`mb-[0.25rem] text-xs text-gray-500 ${D2CodingLight.className}`}>
                      {changeToLocaleTime(todolist.updatedAt, changeToTime)}
                    </div>
                    <div className="text-md text-black">{todolist.title}</div>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </StorageSection>
    </Container>
  ),
};

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
