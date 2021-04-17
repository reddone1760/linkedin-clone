import styled from "styled-components/macro";

export const WidgetsConatiner = styled.div`
  position: sticky;
  top: 80px;
  flex: 0.2;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid lightgray;
  height: fit-content;
  padding-bottom: 10px;
`;

export const WidgetsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  > p {
    font-size: 16px;
    font-weight: 400;
  }
`;

export const Article = styled.div`
  display: flex;
  padding: 10px;
  cursor: pointer;

  :hover {
    background-color: whitesmoke;
  }
`;

export const ArticleLeft = styled.div`
  margin-right: 5px;
  color: #0177b7;

  > .MuiSvgIcon-root {
    font-size: 15px;
  }
`;

export const ArticleRight = styled.div`
  flex: 1;

  > h4 {
    font-size: 14px;
  }

  > p {
    font-size: 12px;
    color: gray;
  }
`;
