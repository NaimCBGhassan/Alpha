import { createGlobalStyle } from "styled-components";

// Takes the viewport widths in pixels and the font sizes in rem
const clampBuilder = (minWidthPx: number, maxWidthPx: number, minFontSize: number, maxFontSize: number): string => {
  const root = document.querySelector<Element>("html");
  if (!root) return "";
  const pixelsPerRem = Number(getComputedStyle(root).fontSize.slice(0, -2));

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;

  return `clamp( ${minFontSize}rem, ${yAxisIntersection}rem + ${slope * 100}vw, ${maxFontSize}rem )`;
};

// clampBuilder( 360, 840, 1, 3.5 ) -> "clamp( 1rem, -0.875rem + 8.333vw, 3.5rem )"

export const defase = {
  inPX: "30px",
  inNumber: 30,
};

const GlobalStyles = createGlobalStyle`
:root {
  --fs-h1: ${clampBuilder(390, 1366, 3.5, 5.5)};
  --fs-h2: ${clampBuilder(390, 1366, 3.5, 5.15)};
  --fs-h3: ${clampBuilder(390, 1366, 2, 2.6)};
  --fs-h4: ${clampBuilder(390, 1366, 1.55, 1.9)};
  --fs-h5: ${clampBuilder(390, 1366, 0.6, 1.6)};

  --fs-p1: ${clampBuilder(390, 1366, 1.1, 1.55)};
  --fs-p2: ${clampBuilder(390, 1366, 3.5, 5.15)};

  --header-hg-desktop: min(13vh, 85px);
  --header-defase-desktop: ${defase.inPX};

  --header-hg-mobile: 8vh;
}
`;

export default GlobalStyles;
