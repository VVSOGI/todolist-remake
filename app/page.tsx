"use client";

import styled from "styled-components";
import { D2CodingBold } from "./fonts";
import { styles } from "./styles";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${styles.backgroundColor.primary};
`;

const Wrapper = styled.div`
  width: 720px;
  height: 480px;
  padding: 24px;
  border-radius: ${styles.borderRadius.medium};
  background-color: ${styles.backgroundColor.default};
  box-shadow: ${styles.boxShadow.primary};
`;

const Title = styled.div`
  width: 100%;
  margin-bottom: 24px;
  color: ${styles.mainColor.primary};
  font-size: 18px;
`;

const Input = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid ${styles.borderColor.primary};
  border-radius: ${styles.borderRadius.small};
  overflow: hidden;
`;

const InputContents = styled.input`
  width: 100%;
  border: none;
  padding: 12px;
  outline: none;
`;

const InputIcon = styled.div`
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${styles.mainColor.secondary};
  cursor: pointer;
  &:hover {
    background-color: ${styles.buttons.hover};
  }

  &:active {
    background-color: ${styles.buttons.active};
  }
`;

export default function Home() {
  return (
    <Container>
      <Wrapper className={D2CodingBold.className}>
        <Title>Make Your Own Business To-Do List</Title>
        <Input>
          <InputContents placeholder="Make your todolist" />
          <InputIcon>+</InputIcon>
        </Input>
      </Wrapper>
    </Container>
  );
}
