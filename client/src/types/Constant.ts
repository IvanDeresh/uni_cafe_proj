export type BlogType = {
  icon: string;
  title: string;
  desc: string;
  author: string;
  date: string;
};

type HitCategorie = {
  title: "hits" | "breakfast" | "dinner" | "without lactose";
  icon: string;
};
export type Hit = {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  categories: HitCategorie[];
};

export type Gallery = {
  id: number;
  title: string;
  img: string;
};
