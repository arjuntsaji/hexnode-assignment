// mui.d.ts
import "@mui/material/styles";
import { SpacingType } from "./spacing/spacing";

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
        headerBgColor: string;
        dividerBgColor: string;
        textLight: string;
        bodyLightGrey: string;
      };
      spacing: SpacingType;
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
        headerBgColor?: string;
        dividerBgColor?: string;
        textLight?: string;
        bodyLightGrey?: string;
      };
      spacing: SpacingType;
    };
  }
}
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    mdlg: true;
    mobile: true;
  }
}
