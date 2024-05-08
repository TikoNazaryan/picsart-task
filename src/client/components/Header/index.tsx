import React, { ReactNode, useMemo } from "react";
import { useDispatch } from "react-redux";
import { THEME } from "../../store/theme/types";
import { setTheme } from "../../store/theme/actions";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Logo, Menu, MenuItem, Wrapper } from "./styles";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/theme/selectors";

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(selectTheme);

  const toggleTheme = (checked: boolean) => {
    dispatch(setTheme(checked ? THEME.dark : THEME.light));
  };

  const isDarkMode = useMemo(() => theme === THEME.dark, [theme]);

  return (
    <Wrapper>
      <Logo>TEST TASK</Logo>
      <Menu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/users">Users</MenuItem>
      </Menu>
      <DarkModeSwitch checked={isDarkMode} onChange={toggleTheme} size={32} />
    </Wrapper>
  );
};

export default Header;
