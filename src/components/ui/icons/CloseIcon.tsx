import React from "react";
import { IconProps } from "./interface";

export function CloseIcon(props: IconProps) {
  const size = props.size || 16;
  const color = props.color || "#020a19";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M9.41648 7.99996L16.0017 14.5826L14.5884 15.999L8.00134 9.41454L1.41329 16L0 14.5836L6.5862 7.99996L8.96454e-05 1.41644L1.41338 0L8.00134 6.58537L14.5883 0.000977457L16.0016 1.41741L9.41648 7.99996Z"
        fill={color}
      />
    </svg>
  );
}
