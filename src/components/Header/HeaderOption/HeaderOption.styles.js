import styled from "styled-components/macro";

export const HeaderOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  color: gray;
  cursor: pointer;

  transition: color 100ms ease-in;

  :hover {
    color: black;
  }

  > .HeaderOption__Icon {
    object-fit: contain;
    height: 25px !important;
    width: 25px !important;
  }

  > h3 {
    font-size: 12px;
    font-weight: 400;
  }
`;
