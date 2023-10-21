import { useSyncExternalStore } from "react";
import { defase } from "../GlobalStyles";

export interface PlaceScrollInViewport {
  place: 1 | 2 | 3 | 4;
  background: "primary" | "secondary" | null;
  general: number;
}

const suscribe = (callback: () => void) => {
  document.addEventListener("scroll", callback);
  return () => {
    document.removeEventListener("scroll", callback);
  };
};

const getSnapshot = (): number => {
  const placeOfScrollInViewport = window.scrollY / document.body.clientHeight;
  const isInTopOfFirstSection: boolean = window.scrollY <= defase.inNumber;
  const isInTopOfSection: boolean = (window.scrollY / window.innerHeight) % 1 <= 0.01;

  if (placeOfScrollInViewport < 0.25 && isInTopOfFirstSection) return 1;
  if (placeOfScrollInViewport < 0.25) return 2;
  if (placeOfScrollInViewport < 0.5 && isInTopOfSection) return 3;
  if (placeOfScrollInViewport < 0.5) return 4;
  if (placeOfScrollInViewport < 0.73 && isInTopOfSection) return 5;
  if (placeOfScrollInViewport < 0.73) return 6;
  if (placeOfScrollInViewport < 1 && isInTopOfSection) return 7;
  if (placeOfScrollInViewport <= 1) return 8;
  return 1;
};

const useScroll = () => {
  const a = useSyncExternalStore<number>(suscribe, getSnapshot);

  let b: PlaceScrollInViewport = { background: null, place: 1, general: 1 };

  if (a === 1) b = { background: null, place: 1, general: 1 };
  if (a === 2) b = { background: "secondary", place: 1, general: 2 };
  if (a === 3) b = { background: "secondary", place: 2, general: 3 };
  if (a === 4) b = { background: "secondary", place: 2, general: 4 };
  if (a === 5) b = { background: "secondary", place: 3, general: 5 };
  if (a === 6) b = { background: "secondary", place: 3, general: 6 };
  if (a === 7) b = { background: null, place: 4, general: 7 };
  if (a === 8) b = { background: "secondary", place: 4, general: 8 };

  return b;
};

export default useScroll;
