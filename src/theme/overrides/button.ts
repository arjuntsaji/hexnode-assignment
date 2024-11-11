// ----------------------------------------------------------------------
import { Theme } from "@mui/material/styles";

export default function ButtonOverride(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "3px",
          padding: "10px 26px",
          lineHeight: "24px !important",
          fontFamily: "inherit",
          letterSpacing: "normal",
          variants: [
            {
              props: { variant: "contained", color: "error" },
              style: {
                backgroundColor: theme.hexnode.colors.red,
              },
            },
          ],
        },
      },
    },
  };
}
