import React from "react";
import styled from "styled-components";
import MenuHeader from "../components/MenuHeader";
import TopHeader from "../components/TopHeader";
import { Container } from "../GlobalStyles";
const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Container>
          <TopHeader />
          <MenuHeader />
        </Container>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  padding: 30px;
  position: relative;
  overflow: hidden;
  border-bottom : 5px solid #D38FAB ;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#c4183c),
    to(#4f37ac)
  );
  &::before{
      content: '';
      position: absolute;
      width: 200px;
      height: 200px;
      border-radius : 50%;
      background-color: #D38FAB;
      bottom: -90px;
      left: -90px;
  }
`;

export default Home;
