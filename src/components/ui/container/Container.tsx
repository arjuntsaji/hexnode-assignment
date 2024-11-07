import { Box, BoxProps } from "@mui/material";
import React from "react";

function Container(props: BoxProps) {
  const { children, ...others } = props;
  return (
    <Box maxWidth={"1300px"} width={"88%"} mx={"auto"} {...others}>
      {children}
    </Box>
  );
}

export default Container;
