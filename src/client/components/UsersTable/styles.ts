import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 12px 18px 0px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 4px;
  width: 240px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.secondary};
`;

export const PageButton = styled.button<{ active: boolean }>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.success};
  padding: 6px 8px;
  font-size: 18px;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};

  &:hover {
    text-decoration: underline;
  }
`;

export const Table = styled.table`
  width: 50%;
  padding: 36px 0px;
  color: ${(props) => props.theme.secondary};
`;

export const SortableTh = styled.th<{ active: boolean; isDescending: boolean }>`
  color: ${(props) => props.theme.success};
  cursor: pointer;
  text-decoration: underline;
  position: relative;

  ${(props) =>
    props.active &&
    `
    &:after{
      display: block;
      content: ">";
      display: inline-block;
      text-decoration: none;
      margin-left: 8px;
      transform: rotate(${props.isDescending ? "90deg" : "-90deg"});
    }
  `}
`;
