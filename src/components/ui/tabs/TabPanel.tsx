import { Box, Stack } from "@mui/material";

import AnimatedBox from "../animation/AnimatedBox";
import React, { useEffect, useRef } from "react";

function TabPanel({
  children,
  currentTabValue,
  value,
}: {
  children: React.ReactNode;
  currentTabValue: number;
  value: number;
}) {
  const prevTabValue = useRef(currentTabValue);
  const direction = currentTabValue > prevTabValue.current ? "right" : "left";

  useEffect(() => {
    prevTabValue.current = currentTabValue;
  }, [currentTabValue]);

  return (
    <>
      {currentTabValue === value && (
        <Box p={"40px"} bgcolor={"rgb(247 247 247)"} textAlign={"initial"}>
          <AnimatedBox direction={direction}>{children}</AnimatedBox>
        </Box>
      )}
    </>
  );
}

export default TabPanel;
