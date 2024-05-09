import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 32px;
  color: ${(props) => props.theme.secondary};
`;

export const Menu = styled.div`
  padding: 0px 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const MenuItem = styled(NavLink)`
  padding: 0px 16px;
  text-decoration: none;
  color: black;
  font-size: 22px;
  color: ${(props) => props.theme.secondary};

  &.active {
    font-weight: bold;
  }
`;
