import { Hit } from "./Constant";

export type ButtonProps = {
  label: string;
  styles: string;
  type: "submit" | "reset" | "button" | undefined;
};

export type BlogItemType = {
  index: number;
  title: string;
  desc: string;
  icon: string;
  author: string;
  date: string;
};

export interface MenuItemProps {
  el: Hit;
  view: string;
  hoveredItemId: number | null;
  setHoveredItemId: React.Dispatch<React.SetStateAction<number | null>>;
  addToCart: (item: Hit) => void;
}
