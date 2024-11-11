import { Box, BoxProps } from "@mui/material";
import React, { ReactNode } from "react";

interface HeadingProps extends BoxProps {
  variant?: "h1" | "h2" | "h3" | "h4";
  children?: ReactNode;
}

function Heading({
  variant = "h1",
  children,
  ...others
}: Readonly<HeadingProps>) {
  const style = {
    h1: {
      fontWeight: 700,
      fontSize: "34px",
      lineHeight: 1.29,
    },
    h2: {
      fontWeight: 700,
      fontSize: { xs: "32px", sm: "40px" },
      lineHeight: { xs: 1.25, sm: 1.3 },
    },
    h3: {
      fontWeight: 700,
      fontSize: { xs: "20px", sm: "28px" },
      lineHeight: { xs: "26px", sm: "40px" },
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
  };

  const headingStyle = style[variant];

  return (
    <Box
      component={variant}
      {...others}
      sx={{
        m: "0",
        fontFamily: "inherit",
        letterSpacing: "auto",
        ...headingStyle,
        ...others?.sx,
      }}
    >
      {children}
    </Box>
  );
}

export default Heading;
