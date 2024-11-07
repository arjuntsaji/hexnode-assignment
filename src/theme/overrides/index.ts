import { Theme } from "@mui/material/styles";

import Button from "./button";

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(Button(theme));
}
