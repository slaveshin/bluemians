import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const MainContainer = styled.div``;
const Top = styled.div``;

function Main() {
  return (
    <MainContainer>
      <Top>
        <NavBar />
      </Top>
    </MainContainer>
  );
}

export default Main;
