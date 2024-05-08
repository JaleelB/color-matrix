export const colors = [
  "#EF4444",
  "#3B82F6",
  "#22C55E",
  "#fbed2b",
  "#A855F7",
  "#F97316",
  "#F43F5E",
  "#71717A",
  "#14B8A6",
  "#FFFFFF", // White
  "#FFC0CB", // Light Pink
  "#800000", // Maroon
  "#808000", // Olive Green
  "#40E0D0", // Turquoise
  "#607d8b", // Blue Gray
  "#cddc39", // Lime
];

const colorText = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "gray",
  "teal",
  "white",
  "lightpink",
  "maroon",
  "olivegreen",
  "turquoise",
  "bluegray",
  "lime",
];

export type Color = (typeof colors)[number];
export type Colors = typeof colors;

export type ColorText = (typeof colorText)[number];

export const colorMap: Record<ColorText, Color> = {
  red: "#EF4444",
  blue: "#3B82F6",
  green: "#22C55E",
  yellow: "#fbed2b",
  purple: "#A855F7",
  orange: "#F97316",
  pink: "#F43F5E",
  gray: "#71717A",
  teal: "#14B8A6",
  white: "#FFFFFF",
  lightpink: "#FFC0CB",
  maroon: "#800000",
  olivegreen: "#808000",
  turquoise: "#40E0D0",
  bluegray: "#607d8b",
  lime: "#cddc39",
};

const randomColor = (maxColors: number): Color => {
  const randomIndex = Math.floor(Math.random() * maxColors);
  return colors[randomIndex];
};

const randomColorText = (maxColors: number): ColorText => {
  const randomIndex = Math.floor(Math.random() * maxColors);
  return colorText[randomIndex];
};

export const randomColorPair = (maxColors: number): [Color, ColorText] => {
  const color = randomColor(maxColors);
  const text = randomColorText(maxColors);
  return [color, text];
};
