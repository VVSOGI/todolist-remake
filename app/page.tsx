"use client";

import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d7dce6;
`;

const Wrapper = styled.div`
  width: 1024px;
  height: 720px;
  background-color: #ffffff;
  border-radius: 8px;
`;

export default function Home() {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
}
