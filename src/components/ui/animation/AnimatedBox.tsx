import { Box, BoxProps, keyframes, styled } from "@mui/material";
import { memo } from "react";

type Direction = "left" | "right" | "top" | "bottom";

const fadeIn = (direction: Direction) => keyframes`
  0% {
    opacity: 0;
    transform: ${
      direction === "left"
        ? "translateX(-70px)"
        : direction === "right"
        ? "translateX(70px)"
        : direction === "top"
        ? "translateY(-70px)"
        : "translateY(70px)"
    };
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const StyledAnimatedBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "direction",
})(({ direction }: { direction: Direction }) => ({
  animation: `${fadeIn(direction)} .6s ease both running`,
}));

function AnimatedBox({
  direction = "left",
  children,
  ...others
}: { direction?: Direction } & BoxProps) {
  return (
    <StyledAnimatedBox direction={direction} {...others}>
      {children}
    </StyledAnimatedBox>
  );
}
export default memo(AnimatedBox);
