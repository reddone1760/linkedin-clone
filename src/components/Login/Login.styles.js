import styled from "styled-components";

export const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
  padding-bottom: 100px;

  > img {
    object-fit: contain;
    height: 70px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  > p {
    margin-top: 20px;
    
    > .login__register {
      color: #0074b1;
      cursor: pointer;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > input {
    width: 350px;
    height: 50px;
    font-size: 20px;
    padding-left: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  > button {
    width: 365px;
    height: 50px;
    font-size: large;
    color: #ffffff;
    background-color: #0074b1;
    border-radius: 5px;
  }
`;
