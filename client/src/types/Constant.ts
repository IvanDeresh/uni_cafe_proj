export type Blog = {
  icon: string;
  title: string;
  desc: string;
  author: string;
  date: string;
};

type HitCategorie = {
  title: string;
  icon: string;
};

export type Hit = {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  categories: HitCategorie[];
};
