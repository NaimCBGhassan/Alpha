import { useSyncExternalStore } from "react";

import { headerHeight } from "../utils/config";

export interface PlaceScrollInViewport {
  place: 1 | 2 | 3 | 4;
  background: "primary" | "secondary" | null;
}

const suscribe = (callback: () => void) => {
  document.addEventListener("scroll", callback);
  return () => {
    document.removeEventListener("scroll", callback);
  };
};

const getSnapshot = (): number => {
  const placeOfScrollInViewport = window.scrollY / document.body.clientHeight;
  const isInTopOfSection: boolean = (window.scrollY / window.innerHeight) % 1 < headerHeight.desktop.inProportion * 2;

  if (placeOfScrollInViewport < 0.25 && isInTopOfSection) return 1;
  if (placeOfScrollInViewport < 0.25) return 2;
  if (placeOfScrollInViewport < 0.5 && isInTopOfSection) return 3;
  if (placeOfScrollInViewport < 0.5) return 4;
  if (placeOfScrollInViewport < 0.75 && isInTopOfSection) return 5;
  if (placeOfScrollInViewport < 0.75) return 6;
  if (placeOfScrollInViewport < 1 && isInTopOfSection) return 7;
  if (placeOfScrollInViewport <= 1) return 8;
  return 1;
};

const useScroll = () => {
  const a = useSyncExternalStore<number>(suscribe, getSnapshot);

  let b: PlaceScrollInViewport = { background: null, place: 1 };

  if (a === 1) b = { background: null, place: 1 };
  if (a === 2) b = { background: "secondary", place: 1 };
  if (a === 3) b = { background: "secondary", place: 2 }; // Este
  if (a === 4) b = { background: "secondary", place: 2 };
  if (a === 5) b = { background: "secondary", place: 3 }; // Este
  if (a === 6) b = { background: "primary", place: 3 };
  if (a === 7) b = { background: "secondary", place: 4 }; // Este
  if (a === 8) b = { background: "secondary", place: 4 };

  return b;
};

export default useScroll;
