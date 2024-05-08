import React, { ReactNode, useCallback } from "react";
import Header from "../Header";
import AnimatedPage from "../AnimatedPage";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../assets/themes";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/theme/selectors";
import { THEME } from "../../store/theme/types";
import { Wrapper } from "./styles";

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const { theme } = useSelector(selectTheme);

  const getThemeByType = useCallback(() => {
    switch (theme) {
      case THEME.light:
        return lightTheme;
      case THEME.dark:
        return darkTheme;
      default:
        return lightTheme;
    }
  }, [theme]);

  return (
    <ThemeProvider theme={getThemeByType()}>
      <Wrapper>
        <Header />
        <AnimatedPage>{children}</AnimatedPage>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
