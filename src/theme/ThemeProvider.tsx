import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import React from "react";

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
        bodyBgColor: resolveCssVariable("--body-bg-color"),
      },
    },

    typography: {
      h1: {
        fontWeight: 700,
        fontSize: "34px",
        lineHeight: 1.29,
      },
      h2: {
        fontWeight: 700,
        fontSize: "32px",
        lineHeight: 1.25,
        "@media (min-width:640px)": {
          fontSize: "40px",
          lineHeight: 1.3,
        },
      },
      h3: {
        fontWeight: 700,
        fontSize: "30px",
        lineHeight: 1.27, // 38px / 30px ≈ 1.27 (unitless)
      },
      h4: {
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: 1.5, // 24px / 16px = 1.5 (unitless)
        "@media (min-width:640px)": {
          fontSize: "20px",
          lineHeight: 1.6, // 32px / 20px = 1.6 (unitless)
        },
      },
    },
  });
  const responsiveTheme = responsiveFontSizes(theme);
  return <ThemeProvider theme={responsiveTheme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
