import styled, { css } from "styled-components";

export const PostContainer = styled.div`
  background-color: #ffffff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const PostInfo = styled.div`
  margin-left: 10px;

  ${({ comment }) =>
    comment
      ? css`
          > p {
            font-size: 10px;
            color: gray;
          }

          > h2 {
            font-size: 13px;
          }
        `
      : css`
          > p {
            font-size: 12px;
            color: gray;
          }

          > h2 {
            font-size: 15px;
          }
        `}
`;

export const PostBody = styled.div`
  overflow-wrap: anywhere;
`;

export const PostReaction = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  border-bottom: 1px solid whitesmoke;
  padding: 8px;
  margin-top: 20px;
  margin-bottom: -8px;

  > .MuiSvgIcon-root {
    font-size: 12px;
  }

  > div {
    font-size: 12px;
    display: flex;

    > span {
      margin: 0 5px;
      cursor: pointer;

      :hover {
        color: #0a66c2;
        text-decoration: underline;
      }
    }
  }
`;

export const PostButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const PostComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
`;

export const Input = styled.div`
  flex: 1;
  margin-left: 16px;
  border: 1px solid lightgray;
  border-radius: 30px;
  display: flex;
  color: gray;
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

export const CommentSection = styled.div`
  border-top: 1px solid whitesmoke;
  width: 100%;
  padding-top: 12px;
`;
