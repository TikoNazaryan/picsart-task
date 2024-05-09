import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Main = styled.h1`
  padding: 64px 0px;
  font-size: 64px;
  text-align: center;
  font-weight: 400;
  color: ${(props) => props.theme.secondary};
`;

export const Typetext = styled.div`
  width: 50%;
  height: 200px;
  margin: auto;
  color: ${(props) => props.theme.secondary};
`;
