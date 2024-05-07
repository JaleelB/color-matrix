export const colors = [
  "#EF4444",
  "#3B82F6",
  "#22C55E",
  "#EAB308",
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

export type ColorText = (typeof colorText)[number];

export const colorMap: Record<ColorText, Color> = {
  red: "#EF4444",
  blue: "#3B82F6",
  green: "#22C55E",
  yellow: "#EAB308",
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

const randomColor = (): Color => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const randomColorText = (): ColorText => {
  const randomIndex = Math.floor(Math.random() * colorText.length);
  return colorText[randomIndex];
};

export const randomColorPair = (): [Color, ColorText] => {
  const color = randomColor();
  const text = randomColorText();
  return [color, text];
};
