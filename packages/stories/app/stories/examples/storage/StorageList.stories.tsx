import type { StoryObj } from "@storybook/react";
import { Container, StorageSection } from "@vvsogi/ui-components/app";
import { mockStorageTodoLists } from "@/app/stories/mock";
import { changeToLocaleTime, changeToTime } from "@/app/utils";
import { D2CodingLight } from "@/public/fonts";

const storageList = {
  title: "Example/Storage/StorageList",
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
  decorators: () => (
    <Container>
      <StorageSection>
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
