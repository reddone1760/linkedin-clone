import styled from "styled-components/macro";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid lightgray;
  padding: 10px 0;
  width: 100%;
  background-color: #ffffff;

  position: sticky;
  top: 0;
  z-index: 99;
`;

export const HeaderLeft = styled.div`
  display: flex;
`;

export const Img = styled.img`
  object-fit: contain;
  height: 40px;
  margin-right: 10px;
`;

export const HeaderSearch = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: 22px;
  color: gray;
  background-color: #eef3f8;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  background: none;
`;

export const HeaderRight = styled.div`
  display: flex;
`;
