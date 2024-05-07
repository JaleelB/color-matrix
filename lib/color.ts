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

export const colorMap: Record<Color, ColorText> = {
  "#EF4444": "red",
  "#3B82F6": "blue",
  "#22C55E": "green",
  "#EAB308": "yellow",
  "#A855F7": "purple",
  "#F97316": "orange",
  "#F43F5E": "pink",
  "#71717A": "gray",
  "#14B8A6": "teal",
  "#FFFFFF": "white",
  "#FFC0CB": "lightpink",
  "#800000": "maroon",
  "#808000": "olivegreen",
  "#40E0D0": "turquoise",
  "#607d8b": "bluegray",
  "#cddc39": "lime",
};

export const randomColor = (): Color => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export const randomColorText = (): ColorText => {
  const randomIndex = Math.floor(Math.random() * colorText.length);
  return colorText[randomIndex];
};
