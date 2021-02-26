import styled from "styled-components";
import deskboard from "../../assets/deskboard.jpg";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${deskboard});
  background-size: 100% 100%;
`;

export const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: rgba(55, 39, 114, 0.4);
  align-items: center;
  height: 70vh;
  width: 30vw;
  border: 2px solid #372772;
  border-radius: 10px;
  box-shadow: 10px 5px 20px #372772;
`;

export const Title = styled.p`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  width: 50%;
  font-size: 30px;
  font-weight: bold;
`;

export const NameNickname = styled.input`
  display: flex;
  height: 5%;
  width: 50%;
  border-radius: 10px;
  border: none;
  outline: none;
`;

export const Password = styled.input`
  display: flex;
  height: 5%;
  width: 50%;
  border-radius: 10px;
  border: none;
  outline: none;
`;

export const LoginButton = styled.button`
  display: flex;
  height: 10%;
  width: 40%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  outline: none;
  border: none;
  background-color: #372772;
  color: #fffff0;

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
