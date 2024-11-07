import React from "react";
import { IconProps } from "./interface";

export function MenuIcon(props: IconProps) {
  const size = props.size || 30;
  const color = props.color || "#fff";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M3 5H21V7H3V5Z" fill={color} />
      <path d="M3 11H21V13H3V11Z" fill={color} />
      <path d="M21 17H3V19H21V17Z" fill={color} />
    </svg>
  );
}
