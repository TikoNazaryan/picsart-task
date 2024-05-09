import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 12px 18px 0px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleInput = styled.input`
  padding: 4px;
  width: 240px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.secondary};
`;

export const AddButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.success};
  margin-left: 12px;

  &:hover:not(:disabled) {
    text-decoration: underline;
  }

  &:disabled {
    opacity: 0.4;
  }
`;
