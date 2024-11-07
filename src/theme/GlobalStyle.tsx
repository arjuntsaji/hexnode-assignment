import { GlobalStyles, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

function GlobalStyle() {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        body: {},
      }}
    />
  );
}

export default GlobalStyle;
