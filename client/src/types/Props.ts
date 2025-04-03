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

export type OurHitsItemType = {
  name: string;
  description: string;
  price: number;
  image: string;
  id: number;
};
