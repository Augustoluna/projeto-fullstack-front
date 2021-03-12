import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export const StyledImage = styled.img`
  width: 60vw;
  max-width: 600px;
  min-width: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  max-width: 600px;
  min-width: 300px;
`;

export const GoBackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  height: 5vh;
  width: 5vw;
  background-color: #372772;
  color: white;
  border-radius: 10px;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
    background-color: #ff6fff;
    color: black;
  }

  &:active {
    background-color: #372772;
    color: #fffff0;
  }
`;
