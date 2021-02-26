import styled from "styled-components";
import notepad from "../../assets/notepad.jpg";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${notepad});
  background-size: cover;
`;

export const RegisterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(255, 103, 0, 0.3);
  align-items: center;
  height: 75vh;
  width: 40vw;
  border: 2px solid #ff6700;
  border-radius: 10px;
  box-shadow: 10px 5px 20px #ff6700;
`;

export const Title = styled.p`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  width: 50%;
`;

export const InputName = styled.input`
  display: flex;
  height: 5%;
  width: 40%;
  border-radius: 10px;
  border: none;
  outline: none;
`;

export const InputNickname = styled.input`
  display: flex;
  height: 5%;
  width: 40%;
  border-radius: 10px;
  border: none;
  outline: none;
`;

export const InputEmail = styled.input`
  display: flex;
  height: 5%;
  width: 40%;
  border-radius: 10px;
  border: none;
  outline: none;
`;

export const InputPassword = styled.input`
  display: flex;
  height: 5%;
  width: 40%;
  border-radius: 10px;
  border: none;
  outline: none;
`;

export const RegisterButton = styled.button`
  display: flex;
  height: 10%;
  width: 40%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  outline: none;
  border: none;
  background-color: #ff6700;
  color: #fffff0;

  &:hover {
    cursor: pointer;
    background-color: #fcc200;
    color: black;
  }

  &:active {
    background-color: #ff6700;
    color: #fffff0;
  }
`;
