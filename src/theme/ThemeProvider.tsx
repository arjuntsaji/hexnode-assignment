import {
  createTheme,
  responsiveFontSizes,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import GlobalStyle from "./GlobalStyle";
import { Spacing } from "./spacing/spacing";
import ComponentsOverrides from "./overrides";

const resolveCssVariable = (variable: string): string => `var(${variable})`;

function AppThemeProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const theme = createTheme({
    hexnode: {
      colors: {
        midNightBlue: resolveCssVariable("--hex-mid-night-blue"),
        lightMidNightBlue: resolveCssVariable("--hex-light-mid-night-blue"),
        midBlue: resolveCssVariable("--hex-mid-blue"),
        skyBlue: resolveCssVariable("--hex-sky-blue"),
        white: resolveCssVariable("--hex-white"),
        darkWhite: resolveCssVariable("--hex-dark-white"),
        lightWhite: resolveCssVariable("--hex-light-white"),
        red: resolveCssVariable("--hex-red"),
        midRed: resolveCssVariable("--hex-mid-red"),
        darkSkyBlue: resolveCssVariable("--hex-dark-sky-blue"),
        gray: resolveCssVariable("--hex-gray"),
        lightGray: resolveCssVariable("--hex-light-gray"),
        midGray: resolveCssVariable("--hex-mid-gray"),
        extraThinGray: resolveCssVariable("--hex-ex-thin-gray"),
        thinGray: resolveCssVariable("--hex-thin-gray"),
        disabledGray: resolveCssVariable("--hex-disabled"),
        lightThinGray: resolveCssVariable("--hex-light-thin-gray"),
        extraMidGray: resolveCssVariable("--hex-ex-mid-gray"),
        darkShadow: resolveCssVariable("--hex-dark-shadow"),
        bodyBgColor: resolveCssVariable("--hex-body-bg-color"),
        headerBgColor: resolveCssVariable("--hex-header-bg-color"),
        dividerBgColor: resolveCssVariable("--hex-divider-bg-color"),
      },
      spacing: Spacing,
    },

    typography: {
      h1: {
        fontWeight: 700,
        fontSize: "34px",
        lineHeight: 1.29,
      },
      h2: {
        "@media (min-width:640px)": {
          fontSize: "40px !important",
          lineHeight: 1.3,
          fontWeight: 700,
        },
        "@media (max-width:640px)": {
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: 1.25,
        },
      },
      h3: {
        fontWeight: 700,
        fontSize: "30px",
        lineHeight: 1.27,
      },
      h4: {
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: 1.5,
        "@media (min-width:640px)": {
          fontSize: "20px",
          lineHeight: 1.6,
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 639,
        md: 900,
        lg: 1279,
        xl: 1536,
      },
    },
  });
  theme.components = ComponentsOverrides(theme);
  const responsiveTheme = responsiveFontSizes(theme);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={responsiveTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default AppThemeProvider;
