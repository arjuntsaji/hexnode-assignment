// mui.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    hexnode: {
      colors: {
        midNightBlue: string;
        lightMidNightBlue: string;
        midBlue: string;
        skyBlue: string;
        white: string;
        darkWhite: string;
        lightWhite: string;
        red: string;
        midRed: string;
        darkSkyBlue: string;
        gray: string;
        lightGray: string;
        midGray: string;
        extraThinGray: string;
        thinGray: string;
        disabledGray: string;
        lightThinGray: string;
        extraMidGray: string;
        darkShadow: string;
        bodyBgColor: string;
      };
    };
  }

  interface ThemeOptions {
    hexnode?: {
      colors?: {
        midNightBlue?: string;
        lightMidNightBlue?: string;
        midBlue?: string;
        skyBlue?: string;
        white?: string;
        darkWhite?: string;
        lightWhite?: string;
        red?: string;
        midRed?: string;
        darkSkyBlue?: string;
        gray?: string;
        lightGray?: string;
        midGray?: string;
        extraThinGray?: string;
        thinGray?: string;
        disabledGray?: string;
        lightThinGray?: string;
        extraMidGray?: string;
        darkShadow?: string;
        bodyBgColor?: string;
      };
    };
  }
}
