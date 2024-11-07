import { Box } from "@mui/material";
import React from "react";
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Box
      {...props}
      sx={{
        width: "100%",
        height: "53px",
        paddingLeft: "10px",
        paddingRight: "10px",
        borderRadius: "3px",
        fontSize: "17px",
        lineHeight: "24px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        border: "none",
        outline: "none",
        boxSizing: "border-box",
        "&:focus": {
          border: "none",
        },
        color: "inherit",
      }}
      component={"input"}
    />
  );
};
export default Input;
