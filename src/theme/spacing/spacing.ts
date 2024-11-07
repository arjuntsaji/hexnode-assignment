export const HexnodeThemeBaseSpacing = 4;

export type SpacingType = {
  x3s: string;
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  x3l: string;
  x4l: string;
};
const asPixels = (value: number): string => `${value}px`;

export const Spacing: SpacingType = {
  x3s: asPixels(HexnodeThemeBaseSpacing),
  xxs: asPixels(HexnodeThemeBaseSpacing * 2),
  xs: asPixels(HexnodeThemeBaseSpacing * 3),
  s: asPixels(HexnodeThemeBaseSpacing * 4),
  m: asPixels(HexnodeThemeBaseSpacing * 6),
  l: asPixels(HexnodeThemeBaseSpacing * 8),
  xl: asPixels(HexnodeThemeBaseSpacing * 10),
  xxl: asPixels(HexnodeThemeBaseSpacing * 12),
  x3l: asPixels(HexnodeThemeBaseSpacing * 16),
  x4l: asPixels(HexnodeThemeBaseSpacing * 20),
};
