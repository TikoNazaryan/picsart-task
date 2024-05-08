import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { THEME } from "../../store/theme/types";
import { setTheme } from "../../store/theme/actions";

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const dispatch = useDispatch();

  const onSetTheme = (theme: THEME) => dispatch(setTheme(theme));

  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/users">Users</Link>
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => onSetTheme(THEME.light)}>Set Light theme</button>
      <button onClick={() => onSetTheme(THEME.dark)}>Set Dark theme</button>
    </div>
  );
};

export default Header;
