import React, { ReactNode } from "react";
import Header from "../Header";
import AnimatedPage from "../AnimatedPage";

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Header />
      <AnimatedPage>{children}</AnimatedPage>
    </div>
  );
};

export default Layout;
