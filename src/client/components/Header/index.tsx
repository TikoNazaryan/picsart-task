import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/users">Users</Link>
    </div>
  );
};

export default Header;
