import { Box, BoxProps } from "@mui/material";

import AnimatedBox from "../animation/AnimatedBox";
import React, { useEffect, useMemo, useRef } from "react";

function TabPanel({
  children,
  currentTabValue,
  value,
  ...others
}: {
  children: React.ReactNode;
  currentTabValue: number;
  value: number;
} & BoxProps) {
  const prevTabValue = useRef(currentTabValue);
  const direction = useMemo(
    () => (currentTabValue > prevTabValue.current ? "right" : "left"),
    [currentTabValue]
  );

  useEffect(() => {
    prevTabValue.current = currentTabValue;
  }, [currentTabValue]);

  return (
    <>
      {currentTabValue === value && (
        <Box
          {...others}
          p={"40px"}
          bgcolor={(theme) => theme.hexnode.colors.bodyLightGrey}
          textAlign={"initial"}
          id={`tabpanel-${value}`}
        >
          <AnimatedBox direction={direction}>{children}</AnimatedBox>
        </Box>
      )}
    </>
  );
}

export default React.memo(TabPanel);
