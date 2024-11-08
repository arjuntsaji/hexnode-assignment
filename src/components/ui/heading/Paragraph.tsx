import { Box, BoxProps } from "@mui/material";
import React from "react";

function Paragraph(props: BoxProps) {
  return (
    <Box
      component={"p"}
      {...props}
      sx={{
        m: 0,
        lineHeight: { sm: "28px", xs: "24px" },
        fontSize: {
          sm: "18px",
          xs: "16px",
        },
        fontWeight: "400",
        color: "rgb(51 51 51)",
        ...props?.sx,
      }}
    >
      {props?.children}
    </Box>
  );
}

export default Paragraph;
