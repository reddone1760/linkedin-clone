import styled from "styled-components/macro";

export const FeedContainer = styled.div`
  flex: 0.6;
  margin:0 20px;
  border-radius: 10px;
`;

export const InputContainer = styled.div`
  background-color: #ffffff;
  padding: 10px;
  padding-bottom: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.div`
  border: 1px solid lightgray;
  border-radius: 30px;
  display: flex;
  padding: 10px;
  color: gray;
  padding-left: 15px;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;

  > input {
    border: none;
    flex: 1;
    margin-left: 10px;
    outline: none;
    font-weight: 600;
  }

  > button {
    display: none;
  }
`;

export const InputOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
