import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 12px 18px 0px;
`;

export const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Td = styled.td`
  padding: 4px 12px;
  color: ${(props) => props.theme.secondary};
`;

export const BackButton = styled(Link)`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.success};
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;
