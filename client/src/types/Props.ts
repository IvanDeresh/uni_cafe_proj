import { Dispatch } from "@reduxjs/toolkit";
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

export type CartItemProps = {
  dispatch: Dispatch;
  image: string;
  name: string;
  id: number;
  description: string;
  quantity: number;
  price: number;
};

export type CartModalWindowType = {
  totalPrice: number;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type OrdersItemType = {
  orderId: number;
  index: number;
  createdAt: string;
  totalPrice: number;
  length: number;
};

export type LoyaltyProgramItemType = {
  id: number;
  description: string;
  title: string;
  date: string;
  type: string;
};
