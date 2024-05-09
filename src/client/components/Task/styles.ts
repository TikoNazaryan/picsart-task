import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 12px 18px 0px 18px;
`;

export const Divider = styled.div`
  width: 90%;
  height: 1px;
  background-color: ${(props) => props.theme.secondary};
  opacity: 0.4;
  margin: 12px auto 0px auto;
`;

export const Item = styled.div`
  display: flex;
`;

export const Title = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 24px;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.secondary};
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.error};

  &:hover {
    text-decoration: underline;
  }
`;
