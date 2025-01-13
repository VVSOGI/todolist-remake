import styled from "styled-components";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { Title } from "@/app/stories/components";
import { changeToLocaleTime, changeToTime } from "@/app/utils";
import { Category } from "@/app/types";
import { TODOLIST_HEIGHTS, COLORS, FONT_SIZES } from "@/app/styles";

const Header = styled.div`
  height: ${TODOLIST_HEIGHTS.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${COLORS.GRAY_200};
`;

const Time = styled.div`
  font-size: 0.75rem;
`;

const LinkWrapper = styled(Link)`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.GRAY_100};
  }

  &:active {
    background-color: ${COLORS.WHITE};
    svg {
      color: ${COLORS.RED_500};
    }
  }

  svg {
    font-size: ${FONT_SIZES.lg};
    color: ${COLORS.RED_600};
  }
`;

interface Props {
  category: Category;
}

export function StorageHeader({ category }: Props) {
  return (
    <Header>
      <div>
        <Title style={{ margin: 0, fontSize: "1.5rem" }}>{category.title.toUpperCase()}</Title>
        <Time>{changeToLocaleTime(category.updatedAt, changeToTime)}</Time>
      </div>
      <LinkWrapper href={`/todolist/${category.id}`}>
        <IoClose />
      </LinkWrapper>
    </Header>
  );
}
